import { useEffect, useRef, useState } from "react";
import profile from "../assets/profile.jpg";

const About = () => {
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

  const strengths = [
    { name: "Front-End Development", level: 95 },
    { name: "Problem Solving", level: 90 },
    { name: "Team Collaboration", level: 92 },
    { name: "Clean Code Architecture", level: 88 },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-accent to-accent-secondary p-1 animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <img src={profile} alt="Profile" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center glow-effect">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I'm a <span className="text-accent font-semibold">passionate, detail-oriented Software Engineer</span> who specializes in modern front-end development. I thrive in fast-paced environments, love solving complex problems, and I'm committed to writing clean, scalable code that stands the test of time.
              </p>
              <p>
                I have professional experience building with <span className="text-accent font-semibold">Angular, React, and React Native</span>, along with strong skills in TypeScript, JavaScript, and UI engineering. I love creating interfaces that are both beautiful and performant.
              </p>
              <p>
                With my background in IT Systems Development and cybersecurity principles, I bring a strong technical foundation and an analytical mindset to every project I work on. I'm always learning and pushing myself to grow.
              </p>
            </div>

            {/* Animated Progress Bars */}
            <div className="pt-6 space-y-4">
              {strengths.map((strength, index) => (
                <div key={strength.name} style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{strength.name}</span>
                    <span className="text-sm text-muted-foreground">{strength.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-accent-secondary transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${strength.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
