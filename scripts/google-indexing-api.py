#!/usr/bin/env python3
"""
Google Indexing API - Bulk URL Submitter for forestfarmhouses.in
=================================================================

SETUP (one-time, ~10 minutes):

1. Go to https://console.cloud.google.com/
2. Create a project (or use existing)
3. Enable "Web Search Indexing API":
   https://console.cloud.google.com/apis/library/indexing.googleapis.com
4. Create OAuth2 credentials:
   - APIs & Services → Credentials → Create Credentials → OAuth client ID
   - Application type: Desktop app
   - Name: anything (e.g. "indexing-script")
   - Download the JSON → save as:
     /home/vaqas/projects/the-forest/scripts/google-oauth-client.json
5. Configure OAuth consent screen (if prompted):
   - APIs & Services → OAuth consent screen
   - User type: External → Create
   - App name: anything, your email as support email
   - Scopes: add "https://www.googleapis.com/auth/indexing"
   - Test users: add your Gmail that owns Search Console
   - Save

Then run: python3 google-indexing-api.py
A browser window will open → log in with the Google account that owns
forestfarmhouses.in in Search Console → done. Token is saved for future runs.
"""

import json
import time
import sys
import xml.etree.ElementTree as ET
from datetime import datetime
from pathlib import Path

import requests
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials

# ── Config ────────────────────────────────────────────────────────────────────
CLIENT_SECRETS_FILE = Path(__file__).parent / "google-oauth-client.json"
TOKEN_FILE          = Path(__file__).parent / "google-indexing-token.json"
SITEMAP_URL         = "https://www.forestfarmhouses.in/sitemap.xml"
DAILY_LIMIT         = 200
BATCH_DELAY         = 1.0
STATE_FILE          = Path(__file__).parent / "indexing-state-forest.json"
# ─────────────────────────────────────────────────────────────────────────────

SCOPES  = ["https://www.googleapis.com/auth/indexing"]
API_URL = "https://indexing.googleapis.com/v3/urlNotifications:publish"


PENDING_AUTH_FILE = Path(__file__).parent / "google-indexing-pending-auth.json"


def get_credentials() -> Credentials:
    if not CLIENT_SECRETS_FILE.exists():
        print(f"\n❌  Client secrets file not found: {CLIENT_SECRETS_FILE}")
        print("    Follow the SETUP instructions at the top of this script.\n")
        sys.exit(1)

    # Load saved token if it exists
    if TOKEN_FILE.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)
        if creds.valid:
            return creds
        if creds.expired and creds.refresh_token:
            print("Refreshing access token...")
            creds.refresh(Request())
            TOKEN_FILE.write_text(creds.to_json())
            return creds

    # Check if we have a pending auth (user already got URL, now pasting code)
    if PENDING_AUTH_FILE.exists():
        pending = json.loads(PENDING_AUTH_FILE.read_text())
        client_config = json.loads(CLIENT_SECRETS_FILE.read_text())["installed"]
        code = input("Paste the authorization code from Google: ").strip()

        # Exchange code for token directly (no PKCE)
        resp = requests.post(client_config["token_uri"], data={
            "code": code,
            "client_id": client_config["client_id"],
            "client_secret": client_config["client_secret"],
            "redirect_uri": "urn:ietf:wg:oauth:2.0:oob",
            "grant_type": "authorization_code",
        })
        resp.raise_for_status()
        token_data = resp.json()

        creds = Credentials(
            token=token_data["access_token"],
            refresh_token=token_data.get("refresh_token"),
            token_uri=client_config["token_uri"],
            client_id=client_config["client_id"],
            client_secret=client_config["client_secret"],
            scopes=SCOPES,
        )
        TOKEN_FILE.write_text(creds.to_json())
        PENDING_AUTH_FILE.unlink()
        print("✓ Token saved — no login needed next time.\n")
        return creds

    # First time: generate auth URL (no PKCE) and save state
    client_config = json.loads(CLIENT_SECRETS_FILE.read_text())["installed"]
    import urllib.parse
    params = {
        "response_type": "code",
        "client_id": client_config["client_id"],
        "redirect_uri": "urn:ietf:wg:oauth:2.0:oob",
        "scope": " ".join(SCOPES),
        "access_type": "offline",
        "prompt": "consent",
    }
    auth_url = client_config["auth_uri"] + "?" + urllib.parse.urlencode(params)

    PENDING_AUTH_FILE.write_text(json.dumps({"state": "pending"}))

    print("─" * 60)
    print("Open this URL in your browser:\n")
    print(auth_url)
    print("\n─" * 60)
    print("Log in with the Google account that owns odishaacres.com")
    print("in Search Console, click Allow, then paste the code here.")
    print("\nRun this script again and paste the code when prompted.\n")
    sys.exit(0)


def fetch_sitemap_urls(sitemap_url: str) -> list[str]:
    print(f"Fetching sitemap: {sitemap_url}")
    resp = requests.get(sitemap_url, timeout=15)
    resp.raise_for_status()

    urls = []
    root = ET.fromstring(resp.text)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}

    # Handle sitemap index (sitemap of sitemaps)
    for sitemap_tag in root.findall("sm:sitemap/sm:loc", ns):
        child_urls = fetch_sitemap_urls(sitemap_tag.text.strip())
        urls.extend(child_urls)

    # Handle regular sitemap
    for url_tag in root.findall("sm:url/sm:loc", ns):
        urls.append(url_tag.text.strip())

    return urls


def load_state() -> dict:
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text())
    return {"submitted": [], "failed": [], "last_run_date": None, "count_today": 0}


def save_state(state: dict):
    STATE_FILE.write_text(json.dumps(state, indent=2))


def submit_url(url: str, creds: Credentials) -> tuple[bool, str]:
    headers = {
        "Authorization": f"Bearer {creds.token}",
        "Content-Type": "application/json",
    }
    body = {"url": url, "type": "URL_UPDATED"}
    resp = requests.post(API_URL, headers=headers, json=body, timeout=10)

    if resp.status_code == 200:
        return True, "ok"
    else:
        try:
            err = resp.json().get("error", {}).get("message", resp.text)
        except Exception:
            err = resp.text
        return False, err


def main():
    print("\n── Google Indexing API · forestfarmhouses.in ──\n")

    creds    = get_credentials()
    all_urls = fetch_sitemap_urls(SITEMAP_URL)
    state    = load_state()

    today = datetime.now().strftime("%Y-%m-%d")
    if state.get("last_run_date") != today:
        state["count_today"] = 0
        state["last_run_date"] = today

    already_done    = set(state["submitted"])
    pending         = [u for u in all_urls if u not in already_done]
    remaining_quota = DAILY_LIMIT - state["count_today"]

    print(f"Total URLs in sitemap : {len(all_urls)}")
    print(f"Already submitted     : {len(already_done)}")
    print(f"Pending               : {len(pending)}")
    print(f"Quota left today      : {remaining_quota}")
    print()

    if not pending:
        print("✓ All URLs already submitted!")
        return

    if remaining_quota <= 0:
        print("⚠️  Daily limit of 200 reached. Run again tomorrow.")
        return

    to_submit = pending[:remaining_quota]
    print(f"Submitting {len(to_submit)} URLs now...\n")

    ok_count   = 0
    fail_count = 0

    for i, url in enumerate(to_submit, 1):
        if not creds.valid:
            creds.refresh(Request())

        success, msg = submit_url(url, creds)

        if success:
            ok_count += 1
            state["submitted"].append(url)
            state["count_today"] += 1
            print(f"  ✓ [{i}/{len(to_submit)}] {url}")
        else:
            fail_count += 1
            if url not in state["failed"]:
                state["failed"].append(url)
            print(f"  ✗ [{i}/{len(to_submit)}] {url}  — {msg}")

        save_state(state)
        time.sleep(BATCH_DELAY)

    print(f"\n── Done ──")
    print(f"  Submitted today : {ok_count}")
    print(f"  Failed          : {fail_count}")

    still_pending = len(pending) - len(to_submit)
    if still_pending > 0:
        print(f"  Still pending   : {still_pending} (run again tomorrow)")
    else:
        print(f"  All URLs covered!")

    if state["failed"]:
        print(f"\n⚠️  {len(state['failed'])} URLs failed total. Check indexing-state.json")


if __name__ == "__main__":
    main()
