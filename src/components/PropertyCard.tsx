import { Star, MapPin, Users, Bed, Bath } from "lucide-react";
import { Link } from "react-router-dom";
import { Property } from "@/data/mockData";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link to={`/properties/${property.id}`} className="group">
      <div className="bg-card rounded-xl overflow-hidden shadow-md hover-lift">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-semibold">
            £{property.price}/night
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title and Location */}
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-base">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground mb-3">
            <MapPin size={16} />
            <span className="text-sm">{property.location}, {property.city}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1 text-secondary">
              <Star size={16} fill="currentColor" />
              <span className="font-semibold">{property.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({property.reviews} reviews)
            </span>
          </div>

          {/* Features */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Users size={16} />
              <span>{property.guests} guests</span>
            </div>
            <div className="flex items-center gap-1">
              <Bed size={16} />
              <span>{property.bedrooms} beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath size={16} />
              <span>{property.bathrooms} baths</span>
            </div>
          </div>

          {/* CTA */}
          <Button variant="hero" className="w-full">
            View Details
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
