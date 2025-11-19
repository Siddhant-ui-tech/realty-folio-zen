import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import bmAvenueImage from "@/assets/bm-avenue.jpg";
import shashidhwarImage from "@/assets/shashidhwar.jpg";

const OngoingProjects = () => {
  const projects = [
    {
      id: "bm-avenue",
      image: bmAvenueImage,
      title: "BM Avenue",
      location: "Bhestan, Surat",
      price: "",
      size: "336 Flats, 135 Shops",
      bedrooms: 0,
      bathrooms: 0,
      type: "Mixed-Use",
      badge: "Ongoing",
    },
    {
      id: "shashidhwar",
      image: shashidhwarImage,
      title: "Shashidhwar",
      location: "Bhestan, Surat",
      price: "",
      size: "196 Units",
      bedrooms: 0,
      bathrooms: 0,
      type: "Residential",
      badge: "RERA Approved",
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
              Ongoing <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our latest developments in Surat's prime locations
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto animate-slide-up">
            {projects.map((project) => (
              <PropertyCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OngoingProjects;
