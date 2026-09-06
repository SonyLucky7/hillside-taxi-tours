import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import TrustFeatures from "@/components/sections/trust-features";
import StepsSection from "@/components/sections/steps";
import Testimonials from "@/components/sections/testimonials";
import FooterCTA from "@/components/sections/footer-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      <Header />
      <HeroSection />
      <AboutSection />
      <TrustFeatures />
      <StepsSection />
      <Testimonials />
      <FooterCTA />
      <Footer />
    </main>
  );
}
