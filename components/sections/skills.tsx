"use client";

import { motion } from "framer-motion";
import { Progress } from "../../components/ui/progress";

const skills = [
  { name: "Frontend Development", level: 90 },
  { name: "Backend Development", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "Version Control (Git)", level: 90 },
  { name: "Python", level: 75 },
];

export function SkillsSection() {
  return (
    <section id="skills" className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold">Skills & Expertise</h2>
        <p className="text-lg text-muted-foreground">
          Hi, I&apos;m Ramesh, a passionate and results-driven Full Stack Web Developer specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. With hands-on experience and a knack for turning ideas into reality, I thrive on building intuitive and dynamic web applications. My expertise includes crafting responsive user interfaces and developing robust backend systems.
        </p>
        <div className="grid gap-6 max-w-2xl">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
