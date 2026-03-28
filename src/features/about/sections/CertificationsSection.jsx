const certifications = [
  {
    label: "Membership",
    title: "Indian Dental Association (IDA) Member",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#147850" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    label: "Certification",
    title: "Certified in Advanced Root Canal Treatments",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#147850" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/>
      </svg>
    ),
  },
  {
    label: "Technology",
    title: "Modern Dental Equipment & Technology",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#147850" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    label: "Standards",
    title: "Strict Sterilization Standards Followed",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#147850" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
];

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
    <path d="M2 6l3 3 5-5" stroke="#147850" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function CertificationsSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">

      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-6 h-px bg-primary" />
          <span className="font-body text-[11px] font-medium tracking-[0.1em] uppercase text-primary">
            Our Credentials
          </span>
          <span className="w-6 h-px bg-primary" />
        </div>
        <h2 className="font-heading font-extrabold text-[clamp(26px,4vw,38px)] tracking-tight leading-[1.1] text-[#1C1C1C]">
          Certified, Trusted,<br />
          <span className="text-primary">Professionally Recognised</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-[#f0ede8] bg-[#f0ede8]">
        {certifications.map((item, i) => (
          <div
            key={i}
            className="relative bg-white hover:bg-[#f8f5f0] transition-colors duration-200 px-8 py-7 flex items-start gap-4 overflow-hidden"
          >
            {/* Ghost number */}
            <span className="absolute bottom-[-6px] right-3 font-heading font-extrabold text-[56px] leading-none text-primary/[0.04] select-none pointer-events-none">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Icon badge */}
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#f0faf5] border border-[#c0e8d4] flex items-center justify-center mt-0.5">
              {item.icon}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="font-body text-[10px] font-semibold tracking-[0.1em] uppercase text-primary mb-1.5">
                {item.label}
              </p>
              <p className="font-heading font-bold text-[16px] leading-snug tracking-tight text-[#1C1C1C]">
                {item.title}
              </p>
            </div>

            {/* Check badge */}
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#f0faf5] border border-[#c0e8d4] flex items-center justify-center mt-0.5">
              <CheckIcon />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}