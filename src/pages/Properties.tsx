import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import villaImage from "@/assets/property-villa.jpg";
import apartmentImage from "@/assets/property-apartment.jpg";
import penthouseImage from "@/assets/property-penthouse.jpg";

const Properties = () => {
  const properties = [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
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
    {
      id: "4",
      image: villaImage,
      title: "Modern Garden Villa",
      location: "Jubilee Hills, Hyderabad",
      price: "₹5.2 Cr",
      size: "5000 sq.ft",
      bedrooms: 5,
      bathrooms: 5,
      type: "Villa",
      badge: "RERA Verified",
    },
    {
      id: "5",
      image: apartmentImage,
      title: "Sea View Apartments",
      location: "Marine Drive, Mumbai",
      price: "₹8.5 Cr",
      size: "3500 sq.ft",
      bedrooms: 4,
      bathrooms: 4,
      type: "Apartment",
      badge: "Luxury",
    },
    {
      id: "6",
      image: penthouseImage,
      title: "Sky High Penthouse",
      location: "Golf Course Road, Gurgaon",
      price: "₹12 Cr",
      size: "6000 sq.ft",
      bedrooms: 5,
      bathrooms: 6,
      type: "Penthouse",
      badge: "New Launch",
    },
  ];

  return (
    <div className="min-h-screen font-inter bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Discover <span className="text-primary">Premium Properties</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our curated collection of luxury homes across India
            </p>
          </div>

          {/* Search & Filter */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-card max-w-5xl mx-auto animate-slide-up">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by location, property name..."
                  className="h-12 bg-secondary border-border"
                />
              </div>
              <Button variant="outline" className="h-12 px-6">
                <SlidersHorizontal className="w-5 h-5 mr-2" />
                Filters
              </Button>
              <Button variant="premium" className="h-12 px-8">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Properties
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
