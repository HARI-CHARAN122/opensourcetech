import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import EventsSection from "@/components/EventsSection";
import CommunitySection from "@/components/CommunitySection";
import ResourcesSection from "@/components/ResourcesSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";
import SiteBackground from "@/components/background/SiteBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />

      <SiteBackground />

      <Navbar />

      <main className="relative z-10">

        <HeroSection />

        <AboutSection />
        <WhatWeDoSection />
        <EventsSection />
        <CommunitySection />
        <ResourcesSection />
        <JoinSection />

      </main>

      <Footer />

    </div>
  );
};

export default Index;