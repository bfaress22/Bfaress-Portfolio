
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Parlons Innovation Digitale</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-12 neon-border text-center">
              <h3 className="text-3xl font-bold text-neon-blue mb-6">
                Votre Futur Consultant en Innovation Digitale
              </h3>
              
              <div className="space-y-6 mb-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Je recherche une <span className="text-neon-blue font-semibold">alternance de 12 mois</span> à partir de 
                  <span className="text-neon-purple font-semibold"> septembre 2025</span> dans le domaine de 
                  l'<span className="text-neon-pink font-semibold">innovation digitale et du conseil</span>.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 my-8">
                  <div className="p-4 bg-neon-blue/10 rounded-lg border border-neon-blue/30">
                    <h4 className="text-neon-blue font-semibold mb-2">Transformation Digitale</h4>
                    <p className="text-gray-300 text-sm">Stratégies d'innovation et mise en œuvre</p>
                  </div>
                  <div className="p-4 bg-neon-purple/10 rounded-lg border border-neon-purple/30">
                    <h4 className="text-neon-purple font-semibold mb-2">Solutions IA</h4>
                    <p className="text-gray-300 text-sm">IA générative et analytics avancés</p>
                  </div>
                  <div className="p-4 bg-neon-pink/10 rounded-lg border border-neon-pink/30">
                    <h4 className="text-neon-pink font-semibold mb-2">Fintech Innovation</h4>
                    <p className="text-gray-300 text-sm">Solutions financières disruptives</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  Discutons de la façon dont je peux contribuer à vos 
                  <span className="text-neon-green font-semibold"> projets d'innovation</span> et accompagner votre 
                  <span className="text-neon-blue font-semibold"> transformation digitale</span> !
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:bilalfaress22@gmail.com">
                    <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg neon-border w-full sm:w-auto shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                      📧 bilalfaress22@gmail.com
                    </Button>
                  </a>
                </div>
                
                <div className="flex justify-center space-x-6 pt-6">
                  <a 
                    href="https://www.linkedin.com/in/bilal-faress-1929401b1/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-full glass-card neon-border hover:bg-neon-blue/10 transition-all duration-300 transform hover:scale-110 group"
                  >
                    <Linkedin className="w-8 h-8 text-neon-blue group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="https://github.com/bfaress22" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-full glass-card neon-border hover:bg-neon-purple/10 transition-all duration-300 transform hover:scale-110 group"
                  >
                    <Github className="w-8 h-8 text-neon-purple group-hover:text-white transition-colors" />
                  </a>
                </div>
                
                <div className="pt-6 border-t border-white/10">
                  <p className="text-gray-400">
                    📍 Basé à Rabat, Maroc • Disponible pour toute la France
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
