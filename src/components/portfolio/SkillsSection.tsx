import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Code2, Layout, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["Python", "C++", "JavaScript", "C", "PHP"],
  },
  {
    icon: Layout,
    title: "Frameworks",
    skills: ["HTML & CSS", "Node.js", "React.js"],
  },
  {
    icon: Wrench,
    title: "Tools / Platforms",
    skills: ["Excel", "GitHub", "Cisco Packet Tracer"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Problem-Solving", "Team Player", "Adaptability"],
  },
];

const SkillsSection = () => {
  return (
    <AnimatedSection id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="What I Know" title="Skills & Technologies" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:glow-border transition-all duration-300 group"
            >
              <cat.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="font-heading font-semibold text-foreground mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
