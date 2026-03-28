import AboutHeroSection from "@/features/about/sections/AboutHeroSection";
import StorySection from "@/features/about/sections/StorySection";
import MissionVisionSection from "@/features/about/sections/MissionVisionSection";
import TeamSection from "@/features/about/sections/TeamSection";
import StatsSection from "@/features/about/sections/StatsSection";
import CertificationsSection from "@/features/about/sections/CertificationsSection";
import ValuesSection from "@/features/about/sections/ValuesSection";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <StorySection />
      <MissionVisionSection />
      <TeamSection />
      <StatsSection />
      <CertificationsSection />
      <ValuesSection />
    </>
  );
}

