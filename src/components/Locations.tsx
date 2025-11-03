import { TrendingUp } from "lucide-react";

const Locations = () => {
  const locations = [
    { name: "Mumbai", properties: "180+", avgPrice: "₹18,500/sq.ft", growth: "+12%" },
    { name: "Bangalore", properties: "220+", avgPrice: "₹8,200/sq.ft", growth: "+15%" },
    { name: "Pune", properties: "150+", avgPrice: "₹7,800/sq.ft", growth: "+10%" },
    { name: "Gurgaon", properties: "130+", avgPrice: "₹9,500/sq.ft", growth: "+8%" },
    { name: "Hyderabad", properties: "100+", avgPrice: "₹6,900/sq.ft", growth: "+14%" },
    { name: "Chennai", properties: "90+", avgPrice: "₹7,200/sq.ft", growth: "+9%" },
  ];

  return (
    <section id="locations" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Explore Top <span className="text-primary">Locations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium properties in India's most sought-after cities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-playfair text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {location.name}
                </h3>
                <div className="flex items-center gap-1 text-primary bg-primary/10 px-2 py-1 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">{location.growth}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Properties</span>
                  <span className="font-semibold text-foreground">{location.properties}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Avg. Price</span>
                  <span className="font-semibold text-accent">{location.avgPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
