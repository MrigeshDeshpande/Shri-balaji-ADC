import Hero from '@/features/home/sections/Hero';
import TrustBar from '@/features/home/sections/TrustBar';
import ServicesPreview from '@/features/home/sections/ServicesPreview';
import Features from '@/features/home/sections/Features';
import CTA from '@/features/home/sections/CTA';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <Features />
      <CTA />
    </main>
  );
}