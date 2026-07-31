import { useEffect, useState } from 'react';
import {
  ExternalLink,
  Wallet,
  LineChart,
  Sparkles,
  Eye,
  PiggyBank,
  TrendingUp,
  Calculator,
  Layers,
  BookOpen,
  X,
} from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { neonClasses, type NeonColor } from '@/lib/neon';
import { Button } from '@/components/ui/button';

type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  portrait?: boolean;
};

type Project = {
  name: string;
  tagline: string;
  year: string;
  url: string;
  color: NeonColor;
  icon: typeof Wallet;
  description: string;
  pillars: { icon: typeof Eye; title: string; text: string }[];
  stack: string[];
  badge?: string;
  screenshots?: Screenshot[];
};

const projects: Project[] = [
  {
    name: 'FinEase',
    tagline: 'FinanceApp — gestion budgétaire pour jeunes actifs',
    year: '2026',
    url: 'https://sweet-go-bits.lovable.app',
    color: 'pink',
    icon: Wallet,
    badge: 'IA & Product',
    description:
      "MVP mobile-first de gestion budgétaire assistée par IA. Cadrage utilisateur (entretiens, parcours), Design Thinking & Design Sprint, UX/UI Figma, puis développement via vibe coding. Dashboard (solde, santé financière), opérations catégorisées, budgets mensuels et assistant IA conversationnel.",
    pillars: [
      {
        icon: Eye,
        title: 'Dashboard',
        text: 'Solde multi-comptes, revenus/dépenses du mois et score santé financière /100.',
      },
      {
        icon: Sparkles,
        title: 'Opérations',
        text: 'Répartition par catégorie, historique transactions et saisie rapide.',
      },
      {
        icon: PiggyBank,
        title: 'Budget',
        text: 'Enveloppes mensuelles par catégorie avec barres de progression.',
      },
      {
        icon: TrendingUp,
        title: 'Assistant IA',
        text: 'Chat financier : questions en langage naturel sur dépenses, épargne et objectifs.',
      },
    ],
    stack: [
      'Design Sprint',
      'Figma',
      'UX/UI',
      'Assistant IA',
      'Vibe coding',
      'Lovable',
    ],
    screenshots: [
      {
        src: '/projects/finease/01-dashboard.png',
        alt: 'FinEase — dashboard Accueil',
        caption: 'Accueil — solde, épargne & santé financière',
        portrait: true,
      },
      {
        src: '/projects/finease/02-operations.png',
        alt: 'FinEase — opérations et catégories',
        caption: 'Opés — répartition & historique',
        portrait: true,
      },
      {
        src: '/projects/finease/03-budget.png',
        alt: 'FinEase — budget mensuel',
        caption: 'Budget — enveloppes par catégorie',
        portrait: true,
      },
      {
        src: '/projects/finease/04-assistant-ia.png',
        alt: 'FinEase — assistant IA',
        caption: 'IA — assistant conversationnel finances',
        portrait: true,
      },
    ],
  },
  {
    name: 'Quant Pricer',
    tagline: "Dashboard de pricing d'options — vanilles & exotiques",
    year: '2025',
    url: 'https://pricers-pal-vba.lovable.app',
    color: 'blue',
    icon: LineChart,
    badge: 'Quant Finance',
    description:
      "Pricer interactif style desk : primes, grecques et visualisations payoff/P&L en temps réel. Vanilles via Black-Scholes-Merton (formules fermées), barrières via Reiner-Rubinstein (1991) et Monte Carlo. Pricing à la volée, aucune donnée stockée.",
    pillars: [
      {
        icon: Calculator,
        title: 'Vanilles',
        text: 'Call/Put européens — prime exacte, Δ Γ ν Θ ρ, courbe valeur vs spot (t=0, T/2, maturité).',
      },
      {
        icon: Layers,
        title: 'Exotiques',
        text: 'Barrières (Up & Out…), monitoring continu, scénarios payoff/P&L et grecques vs spot.',
      },
      {
        icon: BookOpen,
        title: 'Méthodologie',
        text: 'GBM risque-neutre, Reiner-Rubinstein, bumping des grecques, conventions desk.',
      },
    ],
    stack: [
      'Black-Scholes-Merton',
      'Reiner-Rubinstein',
      'Monte Carlo',
      'Grecques',
      'Data viz',
      'Lovable',
    ],
    screenshots: [
      {
        src: '/projects/quant-pricer/01-home.png',
        alt: 'Quant Pricer — page d’accueil',
        caption: 'Accueil — vanilles, exotiques, méthodologie',
      },
      {
        src: '/projects/quant-pricer/02-vanilla.png',
        alt: 'Quant Pricer — pricing vanille Call',
        caption: 'Vanilles — prime & grecques + valeur vs spot',
      },
      {
        src: '/projects/quant-pricer/03-exotics-greeks.png',
        alt: 'Quant Pricer — grecques barrière Up & Out',
        caption: 'Exotiques — grecques vs spot (barrière 120)',
      },
      {
        src: '/projects/quant-pricer/04-exotics-payoff.png',
        alt: 'Quant Pricer — scénario payoff barrière',
        caption: 'Exotiques — scénario payoff & P&L vs spot',
      },
    ],
  },
];

const Projects = () => {
  const { ref, isVisible } = useInView(0.1);
  const [lightbox, setLightbox] = useState<Screenshot | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <section id="projects" ref={ref} className="py-24 relative overflow-hidden cyber-grid-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-neon-pink/5 rounded-full blur-3xl quantum-float" />
        <div
          className="absolute bottom-1/4 left-1/5 w-56 h-56 bg-neon-blue/5 rounded-full blur-3xl quantum-float"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <h2 className="section-heading">
            <span className="gradient-text">Projets</span>
          </h2>
          <p className="section-sub">
            Produits digitaux live — de la fintech personnelle au pricing quantitatif.
          </p>

          <div className="max-w-5xl mx-auto space-y-10">
            {projects.map((project, index) => {
              const c = neonClasses[project.color];
              const Icon = project.icon;

              return (
                <article
                  key={project.name}
                  className={`glass-card p-7 md:p-10 border ${c.border} ${c.borderHover} transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'animate-scale-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 140}ms` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                    <div className="flex gap-4">
                      <div className={`p-3 rounded-xl ${c.bgSoft} h-fit shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${c.bgSoft}`}>
                            {project.year}
                          </span>
                          {project.badge && (
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-muted-foreground border border-border">
                              {project.badge}
                            </span>
                          )}
                        </div>
                        <h3 className={`text-2xl md:text-3xl font-bold ${c.text} mb-1`}>
                          {project.name}
                        </h3>
                        <p className="text-muted-foreground text-base md:text-lg mb-3">
                          {project.tagline}
                        </p>
                        <p className="text-foreground/80 leading-relaxed max-w-2xl text-sm md:text-base">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <Button className="gap-2 neon-border bg-gradient-to-r from-neon-blue/90 to-neon-purple/90 hover:opacity-90 transition-all hover:scale-[1.03]">
                        Voir la démo
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>

                  {project.screenshots && project.screenshots.length > 0 && (
                    <div className="mb-8">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">
                        Aperçus produit
                      </p>
                      <div
                        className={`grid gap-3 ${
                          project.screenshots.some((s) => s.portrait)
                            ? 'grid-cols-2 sm:grid-cols-4'
                            : 'grid-cols-2 lg:grid-cols-4'
                        }`}
                      >
                        {project.screenshots.map((shot) => (
                          <button
                            key={shot.src}
                            type="button"
                            onClick={() => setLightbox(shot)}
                            className="group relative overflow-hidden rounded-xl border border-border/70 bg-black/40 text-left transition-all duration-300 hover:border-neon-blue/50 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue/60"
                          >
                            <img
                              src={shot.src}
                              alt={shot.alt}
                              loading="lazy"
                              className={`w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] ${
                                shot.portrait ? 'aspect-[9/16] max-h-72 mx-auto' : 'aspect-[16/10]'
                              }`}
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-2.5 pb-2.5 pt-8">
                              <span className="text-[11px] text-gray-200 leading-snug block">
                                {shot.caption}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div
                    className={`grid gap-4 mb-7 ${
                      project.pillars.length === 4
                        ? 'sm:grid-cols-2 lg:grid-cols-4'
                        : 'sm:grid-cols-3'
                    }`}
                  >
                    {project.pillars.map((pillar) => (
                      <div
                        key={pillar.title}
                        className="p-4 rounded-xl bg-muted/30 border border-border/60 hover:border-neon-blue/30 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <pillar.icon className={`w-5 h-5 ${c.text} mb-2`} />
                        <h4 className="font-semibold text-foreground mb-1 text-sm">{pillar.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{pillar.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium ${c.bgSoft}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-xs text-muted-foreground font-mono truncate">
                    {project.url.replace('https://', '')}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 p-2 rounded-full glass-card border border-white/20 text-white hover:bg-white/10"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          <figure
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className={`mx-auto rounded-xl border border-white/10 shadow-2xl ${
                lightbox.portrait ? 'max-h-[85vh] w-auto' : 'w-full'
              }`}
            />
            <figcaption className="mt-3 text-center text-sm text-gray-300">
              {lightbox.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

export default Projects;
