import GalleryHeroSection from "@/features/gallery/sections/GalleryHeroSection";
import GalleryGridSection from "@/features/gallery/sections/GalleryGridSection";
import VideoSection from "@/features/gallery/sections/VideoSection";
import CTASection from "@/features/gallery/sections/CTASection";
import BeforeAfterSection from "@/features/gallery/sections/BeforeAfterSection";

export default function GalleryPage() {
  return (
    <>
      <GalleryHeroSection />
      <BeforeAfterSection />  
      <GalleryGridSection />
      <VideoSection />
      <CTASection />
    </>
  );
}