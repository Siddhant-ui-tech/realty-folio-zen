import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, Building2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Locations = () => {
  const cities = [
    {
      name: "Mumbai",
      properties: "180+",
      avgPrice: "₹18,500/sq.ft",
      growth: "+12%",
      localities: ["Bandra", "Juhu", "Worli", "Lower Parel"],
      description: "India's financial capital with premium sea-facing properties",
    },
    {
      name: "Bangalore",
      properties: "220+",
      avgPrice: "₹8,200/sq.ft",
      growth: "+15%",
      localities: ["Whitefield", "Indiranagar", "Koramangala", "HSR Layout"],
      description: "IT hub with modern infrastructure and green spaces",
    },
    {
      name: "Pune",
      properties: "150+",
      avgPrice: "₹7,800/sq.ft",
      growth: "+10%",
      localities: ["Koregaon Park", "Hinjewadi", "Baner", "Viman Nagar"],
      description: "Educational and cultural center with excellent connectivity",
    },
    {
      name: "Gurgaon",
      properties: "130+",
      avgPrice: "₹9,500/sq.ft",
      growth: "+8%",
      localities: ["Golf Course Road", "DLF Phase", "Sohna Road", "MG Road"],
      description: "Modern corporate hub with world-class infrastructure",
    },
    {
      name: "Hyderabad",
      properties: "100+",
      avgPrice: "₹6,900/sq.ft",
      growth: "+14%",
      localities: ["HITEC City", "Jubilee Hills", "Gachibowli", "Banjara Hills"],
      description: "Emerging tech city with affordable luxury options",
    },
    {
      name: "Chennai",
      properties: "90+",
      avgPrice: "₹7,200/sq.ft",
      growth: "+9%",
      localities: ["OMR", "ECR", "Velachery", "Anna Nagar"],
      description: "Coastal city with blend of traditional and modern living",
    },
  ];

  return (
    <div className="min-h-screen font-inter bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Explore Top <span className="text-primary">Locations</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover premium properties in India's most sought-after cities
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
            {cities.map((city, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-playfair text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {city.name}
                      </h2>
                      <p className="text-sm text-muted-foreground">{city.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-primary bg-primary/10 px-3 py-1 rounded-full">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">{city.growth}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-secondary/50 rounded-xl p-4">
                    <div className="text-sm text-muted-foreground mb-1">Properties</div>
                    <div className="text-2xl font-bold text-foreground">{city.properties}</div>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-4">
                    <div className="text-sm text-muted-foreground mb-1">Avg. Price</div>
                    <div className="text-2xl font-bold text-primary">{city.avgPrice}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Popular Localities
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {city.localities.map((locality, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground"
                      >
                        {locality}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  View Properties in {city.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locations;
