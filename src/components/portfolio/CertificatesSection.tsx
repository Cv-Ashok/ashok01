import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Award, Trophy } from "lucide-react";

const certificates = [
  {
    title: "Responsive Web Design",
    org: "freeCodeCamp",
    date: "Oct 2023",
  },
  {
    title: "Hackathon Participation",
    org: "Lovely Professional University — Student Organization",
    date: "Mar 2024",
  },
];

const achievements = [
  {
    title: "50+ LeetCode Challenges",
    description: "Completed 50+ problems, strengthening algorithmic and problem-solving skills.",
    date: "Jan 2024",
  },
  {
    title: "Hackathon Contribution",
    description: "Participated in a hackathon, contributing to idea generation and team collaboration.",
    date: "Mar 2024",
  },
];

const CertificatesSection = () => {
  return (
    <AnimatedSection id="certificates" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="Recognition" title="Certificates & Achievements" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:glow-border transition-all duration-300"
            >
              <Award className="text-primary mb-3" size={24} />
              <h3 className="font-heading font-semibold text-foreground mb-1">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{cert.org}</p>
              <span className="text-xs text-muted-foreground">{cert.date}</span>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 glass-card rounded-xl p-5"
            >
              <Trophy className="text-primary shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="font-heading font-medium text-foreground">{a.title}</h4>
                <p className="text-sm text-muted-foreground">{a.description}</p>
                <span className="text-xs text-muted-foreground">{a.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CertificatesSection;
