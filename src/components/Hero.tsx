import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Gradient background behind hero content */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-primary/10" />
      
      {/* Mouse-following glow effect */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          background: "radial-gradient(circle, hsl(219 52% 71% / 0.25) 0%, hsl(219 52% 71% / 0.1) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      
      {/* Static radial gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-base tracking-wide mb-2">
            Hi, I am
          </p>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-display font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Suvesha Khan
        </motion.h1>

        <motion.p 
          className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10 text-justify"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Computer Science and Engineering undergraduate at MIT ADT University, Pune, 
          driven by curiosity for AI, data science, and analytics. Passionate about 
          continuous learning and leveraging technology to create meaningful, real-world 
          impact. Looking forward to applying my skills in challenging and innovative environments.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button 
            variant="burgundy" 
            size="lg" 
            onClick={scrollToProjects}
            className="group"
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={scrollToContact}
          >
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
