import { BookOpen, Code, Brain, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About the Author</h1>
          <p className="text-xl text-muted-foreground">
            Meet the expert behind the AI-Native Development guide
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-muted rounded-full p-2 w-48 h-48 flex items-center justify-center">
              <div className="bg-primary/10 rounded-full w-44 h-44 flex items-center justify-center">
                <Brain className="h-20 w-20 text-primary" />
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Dr. Alex Johnson</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Dr. Johnson is a leading expert in AI-Native development with over 15 years of experience 
              building intelligent systems for Fortune 500 companies. With a PhD in Machine Learning 
              from Stanford and former leadership roles at major tech companies, Dr. Johnson has 
              pioneered several breakthrough approaches to AI integration.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Code className="h-5 w-5 text-primary mr-2" />
                <span>Senior Software Architect</span>
              </div>
              <div className="flex items-center">
                <Brain className="h-5 w-5 text-primary mr-2" />
                <span>AI Research Lead</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-primary mr-2" />
                <span>Tech Speaker</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-primary mr-2" />
                <span>Published Author</span>
              </div>
            </div>
            
            <p className="text-muted-foreground">
              Dr. Johnson's work has been featured in top-tier conferences and journals, and they regularly 
              advise startups and enterprises on implementing AI-Native strategies. This book represents 
              the culmination of years of research and practical experience in the field.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
          
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <p className="text-xl text-center text-muted-foreground">
              "We envision a future where AI is not an add-on to software, but the foundational 
              element that drives innovation. Our mission is to empower developers and organizations 
              to build truly intelligent applications that can adapt, learn, and evolve."
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Education</h3>
                <p className="text-muted-foreground">
                  Providing comprehensive resources to master AI-Native development
                </p>
              </div>
              
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Advancing the field through research and practical applications
                </p>
              </div>
              
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Building a network of practitioners and researchers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}