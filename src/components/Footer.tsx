import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="ViVi Stays" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 mb-4">
              Premium short-term rentals for the modern traveler.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-base">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-base">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-base">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-primary-foreground/80 hover:text-secondary transition-base">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/landlords" className="text-primary-foreground/80 hover:text-secondary transition-base">
                  For Landlords
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-base">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-base">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-base">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-base">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  123 Property Lane<br />London, UK
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} />
                <a href="tel:+442012345678" className="text-primary-foreground/80 hover:text-secondary transition-base">
                  +44 20 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} />
                <a href="mailto:hello@vivistays.com" className="text-primary-foreground/80 hover:text-secondary transition-base">
                  hello@vivistays.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} ViVi Stays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
