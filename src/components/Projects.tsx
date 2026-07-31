import { Lightbulb, Figma, Rocket } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const Projects = () => {
  const { ref, isVisible } = useInView(0.15);

  const highlights = [
    {
      icon: Lightbulb,
      title: 'Cadrage utilisateur',
      text: 'Entretiens et formalisation des parcours pour répondre au manque de visibilité des jeunes actifs sur leurs dépenses.',
    },
    {
      icon: Figma,
      title: 'Design Thinking & Sprint',
      text: 'Conception UX/UI sur Figma — wireframes et prototypes interactifs centrés utilisateur.',
    },
    {
      icon: Rocket,
      title: 'MVP assisté par IA',
      text: 'Développement d’un MVP via vibe coding et outils d’IA générative pour accélérer prototypage et itération produit.',
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-24 relative overflow-hidden cyber-grid-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-neon-pink/5 rounded-full blur-3xl quantum-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <h2 className="section-heading">
            <span className="gradient-text">Projet IA & Innovation</span>
          </h2>
          <p className="section-sub">
            Du problème utilisateur au MVP — Design Sprint, Figma et développement assisté par IA.
          </p>

          <div
            className={`max-w-4xl mx-auto glass-card p-8 md:p-10 border border-neon-pink/40 hover:border-neon-pink transition-all duration-500 ${isVisible ? 'animate-scale-up' : ''}`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-neon-pink/20 text-neon-pink mb-3">
                  2026
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-neon-pink mb-2">FinEase</h3>
                <p className="text-gray-300 text-lg">
                  Application de gestion budgétaire assistée par IA
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-neon-pink/40 transition-all duration-400 hover:-translate-y-1"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.4s ease`,
                  }}
                >
                  <item.icon className="w-6 h-6 text-neon-pink mb-3" />
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
