import { Sparkles, Code2, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="flex h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl">
        <div className="text-center">
          {/* Main Heading */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Transform Your Git Workflow</span>
          </div>

          <h1 className="mb-4 bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl md:text-8xl lg:text-9xl">
            Better Commit
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground sm:text-2xl md:text-3xl">
            Elevate your development workflow with intelligent commit management and seamless collaboration.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection('features')}
              className="group gap-2 text-base font-semibold"
            >
              Transform your Git workflow
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <button
              onClick={() => scrollToSection('smart-commits')}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 text-left backdrop-blur-sm transition-all hover:border-border hover:bg-card/80 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-transform group-hover:scale-110">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Smart Commits</h3>
              <p className="text-sm text-muted-foreground">
                Intelligent commit suggestions that improve code quality and team collaboration.
              </p>
            </button>

            <button
              onClick={() => scrollToSection('lightning-fast')}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 text-left backdrop-blur-sm transition-all hover:border-border hover:bg-card/80 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-transform group-hover:scale-110">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Optimized performance ensures your workflow stays smooth and efficient.
              </p>
            </button>

            <button
              onClick={() => scrollToSection('beautiful-ui')}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 text-left backdrop-blur-sm transition-all hover:border-border hover:bg-card/80 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:col-span-2 lg:col-span-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-transform group-hover:scale-110">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Beautiful UI</h3>
              <p className="text-sm text-muted-foreground">
                Clean, modern interface designed for developers who care about aesthetics.
              </p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
