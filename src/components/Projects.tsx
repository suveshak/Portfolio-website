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
    title: "Student Mental Health Analysis",
    category: "Data Analytics",
    description: "An interactive Power BI dashboard exploring patterns linked to academic pressure, financial stress, sleep, and student well-being.",
    fullDescription: "This data analytics project explores a dataset of 27,901 student records to understand patterns associated with student mental health. The Power BI dashboard includes KPIs, degree-level filtering, and comparisons across academic pressure, financial stress, sleep duration, family history, and gender. The analysis highlights associations in the data and does not claim to establish causation.",
    focus: "Data exploration, dashboard design, KPI creation, and communicating patterns through interactive visuals.",
    tags: ["Power BI", "Power Query", "DAX", "Excel"],
    gradient: "from-primary to-burgundy-light",
    github: "https://github.com/suveshak/student-mental-health-analysis",
  },
  {
    title: "Vaulto - Financial Management App",
    category: "FinTech & Application Development",
    description: "A financial management application designed to help users track expenses, scan receipts, and understand their spending.",
    fullDescription: "Vaulto is an AI-powered financial management application. It brings together expense tracking, receipt scanning with OCR, financial insights, and tools to help users better understand and manage their money. The project combines a Flutter interface with a Python backend and supporting data and authentication services.",
    focus: "UI development and frontend integration for a finance-focused application.",
    tags: ["Flutter", "Python", "LLaMA", "ChromaDB", "SQLite", "Firebase"],
    gradient: "from-burgundy-light to-primary",
    github: "https://github.com/suveshak/Vaulto---Financial-Management-App",
  },
  {
    title: "Bazaar - E-Commerce Platform",
    category: "Web Development",
    description: "An e-commerce application with a Next.js frontend, Express API, PostgreSQL database, and JWT authentication.",
    fullDescription: "Bazaar is an e-commerce application built with Next.js, Express.js, and PostgreSQL. The platform includes product browsing, category and product search, user signup and login, and a cart connected to the backend. My contributions focused mainly on frontend development, along with backend integration work involving JWT authentication and Docker-based setup.",
    focus: "Primarily frontend development, with supporting work on JWT authentication and Docker-based integration.",
    tags: ["Next.js", "Express.js", "PostgreSQL", "JWT", "Docker"],
    gradient: "from-primary to-burgundy-light",
    github: "https://github.com/suveshak/bazaar-fullstack",
  },
  {
    title: "Milo - Multi-Turn Memory Chatbot",
    category: "Conversational Applications",
    description: "A chatbot that uses Gemini to retain context and recall details shared earlier in an active conversation.",
    fullDescription: "Milo is a conversational chatbot built with Python and Streamlit, integrated with Google's Gemini API. It supports multi-turn conversations, contextual follow-up questions, and recall of information shared earlier in the active conversation. The interface also includes a conversation-history sidebar and a custom visual design.",
    focus: "Building a conversational interface and experimenting with context-aware responses.",
    tags: ["Python", "Streamlit", "Gemini API", "Generative AI"],
    gradient: "from-burgundy-light to-primary",
    github: "https://github.com/suveshak/llm-ps20-20",
  },
  {
    title: "TripSync - AI Travel Planner",
    category: "Travel Technology",
    description: "A travel planning application exploring AI-assisted itinerary planning and travel API integrations.",
    fullDescription: "TripSync is a travel planning project built with Next.js and a Node.js/Express backend. It explores AI-agent-assisted trip planning and integrations with travel APIs to help organise travel information and itinerary workflows.",
    focus: "AI-assisted trip-planning workflows, web application development, and travel API integration.",
    tags: ["Next.js", "Node.js", "Express.js", "AI Agents", "Travel APIs"],
    gradient: "from-primary to-burgundy-light",
    github: "https://github.com/suveshak/tripsync",
  },
  {
    title: "Brain Tumour Detection",
    category: "Computer Vision",
    description: "A deep-learning project exploring brain tumour detection from MRI scans through medical image analysis.",
    fullDescription: "A machine learning solution for medical image analysis, designed to detect brain tumours from MRI scans. The project uses deep learning-based image classification and provides an interactive interface for exploring predictions.",
    focus: "Applying computer vision techniques to a medical image classification problem.",
    tags: ["Python", "YOLOv8", "Streamlit", "Computer Vision"],
    gradient: "from-burgundy-light to-primary",
    github: "https://github.com/suveshak/BRAIN-TUMOUR-DETECTION",
  },
  {
    title: "Rock Paper Scissor Detection",
    category: "Computer Vision",
    description: "A Streamlit application that uses a trained YOLOv8 model to recognise rock, paper, and scissors hand gestures.",
    fullDescription: "This computer vision project lets users upload an image and detects whether the hand gesture represents rock, paper, or scissors. It uses a trained YOLOv8 model through Ultralytics, with PIL and OpenCV for image processing, and Streamlit for the interactive interface.",
    focus: "Using object detection and image processing to classify hand gestures.",
    tags: ["Python", "YOLOv8", "Streamlit", "OpenCV"],
    gradient: "from-primary to-burgundy-light",
    github: "https://github.com/suveshak/Rock_Paper_Scissor",
  },
  {
    title: "Personal Portfolio Website",
    category: "Frontend Development",
    description: "A responsive portfolio website built with React and TypeScript to showcase projects, skills, and experience.",
    fullDescription: "A personal portfolio website designed to present my work and skills in a clean, professional manner. Built with React, TypeScript, Vite, and Tailwind CSS, it features smooth animations, a responsive layout, an interactive projects section, and a contact form. Deployed on Vercel.",
    focus: "Designing and building a responsive personal website with reusable React components.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    gradient: "from-primary to-burgundy-light",
    github: "https://github.com/suveshak/Portfolio-website",
    live: "https://portfolio-website-gjmd.vercel.app/",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="py-28 px-6 bg-card/30">
      <div className="container max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Selected Projects
          </h2>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            A mix of analytics, development & applied machine learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.title}`}
              className="group relative flex flex-col bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-border/60 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-7 md:p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary/80 rounded-full text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-border/50">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={(event) => {
                      event.stopPropagation();
                      window.open(project.github, "_blank", "noopener,noreferrer");
                    }}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>

                  <span className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    View project details
                    <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl w-[90vw] p-0 overflow-hidden border-border/50">
          {selectedProject && (
            <>
              <div className={`h-2 w-full bg-gradient-to-r ${selectedProject.gradient}`} />

              <div className="p-8 md:p-10">
                <DialogHeader className="mb-6">
                  <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                    {selectedProject.category}
                  </p>
                  <DialogTitle className="text-2xl md:text-3xl font-display font-bold leading-tight">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <DialogDescription className="text-base leading-relaxed text-muted-foreground mb-6">
                  {selectedProject.fullDescription}
                </DialogDescription>

                <div className="rounded-xl bg-secondary/50 border border-border/50 p-4 mb-7">
                  <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                    Project focus
                  </p>
                  <p className="text-sm leading-relaxed text-foreground">
                    {selectedProject.focus}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm font-medium bg-secondary rounded-full text-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group/btn border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => window.open(selectedProject.github, "_blank", "noopener,noreferrer")}
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </Button>
                  {selectedProject.live && (
                    <Button
                      size="lg"
                      onClick={() => window.open(selectedProject.live, "_blank", "noopener,noreferrer")}
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
