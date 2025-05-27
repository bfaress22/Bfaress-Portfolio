
import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Target, Zap, Brain } from 'lucide-react';

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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const expertise = [
    {
      icon: Lightbulb,
      title: "Innovation Strategy",
      description: "Conception de stratégies d'innovation digitale et transformation numérique",
      color: "neon-blue"
    },
    {
      icon: Brain,
      title: "IA & Data Science",
      description: "Développement de solutions d'IA générative et analyse prédictive",
      color: "neon-purple"
    },
    {
      icon: Zap,
      title: "Fintech Solutions",
      description: "Applications financières innovantes et modélisation quantitative",
      color: "neon-pink"
    },
    {
      icon: Target,
      title: "Digital Consulting",
      description: "Conseil en transformation digitale et optimisation des processus",
      color: "neon-green"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            <span className="gradient-text">Innovation Digital Consultant</span>
          </h2>
          
          {/* Expertise Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className={`glass-card p-6 border border-${item.color}/50 hover:border-${item.color} transition-all duration-300 transform hover:scale-105 group`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <item.icon className={`w-12 h-12 text-${item.color} mb-4 group-hover:animate-pulse`} />
                <h3 className={`text-lg font-bold text-${item.color} mb-3`}>{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="glass-card p-8 neon-border">
                <h3 className="text-3xl font-bold text-neon-blue mb-6 flex items-center">
                  <Target className="mr-3" />
                  Mon Objectif
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Admis en <span className="text-neon-blue font-semibold">M2 Innovation Digital Conseil</span> à l'Université Paris-Saclay pour 2025–2026, 
                  je recherche une <span className="text-neon-purple font-semibold">alternance de 12 mois</span> à partir de septembre 2025.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Mon objectif : accompagner les entreprises dans leur <span className="text-neon-pink font-semibold">transformation numérique</span> 
                  en concevant des solutions innovantes qui allient expertise technique et vision stratégique.
                </p>
              </div>
              
              <div className="glass-card p-8 border border-neon-purple/50">
                <h3 className="text-3xl font-bold text-neon-purple mb-6 flex items-center">
                  <Brain className="mr-3" />
                  Ma Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  L'intersection entre <span className="text-neon-blue font-semibold">innovation digitale</span>, 
                  <span className="text-neon-purple font-semibold"> intelligence artificielle</span> et 
                  <span className="text-neon-pink font-semibold"> finance quantitative</span> offre un potentiel illimité 
                  pour transformer les modèles d'affaires traditionnels.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-6 neon-border">
                <h4 className="text-xl font-semibold text-neon-blue mb-4 flex items-center">
                  <Zap className="mr-2" />
                  Secteurs d'Expertise
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-neon-blue animate-pulse"></div>
                    <span className="text-gray-300">Fintech & Services Financiers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-neon-purple animate-pulse"></div>
                    <span className="text-gray-300">Transformation Digitale</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-neon-pink animate-pulse"></div>
                    <span className="text-gray-300">IA & Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse"></div>
                    <span className="text-gray-300">Conseil en Innovation</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 border border-neon-green/50">
                <h4 className="text-xl font-semibold text-neon-green mb-4">Localisation & Mobilité</h4>
                <div className="space-y-2">
                  <p className="text-gray-300">📍 Actuellement à Rabat, Maroc</p>
                  <p className="text-neon-green font-semibold">🎯 Disponible pour toute la France</p>
                  <p className="text-gray-400 text-sm">Prêt à m'installer pour l'alternance</p>
                </div>
              </div>
              
              <div className="glass-card p-6 border border-neon-pink/50">
                <h4 className="text-xl font-semibold text-neon-pink mb-4">Langues & Communication</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Français</span>
                    <span className="text-neon-green font-semibold">Courant</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Anglais</span>
                    <span className="text-neon-blue font-semibold">Intermédiaire+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Arabe</span>
                    <span className="text-neon-purple font-semibold">Natif</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
