import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
}

const SectionHeading = ({ label, title }: SectionHeadingProps) => {
  return (
    <div className="mb-12">
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-primary text-sm font-medium tracking-widest uppercase mb-2"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-heading font-bold text-foreground"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
