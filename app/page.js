import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
