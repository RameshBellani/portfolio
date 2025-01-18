"use client";

import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="container px-4 py-24 md:py-32">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <motion.div 
          className="flex-1 space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I&apos;m <span className="text-primary">Ramesh</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground">
            Full Stack Developer
          </h2>
          <p className="text-lg text-muted-foreground max-w-md">
            I build exceptional and accessible digital experiences for the web.
          </p>
          <div className="flex gap-4 pt-4">
            <Button 
              size="lg" 
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                window.open('/Ramesh_Bellani_Updated_Cv.pdf', '_blank');
              }}
            >
              Download Resume
            </Button>
          </div>
        </motion.div>
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="https://res.cloudinary.com/dwffepf9q/image/upload/v1733905592/sasunkm90oiddlenotoo.jpg"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
