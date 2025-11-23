import { useState } from "react";
import { useParams } from "react-router-dom";
import { Star, MapPin, Users, Bed, Bath, Wifi, Car, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { properties } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin size={18} />
                <span>{property.location}, {property.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-secondary">
                  <Star size={18} fill="currentColor" />
                  <span className="font-semibold text-foreground">{property.rating}</span>
                </div>
                <span>({property.reviews} reviews)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images & Details */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="mb-8">
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img
                    src={property.images[selectedImage]}
                    alt={property.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`rounded-lg overflow-hidden ${
                        selectedImage === index ? 'ring-4 ring-primary' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${property.title} ${index + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Info */}
              <div className="mb-8">
                <div className="flex items-center gap-6 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users size={20} />
                    <span>{property.guests} guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed size={20} />
                    <span>{property.bedrooms} bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={20} />
                    <span>{property.bathrooms} bathrooms</span>
                  </div>
                </div>

                <div className="border-t border-border pt-6 mb-6">
                  <h2 className="text-2xl font-bold mb-4">About this space</h2>
                  <p className="text-foreground leading-relaxed">{property.description}</p>
                </div>

                {/* Amenities */}
                <div className="border-t border-border pt-6 mb-6">
                  <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                  {property.amenities.map((category) => (
                    <div key={category.category} className="mb-6">
                      <h3 className="font-semibold text-lg mb-3">{category.category}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {category.items.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <Check className="text-primary" size={18} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* House Rules */}
                <div className="border-t border-border pt-6">
                  <h2 className="text-2xl font-bold mb-4">House Rules</h2>
                  <ul className="space-y-2">
                    {property.houseRules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Widget */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold">£{property.price}</span>
                      <span className="text-muted-foreground">/ night</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Check-in</label>
                      <Input type="date" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Check-out</label>
                      <Input type="date" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Guests</label>
                      <Input type="number" min="1" max={property.guests} defaultValue="1" />
                    </div>
                  </div>

                  <Button variant="cta" size="lg" className="w-full mb-4">
                    Book Now
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    You won't be charged yet
                  </p>

                  <div className="mt-6 pt-6 border-t border-border space-y-3">
                    <div className="flex justify-between">
                      <span>£{property.price} × 5 nights</span>
                      <span>£{property.price * 5}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cleaning fee</span>
                      <span>£50</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-3 border-t border-border">
                      <span>Total</span>
                      <span>£{property.price * 5 + 50}</span>
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
