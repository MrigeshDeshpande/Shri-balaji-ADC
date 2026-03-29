

const stats = [
  {
    label: "Happy Patients",
    value: "500+",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6ecf9a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    label: "Years of Experience",
    value: "5+",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6ecf9a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    label: "Sterilization Protocol",
    value: "100%",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6ecf9a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    label: "Patient Satisfaction",
    value: "98%",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6ecf9a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
];

function splitValue(value) {
  const match = value.match(/^([\d.]+)([^0-9.]*)$/);
  return match ? { num: match[1], suffix: match[2] } : { num: value, suffix: "" };
}

export default function StatsSection() {
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

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[#6ecf9a]" />
            <span className="font-body text-[11px] font-medium tracking-[0.1em] uppercase text-[#6ecf9a]">
              By the numbers
            </span>
            <span className="w-6 h-px bg-[#6ecf9a]" />
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(26px,4vw,38px)] tracking-tight leading-[1.1] text-white">
            Trusted by <span className="text-[#6ecf9a]">Thousands</span><br />
            Across Bhilai
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.06]">
          {stats.map((item, i) => {
            const { num, suffix } = splitValue(item.value);
            return (
              <div
                key={i}
                className="relative bg-white/[0.04] hover:bg-white/[0.08] transition-colors duration-200 px-6 py-9 text-center"
              >
                {/* Ghost number */}
                <span className="absolute bottom-3 right-4 font-heading font-extrabold text-[48px] leading-none text-white/[0.03] select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon badge */}
                <div className="w-[38px] h-[38px] rounded-[10px] bg-[#6ecf9a]/10 border border-[#6ecf9a]/18 flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>

                {/* Value */}
                <div className="font-heading font-extrabold text-[42px] leading-none tracking-tight text-white mb-2">
                  {num}<span className="text-[#6ecf9a] text-[28px]">{suffix}</span>
                </div>

                {/* Label */}
                <p className="font-body text-[12px] text-white/45 leading-snug">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}