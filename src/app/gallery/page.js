import GalleryHeroSection from "@/features/gallery/sections/GalleryHeroSection";
import GalleryGridSection from "@/features/gallery/sections/GalleryGridSection";
import VideoSection from "@/features/gallery/sections/VideoSection";
import CTASection from "@/features/gallery/sections/CTASection";
import BeforeAfterSection from "@/features/gallery/sections/BeforeAfterSection";

export const metadata = {
  title: 'Gallery',
  description: 'View our clinic gallery, patient smiles, and before & after pictures of our dental treatments.',
  openGraph: {
    title: 'Clinic Gallery | Shri Balaji Dental',
    url: 'https://shribalajidental.com/gallery',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Shri Balaji Dental Clinic Gallery",
  "url": "https://shribalajidental.com/gallery",
  "description": "Gallery of Shri Balaji Dental Clinic featuring facilities and patient transformations."
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryHeroSection />
      <BeforeAfterSection />  
      <GalleryGridSection />
      <VideoSection />
      <CTASection />
    </>
  );
}