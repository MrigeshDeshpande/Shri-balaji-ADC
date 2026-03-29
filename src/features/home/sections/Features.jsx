"use client";

import { Zap, ShieldCheck, Clock, Sparkles, Heart, Star } from "lucide-react";

const features = [
  {
    title: "Modern Technology",
    desc: "Digital X-rays and precision diagnostics for accurate, confident treatment planning.",
    icon: Zap,
  },
  {
    title: "Safety First",
    desc: "Strict sterilization protocols for a safe, infection-free experience every visit.",
    icon: ShieldCheck,
  },
  {
    title: "On-Time Care",
    desc: "Minimal waiting with pre-scheduled appointments that respect your time.",
    icon: Clock,
  },
  {
    title: "Comfort Experience",
    desc: "Designed spaces that make your visit calm, unhurried, and stress-free.",
    icon: Sparkles,
  },
  {
    title: "Gentle Approach",
    desc: "Painless techniques and patient-first communication for anxious or first-time visitors.",
    icon: Heart,
  },
  {
    title: "Proven Excellence",
    desc: "Trusted by 500+ patients with a consistent 4.9-star rating across Google reviews.",
    icon: Star,
  },
];

export default function FeaturesSection() {
  return (
    <section style={{ padding: '0 1.5rem 5rem' }}>
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          backgroundColor: '#1a2e22',
          borderRadius: '1.5rem',
          padding: '4rem 3.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid texture */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Dot grid — top right decoration */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '2rem',
            right: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '8px',
            opacity: 0.5,
            pointerEvents: 'none',
          }}
        >
          {Array.from({ length: 36 }).map((_, i) => (
            <span key={i} style={{
              width: '3px', height: '3px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(110,207,154,0.3)',
            }} />
          ))}
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>

          {/* Header — split layout */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}>
            <div>
              {/* Eyebrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ display: 'block', width: '2rem', height: '1.5px', backgroundColor: '#6ecf9a' }} />
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6ecf9a',
                }}>
                  Our Standards
                </span>
              </div>

              <h2 style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
                letterSpacing: '-0.02em',
                color: '#ffffff',
                lineHeight: 1.1,
                margin: 0,
              }}>
                Why Choose{' '}
                <span style={{ color: '#6ecf9a' }}>Shri Balaji?</span>
              </h2>
            </div>

            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 300,
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '24rem',
              lineHeight: 1.75,
              margin: 0,
            }}>
              We combine advanced technology with compassionate care to give you a comfortable dental experience.
            </p>
          </div>

          {/* Features grid — 2×2 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 18rem), 1fr))',
            gap: '1rem',
          }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start',
                    padding: '1.625rem',
                    borderRadius: '1rem',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'background-color 0.2s ease, border-color 0.2s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.borderColor = 'rgba(110,207,154,0.28)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  {/* Top-right accent line */}
                  <span style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '2.5rem',
                    height: '1.5px',
                    backgroundColor: 'rgba(110,207,154,0.25)',
                  }} />

                  {/* Icon badge */}
                  <div style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '0.75rem',
                    backgroundColor: 'rgba(110,207,154,0.1)',
                    border: '1px solid rgba(110,207,154,0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color="#6ecf9a" strokeWidth={1.75} />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 800,
                      fontSize: '1.0625rem',
                      letterSpacing: '-0.02em',
                      color: '#ffffff',
                      margin: '0 0 0.4rem',
                      lineHeight: 1.25,
                    }}>
                      {f.title}
                    </h4>
                    <p style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: '0.8125rem',
                      lineHeight: 1.7,
                      color: 'rgba(255,255,255,0.5)',
                      margin: 0,
                    }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}