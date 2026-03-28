import { values } from "../data/values";

const  icons = {
  Precision: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6ecf9a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/>
      <line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/>
      <line x1="12" y1="22" x2="12" y2="18"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  Compassion: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6ecf9a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  Hygiene: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6ecf9a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  Innovation: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6ecf9a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
};

export default function ValuesSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#1a2e22] relative overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Header — two column on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#6ecf9a]" />
              <span className="font-body text-[11px] font-medium tracking-[0.1em] uppercase text-[#6ecf9a]">
                What we stand for
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,40px)] tracking-tight leading-[1.1] text-white">
              The Principles That<br />
              Guide Our <span className="text-[#6ecf9a]">Practice</span>
            </h2>
          </div>
          <p className="font-body text-[15px] font-light text-white/45 leading-[1.75] md:pb-1">
            Every decision we make — from diagnosis to treatment — is rooted in these four core values.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.06]">
          {values.map((val, i) => (
            <div
              key={i}
              className="relative bg-white/[0.04] hover:bg-white/[0.08] transition-colors duration-200 px-7 py-9 overflow-hidden"
            >
              {/* Ghost deco number */}
              <span className="absolute bottom-[-8px] right-2 font-heading font-extrabold text-[72px] leading-none text-white/[0.03] select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Counter */}
              <p className="font-body text-[11px] font-bold tracking-[0.1em] text-white/20 mb-5">
                {String(i + 1).padStart(2, "0")}
              </p>

              {/* Icon */}
              <div className="w-[46px] h-[46px] rounded-[14px] bg-[#6ecf9a]/10 border border-[#6ecf9a]/20 flex items-center justify-center mb-5">
                {icons[val.title]}
              </div>

              {/* Title */}
              <h3 className="font-heading font-extrabold text-[20px] tracking-tight leading-[1.1] text-white mb-3">
                {val.title}
              </h3>

              {/* Accent line */}
              <div className="w-6 h-[1.5px] bg-[#6ecf9a]/40 rounded mb-3" />

              {/* Description */}
              <p className="font-body text-[13px] font-light text-white/45 leading-[1.75]">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}