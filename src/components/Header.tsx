import { Building2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            <span className="font-playfair text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              LuxeSpaces
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#properties" className="text-foreground hover:text-primary transition-colors">
              Properties
            </a>
            <a href="#locations" className="text-foreground hover:text-primary transition-colors">
              Locations
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="premium" className="font-semibold">
              List Property
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors py-2">
                Home
              </a>
              <a href="#properties" className="text-foreground hover:text-primary transition-colors py-2">
                Properties
              </a>
              <a href="#locations" className="text-foreground hover:text-primary transition-colors py-2">
                Locations
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">
                Contact
              </a>
              <Button variant="premium" className="font-semibold w-full">
                List Property
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
