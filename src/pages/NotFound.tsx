
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 animate-fade-up">
              <h1 className="text-7xl font-bold tracking-tighter sm:text-8xl">404</h1>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Page not found</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sorry, we couldn't find the page you're looking for.
              </p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg">
                <Link to="/">
                  Return Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
