
import { useEffect, useRef, useState } from 'react';

const Experience = () => {
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

  const experiences = [
    {
      title: "Stage en Finance Quantitative",
      company: "TISA Consulting",
      period: "Déc. 2024 - en cours",
      description: "Conception d'une application web innovante d'aide à la décision pour la gestion des risques liés aux matières premières.",
      achievements: [
        "Développement d'outils avancés de modélisation des prix, simulations et backtesting pour optimiser les stratégies de couverture",
        "Conception de dashboards interactifs pour l'analyse et la prévision des données et la prise de décision",
        "Intégration d'API financières (TradingView, Alpha Vantage, Investing, YahooFinance) pour la récupération et la visualisation en temps réel"
      ],
      color: "neon-blue",
      status: "En cours"
    },
    {
      title: "Membre du comité d'organisation",
      company: "SEAI, SEA et JEF 2025",
      period: "Janvier - Mai 2025",
      description: "Participation à l'organisation de trois événements internationaux : Summer School SEAI et les Conférences SEA et JEF.",
      achievements: [
        "Préparation des documents officiels : programmes, certificats, roll-up, flyers, call for application",
        "Élaboration des budgets prévisionnels, suivi administratif, gestion des inscriptions en ligne et communication avec les participants"
      ],
      color: "neon-purple"
    },
    {
      title: "Agent recenseur principal",
      company: "Haut-Commissariat au Plan (HCP)",
      period: "Août - Sept. 2024",
      description: "Supervision de la collecte des données démographiques et socio-économiques dans le cadre du recensement national.",
      achievements: [
        "Supervision de la collecte des données démographiques et socio-économiques dans le cadre du recensement national"
      ],
      color: "neon-green"
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Expérience Professionnelle</span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`glass-card p-8 border border-${exp.color}/50 hover:border-${exp.color} transition-all duration-300 transform hover:scale-105 animate-slide-in-left`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`text-2xl font-bold text-${exp.color}`}>
                        {exp.title}
                      </h3>
                      {exp.status && (
                        <span className={`px-3 py-1 rounded-full text-sm bg-${exp.color}/20 text-${exp.color} animate-pulse`}>
                          {exp.status}
                        </span>
                      )}
                    </div>
                    <p className="text-xl text-gray-300 mb-3">{exp.company}</p>
                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>
                  <div className={`text-${exp.color} font-semibold text-lg mt-4 md:mt-0 whitespace-nowrap`}>
                    {exp.period}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-white mb-3">Réalisations clés :</h4>
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-${exp.color} mt-2 flex-shrink-0`}></div>
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
