import PropertyCard from "./PropertyCard";
import { Link } from "react-router-dom";
import bhagyalaxmiImage from "@/assets/bhagyalaxmi.jpg";
import shashikunjImage from "@/assets/shashikunj.jpg";
import vaibhavlaxmiImage from "@/assets/vaibhavlaxmi.jpg";

const FeaturedProperties = () => {
  const properties = [
    {
      id: "bhagyalaxmi-residency",
      image: bhagyalaxmiImage,
      title: "Bhagyalaxmi Residency",
      location: "Bhestan, Surat",
      size: "Ready to Move",
      bedrooms: 2,
      bathrooms: 2,
      type: "Residential",
      badge: "Ready to Move",
      description: "Bhagyalaxmi Residency in Bhestan, Surat is a ready-to-move housing society offering a perfect blend of comfort, space, and modern living.",
    },
    {
      id: "shashikunj",
      image: shashikunjImage,
      title: "Shashikunj",
      location: "Udhna Zone, Surat",
      size: "459-1949 sq.ft",
      bedrooms: 0,
      bathrooms: 0,
      type: "Plots",
      badge: "RERA Approved",
      description: "Shashikunj offers premium residential plots in Udhna Zone, Surat with plot sizes ranging from 459–1949 sq.ft.",
    },
    {
      id: "vaibhavlaxmi-shopping",
      image: vaibhavlaxmiImage,
      title: "Vaibhavlaxmi Shopping Mall",
      location: "Bhestan, Surat",
      size: "Commercial Hub",
      bedrooms: 0,
      bathrooms: 0,
      type: "Commercial",
      badge: "Premium",
      description: "A premium commercial hub in Bhestan with shops, offices, and high visibility for business growth.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
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
