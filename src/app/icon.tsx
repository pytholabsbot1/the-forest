
import { ImageResponse } from 'next/og';

export const size = {
  width: 64,
  height: 64,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #132d24 0%, #0b1f18 100%)',
        }}
      >
        <div
          style={{
            width: '82%',
            height: '82%',
            borderRadius: '9999px',
            border: '1.5px solid rgba(200, 165, 97, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#f7f2e8',
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: '0.22em',
            fontFamily: 'serif',
          }}
        >
          TF
        </div>
      </div>
    ),
    size,
  );
}
