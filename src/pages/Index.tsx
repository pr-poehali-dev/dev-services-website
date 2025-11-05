import { useEffect, useRef } from 'react';
import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import TeamSection from '@/components/sections/TeamSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import BottomCTABanner from '@/components/BottomCTABanner';

const Index = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const refs = [servicesRef, techRef, teamRef, faqRef, contactRef];
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection ref={servicesRef} />
      <TechnologiesSection ref={techRef} />
      <TeamSection ref={teamRef} />
      <FAQSection ref={faqRef} />
      <ContactSection ref={contactRef} />
      <Footer />
      <BottomCTABanner />
    </div>
  );
};

export default Index;