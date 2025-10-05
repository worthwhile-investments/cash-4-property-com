import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Cash-4-Property Logo" className="h-12 w-auto" />
            <div className="text-2xl font-bold text-foreground">
              Cash-4-Property
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">
              Benefits
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Get Offer
            </a>
          </nav>
          
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;