import { Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Awards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Recognition & <span className="gradient-text">Awards</span>
        </h2>

        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative bg-gradient-to-br from-accent/10 via-card to-accent-secondary/10 border-2 border-accent/30 rounded-2xl p-8 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-secondary/10 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center glow-effect animate-glow-pulse flex-shrink-0">
                <Award className="w-12 h-12 text-accent-foreground" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2 gradient-text">
                  Solly of the Year
                </h3>
                <p className="text-lg text-muted-foreground mb-2">
                  Patho Solutions • 2022
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  A fun but meaningful recognition for excellence and performance. 
                  This award celebrates outstanding contributions, dedication, and the positive impact made on the team and organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
