
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-semibold text-lg">
            My App
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            About
          </Link>
          <Link to="/features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Features
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
