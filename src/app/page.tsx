import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import { BookOpen, ChevronRight, Users, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center rounded-full bg-muted px-4 py-1 text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            New chapter released
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master <span className="text-primary">AI-Native Development</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            The definitive guide to building intelligent applications that leverage AI as a core component from the ground up. 
            Learn how to design, implement, and scale AI-Native systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="px-8">
                Start Reading
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            <Link href="/about">
              <Button variant="outline" size="lg" className="px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Book Preview Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive guide covers everything from foundational concepts to advanced implementation strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((chapter) => (
              <div key={chapter} className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="text-primary text-2xl font-bold mb-2">Chapter {chapter}</div>
                <h3 className="font-semibold mb-2">Topic {chapter * 2 - 1}</h3>
                <p className="text-sm text-muted-foreground mb-3">Key concept for AI-Native development</p>
                <h3 className="font-semibold mb-2">Topic {chapter * 2}</h3>
                <p className="text-sm text-muted-foreground">Practical implementation strategy</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/book">
              <Button variant="secondary" size="lg">
                Read All Chapters
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Premium Learning Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed to provide the most effective learning path for mastering AI-Native development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Content</h3>
              <p className="text-muted-foreground">
                5 in-depth chapters covering all aspects of AI-Native development with practical examples.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Insights</h3>
              <p className="text-muted-foreground">
                Learn from industry experts with years of experience building AI-Native systems.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
              <p className="text-muted-foreground">
                Engage with interactive examples and exercises to reinforce your understanding.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}