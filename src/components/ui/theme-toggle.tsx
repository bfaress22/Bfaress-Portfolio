import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'warm' : 'dark')}
      className="border-neon-blue/30 hover:border-neon-blue transition-all duration-300 transform hover:scale-110"
    >
      <Palette className="h-4 w-4 text-neon-blue" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}