import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Shield, Award, Building2, Users, TrendingUp } from "lucide-react";

const WhyShashiRealty = () => {
  const promises = [
    {
      icon: Award,
      title: "A Legacy of Quality",
      description: "Every project is designed with attention to detail, long-term durability, and thoughtful planning.",
    },
    {
      icon: TrendingUp,
      title: "Affordable Yet Premium",
      description: "We believe everyone deserves a beautifully designed home without compromising on comfort or budget.",
    },
    {
      icon: Shield,
      title: "Strong Track Record",
      description: "860+ flats, 325+ shops, and 220+ row houses delivered — each project completed with commitment and care.",
    },
    {
      icon: Building2,
      title: "Future-Ready Communities",
      description: "Our developments focus on connectivity, safety, green spaces, and amenities that support modern lifestyles.",
    },
  ];

  const highlights = [
    { number: "10+", label: "Years of Development Experience" },
    { number: "860+", label: "Flats Delivered" },
    { number: "325+", label: "Shops Delivered" },
    { number: "220+", label: "Row Houses Delivered" },
  ];

  return (
    <div className="min-h-screen font-inter bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Why <span className="text-primary">Shashi Realty</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              A Decade of Trust. A Vision for Tomorrow. A Commitment to Deliver More Than Just Homes.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Shashi Realty has built its reputation not through tall promises, but through foundations rooted in trust, transparency, and thoughtful craftsmanship. For over a decade, we have been shaping Bhestan, Surat with developments that blend affordability, quality, and modern living — ensuring every family experiences a home that feels truly theirs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
              A Builder You Can Trust — <span className="text-primary">Today and for the Future</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-slide-up">
            {promises.map((promise, index) => {
              const Icon = promise.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold mb-3 text-foreground">
                    {promise.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Families Trust Us */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
              Built on Values. <span className="text-primary">Strengthened by People.</span>
            </h2>
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-card">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Shashi Realty, we build more than structures — we build relationships. Our customers choose us because they know we stand by our word, we deliver what we promise, and we treat every project as a responsibility toward the families who will call it home. This trust is our biggest achievement, and we strive to honor it every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experience */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
              A Decade of Excellence in <span className="text-primary">Bhestan, Surat</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              With multiple residential, commercial, and row-house projects completed across Bhestan, we have contributed significantly to the area's growth. Our experience ensures better project planning, smoother execution, and a customer-first approach in every decision.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-slide-up">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  {highlight.number}
                </div>
                <div className="text-muted-foreground">{highlight.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  Modern Amenities
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  Reliable Infrastructure
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  Prime Location
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  Quality Construction
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Vision Built Around You */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
              A Vision Built <span className="text-primary">Around You</span>
            </h2>
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-card">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that a home should reflect your dreams, values, and lifestyle. That's why every Shashi Realty project is designed with spacious layouts, ample light, smart planning, and family-friendly surroundings. Our vision has always been simple — to create spaces where you don't just live, but truly belong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Link to="/">
            <Button variant="default" size="lg" className="h-12 px-8">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyShashiRealty;
