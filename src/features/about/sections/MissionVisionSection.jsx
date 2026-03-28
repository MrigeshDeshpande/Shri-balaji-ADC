// features/about/sections/MissionVisionSection.tsx
export default function MissionVisionSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#1a2e22] relative overflow-hidden">

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[#6ecf9a]" />
            <span className="font-body text-[11px] font-medium tracking-[0.1em] uppercase text-[#6ecf9a]">
              What drives us
            </span>
            <span className="w-6 h-px bg-[#6ecf9a]" />
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,40px)] tracking-tight leading-[1.1] text-white">
            Our <span className="text-[#6ecf9a]">Mission</span> &amp; Vision
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-white/[0.08]">
          {[
            {
              num: "01",
              label: "Mission",
              title: "Care You Can Count On",
              body: "To deliver reliable, pain-free, and patient-focused dental care using modern techniques and strict hygiene standards.",
              tags: ["Pain-free treatment", "Modern techniques", "Hygiene first"],
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6ecf9a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              ),
            },
            {
              num: "02",
              label: "Vision",
              title: "Most Trusted Clinic in the Region",
              body: "To become the most trusted dental care provider known for quality treatment, transparency, and compassionate service.",
              tags: ["Quality treatment", "Transparency", "Compassionate"],
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6ecf9a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                  <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
                  <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
                </svg>
              ),
            },
          ].map((card, i) => (
            <div
              key={i}
              className="relative p-10 bg-white/[0.04] border-white/[0.08] first:border-r"
            >
              {/* Ghost number */}
              <span className="absolute top-5 right-7 font-heading font-extrabold text-[80px] leading-none text-white/[0.03] select-none pointer-events-none">
                {card.num}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#6ecf9a]/10 border border-[#6ecf9a]/20 flex items-center justify-center mb-6">
                {card.icon}
              </div>

              <p className="font-body text-[10px] font-semibold tracking-[0.12em] uppercase text-[#6ecf9a] mb-2">
                {card.label}
              </p>
              <h3 className="font-heading font-extrabold text-[26px] leading-[1.1] tracking-tight text-white mb-4">
                {card.title}
              </h3>
              <p className="font-body text-[15px] font-light text-white/55 leading-[1.8]">
                {card.body}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/[0.08]">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[11px] font-medium px-3 py-1 rounded-full bg-[#6ecf9a]/10 text-[#6ecf9a] border border-[#6ecf9a]/18"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}