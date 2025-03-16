
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "React & TypeScript",
      description: "Build with modern, type-safe components for better developer experience.",
      benefits: [
        "Type safety for fewer bugs",
        "Component-based architecture",
        "Efficient rendering with virtual DOM",
        "Strong ecosystem and community"
      ]
    },
    {
      title: "Tailwind CSS",
      description: "Style your application with utility-first CSS framework.",
      benefits: [
        "No more writing custom CSS",
        "Responsive design out of the box",
        "Consistent design system",
        "Highly customizable"
      ]
    },
    {
      title: "shadcn/ui Components",
      description: "Beautiful and accessible components for rapid development.",
      benefits: [
        "Accessible by default",
        "Customizable components",
        "Consistent design language",
        "Easy to integrate"
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover what makes our platform powerful and easy to use.
                </p>
              </div>
            </div>
            
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Technical Specifications</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Detailed information about the technical aspects of our platform.
                </p>
              </div>
            </div>
            
            <div className="mx-auto max-w-4xl divide-y py-12">
              {[
                {
                  question: "Is this compatible with React 18?",
                  answer: "Yes, this template is built with React 18 and takes advantage of all its features like concurrent rendering and automatic batching."
                },
                {
                  question: "Can I use this with Next.js?",
                  answer: "While this template is designed for Vite, the components and patterns can be easily adapted for Next.js projects."
                },
                {
                  question: "How do I customize the theme?",
                  answer: "The theme can be customized by modifying the Tailwind config file and CSS variables in the index.css file."
                },
                {
                  question: "Is this template accessible?",
                  answer: "Yes, we've built this template with accessibility in mind, using shadcn/ui components which follow WCAG guidelines."
                }
              ].map((item, index) => (
                <div key={index} className="py-4">
                  <h3 className="font-medium">{item.question}</h3>
                  <p className="mt-1 text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
