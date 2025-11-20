import { useEffect, useRef, useState } from "react";
import { Code2, Rocket, Award, TrendingUp } from "lucide-react";

const TechJourney = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const progress = scrollLeft / (scrollWidth - clientWidth);
        setScrollProgress(progress);
      }
    };

    const scrollContainer = scrollRef.current;
    scrollContainer?.addEventListener("scroll", handleScroll);
    return () => scrollContainer?.removeEventListener("scroll", handleScroll);
  }, []);

  const milestones = [
    {
      year: "2021",
      title: "Started My Journey",
      description: "I began my career as a Junior Full Stack Developer, diving into web technologies and learning the fundamentals of modern software development.",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2022",
      title: "Recognition & Growth",
      description: "I earned the 'Solly of the Year' award and expanded my skills across the full stack, working with Redis, Typesense, and complex architectures.",
      icon: Award,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2024",
      title: "Junior Software Engineer",
      description: "I leveled up to Junior Software Engineer at DigiOutsource, focusing on designing technical solutions and developing new features with Angular and React.",
      icon: Code2,
      color: "from-green-500 to-emerald-500",
    },
    {
      year: "2025",
      title: "Intermediate Engineer",
      description: "I became an Intermediate Software Engineer, leading UI development with Angular, React, and React Native, while mentoring others and optimizing performance.",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-24 px-4 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          My Tech <span className="gradient-text">Journey</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Scroll horizontally to explore my career path and see how I've grown as a software engineer
        </p>

        {/* Progress Bar */}
        <div className="mb-8 max-w-3xl mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-accent-secondary transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-80 snap-center"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <div className="relative h-full bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-accent/50 transition-all duration-300 group">
                  {/* Glowing Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${milestone.color} flex items-center justify-center mb-4 glow-effect group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Year Badge */}
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-bold mb-3">
                    {milestone.year}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Connector Line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute top-12 -right-6 w-6 h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechJourney;
