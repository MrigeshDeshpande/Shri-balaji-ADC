import { Zap, ShieldCheck, Clock, Sparkles } from 'lucide-react';

const features = [
  { 
    title: "Modern Tech", 
    desc: "Digital X-rays and AI-guided diagnostics.", 
    icon: <Zap size={24} className="text-white" /> 
  },
  { 
    title: "Safety First", 
    desc: "100% sterilized environment & hygiene protocols.", 
    icon: <ShieldCheck size={24} className="text-white" /> 
  },
  { 
    title: "Timely Care", 
    desc: "Zero waiting time with pre-booked appointments.", 
    icon: <Clock size={24} className="text-white" /> 
  },
  { 
    title: "Premium Feel", 
    desc: "Private suites designed for your comfort.", 
    icon: <Sparkles size={24} className="text-white" /> 
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-primary px-6 rounded-[48px] mx-4 mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col gap-6">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                {f.icon}
              </div>
              <div>
                <h4 className="font-heading text-xl text-white mb-2">{f.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed tracking-wide">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}