import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Vaulto - Financial Management App",
    description: "A comprehensive financial management application for tracking expenses, budgeting, and managing personal finances.",
    fullDescription: "A comprehensive financial management application designed to help users take control of their finances. Features include expense tracking with categorization, budget creation and monitoring, visual analytics and reports, goal setting for savings, and seamless data synchronization across devices. Built with modern web technologies for a responsive and intuitive user experience.",
    tags: ["Finance", "React", "Full Stack"],
    gradient: "from-primary to-burgundy-light",
    github: "https://github.com/suveshak/Vaulto---Financial-Management-App",
  },
  {
    title: "Brain Tumour Detection",
    description: "Machine learning model for detecting brain tumours from MRI scans using deep learning and image classification.",
    fullDescription: "An advanced machine learning solution for medical image analysis, specifically designed to detect brain tumours from MRI scans. Utilizes deep learning techniques including convolutional neural networks (CNNs) for accurate image classification. The model processes medical imaging data to assist healthcare professionals in early diagnosis, potentially improving patient outcomes through faster and more accurate detection.",
    tags: ["Python", "Machine Learning", "Healthcare"],
    gradient: "from-burgundy-light to-primary",
    github: "https://github.com/suveshak/BRAIN-TUMOUR-DETECTION",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="py-32 px-6 bg-card/30">
      <div className="container max-w-6xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            Work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-card rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03] cursor-pointer border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Gradient accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

              {/* Card content */}
              <div className="p-8 h-full flex flex-col">
                <h3 className="text-xl font-display font-semibold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 text-xs font-medium bg-secondary/80 rounded-full text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action row */}
                <div className="flex items-center justify-between mt-auto">
                  {/* GitHub button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="group/btn border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, "_blank");
                    }}
                  >
                    <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                    GitHub
                  </Button>

                  {/* Click indicator */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground/60 group-hover:text-primary/60 transition-colors">
                    <span>Click to expand</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Project Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl w-[90vw] p-0 overflow-hidden border-border/50">
          {selectedProject && (
            <>
              {/* Gradient header */}
              <div className={`h-2 w-full bg-gradient-to-r ${selectedProject.gradient}`} />
              
              <div className="p-8 md:p-10">
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-2xl md:text-3xl font-display font-bold leading-tight">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <DialogDescription className="text-base leading-relaxed text-muted-foreground mb-8">
                  {selectedProject.fullDescription}
                </DialogDescription>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 text-sm font-medium bg-secondary rounded-full text-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <Button
                  variant="outline"
                  size="lg"
                  className="group/btn border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open(selectedProject.github, "_blank")}
                >
                  <Github className="mr-2 h-5 w-5 transition-transform group-hover/btn:scale-110" />
                  View on GitHub
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
