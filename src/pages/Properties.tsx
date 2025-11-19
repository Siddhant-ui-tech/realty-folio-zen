import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import bhagyalaxmiImage from "@/assets/bhagyalaxmi.jpg";
import shashikunjImage from "@/assets/shashikunj.jpg";
import vaibhavlaxmiImage from "@/assets/vaibhavlaxmi.jpg";
import vijaylaxmiImage from "@/assets/vijaylaxmi.jpg";

const Properties = () => {
  const properties = [
    {
      id: "bhagyalaxmi-residency",
      image: bhagyalaxmiImage,
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
      image: shashikunjImage,
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
      image: vaibhavlaxmiImage,
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
      image: vijaylaxmiImage,
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Properties</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our collection of premium properties across Surat
            </p>
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
