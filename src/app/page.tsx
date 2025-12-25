import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import TestimonialsSection from '@/components/testimonials-section';

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
}
