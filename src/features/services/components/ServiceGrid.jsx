import { 
  Zap, 
  Activity, 
  Sparkles, 
  Smile, 
  Baby, 
  ShieldCheck,
  ChevronRight 
} from 'lucide-react';

const servicesData = [
  {
    title: "Root Canal Therapy",
    desc: "A painless, laser-assisted procedure to save your natural tooth from infection and decay.",
    features: ["Laser-assisted cleaning", "Single-sitting options", "Bio-compatible filling"],
    icon: <Zap size={32} />,
    accent: "bg-blue-50 text-blue-600"
  },
  {
    title: "Dental Implants",
    desc: "The gold standard for tooth replacement. Permanent, natural-looking, and fully functional.",
    features: ["Swiss-grade implants", "3D guided surgery", "Lifetime warranty"],
    icon: <Activity size={32} />,
    accent: "bg-teal-50 text-teal-600"
  },
  {
    title: "Teeth Whitening",
    desc: "Professional-grade brightening that removes years of stains in just one 45-minute session.",
    features: ["Enamel-safe gels", "Instant results", "Custom home kits"],
    icon: <Sparkles size={32} />,
    accent: "bg-orange-50 text-orange-600"
  },
  {
    title: "Smile Makeover",
    desc: "A custom blend of veneers, crowns, and contouring to create your perfect aesthetic smile.",
    features: ["Digital Smile Design", "Porcelain veneers", "Face-shape mapping"],
    icon: <Smile size={32} />,
    accent: "bg-purple-50 text-purple-600"
  },
  {
    title: "Pediatric Dentistry",
    desc: "Gentle and fun dental care designed specifically to keep your children's smiles healthy.",
    features: ["Kid-friendly environment", "Preventive sealants", "Habit breaking therapy"],
    icon: <Baby size={32} />,
    accent: "bg-pink-50 text-pink-600"
  },
  {
    title: "Preventive Care",
    desc: "Regular checkups and cleanings to catch problems before they become painful or expensive.",
    features: ["Deep cleaning (Scaling)", "Fluoride treatment", "Oral cancer screening"],
    icon: <ShieldCheck size={32} />,
    accent: "bg-green-50 text-green-600"
  }
];

export default function ServiceGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {servicesData.map((service, index) => (
        <div 
          key={index} 
          className="group relative bg-white p-10 rounded-[40px] border border-gray-100 hover:border-accent/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col"
        >
          {/* Icon Box */}
          <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500 ${service.accent}`}>
            {service.icon}
          </div>

          <h3 className="text-2xl font-heading text-primary mb-4 group-hover:text-accent transition-colors">
            {service.title}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
            {service.desc}
          </p>

          {/* Feature List */}
          <div className="space-y-3 mb-8">
            {service.features.map((feature, fIndex) => (
              <div key={fIndex} className="flex items-center gap-3">
                <div className="w-1 h-1 bg-accent rounded-full" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Action Link */}
          <button className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest group-hover:gap-4 transition-all">
            Consult Details <ChevronRight size={14} className="text-accent" />
          </button>
        </div>
      ))}
    </div>
  );
}