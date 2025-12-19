import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Maximize, Bed, Bath, Calendar, Award, Phone, Mail, Download, ChevronLeft } from "lucide-react";
import bhagyalaxmiImage from "@/assets/bhagyalaxmi.jpg";
import shashikunjImage from "@/assets/shashikunj.jpg";
import vaibhavlaxmiImage from "@/assets/vaibhavlaxmi.jpg";
import vijaylaxmiImage from "@/assets/vijaylaxmi.jpg";
import bmAvenueImage from "@/assets/bm-avenue.jpg";
import shashidhwarImage from "@/assets/shashidhwar.jpg";
import shashiroopImage from "@/assets/shashiroop.jpg";

const PropertyDetail = () => {
  const { id } = useParams();

  // Property data based on ID
  const propertyData: Record<string, any> = {
    "bhagyalaxmi-residency": {
      images: [bhagyalaxmiImage, bhagyalaxmiImage, bhagyalaxmiImage],
      title: "Bhagyalaxmi Residency",
      location: "Bhestan, Surat",
      price: "",
      size: "394 Flats, 12 Shops",
      bedrooms: 1,
      bathrooms: 1,
      type: "1 BHK",
      reraId: "RERA Verified",
      possession: "Completed",
      builder: "Shashi Realty",
      description: "Bhagyalaxmi Residency in Bhestan, Surat is a ready-to-move housing society designed to offer a perfect combination of comfort and style. Spread across 0.16 acres, it is one of the spacious communities in the region. With essential amenities and strong infrastructure, Bhestan is emerging as a prime choice for homebuyers. Surat's growing job market and robust development make Bhagyalaxmi Residency ideal for both residential and investment purposes.",
      amenities: [
        "Ready to Move",
        "394 Flats, 12 Shops",
        "Spacious Layout",
        "Modern Architecture",
        "Essential Amenities",
        "Strong Infrastructure",
        "Prime Location",
        "Investment Opportunity",
      ],
    },
    "shashikunj": {
      images: [shashikunjImage, shashikunjImage, shashikunjImage],
      title: "Shashikunj",
      location: "Udhna Zone, Surat",
      price: "",
      size: "",
      bedrooms: 0,
      bathrooms: 0,
      type: "Residential Plots",
      reraId: "PR/GJ/SURAT/CHORASI/SUDA/PAA11214/280223",
      possession: "Launched Feb 2023",
      builder: "Shashi Realty",
      description: "Shashikunj is a premium residential plot project in Udhna Zone, Surat offering plots ranging from 459 sq.ft. to 1949 sq.ft. Launched in February 2023, it includes 64 units and is designed as a gated community with amenities like Landscaping, Tree Planting, and Storm Water Drains. It is RERA approved (RERA ID: PR/GJ/SURAT/CHORASI/SUDA/PAA11214/280223). The locality offers excellent connectivity to malls, hospitals, schools, and main city routes.",
      amenities: [
        "64 Premium Plots",
        "Gated Community",
        "Landscaping",
        "Tree Planting",
        "Storm Water Drains",
        "RERA Approved",
        "Excellent Connectivity",
        "Near Malls & Hospitals",
      ],
    },
    "vaibhavlaxmi-shopping": {
      images: [vaibhavlaxmiImage, vaibhavlaxmiImage, vaibhavlaxmiImage],
      title: "Vaibhavlaxmi Shopping Mall",
      location: "Bhestan, Surat",
      price: "",
      size: "247 Units",
      bedrooms: 0,
      bathrooms: 0,
      type: "Commercial",
      reraId: "Commercial Project",
      possession: "Completed",
      builder: "Shashi Realty",
      description: "Vaibhavlaxmi Shopping Mall is a premium commercial project in Bhestan, Surat offering commercial shops and office spaces designed for maximum visibility and high footfall. With strong infrastructure, improving connectivity, and modern amenities, it is an ideal investment opportunity. The project supports diverse commercial activities and is expected to generate long-term returns.",
      amenities: [
        "247 Commercial Units",
        "High Visibility Location",
        "Maximum Footfall",
        "Modern Infrastructure",
        "Office Spaces",
        "Retail Shops",
        "Investment Opportunity",
        "Long-term Returns",
      ],
    },
    "vijya-laxmi-residency": {
      images: [vijaylaxmiImage, vijaylaxmiImage, vijaylaxmiImage],
      title: "Vijya Laxmi Residency",
      location: "Bhestan, Surat",
      price: "",
      size: "2 BHK",
      bedrooms: 2,
      bathrooms: 2,
      type: "Luxury Apartments",
      reraId: "RERA Verified",
      possession: "Completed",
      builder: "Shashi Realty",
      description: "Vijya Laxmi Residency in Bhestan, Surat provides luxurious 2 BHK apartments designed for an elite lifestyle. With world-class amenities such as 24/7 water supply, backup electricity, covered parking, fire safety, and lifts, the project ensures modern living at its finest. The apartments are Vastu compliant and offer excellent space utilization. Located close to Surat International Airport, this project provides a premium and well-connected address.",
      amenities: [
        "2 BHK Apartments",
        "24/7 Water Supply",
        "Backup Electricity",
        "Covered Parking",
        "Fire Safety",
        "Lift Facility",
        "Vastu Compliant",
        "Near Airport",
      ],
    },
    "bm-avenue": {
      images: [bmAvenueImage, bmAvenueImage, bmAvenueImage],
      title: "BM Avenue",
      location: "Bhestan, Surat",
      price: "",
      size: "336 Flats, 135 Shops",
      flatSize: "741 sq.ft. Carpet Area",
      shopSize: "205 – 4850 sq.ft. Carpet Area",
      shopDescription: "Best space for Hospital, Showroom, Office, Coaching Classes, Gym, Co-working Space.",
      bedrooms: 2,
      bathrooms: 2,
      type: "Commercial & Residential",
      reraId: "Under Construction",
      possession: "Ongoing",
      builder: "Shashi Realty",
      description: "BM Avenue is a modern mixed-use project in Bhestan, Surat featuring retail spaces, corporate offices, and premium commercial units. The project includes 336 elite families and 135 shops/office spaces across 07 storeys. Designed to offer sophisticated living and working environments, BM Avenue is rising as a landmark destination.",
      amenities: [
        "336 Residential Units",
        "135 Commercial Units",
        "7 Storeys",
        "Retail Spaces",
        "Corporate Offices",
        "Premium Location",
        "Mixed-Use Development",
        "Landmark Project",
      ],
    },
    "shashidhwar": {
      images: [shashidhwarImage, shashidhwarImage, shashidhwarImage],
      title: "Shashidhwar",
      location: "Bhestan, Surat",
      price: "",
      size: "196 Units",
      bedrooms: 2,
      bathrooms: 2,
      type: "Residential",
      reraId: "PR/GJ/SURAT/CHORASI/SUDA/MAA07433/080920",
      possession: "Expected Mar 2026",
      builder: "Shashidhwar Enterprise",
      description: "Shashidhwar is a new launch residential project in Bhestan, Surat by Shashidhwar Enterprise with expected delivery by March 2026. RERA Registered (PR/GJ/SURAT/CHORASI/SUDA/MAA07433/080920). Spread across 0.96 acres, it consists of 196 units across 4 towers (7 floors) and offers amenities such as a Park, Senior Citizen Sitout, and Car Parking. It is well connected to Bhestan Railway Station and Udhna Junction, offering excellent accessibility and livability.",
      amenities: [
        "196 Units",
        "4 Towers, 7 Floors",
        "0.96 Acres",
        "Park & Gardens",
        "Senior Citizen Sitout",
        "Car Parking",
        "Near Railway Station",
        "RERA Approved",
      ],
    },
    "shashiroop-homes": {
      images: [shashiroopImage, shashiroopImage, shashiroopImage],
      title: "Shashiroop Homes",
      location: "Bhestan, Surat, Gujarat",
      price: "",
      size: "1 BHK",
      bedrooms: 1,
      bathrooms: 2,
      type: "Flat / Apartment",
      reraId: "For Sale",
      possession: "Ready",
      builder: "Shashi Realty",
      description: "Shashiroop Homes is a thoughtfully designed residential project located in Bhestan, Surat, offering comfortable and affordable urban living. This 1 BHK flat/apartment is ideal for first-time home buyers, small families, and investors looking for value-driven property in a fast-developing area of Surat. The home features well-planned interiors, 2 modern bathrooms, and a functional layout that maximizes space and natural light. The project is equipped with essential lifestyle amenities ensuring convenience, safety, and a peaceful living environment. Strategically situated in Bhestan, the property enjoys excellent connectivity to key parts of Surat, daily essentials, public transport, and social infrastructure, making it a practical choice for everyday living.",
      amenities: [
        "Intercom Facility",
        "Lift(s)",
        "Maintenance Staff",
        "Park",
        "Security / Fire Alarm",
        "Visitor Parking",
        "Water Storage",
        "Excellent Connectivity",
      ],
    },
  };

  const property = propertyData[id || "bhagyalaxmi-residency"] || propertyData["bhagyalaxmi-residency"];

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
              {property.images.slice(1).map((image: string, index: number) => (
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
                </div>

                <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
                  {property.bedrooms > 0 && (
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Bedrooms</div>
                        <div className="font-semibold text-foreground">{property.bedrooms}</div>
                      </div>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Bathrooms</div>
                        <div className="font-semibold text-foreground">{property.bathrooms}</div>
                      </div>
                    </div>
                  )}
                  {property.size && (
                    <div className="flex items-center gap-2">
                      <Maximize className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Size</div>
                        <div className="font-semibold text-foreground">{property.size}</div>
                      </div>
                    </div>
                  )}
                  {property.flatSize && (
                    <div className="flex items-center gap-2">
                      <Maximize className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Flat Size</div>
                        <div className="font-semibold text-foreground">{property.flatSize}</div>
                      </div>
                    </div>
                  )}
                  {property.shopSize && (
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex items-center gap-2">
                        <Maximize className="w-5 h-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Shop Size</div>
                          <div className="font-semibold text-foreground">{property.shopSize}</div>
                        </div>
                      </div>
                      {property.shopDescription && (
                        <p className="text-sm text-muted-foreground ml-7">{property.shopDescription}</p>
                      )}
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Possession</div>
                      <div className="font-semibold text-foreground">{property.possession}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h2 className="font-playfair text-2xl font-bold mb-4 text-foreground">
                  Description
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
                  {property.amenities.map((amenity: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h2 className="font-playfair text-2xl font-bold mb-6 text-foreground">
                  Property Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Property Type</div>
                    <div className="font-semibold text-foreground">{property.type}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">RERA ID</div>
                    <div className="font-semibold text-foreground">{property.reraId}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Builder</div>
                    <div className="font-semibold text-foreground">{property.builder}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Location</div>
                    <div className="font-semibold text-foreground">{property.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
                  <h3 className="font-playfair text-xl font-bold mb-4 text-foreground">
                    Contact Us
                  </h3>
                  <div className="space-y-3">
                    <Button variant="premium" className="w-full" asChild>
                      <a href="tel:+919374504004">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="mailto:bmavenue0@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Us
                      </a>
                    </Button>
                    {(id === "shashidhwar" || id === "bm-avenue") && (
                      <Button variant="secondary" className="w-full" asChild>
                        <a 
                          href={id === "shashidhwar" ? "/brochures/Shashi_Dhwar_Catalog.pdf" : "/brochures/BM_AVENUE_BROCHURE.pdf"}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Brochure
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Builder Info */}
                <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-6 h-6 text-primary" />
                    <h3 className="font-playfair text-xl font-bold text-foreground">
                      Builder
                    </h3>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-2">{property.builder}</div>
                    <p className="text-sm text-muted-foreground">
                      A promising real estate group based in Bhestan, Surat with over a decade of experience.
                    </p>
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
