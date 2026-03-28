// features/about/sections/TeamSection.tsx
import { team } from "../data/team";

export default function TeamSection() {
  const doc = team[0];

  return (
    <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">

      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-6 h-px bg-primary" />
          <span className="font-body text-[11px] font-medium tracking-[0.1em] uppercase text-primary">
            Meet the Doctor
          </span>
          <span className="w-6 h-px bg-primary" />
        </div>
        <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,40px)] tracking-tight leading-[1.1] text-[#1C1C1C]">
          The Face Behind<br />
          Your <span className="text-primary">Healthy Smile</span>
        </h2>
      </div>

      {/* Solo card */}
      <div className="max-w-3xl mx-auto border border-[#f0ede8] rounded-3xl overflow-hidden bg-white grid grid-cols-1 md:grid-cols-[300px_1fr]">

        {/* Photo */}
        <div className="relative bg-[#f8f5f0] min-h-[300px] md:min-h-0">
          <img
            src={doc.image}
            alt={doc.name}
            className="w-full h-full object-cover object-top absolute inset-0"
          />
        </div>

        {/* Content */}
        <div className="p-10 md:p-12 flex flex-col justify-center">

          {/* Available tag */}
          <div className="inline-flex items-center gap-2 font-body text-[11px] font-medium tracking-[0.08em] uppercase text-primary mb-5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for consultations
          </div>

          <h3 className="font-heading font-extrabold text-[32px] tracking-tight leading-[1.05] text-[#1C1C1C] mb-1">
            {doc.name}
          </h3>
          <p className="font-body text-[13px] font-medium text-primary tracking-wide mb-5">
            {doc.degree} — {doc.specialization}
          </p>

          <div className="w-10 h-0.5 bg-[#f0ede8] rounded mb-5" />

          <p className="font-body text-[15px] font-light text-[#555] leading-[1.8] mb-7">
            {doc.bio}
          </p>

          {/* Specialization pills */}
          {doc.specializations && (
            <div className="flex flex-wrap gap-2 mb-7">
              {doc.specializations.map((s) => (
                <span
                  key={s}
                  className="font-body text-[11px] font-medium px-3 py-1 rounded-full bg-[#f0faf5] text-[#0f6e56] border border-[#c0e8d4]"
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          {/* Stats bar */}
          <div className="flex divide-x divide-[#f0ede8] border border-[#f0ede8] rounded-2xl overflow-hidden">
            {[
              { num: doc.yearsExp ?? "15+", label: "Years exp." },
              { num: doc.patients ?? "8k+", label: "Patients" },
              { num: doc.rating ?? "4.9★", label: "Rating" },
            ].map(({ num, label }) => (
              <div key={label} className="flex-1 py-3 text-center">
                <div className="font-heading font-extrabold text-[20px] text-[#1C1C1C]">{num}</div>
                <div className="font-body text-[10px] text-[#aaa] mt-0.5 tracking-wide">{label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}