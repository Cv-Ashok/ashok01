import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Real Estate Sales Dashboard",
    tag: "Data Analytics",
    date: "Oct 2024",
    description:
      "Interactive dashboard analyzing real-estate sales performance across locations and property types using Excel Pivot Tables, Charts, Slicers, and Filters.",
    highlights: [
      "Data cleaning & preprocessing",
      "Dynamic charts for decision-making",
      "Sales trends & pricing insights",
    ],
    github: "https://github.com/Cv-Ashok",
  },
  {
    title: "Secure File Management System",
    tag: "Web Development",
    date: "Jan 2024",
    description:
      "Web-based file management system with user authentication, encrypted file storage, and categorized file display — fully browser-based.",
    highlights: [
      "User signup & login auth",
      "Encrypted upload/download",
      "File Reader API & Blob handling",
    ],
    github: "https://github.com/Cv-Ashok",
  },
  {
    title: "NextGen Networking (LPU Internship)",
    tag: "Training",
    date: "July 2025",
    description:
      "Summer internship focused on advanced computer networks — building LANs, DHCP address allocation, and practice with Cisco Packet Tracer.",
    highlights: [
      "Network fundamentals",
      "DHCP configuration",
      "Cisco Packet Tracer labs",
    ],
    github: "https://github.com/Cv-Ashok",
  },
];

const ProjectsSection = () => {
  return (
    <AnimatedSection id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="My Work" title="Projects & Training" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-6 flex flex-col hover:glow-border transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {project.tag}
                </span>
                <span className="text-xs text-muted-foreground">{project.date}</span>
              </div>

              <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>

              <ul className="mb-4 space-y-1">
                {project.highlights.map((h) => (
                  <li key={h} className="text-xs text-secondary-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Github size={14} />
                View on GitHub
                <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
