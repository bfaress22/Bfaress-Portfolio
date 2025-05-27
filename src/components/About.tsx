
import { useEffect, useRef, useState } from 'react';

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

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">À propos de moi</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="glass-card p-8 neon-border">
                <h3 className="text-2xl font-bold text-neon-blue mb-4">Mon Profil</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Admis en M2 Innovation Digital Conseil à l'Université Paris-Saclay pour l'année 2025–2026, 
                  je suis à la recherche d'une alternance de 12 mois à partir de septembre 2025.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Rigoureux et orienté résultats, j'aime collaborer pour concevoir des solutions concrètes et innovantes. 
                  Je suis passionné par l'innovation, toujours en quête de nouveaux outils et technologies pour 
                  résoudre les défis de manière créative et efficace.
                </p>
              </div>
              
              <div className="glass-card p-8 border border-neon-purple/50">
                <h3 className="text-2xl font-bold text-neon-purple mb-4">Ma Passion</h3>
                <p className="text-gray-300 leading-relaxed">
                  L'intersection entre la finance quantitative et l'innovation digitale me fascine. 
                  J'aime transformer des concepts complexes en solutions pratiques et accessibles.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-6 neon-border">
                <h4 className="text-lg font-semibold text-neon-blue mb-3">Localisation</h4>
                <p className="text-gray-300">📍 Rabat, Maroc</p>
              </div>
              
              <div className="glass-card p-6 border border-neon-green/50">
                <h4 className="text-lg font-semibold text-neon-green mb-3">Langues</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Français</span>
                    <span className="text-neon-green">Courant</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Anglais</span>
                    <span className="text-neon-green">Intermédiaire</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Arabe</span>
                    <span className="text-neon-green">Langue maternelle</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 border border-neon-pink/50">
                <h4 className="text-lg font-semibold text-neon-pink mb-3">Centres d'intérêt</h4>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-gray-300">📚 Lecture</span>
                  <span className="text-gray-300">🏃 Course à pied</span>
                  <span className="text-gray-300">⚽ Football</span>
                  <span className="text-gray-300">📸 Photographie</span>
                  <span className="text-gray-300">🎨 Design graphique</span>
                  <span className="text-gray-300">💡 Innovation</span>
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
