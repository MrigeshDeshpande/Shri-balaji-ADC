import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 px-6 bg-[#FAFAF8] overflow-hidden">
      
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT */}
        <div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-6 shadow-sm">
            <CheckCircle2 size={16} className="text-accent" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Bhilai's #1 Rated Dental Clinic
            </span>
          </div>
          
          {/* Heading */}
          <h1 className="font-heading text-6xl md:text-8xl text-primary leading-[0.95] mb-6 tracking-tighter">
            Your Smile <br/>
            <span className="text-accent italic font-normal">Deserves</span> <br/>
            Expert Care.
          </h1>
          
          {/* Description */}
          <p className="text-lg text-gray-500 mb-6 max-w-lg leading-relaxed font-medium">
            Advanced dental care with modern technology and a gentle approach — so you feel confident at every step.
          </p>

          <div className="mb-8">
            <p className="text-lg font-bold text-accent">
              Free Consultation for First-Time Patients
            </p>
            <p className="text-sm text-gray-400">
              Available daily between 7 PM – 9 PM
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-5">
            
            <a 
              href="https://wa.me/9111594782?text=Hi%2C%20I%20found%20your%20clinic%20online.%20I%E2%80%99d%20like%20to%20know%20more%20about%20treatment%20and%20consultation."
              target="_blank"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-center hover:shadow-xl active:scale-95 transition-all"
            >
              Talk to Doctor on WhatsApp
            </a>

            {/* SECONDARY - CALL */}
            <a 
              href="tel:+9111594782"
              className="flex items-center justify-center gap-2 border-2 border-primary/20 text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
            >
              <Phone size={18} />
              Call Now
            </a>

          </div>

          {/* MICRO TRUST */}
          <p className="text-xs text-gray-400 mb-4">
            Instant reply on WhatsApp
          </p>

          {/* TERTIARY */}
          <Link 
            href="/services" 
            className="text-primary font-semibold underline underline-offset-4 hover:text-accent transition"
          >
            Explore Services →
          </Link>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative h-[550px] w-full rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white">
            <Image 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070" 
              alt="Modern Dental Operatory" 
              fill 
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-[240px] border border-gray-100 hidden md:block">
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(i => <span key={i} className="text-accent text-lg">★</span>)}
            </div>
            <p className="text-sm font-bold text-primary italic">
              "The most painless root canal experience I've ever had. Highly recommend!"
            </p>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-4 font-bold">
              — Rahul Sharma, Patient
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}