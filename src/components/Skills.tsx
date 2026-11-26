import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillGroups = [
  {
    category: "Data & Business Intelligence",
    skills: ["Python", "SQL", "Excel", "Power BI", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    category: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Backend & Databases",
    skills: ["Node.js", "Express.js", "PostgreSQL", "SQLite", "Firebase"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "YOLOv8", "LLaMA", "Gemini API", "ChromaDB"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Streamlit", "WordPress", "Canva", "VS Code"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="py-28 px-6" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            Technologies I’ve worked with
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-primary bg-primary p-6 shadow-lg shadow-primary/10 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold tracking-wide text-white mb-5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg bg-white text-primary border border-white/80 text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
