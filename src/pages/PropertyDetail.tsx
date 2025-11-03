import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Maximize, Bed, Bath, Calendar, Award, Phone, Mail, Download, ChevronLeft } from "lucide-react";
import villaImage from "@/assets/property-villa.jpg";
import apartmentImage from "@/assets/property-apartment.jpg";
import penthouseImage from "@/assets/property-penthouse.jpg";

const PropertyDetail = () => {
  const { id } = useParams();

  // Mock property data - in real app, fetch based on id
  const property = {
    images: [villaImage, apartmentImage, penthouseImage],
    title: "Luxury Villa with Pool",
    location: "Whitefield, Bangalore",
    price: "₹4.5 Cr",
    size: "4500 sq.ft",
    bedrooms: 4,
    bathrooms: 5,
    type: "Villa",
    reraId: "PRM/KA/RERA/1251/309/PR/171123/001234",
    possession: "Ready to Move",
    builder: "Prestige Group",
    description: "Experience luxury living at its finest in this stunning villa featuring contemporary design, premium finishes, and world-class amenities. Located in the heart of Whitefield, this property offers the perfect blend of tranquility and connectivity.",
    amenities: [
      "Private Swimming Pool",
      "Landscaped Garden",
      "Premium Gym",
      "Clubhouse",
      "24/7 Security",
      "Power Backup",
      "Covered Parking",
      "Children's Play Area",
    ],
  };

  return (
    <div className="min-h-screen font-inter bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/properties" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Properties
          </Link>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 animate-fade-in">
            <div className="md:col-span-2 lg:col-span-1">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${property.title} ${index + 2}`}
                  className="w-full h-[195px] md:h-[242px] object-cover rounded-2xl"
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card animate-slide-up">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="font-playfair text-4xl font-bold mb-2 text-foreground">
                      {property.title}
                    </h1>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-5 h-5" />
                      <span className="text-lg">{property.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-1">Starting from</div>
                    <div className="text-4xl font-bold text-primary">{property.price}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{property.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{property.possession}</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <div className="bg-primary/10 px-4 py-2 rounded-lg">
                    <span className="text-sm text-primary font-semibold">{property.type}</span>
                  </div>
                  <div className="bg-primary/10 px-4 py-2 rounded-lg flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-semibold">RERA Verified</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h2 className="font-playfair text-2xl font-bold mb-4 text-foreground">
                  About this Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h2 className="font-playfair text-2xl font-bold mb-6 text-foreground">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h2 className="font-playfair text-2xl font-bold mb-6 text-foreground">
                  Property Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Property Type</span>
                    <span className="text-foreground font-semibold">{property.type}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Builder</span>
                    <span className="text-foreground font-semibold">{property.builder}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">RERA ID</span>
                    <span className="text-foreground font-semibold text-sm">{property.reraId}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Status</span>
                    <span className="text-foreground font-semibold">{property.possession}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <div className="bg-card rounded-2xl p-6 border border-border shadow-card animate-scale-in">
                  <h3 className="font-playfair text-xl font-bold mb-4 text-foreground">
                    Interested in this Property?
                  </h3>
                  <div className="space-y-3">
                    <Button variant="premium" className="w-full h-12 font-semibold">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="w-full h-12">
                      <Mail className="w-5 h-5 mr-2" />
                      Email Us
                    </Button>
                    <Button variant="outline" className="w-full h-12">
                      <Download className="w-5 h-5 mr-2" />
                      Download Brochure
                    </Button>
                  </div>
                </div>

                {/* Builder Info */}
                <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
                  <h3 className="font-playfair text-xl font-bold mb-4 text-foreground">
                    Builder Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-muted-foreground">Name</div>
                      <div className="text-foreground font-semibold">{property.builder}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Experience</div>
                      <div className="text-foreground font-semibold">30+ Years</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Projects Delivered</div>
                      <div className="text-foreground font-semibold">250+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
