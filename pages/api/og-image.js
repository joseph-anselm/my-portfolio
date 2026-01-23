// pages/api/og-image.js
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get query parameters
    const title = searchParams.get('title') || 'Joseph Anselm';
    const description = searchParams.get('description') || 'Full Stack Developer Portfolio';
    const author = searchParams.get('author') || 'Joseph Anselm';
    
    // Load custom font
    const fontData = await fetch(
      new URL('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap')
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f172a',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #334155 2%, transparent 0%), radial-gradient(circle at 75px 75px, #334155 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            fontFamily: '"Inter", sans-serif',
            padding: '60px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '900px',
            }}
          >
            {/* Logo/Name */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '40px',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  backgroundColor: '#3b82f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '20px',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                JA
              </div>
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#e2e8f0',
                }}
              >
                Joseph Anselm
              </div>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                marginBottom: '20px',
                lineHeight: '1.1',
              }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '36px',
                color: '#cbd5e1',
                textAlign: 'center',
                marginBottom: '40px',
                lineHeight: '1.4',
              }}
            >
              {description}
            </p>

            {/* Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '60px',
                paddingTop: '40px',
                borderTop: '2px solid #334155',
              }}
            >
              <div
                style={{
                  fontSize: '28px',
                  color: '#60a5fa',
                }}
              >
                josephanselm.com
              </div>
              
              {author && (
                <div
                  style={{
                    fontSize: '24px',
                    color: '#94a3b8',
                  }}
                >
                  by {author}
                </div>
              )}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}