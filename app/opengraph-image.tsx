import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Dmitriy Malayev | Full-Stack Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  let dancingScriptData: ArrayBuffer | null = null;

  try {
    const cssRes = await fetch(
      'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap',
      { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; NextJS/OG)' } },
    );
    if (cssRes.ok) {
      const css = await cssRes.text();
      const fontUrl = css.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)?.[1];
      if (fontUrl) {
        const fontRes = await fetch(fontUrl);
        if (fontRes.ok) {
          dancingScriptData = await fontRes.arrayBuffer();
        }
      }
    }
  } catch {
    // Font load failed — fall back to system serif, OG image still renders
  }

  const fonts: NonNullable<ConstructorParameters<typeof ImageResponse>[1]>['fonts'] =
    [];
  if (dancingScriptData) {
    fonts.push({ name: 'Dancing Script', data: dancingScriptData, weight: 700 });
  }

  return new ImageResponse(
    <div
      style={{
        background: '#292524',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 80px',
        position: 'relative',
      }}
    >
      {/* Top orange accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: 'linear-gradient(90deg, #c2410c, #ea580c, #fb923c)',
        }}
      />

      {/* "Hi, I'm" */}
      <p
        style={{
          fontFamily: dancingScriptData ? 'Dancing Script' : 'serif',
          fontSize: 40,
          fontWeight: 700,
          color: '#fdba74',
          margin: 0,
          letterSpacing: '0.02em',
        }}
      >
        Hi, I&apos;m
      </p>

      {/* Name */}
      <h1
        style={{
          fontSize: 100,
          fontWeight: 700,
          color: '#cffafe',
          margin: '4px 0 0',
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
        }}
      >
        Dmitriy Malayev
      </h1>

      {/* Role */}
      <p
        style={{
          fontFamily: dancingScriptData ? 'Dancing Script' : 'serif',
          fontSize: 48,
          fontWeight: 700,
          color: '#fb923c',
          margin: '8px 0 0',
        }}
      >
        Full-Stack Engineer
      </p>

      {/* Tech tags */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 16,
          marginTop: 36,
        }}
      >
        {['React', 'Next.js', 'TypeScript', 'Kotlin', 'Cloud'].map((tag) => (
          <div
            key={tag}
            style={{
              background: '#44403c',
              border: '1px solid #57534e',
              borderRadius: 8,
              padding: '8px 20px',
              fontSize: 22,
              color: '#d6d3d1',
              fontWeight: 600,
            }}
          >
            {tag}
          </div>
        ))}
      </div>

      {/* URL */}
      <p
        style={{
          fontSize: 22,
          color: '#78716c',
          margin: '40px 0 0',
          letterSpacing: '0.05em',
        }}
      >
        dmitriymalayev.com
      </p>

      {/* Bottom accent bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, #c2410c, #ea580c, #fb923c)',
        }}
      />
    </div>,
    { ...size, fonts },
  );
}
