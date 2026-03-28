import ServiceGrid from '@/features/services/components/ServiceGrid';

export default function ServicesPage() {
  return (
    <main className="bg-[#FAFAF8] min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-24 px-6 bg-white border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block italic">
            World-class Dentistry
          </span>
          <h1 className="text-6xl md:text-8xl font-heading mb-8">
            Our Dental <br/>Specializations.
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            We offer a comprehensive range of dental services using the latest 
            painless technology in our state-of-the-art Agra clinic.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <ServiceGrid />
      </section>

      {/* Trust Quote / Bottom Section */}
      <section className="pb-32 px-6 text-center">
        <div className="max-w-2xl mx-auto p-12 bg-primary rounded-[48px] text-white">
          <p className="text-xl font-medium italic opacity-90 mb-6">
            "Your comfort is as important to us as your dental health. We ensure a zero-anxiety experience for every patient."
          </p>
          <div className="h-px w-12 bg-accent mx-auto mb-4" />
          <span className="text-xs uppercase tracking-[0.2em] font-bold opacity-60">
            Shri Balaji Standards
          </span>
        </div>
      </section>
    </main>
  );
}