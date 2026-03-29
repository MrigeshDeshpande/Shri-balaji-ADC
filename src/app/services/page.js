import ServiceGrid from '@/features/services/components/ServiceGrid';
import TrustSection from '@/features/services/components/TrustSection';

export default function ServicesPage() {
  return (
    <main className="bg-bg-page min-h-screen">

      {/* Page Header — LIGHT SECTION */}
      <section className="py-20 md:py-28 bg-bg-light border-b border-border-light text-center">
        <div className="max-w-3xl mx-auto px-6">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 text-primary mb-6">
            <span className="w-6 h-[1px] bg-primary" />
            <span className="uppercase text-[11px] tracking-[0.1em] font-medium font-body">
              World-class Dentistry
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tight text-text-heading mb-6">
            Our Dental <span className="text-primary">Specializations</span>
          </h1>

          {/* Description */}
          <p className="font-body font-light text-text-body leading-relaxed max-w-xl mx-auto">
            We offer a comprehensive range of dental services using the latest
            painless technology in our state-of-the-art clinic.
          </p>

        </div>
      </section>

   
          <ServiceGrid />
      


      {/* Trust Section — LIGHT (not loud) */}
      
      <TrustSection />
    </main>
  );
}