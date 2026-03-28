import { Zap, ShieldCheck, Clock, Sparkles } from "lucide-react";

const features = [
  {
    title: "Modern Technology",
    desc: "Digital X-rays and precision diagnostics for accurate treatment.",
    icon: Zap,
  },
  {
    title: "Safety First",
    desc: "Strict sterilization protocols for a safe, infection-free experience.",
    icon: ShieldCheck,
  },
  {
    title: "On-Time Care",
    desc: "Minimal waiting with pre-scheduled appointments.",
    icon: Clock,
  },
  {
    title: "Comfort Experience",
    desc: "Designed spaces that make your visit calm and stress-free.",
    icon: Sparkles,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-primary mx-4 rounded-[40px] px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading text-white">
            Why Choose Shri Balaji?
          </h2>
          <p className="text-white/70 mt-3 text-sm md:text-base max-w-xl mx-auto">
            We combine advanced technology with compassionate care to give you a comfortable dental experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <div
                key={i}
                className="flex gap-5 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white text-primary shrink-0">
                  <Icon size={22} />
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {f.title}
                  </h4>
                  <p className="text-white/70 text-sm mt-1 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}