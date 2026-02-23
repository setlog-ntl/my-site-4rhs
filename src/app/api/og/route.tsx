import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/config';

export const dynamic = 'force-static';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #fdf4e7, #fff7ed)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: '#d47311',
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#78716c',
            marginTop: 12,
            maxWidth: 600,
            textAlign: 'center',
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
