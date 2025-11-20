import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className={`text-xl text-muted-foreground mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-accent to-accent-secondary hover:opacity-90 text-accent-foreground shadow-lg glow-effect group"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Email Me
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-accent/50 hover:bg-accent/10 hover:border-accent group"
          >
            <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            LinkedIn
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-accent/50 hover:bg-accent/10 hover:border-accent group"
          >
            <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            GitHub
          </Button>
        </div>

        {/* Decorative Line */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent via-accent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
