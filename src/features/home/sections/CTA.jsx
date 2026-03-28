import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-8 block italic">
          Take the first step
        </span>
        <h2 className="text-5xl md:text-8xl font-heading mb-12 leading-[1] text-primary">
          Ready for a <br/>Healthier Smile?
        </h2>
        <Link 
          href="/contact" 
          className="inline-block bg-primary text-white px-12 py-6 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
        >
          Book Appointment Now
        </Link>
        <p className="mt-8 text-gray-400 text-sm font-medium">
          Free consultation for first-time visitors in BHilai.
        </p>
      </div>
    </section>
  );
}