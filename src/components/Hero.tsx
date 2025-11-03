import { Search, MapPin, Home, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-building.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury residential building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Find Your Dream Home
            <span className="block text-primary mt-2">in India's Finest Locations</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Discover luxury living with RERA verified properties from trusted builders
          </p>

          {/* Search Box */}
          <div className="bg-card/90 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-luxury border border-border animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Location */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Mumbai, Pune, Bangalore..."
                  className="pl-10 bg-secondary border-border h-12"
                />
              </div>

              {/* Property Type */}
              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Villa, Apartment, Plot..."
                  className="pl-10 bg-secondary border-border h-12"
                />
              </div>

              {/* Budget */}
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Budget Range"
                  className="pl-10 bg-secondary border-border h-12"
                />
              </div>
            </div>

            <Button className="w-full md:w-auto bg-gradient-primary text-primary-foreground hover:opacity-90 h-12 px-8 font-semibold">
              <Search className="w-5 h-5 mr-2" />
              Search Properties
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-scale-in">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Premium Properties</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Trusted Builders</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">RERA Verified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
