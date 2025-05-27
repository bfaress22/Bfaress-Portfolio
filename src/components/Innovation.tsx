
import { useEffect, useRef, useState } from 'react';
import { Rocket, TrendingUp, Cpu, Database, Globe, Zap } from 'lucide-react';

const Innovation = () => {
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

  const projects = [
    {
      icon: TrendingUp,
      title: "Plateforme d'Aide à la Décision Financière",
      description: "Application web innovante pour la gestion des risques en matières premières",
      technologies: ["Python", "APIs Financières", "Dashboards Interactifs", "Backtesting"],
      impact: "Optimisation des stratégies de couverture pour TISA Consulting",
      status: "En cours de développement",
      color: "neon-blue"
    },
    {
      icon: Cpu,
      title: "Modélisation Prédictive avec IA",
      description: "Développement de modèles hybrides ARIMA-Kalman pour la prévision financière",
      technologies: ["Python", "Machine Learning", "Filtre de Kalman", "Time Series"],
      impact: "Amélioration de la précision des prévisions de 25%",
      status: "Mémoire de recherche validé",
      color: "neon-purple"
    },
    {
      icon: Database,
      title: "Solutions d'Automatisation Digitale",
      description: "Développement d'outils from scratch pour l'analyse et la visualisation de données",
      technologies: ["React", "Next.js", "Power BI", "SQL", "APIs"],
      impact: "Réduction du temps de traitement de 60%",
      status: "Déployé en production",
      color: "neon-green"
    }
  ];

  const competencesInnovation = [
    {
      category: "Digital Strategy",
      skills: ["Transformation Numérique", "Design Thinking", "Roadmap Innovation", "Change Management"],
      color: "neon-blue"
    },
    {
      category: "Tech Innovation",
      skills: ["IA Générative", "Blockchain", "IoT", "Cloud Computing", "APIs"],
      color: "neon-purple"
    },
    {
      category: "Business Innovation",
      skills: ["Lean Startup", "Agile Methodology", "Product Management", "User Experience"],
      color: "neon-pink"
    },
    {
      category: "Data Innovation",
      skills: ["Big Data", "Analytics", "Predictive Modeling", "Business Intelligence"],
      color: "neon-green"
    }
  ];

  return (
    <section id="innovation" ref={sectionRef} className="py-20 cyber-grid-bg relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Projets d'Innovation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Solutions digitales innovantes combinant <span className="text-neon-blue">expertise technique</span>, 
              <span className="text-neon-purple"> vision stratégique</span> et 
              <span className="text-neon-pink"> impact business</span>
            </p>
          </div>
          
          {/* Projets Innovation */}
          <div className="space-y-8 mb-16">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`glass-card p-8 border border-${project.color}/50 hover:border-${project.color} transition-all duration-300 transform hover:scale-105 animate-slide-in-left group`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <project.icon className={`w-12 h-12 text-${project.color} group-hover:animate-pulse`} />
                      <div>
                        <h3 className={`text-2xl font-bold text-${project.color} mb-2`}>
                          {project.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm bg-${project.color}/20 text-${project.color} border border-${project.color}/30`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Impact :</h4>
                      <p className={`text-${project.color} font-medium`}>{project.impact}</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3">
                    <h4 className="text-white font-semibold mb-3">Technologies :</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className={`px-3 py-1 bg-${project.color}/10 text-${project.color} text-sm rounded border border-${project.color}/30 hover:bg-${project.color}/20 transition-colors`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Compétences Innovation */}
          <div className="glass-card p-8 neon-border">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-neon-blue mb-4 flex items-center justify-center">
                <Rocket className="mr-3" />
                Compétences en Innovation Digitale
              </h3>
              <p className="text-gray-300">
                Expertise transversale en innovation, alliant technologie, stratégie et mise en œuvre
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {competencesInnovation.map((comp, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl border border-${comp.color}/30 bg-${comp.color}/5 hover:bg-${comp.color}/10 transition-all duration-300 transform hover:scale-105`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h4 className={`text-lg font-bold text-${comp.color} mb-4 text-center`}>
                    {comp.category}
                  </h4>
                  <div className="space-y-2">
                    {comp.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Zap className={`w-3 h-3 text-${comp.color} flex-shrink-0`} />
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </div>
                    ))}
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

export default Innovation;
