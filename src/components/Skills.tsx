import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  { name: "Python", prominent: false },
  { name: "Power BI", prominent: true },
  { name: "HTML", prominent: false },
  { name: "React", prominent: true },
  { name: "CSS", prominent: false },
  { name: "JavaScript", prominent: false },
  { name: "WordPress", prominent: true },
  { name: "SQL", prominent: false },
  { name: "Excel", prominent: true },
];

const SkillCard = ({ name, prominent }: { name: string; prominent: boolean }) => (
  <div
    className={`flex-shrink-0 px-8 py-4 rounded-xl border-2 transition-all duration-300 ${
      prominent
        ? "bg-primary/10 border-primary/40 text-foreground font-semibold scale-110 shadow-lg shadow-primary/10"
        : "bg-card border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-card/80"
    }`}
  >
    <span className="text-lg whitespace-nowrap">{name}</span>
  </div>
);

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  // Double the skills array for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-32 overflow-hidden" ref={ref}>
      <div className="container max-w-5xl mx-auto px-6 mb-16">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            Expertise
          </p>
        </motion.div>
      </div>

      {/* Marquee container */}
      <motion.div 
        className="relative py-4"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* First row - left to right */}
        <div className="flex gap-8 mb-8 animate-marquee hover:[animation-play-state:paused]">
          {duplicatedSkills.map((skill, index) => (
            <SkillCard key={`row1-${index}`} name={skill.name} prominent={skill.prominent} />
          ))}
        </div>

        {/* Second row - right to left */}
        <div className="flex gap-8 animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...duplicatedSkills].reverse().map((skill, index) => (
            <SkillCard key={`row2-${index}`} name={skill.name} prominent={skill.prominent} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
