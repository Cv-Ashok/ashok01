import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6"
        >
          <span className="text-foreground">Choppa</span>{" "}
          <span className="text-gradient">Venkata Ashok</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Computer Science Engineering Student passionate about building web applications,
          solving problems, and creating impactful digital solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://linkedin.com/in/cv-ashok"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card hover:glow-border transition-all duration-300 text-muted-foreground hover:text-primary"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Cv-Ashok"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card hover:glow-border transition-all duration-300 text-muted-foreground hover:text-primary"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:cvenkataashok@gmail.com"
            className="p-3 rounded-xl glass-card hover:glow-border transition-all duration-300 text-muted-foreground hover:text-primary"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+918688844458"
            className="p-3 rounded-xl glass-card hover:glow-border transition-all duration-300 text-muted-foreground hover:text-primary"
          >
            <Phone size={20} />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown size={20} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
