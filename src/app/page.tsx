import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import ContactSection from "@/components/sections/ContactSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import JoinUsSection from "@/components/sections/JoinUsSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="mt-24 md:32 lg:mt-8 px-4  md:px-[9rem]">
        <HeroSection />
        <ServiceSection />
        <JoinUsSection />
        <TestimonialSection />
        <TeamSection />
        <FooterSection />
      </div>
    </main>
  );
}
