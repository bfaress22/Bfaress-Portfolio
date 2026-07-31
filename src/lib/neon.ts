export type NeonColor = 'blue' | 'purple' | 'pink' | 'green' | 'orange';

export const neonClasses: Record<
  NeonColor,
  {
    text: string;
    border: string;
    borderHover: string;
    bgSoft: string;
    bgDot: string;
  }
> = {
  blue: {
    text: 'text-neon-blue',
    border: 'border-neon-blue/50',
    borderHover: 'hover:border-neon-blue',
    bgSoft: 'bg-neon-blue/20 text-neon-blue',
    bgDot: 'bg-neon-blue',
  },
  purple: {
    text: 'text-neon-purple',
    border: 'border-neon-purple/50',
    borderHover: 'hover:border-neon-purple',
    bgSoft: 'bg-neon-purple/20 text-neon-purple',
    bgDot: 'bg-neon-purple',
  },
  pink: {
    text: 'text-neon-pink',
    border: 'border-neon-pink/50',
    borderHover: 'hover:border-neon-pink',
    bgSoft: 'bg-neon-pink/20 text-neon-pink',
    bgDot: 'bg-neon-pink',
  },
  green: {
    text: 'text-neon-green',
    border: 'border-neon-green/50',
    borderHover: 'hover:border-neon-green',
    bgSoft: 'bg-neon-green/20 text-neon-green',
    bgDot: 'bg-neon-green',
  },
  orange: {
    text: 'text-neon-orange',
    border: 'border-neon-orange/50',
    borderHover: 'hover:border-neon-orange',
    bgSoft: 'bg-neon-orange/20 text-neon-orange',
    bgDot: 'bg-neon-orange',
  },
};
