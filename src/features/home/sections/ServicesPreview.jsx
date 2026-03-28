import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  { title: "Root Canal", desc: "Painless laser-assisted therapy to save teeth.", icon: "🦷" },
  { title: "Dental Implants", desc: "Life-long permanent solutions for tooth loss.", icon: "💎" },
  { title: "Teeth Whitening", desc: "Professional brightening for a radiant glow.", icon: "✨" },
  { title: "Smile Design", desc: "Aesthetic makeovers tailored to your face.", icon: "🎨" },
  { title: "Orthodontics", desc: "Clear aligners and braces for perfect alignment.", icon: "📏" },
  { title: "Child Dentistry", desc: "Friendly care to keep little smiles healthy.", icon: "👶" },
];

export default function ServicesPreview() {
  return (
    <section className="py-32 bg-[#FAFAF8] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Specialized Care</span>
            <h2 className="text-5xl md:text-6xl font-heading text-primary leading-tight">
              Clinical Excellence <br />Meeting Premium Comfort.
            </h2>
          </div>
          <Link href="/services" className="group flex items-center gap-3 text-primary font-bold border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-all">
            View All Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group bg-white p-12 rounded-[40px] border border-gray-100 hover:border-accent/20 hover:shadow-[0_32px_64px_-16px_rgba(200,169,110,0.1)] transition-all duration-500">

              {/* FIXED HERE: Changed service.icon to s.icon and removed the duplicate */}
              <div className="text-5xl mb-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                {s.icon}
              </div>

              <h3 className="text-2xl font-heading mb-4 text-primary group-hover:text-accent transition-colors">
                {s.title}
              </h3>

              <p className="text-gray-500 leading-relaxed text-sm mb-8">
                {s.desc}
              </p>

              <Link
                href={`/services#${s.title.toLowerCase().replace(' ', '-')}`}
                className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}