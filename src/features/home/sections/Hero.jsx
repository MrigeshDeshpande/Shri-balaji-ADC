import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 px-6 bg-[#FAFAF8] overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-8 shadow-sm">
            <CheckCircle2 size={16} className="text-accent" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Bhilai's #1 Rated Dental Clinic</span>
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl text-primary leading-[0.95] mb-8 tracking-tighter">
            Your Smile <br/>
            <span className="text-accent italic font-normal">Deserves</span> <br/>
            Expert Care.
          </h1>
          
          <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed font-medium">
            Shri Balaji Advanced Dental Care combines world-class technology with 
            a gentle touch to give you the smile you've always dreamed of.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link href="/contact" className="bg-primary text-white px-10 py-5 rounded-full font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center gap-2 group">
              Book Appointment
              <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
            </Link>
            <Link href="/services" className="border-2 border-primary/20 text-primary px-10 py-5 rounded-full font-bold hover:bg-primary hover:text-white transition-all">
              Explore Services
            </Link>
          </div>
        </div>

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
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-[240px] border border-gray-100 hidden md:block">
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(i => <span key={i} className="text-accent text-lg">★</span>)}
            </div>
            <p className="text-sm font-bold text-primary italic">"The most painless root canal experience I've ever had. Highly recommend!"</p>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-4 font-bold">— Rahul Sharma, Patient</p>
          </div>
        </div>
      </div>
    </section>
  );
}