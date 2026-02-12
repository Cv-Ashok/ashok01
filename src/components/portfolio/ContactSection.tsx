import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";

const ContactSection = () => {
  return (
    <AnimatedSection id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading label="Get In Touch" title="Let's Connect" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-lg mx-auto mb-10"
        >
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          <a
            href="mailto:cvenkataashok@gmail.com"
            className="glass-card rounded-2xl p-5 hover:glow-border transition-all duration-300 flex flex-col items-center gap-2 group"
          >
            <Mail className="text-primary group-hover:scale-110 transition-transform" size={24} />
            <span className="text-xs text-muted-foreground">Email</span>
          </a>
          <a
            href="tel:+918688844458"
            className="glass-card rounded-2xl p-5 hover:glow-border transition-all duration-300 flex flex-col items-center gap-2 group"
          >
            <Phone className="text-primary group-hover:scale-110 transition-transform" size={24} />
            <span className="text-xs text-muted-foreground">Phone</span>
          </a>
          <a
            href="https://linkedin.com/in/cv-ashok"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-5 hover:glow-border transition-all duration-300 flex flex-col items-center gap-2 group"
          >
            <Linkedin className="text-primary group-hover:scale-110 transition-transform" size={24} />
            <span className="text-xs text-muted-foreground">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Cv-Ashok"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-5 hover:glow-border transition-all duration-300 flex flex-col items-center gap-2 group"
          >
            <Github className="text-primary group-hover:scale-110 transition-transform" size={24} />
            <span className="text-xs text-muted-foreground">GitHub</span>
          </a>
        </motion.div>

        <motion.a
          href="/Ashok_CV.docx"
          download
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-heading font-semibold hover:opacity-90 transition-opacity text-lg"
        >
          <Download size={20} />
          Download My CV
        </motion.a>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
