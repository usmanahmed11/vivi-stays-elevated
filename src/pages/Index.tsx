import { Check, Shield, Clock, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import ReviewCarousel from "@/components/ReviewCarousel";
import Footer from "@/components/Footer";
import { properties } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Search Bar */}
      <div className="container mx-auto px-4 mb-16">
        <SearchBar />
      </div>

      {/* Featured Properties */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium accommodations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="hero" size="lg">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Book Direct with ViVi Stays?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of booking directly with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Check className="text-primary" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Best Price Guarantee</h3>
              <p className="text-muted-foreground">
                No hidden fees. Get the best rates when you book directly with us.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <Clock className="text-secondary" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Flexible Check-in</h3>
              <p className="text-muted-foreground">
                Self check-in options and flexible arrival times for your convenience.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock guest support for a worry-free stay.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <Award className="text-secondary" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Hotel-grade cleaning and professionally managed properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Landlord CTA */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Landlords: Maximize Your Property's Potential
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Guaranteed rent, hands-free management, and expert short-let setup
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl">
                Learn More About Our Services
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary">
                Get a Free Valuation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Guests Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied guests
            </p>
          </div>
          
          <ReviewCarousel />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
