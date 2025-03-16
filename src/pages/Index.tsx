
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 py-12 md:py-24 lg:py-32 xl:py-40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 animate-fade-up">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Build Something Amazing
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A clean, modern starter template for your next web project. Start building right away.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1.5">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center rounded-lg border border-dashed p-8 animate-fade-in">
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
                  <span className="text-muted-foreground">Your content here</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start your project with essential components and features built-in.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "React + TypeScript",
                  description: "Built with modern technologies for type safety and component-based architecture."
                },
                {
                  title: "Tailwind CSS",
                  description: "Rapidly build beautiful interfaces without ever leaving your HTML."
                },
                {
                  title: "shadcn/ui Components",
                  description: "A collection of reusable components that you can copy and paste into your project."
                },
                {
                  title: "Responsive Design",
                  description: "Your application will look great on any device, from mobile to desktop."
                },
                {
                  title: "Easy to Customize",
                  description: "Designed to be easy to modify and adapt to your needs."
                },
                {
                  title: "Ready to Scale",
                  description: "Start small and grow as your project needs evolve."
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Check className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Get Started?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start building your application today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1.5">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
