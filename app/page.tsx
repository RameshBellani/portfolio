import { HeroSection } from '../components/sections/hero';
import { AboutSection } from '../components/sections/about';
import { ProjectsSection } from '../components/sections/projects';
import { SkillsSection } from '../components/sections/skills';
import { TestimonialsSection } from '../components/sections/testimonials';
import { ContactSection } from '../components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}