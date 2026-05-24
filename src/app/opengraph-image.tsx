
import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background:
            'linear-gradient(135deg, #f7f2e8 0%, #efe6d5 58%, #d9c7a7 100%)',
          color: '#132d24',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            flex: 1,
            padding: '72px 76px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: 22,
                letterSpacing: '0.36em',
                textTransform: 'uppercase',
                color: '#8c6d37',
              }}
            >
              ABL Group presents
            </div>
            <div
              style={{
                marginTop: 30,
                fontSize: 92,
                lineHeight: 0.9,
                fontWeight: 600,
                letterSpacing: '0.08em',
              }}
            >
              THE FOREST
            </div>
            <div
              style={{
                marginTop: 26,
                fontSize: 32,
                lineHeight: 1.2,
                maxWidth: 760,
                fontFamily: 'sans-serif',
                fontWeight: 400,
              }}
            >
              A grand luxury golf estate about 2 hours from Delhi, a world away from the city.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 16,
              fontSize: 22,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#254c3a',
              fontFamily: 'sans-serif',
            }}
          >
            <span>Golf</span>
            <span>•</span>
            <span>Nature</span>
            <span>•</span>
            <span>Legacy</span>
          </div>
        </div>

        <div
          style={{
            width: 390,
            padding: '58px 52px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: 'linear-gradient(180deg, #16342a 0%, #0b1f18 100%)',
            color: '#f7f2e8',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: 18,
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#c8a561',
                fontFamily: 'sans-serif',
              }}
            >
              Executive lifestyle
            </div>
            <div
              style={{
                marginTop: 28,
                fontSize: 32,
                lineHeight: 1.18,
                fontFamily: 'serif',
              }}
            >
              Where golf, forest, water, and legacy meet.
            </div>
          </div>

          <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 12,
                    }}
                  >
                    {[
                      ['Location', 'Teski Village'],
                      ['Access', 'About 2 hours'],
                      ['Golf', 'Night play'],
                      ['Value', 'Legacy-led'],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        style={{
                          borderRadius: 18,
                          border: '1px solid rgba(255,255,255,0.1)',
                          background: 'rgba(255,255,255,0.06)',
                          padding: '12px 14px',
                          width: '48%',
                          minWidth: 140,
                          boxSizing: 'border-box',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <div
                          style={{
                            fontSize: 11,
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            color: 'rgba(247,242,232,0.55)',
                            fontFamily: 'sans-serif',
                          }}
                        >
                          {label}
                        </div>
                        <div style={{ marginTop: 8, fontSize: 18, fontFamily: 'sans-serif' }}>{value}</div>
                      </div>
                    ))}
                  </div>
        </div>
      </div>
    ),
    size,
  );
}
