import {
  Sparkles,
  Bot,
  Workflow,
  Code2,
  Users,
  Award,
} from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { neonClasses, type NeonColor } from '@/lib/neon';

type SkillCategory = {
  title: string;
  color: NeonColor;
  icon: typeof Sparkles;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Transformation Digitale & Innovation',
    color: 'blue',
    icon: Sparkles,
    skills: [
      'Analyse des besoins',
      'Optimisation des processus',
      'Design Thinking & Design Sprint',
      'UX/UI Design',
      'Recherche utilisateur',
      'Amélioration continue',
    ],
  },
  {
    title: 'IA Générative',
    color: 'purple',
    icon: Bot,
    skills: [
      'Agents IA',
      'Automatisation assistée par IA',
      'Prompt engineering',
      'AI-assisted development',
      'Workflows intelligents',
      'ChatGPT · Claude · Gemini · Copilot',
    ],
  },
  {
    title: 'Power Platform & Automatisation',
    color: 'green',
    icon: Workflow,
    skills: [
      'Power Automate',
      'Power Apps',
      'Power BI',
      'SharePoint',
      'Dataiku',
      'n8n · Excel/VBA',
    ],
  },
  {
    title: 'Développement & Vibe Coding',
    color: 'pink',
    icon: Code2,
    skills: [
      'Python · JavaScript · SQL · JSON',
      'Cursor · Lovable',
      'Vercel · Supabase · Hostinger',
      'Git / GitHub',
    ],
  },
  {
    title: 'Gestion de Projet & Conseil',
    color: 'orange',
    icon: Users,
    skills: [
      "Animation d'ateliers",
      'Coordination parties prenantes',
      'Gestion de projet agile',
      'Cadrage fonctionnel',
      'Conduite du changement',
    ],
  },
];

const certifications = [
  'Building AI Powered Chatbots Without Programming — IBM & Coursera (2025)',
  'Foundations of Project Management — Google & Coursera (2025)',
  'Python Essentials 1 — Cisco Networking Academy (2024)',
  'SQL Training — Orange Digital Center (2024)',
  'Python for Finance — 365 Data Science (2024)',
];

const Skills = () => {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="skills" ref={ref} className="py-24 cyber-grid-bg">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <h2 className="section-heading">
            <span className="gradient-text">Compétences & Certifications</span>
          </h2>
          <p className="section-sub">
            Stack opérationnelle : digital, IA générative, automatisation et conseil.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {skillCategories.map((category, index) => {
              const c = neonClasses[category.color];
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className={`glass-card p-6 border ${c.border} ${c.borderHover} transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'animate-scale-up' : 'opacity-0'} ${index === 4 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${c.bgSoft}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className={`text-base font-bold ${c.text} leading-snug`}>{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-2.5 p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${c.bgDot} mt-2 shrink-0`} />
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="glass-card p-8 neon-border max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-7">
              <Award className="w-6 h-6 text-neon-pink" />
              <h3 className="text-2xl font-bold text-neon-pink text-center">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-neon-pink/30 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-pink mt-2 shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
