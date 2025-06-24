import { useEffect, useRef, useState } from 'react';
import { Brain, Zap, Target, Globe } from 'lucide-react';

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
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden neural-network-bg">
      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-green/5 rounded-full blur-2xl quantum-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-neon-orange/5 rounded-full blur-3xl quantum-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
            <span className="gradient-text hologram-effect">À propos de moi</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 blur-xl opacity-30 animate-pulse"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="glass-card p-8 neon-border hover:border-neon-blue transition-all duration-500 transform hover:scale-105 cyber-pulse hologram-effect">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="text-neon-blue w-6 h-6 animate-pulse" />
                  <h3 className="text-2xl font-bold text-neon-blue">Mon Profil</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Actuellement admis en M2 Innovation Digital Conseil à l'Université Paris-Saclay pour l'année 2025–2026, 
                  je suis à la recherche d'une alternance de 12 mois à partir de septembre 2025.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Curieux, rigoureux et passionné par la data et les technologies innovantes, 
                  je conçois des solutions digitales combinant analyse, visualisation et automatisation. 
                  J'aime travailler en équipe pour répondre concrètement aux enjeux de transformation et d'aide à la décision.
                </p>
                <div className="inline-block px-4 py-2 bg-neon-blue/20 text-neon-blue rounded-full text-sm font-semibold animate-pulse border border-neon-blue/30">
                  🔍 Recherche active d'alternance • Sept. 2025
                </div>
              </div>
              
              <div className="glass-card p-8 border border-neon-purple/50 hover:border-neon-purple transition-all duration-500 transform hover:scale-105 hologram-effect">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-neon-purple w-6 h-6 animate-pulse" />
                  <h3 className="text-2xl font-bold text-neon-purple">Ma Passion</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  L'intersection entre la finance quantitative et l'innovation digitale me fascine. 
                  J'aime transformer des concepts complexes en solutions pratiques et accessibles, 
                  en utilisant les dernières technologies d'IA et de data science.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-6 neon-border hover:border-neon-blue transition-all duration-500 transform hover:scale-105 cyber-pulse">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="text-neon-blue w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} />
                  <h4 className="text-lg font-semibold text-neon-blue">Localisation</h4>
                </div>
                <p className="text-gray-300">📍 Paris, France / Rabat, Maroc</p>
              </div>
              
              <div className="glass-card p-6 border border-neon-green/50 hover:border-neon-green transition-all duration-500 transform hover:scale-105 hologram-effect">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="text-neon-green w-5 h-5 animate-pulse" />
                  <h4 className="text-lg font-semibold text-neon-green">Langues</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 rounded bg-white/5 hover:bg-white/10 transition-colors">
                    <span className="text-gray-300">Français</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-neon-green animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-white/5 hover:bg-white/10 transition-colors">
                    <span className="text-gray-300">Anglais</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-neon-green animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                      ))}
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-white/5 hover:bg-white/10 transition-colors">
                    <span className="text-gray-300">Arabe</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-neon-green animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 border border-neon-pink/50 hover:border-neon-pink transition-all duration-500 transform hover:scale-105 quantum-float">
                <h4 className="text-lg font-semibold text-neon-pink mb-3">Centres d'intérêt</h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { icon: '📚', text: 'Lecture', detail: '(Économie, Finance, Psychologie)' },
                    { icon: '🏃', text: 'Course à pied', detail: '' },
                    { icon: '⚽', text: 'Football', detail: '' },
                    { icon: '📸', text: 'Photographie', detail: '' },
                    { icon: '🎨', text: 'Design graphique', detail: '' }
                  ].map((interest, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2">
                      <span className="text-xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                        {interest.icon}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300">{interest.text}</span>
                        {interest.detail && (
                          <span className="text-sm text-gray-400">{interest.detail}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lignes de connexion animées */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-neon-blue/20 to-transparent"
            style={{
              left: `${30 + i * 20}%`,
              height: '100%',
              animation: `data-stream ${4 + i}s linear infinite`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
