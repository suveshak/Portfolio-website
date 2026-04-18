import { GraduationCap, School } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const educationData = [
  {
    degree: "Bachelor's in Computer Science and Engineering",
    institution: "MIT ADT University, Pune",
    icon: GraduationCap,
    current: true,
    gradDate: null,
  },
  {
    degree: "HSC",
    institution: "St. Arnold's Central School, Pune",
    icon: School,
    current: false,
    gradDate: "Grad: May 2023",
  },
  {
    degree: "SSC",
    institution: "The Bishop's Co-Ed School, Pune",
    icon: School,
    current: false,
    gradDate: "Grad: May 2021",
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="education" className="py-24 px-6" ref={ref}>
      <div className="container max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Education
          </h2>
          <p className="text-muted-foreground text-sm tracking-wide">
            My Personal Journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] p-6 bg-card rounded-lg border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg ${
                    index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-1">
                        {item.degree}
                      </h3>
                      <p className="text-muted-foreground">{item.institution}</p>
                      {item.current && (
                        <span className="inline-block mt-2 px-3 py-1 text-xs bg-primary/20 text-primary rounded-full">
                          Currently Pursuing
                        </span>
                      )}
                      {item.gradDate && (
                        <span className="inline-block mt-2 px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                          {item.gradDate}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
