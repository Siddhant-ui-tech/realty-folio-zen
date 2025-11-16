import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import villaImage from "@/assets/property-villa.jpg";
import apartmentImage from "@/assets/property-apartment.jpg";
import penthouseImage from "@/assets/property-penthouse.jpg";

const Properties = () => {
  const properties = [
    {
      id: "bhagyalaxmi-residency",
      image: villaImage,
      title: "Bhagyalaxmi Residency",
      location: "Bhestan, Surat",
      price: "",
      size: "Ready to Move",
      bedrooms: 2,
      bathrooms: 2,
      type: "Residential",
      badge: "Ready to Move",
    },
    {
      id: "shashikunj",
      image: apartmentImage,
      title: "Shashikunj",
      location: "Udhna Zone, Surat",
      price: "",
      size: "459-1949 sq.ft",
      bedrooms: 0,
      bathrooms: 0,
      type: "Plots",
      badge: "RERA Approved",
    },
    {
      id: "vaibhavlaxmi-shopping",
      image: penthouseImage,
      title: "Vaibhavlaxmi Shopping Mall",
      location: "Bhestan, Surat",
      price: "",
      size: "Commercial Hub",
      bedrooms: 0,
      bathrooms: 0,
      type: "Commercial",
      badge: "Premium",
    },
    {
      id: "vijya-laxmi-residency",
      image: villaImage,
      title: "Vijya Laxmi Residency",
      location: "Bhestan, Surat",
      price: "",
      size: "2 BHK",
      bedrooms: 2,
      bathrooms: 2,
      type: "Residential",
      badge: "Luxury",
    },
  ];

  return (
    <div className="min-h-screen font-inter bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Properties</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our collection of premium properties across Surat
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-6 border border-border shadow-card">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by location, property name..."
                  className="h-12"
                />
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
