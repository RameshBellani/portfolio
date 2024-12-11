"use client";

import { motion } from "framer-motion";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

export function AboutSection() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "MongoDB",
    "Express.js",
    "Python",
    "TailwindCSS",
    "Git",
    "Material-UI",
    "Bootstrap",
    "CSS",
    "HTML"
  ];

  return (
    <section id="about" className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Hi, I&apos;m Ramesh Bellani, a passionate and results-driven Full Stack Web Developer specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. With hands-on experience and a knack for turning ideas into reality, I thrive on building intuitive and dynamic web applications. 
            My expertise includes crafting responsive user interfaces and developing robust backend systems.
          </p>
        </div>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Core Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
