import PropertyCard from "./PropertyCard";
import { Link } from "react-router-dom";
import bmAvenueImage from "@/assets/bm-avenue.jpg";
import shashidhwarImage from "@/assets/shashidhwar.jpg";

const FeaturedProperties = () => {
  const properties = [
    {
      id: "bm-avenue",
      image: bmAvenueImage,
      title: "BM Avenue",
      location: "Bhestan, Surat",
      size: "336 Flats, 135 Shops",
      bedrooms: 2,
      bathrooms: 2,
      type: "Mixed-Use",
      badge: "Ongoing",
      description: "BM Avenue is a premier mixed-use development in Bhestan featuring 336 modern flats and 135 commercial shops.",
    },
    {
      id: "shashidhwar",
      image: shashidhwarImage,
      title: "Shashi Dhwar",
      location: "Bhestan, Surat",
      size: "196 Units",
      bedrooms: 2,
      bathrooms: 2,
      type: "Residential",
      badge: "RERA Approved",
      description: "Shashi Dhwar offers 196 quality residential units in Bhestan with modern amenities and RERA approval.",
    },
  ];

  return (
    <section id="properties" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured <span className="text-primary">Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked properties from Surat's most prestigious locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-slide-up">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/properties"
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
          >
            View All Properties
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
