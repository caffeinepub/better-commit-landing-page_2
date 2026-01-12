import { Code2, Zap, Sparkles } from 'lucide-react';

export function FeatureSections() {
  return (
    <div className="w-full bg-muted/30">
      {/* Smart Commits Section */}
      <section id="smart-commits" className="scroll-mt-16 border-t border-border/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="flex-shrink-0">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <Code2 className="h-10 w-10" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Smart Commits</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                Better Commit revolutionizes your commit workflow with intelligent suggestions powered by advanced algorithms. 
                Our system analyzes your code changes and provides contextual commit messages that follow best practices and 
                team conventions.
              </p>
              <p className="text-lg text-muted-foreground">
                With automated commit management, you can focus on writing great code while Better Commit handles the tedious 
                task of crafting meaningful commit messages. Experience seamless integration with your existing Git workflow 
                and watch your team's collaboration improve dramatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightning Fast Section */}
      <section id="lightning-fast" className="scroll-mt-16 border-t border-border/40 bg-background/50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:gap-12">
            <div className="flex-shrink-0">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <Zap className="h-10 w-10" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Lightning Fast</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                Performance is at the heart of Better Commit. Our optimized architecture ensures that every operation, from 
                analyzing changes to generating suggestions, happens in milliseconds. No more waiting around for slow tools 
                to catch up with your workflow.
              </p>
              <p className="text-lg text-muted-foreground">
                Built with efficiency in mind, Better Commit handles repositories of any size with ease. Whether you're working 
                on a small project or a massive monorepo, you'll experience the same blazing-fast performance that keeps your 
                development momentum going strong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beautiful UI Section */}
      <section id="beautiful-ui" className="scroll-mt-16 border-t border-border/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="flex-shrink-0">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <Sparkles className="h-10 w-10" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Beautiful UI</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                We believe that developer tools should be as beautiful as they are functional. Better Commit features a 
                meticulously crafted interface that combines modern design principles with intuitive user experience. Every 
                pixel is thoughtfully placed to create a delightful interaction.
              </p>
              <p className="text-lg text-muted-foreground">
                From smooth animations to carefully chosen color palettes, our interface adapts to your preferences with 
                full light and dark mode support. The clean, distraction-free design helps you stay focused on what matters 
                most—writing exceptional code and making meaningful commits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
