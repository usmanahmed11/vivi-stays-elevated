import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Home, TrendingUp, Shield, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ForLandlords = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    location: "",
    bedrooms: "",
    currentStatus: "",
    desiredService: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. We'll be in touch within 24 hours.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <div className="pt-32 pb-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Maximize Your Property's Income
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Guaranteed rent, professional management, and zero hassle
          </p>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ViVi Stays?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We take care of everything so you can enjoy passive income
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Guaranteed Rent</h3>
              <p className="text-muted-foreground">
                Receive fixed monthly income regardless of occupancy.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <Shield className="text-secondary" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Full Insurance</h3>
              <p className="text-muted-foreground">
                Comprehensive coverage for your property and contents.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Hands-Free Management</h3>
              <p className="text-muted-foreground">
                We handle everything from cleaning to maintenance.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <Home className="text-secondary" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Property Care</h3>
              <p className="text-muted-foreground">
                Professional cleaning and regular maintenance included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-8">
              <h3 className="font-bold text-2xl mb-4">Rent-to-Rent</h3>
              <ul className="space-y-3 mb-6">
                {["Guaranteed monthly rent", "3-5 year agreements", "No void periods", "Full property management"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8 border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="font-bold text-2xl mb-4">Full Management</h3>
              <ul className="space-y-3 mb-6">
                {["Revenue optimization", "Guest screening", "24/7 support", "Professional photography"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8">
              <h3 className="font-bold text-2xl mb-4">Setup Service</h3>
              <ul className="space-y-3 mb-6">
                {["Interior design", "Furnishing package", "Listing creation", "Compliance & licensing"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Free Valuation</h2>
              <p className="text-lg text-muted-foreground">
                Tell us about your property and we'll be in touch within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-lg space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+44 20 1234 5678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Property Type *</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange as any}
                    required
                    className="w-full h-10 px-3 rounded-md border border-input bg-background"
                  >
                    <option value="">Select type</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="studio">Studio</option>
                    <option value="penthouse">Penthouse</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Location *</label>
                  <Input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Central London"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Bedrooms *</label>
                  <Input
                    type="number"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    required
                    min="1"
                    placeholder="2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Desired Service *</label>
                <select
                  name="desiredService"
                  value={formData.desiredService}
                  onChange={handleChange as any}
                  required
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                >
                  <option value="">Select service</option>
                  <option value="rent-to-rent">Rent-to-Rent</option>
                  <option value="full-management">Full Management</option>
                  <option value="setup">Setup Service</option>
                  <option value="consultation">Just Exploring</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Information</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us more about your property and what you're looking for..."
                />
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                Submit Enquiry
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForLandlords;
