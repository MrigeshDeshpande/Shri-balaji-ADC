// features/about/sections/StorySection.tsx
export default function StorySection() {
  return (
    <section className="py-20 md:py-28 px-6 border-t border-gray-100 bg-[#FAFAF8]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT — heading + large year */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-7 h-px bg-primary block" />
            <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-primary font-body">
              Our Journey
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] leading-[1.1] tracking-tight text-[#1C1C1C]">
            Built on Trust,<br />
            Grown with <span className="text-primary">Care</span>
          </h2>

          {/* Decorative founding year */}
          <p className="mt-8 text-[11px] font-medium tracking-[0.08em] uppercase text-gray-400 font-body mb-1">
            Est.
          </p>
          <div className="font-heading font-extrabold text-[80px] leading-none tracking-tighter text-gray-400 select-none">
            2026
          </div>
        </div>

        {/* RIGHT — story content */}
        <div className="pt-2">
          <p className="font-body text-[17px] font-light text-gray-800 leading-[1.75] mb-6">
            Shri Balaji Dental Clinic was founded with a simple goal —{" "}
            <span className="text-primary font-semibold">
              to make quality dental care accessible, honest, and stress-free
            </span>{" "}
            for every patient.
          </p>

          {/* Blockquote */}
          <blockquote className="border-l-[3px] border-primary pl-5 py-3 bg-[#f3faf6] rounded-r-xl mb-6">
            <p className="font-body text-[15px] italic text-gray-500 leading-relaxed">
              What started as a small practice has grown into a trusted name in the community.
            </p>
          </blockquote>

          <p className="font-body text-[15px] text-gray-500 leading-[1.8] mb-4">
            We focus on creating a{" "}
            <span className="font-medium text-[#1C1C1C]">calm, supportive environment</span>{" "}
            where patients feel informed and comfortable from the very first visit.
          </p>

          <p className="font-body text-[15px] text-gray-500 leading-[1.8] mb-8">
            Our commitment to{" "}
            <span className="font-semibold text-[#1C1C1C]">precision, hygiene, and ethical practices</span>{" "}
            builds long-term trust with families across Agra.
          </p>

          {/* Value pills */}
          <div className="flex flex-wrap gap-2">
            {["Patient-first care", "Transparent pricing", "Ethical practices", "Hygiene certified"].map((tag) => (
              <span
                key={tag}
                className="font-body text-[12px] font-medium px-4 py-1.5 rounded-full bg-[#f0faf5] text-[#0f6e56] border border-[#c0e8d4]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}