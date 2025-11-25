import { MapPin, Maximize, Bed, Bath, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id?: string;
  image: string;
  title: string;
  location: string;
  price?: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  type: string;
  badge?: string;
  description?: string;
}

const PropertyCard = ({
  id = "1",
  image,
  title,
  location,
  price,
  size,
  bedrooms,
  bathrooms,
  type,
  badge,
}: PropertyCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 border border-border">
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {badge && (
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <BadgeCheck className="w-4 h-4" />
            {badge}
          </div>
        )}
        <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {type}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-playfair text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">{bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">{bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">{size}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <Link to={`/property/${id}`}>
            <Button variant="default">
              View Details
            </Button>
          </Link>
          {badge === "Ongoing" || badge === "RERA Approved" ? (
            <Link to="/contact">
              <Button variant="premium">
                Book Now
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
