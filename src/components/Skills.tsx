
import { useEffect, useRef, useState } from 'react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Compétences Analytiques",
      color: "neon-blue",
      skills: [
        "Analyse de données",
        "Datavisualisation", 
        "IA générative",
        "Développement de solutions from scratch"
      ]
    },
    {
      title: "Programmation",
      color: "neon-purple",
      skills: [
        "Python",
        "R", 
        "SQL",
        "Next.js",
        "LaTeX"
      ]
    },
    {
      title: "Outils & Logiciels",
      color: "neon-green",
      skills: [
        "Cursor",
        "Power BI",
        "XLSTAT", 
        "MS Office (Excel avancé, Word, PowerPoint)",
        "Canva",
        "GitHub",
        "Vercel"
      ]
    }
  ];

  const certifications = [
    "Foundations of Project Management – Google & Coursera (2025)",
    "Formation Communication en Anglais — Centre EDEMIA (Février 2025 – Avril 2025)",
    "Python for Finance — 365 Data Science (2024)",
    "Python Essentials 1 — Cisco Networking Academy (2024)",
    "Data Analysis with R Programming — Coursera (2023)",
    "SQL Training — Orange Digital Center Rabat (2024)"
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 cyber-grid-bg">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Compétences & Certifications</span>
          </h2>
          
          {/* Compétences */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`glass-card p-6 border border-${category.color}/50 hover:border-${category.color} transition-all duration-300 transform hover:scale-105 animate-scale-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className={`text-xl font-bold text-${category.color} mb-4 text-center`}>
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-${category.color} animate-pulse`}></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications */}
          <div className="glass-card p-8 neon-border">
            <h3 className="text-2xl font-bold text-neon-pink text-center mb-8">
              Certificats & Formations
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-neon-pink mt-2 flex-shrink-0 animate-pulse"></div>
                  <p className="text-gray-300 text-sm leading-relaxed">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
