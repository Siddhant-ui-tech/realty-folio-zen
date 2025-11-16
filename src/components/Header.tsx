import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import shashiRealtyLogo from "@/assets/shashi-realty-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={shashiRealtyLogo} alt="Shashi Realty" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className={`transition-colors ${isActive('/properties') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Properties
            </Link>
            <Link 
              to="/ongoing-projects" 
              className={`transition-colors ${isActive('/ongoing-projects') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Ongoing Projects
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Contact
            </Link>
          </nav>

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
              <Link 
                to="/" 
                className={`py-2 transition-colors ${isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/properties" 
                className={`py-2 transition-colors ${isActive('/properties') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Properties
              </Link>
              <Link 
                to="/ongoing-projects" 
                className={`py-2 transition-colors ${isActive('/ongoing-projects') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Ongoing Projects
              </Link>
              <Link 
                to="/about" 
                className={`py-2 transition-colors ${isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`py-2 transition-colors ${isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
