import PropertyCard from "./PropertyCard";
import villaImage from "@/assets/property-villa.jpg";
import apartmentImage from "@/assets/property-apartment.jpg";
import penthouseImage from "@/assets/property-penthouse.jpg";

const FeaturedProperties = () => {
  const properties = [
    {
      image: villaImage,
      title: "Luxury Villa with Pool",
      location: "Whitefield, Bangalore",
      price: "₹4.5 Cr",
      size: "4500 sq.ft",
      bedrooms: 4,
      bathrooms: 5,
      type: "Villa",
      badge: "RERA Verified",
    },
    {
      image: apartmentImage,
      title: "Premium Sky Residences",
      location: "Bandra West, Mumbai",
      price: "₹3.2 Cr",
      size: "2800 sq.ft",
      bedrooms: 3,
      bathrooms: 4,
      type: "Apartment",
      badge: "New Launch",
    },
    {
      image: penthouseImage,
      title: "Penthouse with Terrace",
      location: "Koregaon Park, Pune",
      price: "₹6.8 Cr",
      size: "5200 sq.ft",
      bedrooms: 5,
      bathrooms: 6,
      type: "Penthouse",
      badge: "Luxury",
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
            Handpicked luxury homes from India's most prestigious locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#all-properties"
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
          >
            View All Properties
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
