import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import * as THREE from "three";

interface SkillNodeProps {
  position: [number, number, number];
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SkillNode = ({ position, label, isActive, onClick }: SkillNodeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (meshRef.current) {
      const scale = isActive ? 1.5 : hovered ? 1.2 : 1;
      meshRef.current.scale.setScalar(scale);
    }
  }, [isActive, hovered]);

  return (
    <group position={position}>
      <mesh 
        ref={meshRef} 
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color={isActive || hovered ? "#00d9ff" : "#4dd0e1"}
          emissive={isActive || hovered ? "#00d9ff" : "#1e40af"}
          emissiveIntensity={isActive ? 0.8 : hovered ? 0.6 : 0.3}
        />
      </mesh>
      <Html
        center
        distanceFactor={8}
        position={[0, -0.6, 0]}
        style={{
          transition: 'all 0.3s ease',
          pointerEvents: 'none'
        }}
      >
        <div 
          className={`text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
            isActive ? "text-accent scale-125" : hovered ? "text-accent-glow scale-110" : "text-foreground/70"
          }`}
          style={{
            textShadow: (isActive || hovered) ? '0 0 10px hsl(var(--accent-glow))' : 'none'
          }}
        >
          {label}
        </div>
      </Html>
    </group>
  );
};

const SkillsConstellation = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
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

  const skills = [
    { name: "Angular", position: [0, 2, 0] as [number, number, number] },
    { name: "React", position: [2, 1, 1] as [number, number, number] },
    { name: "TypeScript", position: [-2, 1, -1] as [number, number, number] },
    { name: "JavaScript", position: [1, -1, 2] as [number, number, number] },
    { name: "React Native", position: [-1, -1, -2] as [number, number, number] },
    { name: "Node.js", position: [0, 0, 0] as [number, number, number] },
    { name: "HTML/CSS", position: [2, -2, 0] as [number, number, number] },
    { name: "Git", position: [-2, -2, 1] as [number, number, number] },
  ];

  const connections: [number, number][] = [
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5],
    [0, 2], [1, 2], [1, 4], [3, 6], [2, 7]
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 relative z-10">
          Skills <span className="gradient-text">Constellation</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto relative z-10">
          Explore my interconnected skill set in 3D. Click and drag to rotate, scroll to zoom
        </p>

        <div className={`relative h-[600px] rounded-2xl overflow-hidden border border-border shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {skills.map((skill, index) => (
              <SkillNode
                key={skill.name}
                position={skill.position}
                label={skill.name}
                isActive={activeSkill === index}
                onClick={() => setActiveSkill(activeSkill === index ? null : index)}
              />
            ))}

            <OrbitControls 
              enableZoom={true} 
              enablePan={false}
              autoRotate={!activeSkill}
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          {activeSkill !== null
            ? `Viewing connections for ${skills[activeSkill].name}`
            : "Click any skill to highlight its connections"}
        </p>
      </div>
    </section>
  );
};

export default SkillsConstellation;
