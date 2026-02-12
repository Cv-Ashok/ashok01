import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-accent font-medium tracking-widest uppercase text-sm mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 leading-tight"
            >
              <span className="text-foreground">Choppa</span>
              <br />
              <span className="text-gradient">Venkata Ashok</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary/50 mb-6"
            >
              <span className="text-sm font-medium text-muted-foreground">
                CSE Student &bull; Web Developer &bull; Problem Solver
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8"
            >
              Passionate about building web applications, solving problems,
              and creating impactful digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <a
                href="/Ashok_CV.docx"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 text-sm"
              >
                <Download size={16} />
                Download CV
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 text-sm font-medium"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/cv-ashok", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/Cv-Ashok", label: "GitHub" },
                { icon: Mail, href: "mailto:cvenkataashok@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+918688844458", label: "Phone" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-xl glass-card hover:glow-border transition-all duration-300 text-muted-foreground hover:text-primary"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/10 blur-xl" />
              {/* Border ring */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-br from-primary/40 to-accent/20">
                <img
                  src={profileImg}
                  alt="Choppa Venkata Ashok"
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>
              {/* Floating accent dot */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary/60 blur-sm"
              />
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-1 -left-3 w-4 h-4 rounded-full bg-accent/40 blur-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown size={20} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
