
import { useEffect, useRef, useState } from 'react';

const Education = () => {
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

  const educationData = [
    {
      title: "M2 Innovation, Digital & Conseil",
      institution: "Université Paris-Saclay",
      period: "2025 - 2026",
      status: "Admission confirmée",
      description: "100% en alternance",
      color: "neon-blue"
    },
    {
      title: "Master en Analyse Économique et Modélisation",
      institution: "Université Mohammed V de Rabat",
      period: "2022 - 2024",
      description: "Spécialisation en modélisation financière et méthodes quantitatives",
      thesis: "Filtre de Kalman et Application en Finance",
      methods: ["ARIMA", "Filtre de Kalman", "Modèle hybride ARIMA-Kalman"],
      tools: ["Python", "pykalman", "statsmodels", "matplotlib", "pandas", "numpy", "yfinance", "scipy", "sklearn", "LaTeX"],
      color: "neon-purple"
    },
    {
      title: "Licence en Sciences Économiques et Gestion",
      institution: "Université Moulay Ismaïl, Meknès",
      period: "2018 - 2021",
      description: "Formation en économie et gestion d'entreprise",
      color: "neon-green"
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 cyber-grid-bg">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Formation</span>
          </h2>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className={`glass-card p-8 border border-${edu.color}/50 hover:border-${edu.color} transition-all duration-300 transform hover:scale-105 animate-slide-in-left`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold text-${edu.color} mb-2`}>
                      {edu.title}
                    </h3>
                    <p className="text-xl text-gray-300 mb-2">{edu.institution}</p>
                    <p className="text-gray-400">{edu.description}</p>
                    {edu.status && (
                      <span className={`inline-block px-3 py-1 rounded-full text-sm bg-${edu.color}/20 text-${edu.color} mt-2`}>
                        {edu.status}
                      </span>
                    )}
                  </div>
                  <div className={`text-${edu.color} font-semibold text-lg mt-4 md:mt-0`}>
                    {edu.period}
                  </div>
                </div>
                
                {edu.thesis && (
                  <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-semibold text-neon-blue mb-2">Mémoire de recherche :</h4>
                    <p className="text-gray-300 mb-3">{edu.thesis}</p>
                    
                    {edu.methods && (
                      <div className="mb-3">
                        <span className="text-sm font-medium text-gray-400">Méthodes : </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {edu.methods.map((method, idx) => (
                            <span key={idx} className="px-2 py-1 bg-neon-purple/20 text-neon-purple text-xs rounded">
                              {method}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {edu.tools && (
                      <div>
                        <span className="text-sm font-medium text-gray-400">Outils : </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {edu.tools.map((tool, idx) => (
                            <span key={idx} className="px-2 py-1 bg-neon-green/20 text-neon-green text-xs rounded">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
