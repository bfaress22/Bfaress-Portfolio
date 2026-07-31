import { Briefcase } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { neonClasses, type NeonColor } from '@/lib/neon';

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  color: NeonColor;
  status?: string;
};

const experiences: ExperienceItem[] = [
  {
    title: 'Alternant Product Control Trading Gaz',
    company: 'ENGIE — Supply & Energy Management',
    period: 'Déc. 2025 — Sept. 2026',
    description:
      'Automatisation et digitalisation des contrôles trading gaz : workflows, fiabilisation des données et interface Front Office / Finance.',
    achievements: [
      'Conception et déploiement de workflows automatisés (Power Automate, Dataiku, Python, Excel/VBA) remplaçant des processus manuels et réduisant significativement les délais de production.',
      "Identification d'opportunités d'automatisation et mise en œuvre de solutions digitales avec les équipes opérationnelles.",
      'Développement d’outils visant à fiabiliser les données, standardiser les contrôles et optimiser les processus de production.',
      'Contrôle et validation quotidienne des contrats (prix, volumes, clauses) ; interface entre Front Office, contreparties et Direction Financière.',
      'Production des données de clôture mensuelle : valorisation des provisions et bilan énergétique par zone géographique.',
      'Suivi des risques de marché (exposition, P&L) et réconciliation des litiges volumes/prix avec les contreparties.',
    ],
    color: 'blue',
    status: 'En cours',
  },
  {
    title: 'Stagiaire Développement Digital & Data',
    company: 'TISA Consulting',
    period: 'Jan. 2025 — Juin 2025',
    description:
      "Conception et développement de CommoHedge, application web d'aide à la décision pour la gestion des risques sur les marchés des matières premières.",
    achievements: [
      'Conception et développement de CommoHedge, une application web dédiée à la gestion des risques commodities.',
      "Développement d'interfaces web interactives et intégration de données financières via APIs.",
      'Création de tableaux de bord interactifs pour le suivi des stratégies de couverture et la prise de décision.',
    ],
    color: 'purple',
  },
];

const Experience = () => {
  const { ref, isVisible } = useInView(0.12);

  return (
    <section id="experience" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <h2 className="section-heading">
            <span className="gradient-text">Expérience</span>
          </h2>
          <p className="section-sub">
            De la trading room ENGIE au produit data TISA — automatisation, contrôle et apps décisionnelles.
          </p>

          <div className="relative max-w-4xl mx-auto space-y-8">
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue/50 via-neon-purple/30 to-transparent" />

            {experiences.map((exp, index) => {
              const c = neonClasses[exp.color];
              return (
                <article
                  key={exp.title}
                  className={`relative md:pl-10 glass-card p-7 md:p-8 border ${c.border} ${c.borderHover} transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 160}ms` }}
                >
                  <div
                    className={`hidden md:block absolute left-0 top-10 -translate-x-1/2 w-3 h-3 rounded-full ${c.bgDot} ring-4 ring-slate-900`}
                  />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Briefcase className={`w-5 h-5 ${c.text}`} />
                        <h3 className={`text-xl md:text-2xl font-bold ${c.text}`}>{exp.title}</h3>
                        {exp.status && (
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${c.bgSoft} animate-pulse`}>
                            {exp.status}
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-gray-300 mb-2">{exp.company}</p>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">{exp.description}</p>
                    </div>
                    <div className={`${c.text} font-semibold text-sm md:text-base whitespace-nowrap font-mono`}>
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${c.bgDot} mt-2 shrink-0`} />
                        <p className="text-gray-300 leading-relaxed text-sm md:text-[0.95rem]">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
