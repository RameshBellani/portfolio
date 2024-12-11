"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { BookOpen, Award, GraduationCap, Code } from "lucide-react";

const educationAndCertifications = [
  {
    type: "Education",
    title: "Bachelor of Technology in Mechanical Engineering",
    institution: "Sri Vasavi Engineering College",
    year: "2019-2022",
    icon: GraduationCap,
    details: "Focused on Problem solving, practical based Learning",
  },
  {
    type: "Education",
    title: "Diploma",
    institution: "Sri Vasavi Engineering College",
    year: "2016-2019",
    icon: GraduationCap,
    details: "Diploma in mechanical",
  },
  {
    type: "Certification",
    title: "Full Stack Development (MERN Stack)",
    institution: "NxtWave",
    year: "2023",
    icon: Code,
    details: "Built multiple projects using MERN stack and developed full-stack web applications",
  },
  {
    type: "Experience",
    title: "Web Developer Intern",
    institution: "Sinfolix Technologies",
    year: "2023 (3 months)",
    icon: Code,
    details: "Contributed to web development projects and gained hands-on experience with MERN stack",
  },
  {
    type: "Learning",
    title: "Currently Learning",
    institution: "Self-Paced",
    year: "Present",
    icon: BookOpen,
    details: "Cloud Technologies, Docker, and ML",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="container px-4 py-24 bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Learning Journey</h2>
          <p className="text-muted-foreground">
            My educational background, certifications, internship experience, and continuous learning path
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationAndCertifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{item.type}</Badge>
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-muted-foreground">
                        {item.institution}
                      </span>
                      <span className="text-sm font-medium">{item.year}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Card className="p-6 max-w-2xl w-full bg-primary/5">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">Learning Never Stops</h3>
              <p className="text-muted-foreground">
                As a fresher in the tech industry, I&apos;m constantly learning and improving my skills. I believe in the power of continuous education and hands-on experience through building real-world projects.
              </p>
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
