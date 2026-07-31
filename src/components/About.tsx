import { Brain, Zap, Target, MapPin, BookOpen, Dumbbell, Camera } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const About = () => {
  const { ref, isVisible } = useInView(0.15);

  const languages = [
    { name: 'Français', level: 'C1 (TCF)', dots: 5 },
    { name: 'Anglais', level: 'B2 (TOEIC)', dots: 4 },
    { name: 'Arabe', level: 'Langue maternelle', dots: 5 },
  ];

  const interests = [
    { icon: BookOpen, text: 'Lecture', detail: 'Économie, Finance, Psychologie' },
    { icon: Dumbbell, text: 'Sport', detail: 'Calisthenics, Course, Football' },
    { icon: Camera, text: 'Créatif', detail: 'Photographie, Design graphique' },
  ];

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden neural-network-bg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-neon-green/5 rounded-full blur-2xl quantum-float" />
        <div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-neon-orange/5 rounded-full blur-3xl quantum-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <h2 className="section-heading">
            <span className="gradient-text">À propos</span>
          </h2>
          <p className="section-sub">
            Du besoin métier à la solution digitale — analyse, prototypage et accompagnement utilisateurs.
          </p>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div
                className={`glass-card p-8 neon-border hover:border-neon-blue/70 transition-all duration-500 ${isVisible ? 'animate-slide-in-left' : ''}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="text-neon-blue w-6 h-6" />
                  <h3 className="text-2xl font-bold text-neon-blue">Profil</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Consultant en transformation digitale en formation (M2 Innovation, Digital &amp; Conseil –
                  Université Paris-Saclay), je transforme des besoins métier en solutions concrètes :
                  automatisation de processus, développement d&apos;applications web et déploiement d&apos;agents IA.
                </p>
                <p className="text-gray-300 leading-relaxed mb-5">
                  Expérience opérationnelle de la digitalisation en environnement complexe, du cadrage à la
                  mise en production : analyse des besoins, recherche utilisateur, prototypage rapide
                  (low-code/no-code) et accompagnement des utilisateurs.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-blue/15 text-neon-blue rounded-full text-sm font-medium border border-neon-blue/30">
                  Disponible à partir de septembre 2026
                </div>
              </div>

              <div
                className={`glass-card p-8 border border-neon-purple/40 hover:border-neon-purple transition-all duration-500 ${isVisible ? 'animate-slide-in-left' : ''}`}
                style={{ animationDelay: '120ms' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-neon-purple w-6 h-6" />
                  <h3 className="text-2xl font-bold text-neon-purple">Approche</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Design Thinking, Design Sprint et UX/UI pour cadrer les problèmes. Vibe coding et outils
                  d&apos;IA générative pour accélérer le prototypage. Power Platform, Dataiku et Python pour
                  industrialiser l&apos;automatisation en production.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div
                className={`glass-card p-6 border border-neon-blue/40 hover:border-neon-blue transition-all duration-500 ${isVisible ? 'animate-scale-up' : ''}`}
                style={{ animationDelay: '80ms' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="text-neon-blue w-5 h-5" />
                  <h4 className="text-lg font-semibold text-neon-blue">Localisation</h4>
                </div>
                <p className="text-gray-300">Paris, France</p>
              </div>

              <div
                className={`glass-card p-6 border border-neon-green/40 hover:border-neon-green transition-all duration-500 ${isVisible ? 'animate-scale-up' : ''}`}
                style={{ animationDelay: '160ms' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-neon-green w-5 h-5" />
                  <h4 className="text-lg font-semibold text-neon-green">Langues</h4>
                </div>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex justify-between items-center p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                    >
                      <div>
                        <span className="text-gray-200 font-medium">{lang.name}</span>
                        <span className="text-gray-500 text-sm ml-2">{lang.level}</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${i < lang.dots ? 'bg-neon-green' : 'bg-gray-700'}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`glass-card p-6 border border-neon-pink/40 hover:border-neon-pink transition-all duration-500 ${isVisible ? 'animate-scale-up' : ''}`}
                style={{ animationDelay: '240ms' }}
              >
                <h4 className="text-lg font-semibold text-neon-pink mb-4">Centres d&apos;intérêt</h4>
                <div className="space-y-2">
                  {interests.map((interest) => (
                    <div
                      key={interest.text}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 hover:translate-x-1"
                    >
                      <interest.icon className="w-4 h-4 text-neon-pink shrink-0" />
                      <div>
                        <span className="text-gray-200">{interest.text}</span>
                        <span className="text-sm text-gray-500 ml-2">{interest.detail}</span>
                      </div>
                    </div>
                  ))}
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
