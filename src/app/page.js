import Hero from '@/features/home/sections/Hero';
import TrustBar from '@/components/home/TrustBar';
import ServicesPreview from '@/components/home/ServicesPreview';
import Features from '@/components/home/Features';
import CTA from '@/components/home/CTA';

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