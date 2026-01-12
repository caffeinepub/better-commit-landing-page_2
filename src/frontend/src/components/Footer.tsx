import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-center">
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          © 2025. Built with{' '}
          <Heart className="h-4 w-4 fill-red-500 text-red-500" aria-label="love" />{' '}
          using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground transition-colors hover:text-primary"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
