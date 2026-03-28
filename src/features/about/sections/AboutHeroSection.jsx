export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5f0] py-20 md:py-28 px-6 text-center">

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      {/* Green ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 80% 20%, rgba(20,120,80,0.08) 0%, transparent 70%),
                       radial-gradient(ellipse 40% 60% at 10% 80%, rgba(20,120,80,0.05) 0%, transparent 60%)`,
        }}
      />

      {/* Dot clusters */}
      <div className="absolute top-12 left-10 grid grid-cols-5 gap-1.5 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-[#147850] opacity-20" />
        ))}
      </div>
      <div className="absolute bottom-14 right-10 grid grid-cols-4 gap-1.5 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-[#147850] opacity-15" />
        ))}
      </div>

      {/* Crosshair accents */}
      <CrossHair className="absolute top-7 right-20 w-5 h-5 opacity-35" />
      <CrossHair className="absolute bottom-10 left-14 w-3.5 h-3.5 opacity-25" />

      {/* Content */}
      <div className="relative max-w-2xl mx-auto">

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 bg-[#147850]/10 border border-[#147850]/20 text-[#147850] text-[11px] font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-8 font-body">
          <span className="w-1.5 h-1.5 rounded-full bg-[#147850] animate-pulse" />
          About Shri Balaji
        </div>

        {/* Heading — Bricolage Grotesque */}
        <h1 className="font-heading text-[clamp(38px,6vw,60px)] font-extrabold leading-[1.1] tracking-tight text-[#1C1C1C] mb-2">
          Care You Can Trust,{" "}
          <br className="hidden md:block" />
          <span className="text-[#147850] font-light italic">Comfort</span>{" "}
          You Can Feel
        </h1>

        {/* Subtext — Plus Jakarta Sans */}
        <p className="font-body text-[17px] font-light text-gray-500 leading-relaxed max-w-[500px] mx-auto mt-6 mb-10">
          At Shri Balaji Dental Clinic, we believe dental care should feel safe,
          transparent, and genuinely caring — every visit designed around
          your comfort and long-term oral health.
        </p>

        {/* Stats bar */}
        <div className="inline-flex divide-x divide-black/[0.08] border border-black/10 rounded-2xl overflow-hidden bg-white">
          {[
            { num: "12+", label: "Years serving" },
            { num: "4.9★", label: "Google rating" },
            { num: "8k+", label: "Happy patients" },
          ].map(({ num, label }) => (
            <div key={label} className="px-8 py-4 text-center">
              <div className="font-heading text-[22px] font-bold text-[#1C1C1C]">{num}</div>
              <div className="font-body text-[11px] text-gray-400 tracking-wide mt-0.5">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function CrossHair({ className }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[#147850] rounded" />
      <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-[#147850] rounded" />
    </div>
  );
}