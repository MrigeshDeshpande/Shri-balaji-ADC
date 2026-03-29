export default function TrustSection() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: '#f8f5f0' }}
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
          <span style={{ display: 'block', width: '2rem', height: '1.5px', backgroundColor: '#147850' }} />
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500, fontSize: '11px',
            letterSpacing: '0.1em', textTransform: 'uppercase', color: '#147850',
          }}>
            Our Promise
          </span>
        </div>

        {/* Quote card */}
        <div style={{
          position: 'relative',
          backgroundColor: '#1a2e22',
          borderRadius: '1.25rem',
          padding: '3rem 3.5rem',
          overflow: 'hidden',
        }}>

          {/* Grid texture */}
          <div aria-hidden="true" style={{
            position: 'absolute', inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)',
            pointerEvents: 'none',
          }} />

          {/* Large decorative quote mark */}
          <span aria-hidden="true" style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: '8rem',
            lineHeight: 1,
            color: 'rgba(110,207,154,0.08)',
            position: 'absolute',
            top: '1rem',
            left: '2.5rem',
            userSelect: 'none',
            pointerEvents: 'none',
          }}>
            "
          </span>

          <div style={{ position: 'relative' }}>
            {/* Left accent bar */}
            <span style={{
              display: 'block',
              width: '3px',
              height: '100%',
              backgroundColor: '#6ecf9a',
              position: 'absolute',
              left: '-2rem',
              top: 0,
              borderRadius: '9999px',
            }} />

            {/* Quote text */}
            <p style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.4,
              color: '#ffffff',
              marginBottom: '2rem',
              fontStyle: 'italic',
            }}>
              Your comfort is as important to us as your{' '}
              <span style={{ color: '#6ecf9a' }}>dental health.</span>{' '}
              We ensure a zero-anxiety experience for every patient.
            </p>

            {/* Attribution row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Avatar badge */}
              <div style={{
                width: '2.5rem', height: '2.5rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(110,207,154,0.12)',
                border: '1px solid rgba(110,207,154,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="#6ecf9a" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500, fontSize: '0.8125rem',
                  color: '#ffffff', margin: 0, lineHeight: 1.3,
                }}>
                  Shri Balaji Standards
                </p>
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 300, fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.4,
                  letterSpacing: '0.02em',
                }}>
                  Our clinic philosophy since 2005
                </p>
              </div>

              {/* Dot divider */}
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                {[1,2,3].map(i => (
                  <span key={i} style={{
                    width: '4px', height: '4px', borderRadius: '9999px',
                    backgroundColor: `rgba(110,207,154,${i === 2 ? '0.5' : '0.2'})`,
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}