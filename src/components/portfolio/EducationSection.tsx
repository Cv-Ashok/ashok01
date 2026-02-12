import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Lovely Professional University, Punjab, India",
    period: "Aug 2023 — Present",
    grade: "CGPA: 7.1",
  },
  {
    degree: "Intermediate",
    school: "Sri Chaitanya Junior College, Andhra Pradesh, India",
    period: "April 2019 — March 2021",
    grade: "Percentage: 75%",
  },
  {
    degree: "Matriculation",
    school: "Nagarjuna High School, Andhra Pradesh, India",
    period: "March 2019",
    grade: "Percentage: 98%",
  },
];

const EducationSection = () => {
  return (
    <AnimatedSection id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="Background" title="Education" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <GraduationCap size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-muted-foreground">{edu.period}</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default EducationSection;
