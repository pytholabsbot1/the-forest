import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.phone || !body.email || !body.interest) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const submissionsDir = path.join(process.cwd(), '.submissions');
    await fs.mkdir(submissionsDir, { recursive: true });

    const filePath = path.join(submissionsDir, `${Date.now()}.json`);
    await fs.writeFile(
      filePath,
      JSON.stringify(
        {
          ...body,
          timestamp: new Date().toISOString(),
        },
        null,
        2
      )
    );

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
