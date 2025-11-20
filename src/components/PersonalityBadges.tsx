import { useEffect, useRef, useState } from "react";
import { Zap, Brain, MessageCircle, BookOpen, Target } from "lucide-react";

const PersonalityBadges = () => {
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

  const badges = [
    {
      icon: Brain,
      label: "Problem Solver",
      emoji: "🔥",
      color: "from-orange-500 to-red-500",
      description: "I love breaking down complex problems into elegant solutions",
    },
    {
      icon: Zap,
      label: "Fast Learner",
      emoji: "⚡",
      color: "from-yellow-500 to-orange-500",
      description: "I quickly adapt to new technologies and frameworks",
    },
    {
      icon: MessageCircle,
      label: "Great Communicator",
      emoji: "💬",
      color: "from-blue-500 to-cyan-500",
      description: "I clearly explain technical concepts to any audience",
    },
    {
      icon: BookOpen,
      label: "Always Learning",
      emoji: "📚",
      color: "from-purple-500 to-pink-500",
      description: "I'm constantly expanding my skills and knowledge",
    },
    {
      icon: Target,
      label: "Detail Oriented",
      emoji: "🎯",
      color: "from-green-500 to-teal-500",
      description: "I pay attention to every pixel and line of code",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          What Makes <span className="gradient-text">Me</span> Unique
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Beyond technical skills, here's what I bring to every team and project
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative group">
                  <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl hover:border-accent/50 transition-all duration-300 hover:scale-105 h-full flex flex-col items-center">
                    {/* Emoji & Icon */}
                    <div className="relative mb-4">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center group-hover:scale-110 transition-transform glow-effect`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 text-3xl group-hover:scale-125 transition-transform">
                        {badge.emoji}
                      </div>
                    </div>

                    {/* Label */}
                    <h3 className="text-lg font-bold mb-2">{badge.label}</h3>
                    
                    {/* Description (shows on hover) */}
                    <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                      {badge.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PersonalityBadges;
