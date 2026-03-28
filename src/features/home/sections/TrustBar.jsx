import { Users, Award, Stethoscope, HeartPulse } from 'lucide-react';

const stats = [
  { label: "Years Experience", value: "10+", icon: <Award className="text-accent" size={28} /> },
  { label: "Happy Patients", value: "5000+", icon: <Users className="text-accent" size={28} /> },
  { label: "Specialized Procedures", value: "25+", icon: <Stethoscope className="text-accent" size={28} /> },
  { label: "Success Rate", value: "99%", icon: <HeartPulse className="text-accent" size={28} /> },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-gray-100 relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center lg:items-start group">
              <div className="mb-4 p-3 bg-accent/5 rounded-2xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <div className="font-heading text-4xl font-bold text-primary mb-1">
                {item.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-gray-400">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}