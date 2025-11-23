// Import images as modules so Vite can process them
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number;
  rating: number;
  reviews: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  images: string[];
  amenities: {
    category: string;
    items: string[];
  }[];
  description: string;
  houseRules: string[];
  checkIn: string;
  checkOut: string;
  lat: number;
  lng: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxe City Center Apartment",
    location: "Downtown",
    city: "London",
    price: 185,
    rating: 4.9,
    reviews: 127,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    image: property1,
    images: [
      property1,
      hero1,
      hero2,
    ],
    amenities: [
      {
        category: "Essentials",
        items: ["WiFi", "Air Conditioning", "Heating", "Smoke Alarm", "Carbon Monoxide Alarm"],
      },
      {
        category: "Kitchen",
        items: ["Full Kitchen", "Dishwasher", "Coffee Maker", "Microwave", "Refrigerator"],
      },
      {
        category: "Technology",
        items: ["Smart TV", "Premium Netflix", "Sound System", "Work Desk", "USB Charging"],
      },
      {
        category: "Comfort",
        items: ["Hotel-Quality Bedding", "Blackout Curtains", "Iron & Board", "Hairdryer"],
      },
    ],
    description: "Experience luxury living in the heart of the city. This stunning 2-bedroom apartment features floor-to-ceiling windows, modern furnishings, and premium amenities. Perfect for business travelers or couples seeking a sophisticated urban retreat.",
    houseRules: [
      "No smoking",
      "No parties or events",
      "Check-in after 3 PM",
      "Check-out before 11 AM",
      "Quiet hours: 10 PM - 8 AM",
    ],
    checkIn: "3:00 PM - 10:00 PM",
    checkOut: "11:00 AM",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: "2",
    title: "Waterfront Premium Suite",
    location: "Marina District",
    city: "London",
    price: 245,
    rating: 5.0,
    reviews: 89,
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    image: property2,
    images: [
      property2,
      hero2,
      hero3,
    ],
    amenities: [
      {
        category: "Essentials",
        items: ["WiFi", "Air Conditioning", "Heating", "Smoke Alarm", "First Aid Kit"],
      },
      {
        category: "Kitchen",
        items: ["Gourmet Kitchen", "Espresso Machine", "Wine Fridge", "Dining for 8"],
      },
      {
        category: "Outdoor",
        items: ["Private Balcony", "Water Views", "Outdoor Seating", "BBQ Grill"],
      },
      {
        category: "Luxury",
        items: ["Concierge Service", "Gym Access", "Pool Access", "Parking Included"],
      },
    ],
    description: "Breathtaking waterfront views meet sophisticated design in this premium 3-bedroom suite. Enjoy the spacious balcony, gourmet kitchen, and access to building amenities including gym and pool.",
    houseRules: [
      "No smoking",
      "No pets",
      "Maximum 6 guests",
      "Respect quiet hours",
      "Parking: 1 space included",
    ],
    checkIn: "3:00 PM - 9:00 PM",
    checkOut: "11:00 AM",
    lat: 51.5155,
    lng: -0.0922,
  },
  {
    id: "3",
    title: "Modern Loft Retreat",
    location: "Shoreditch",
    city: "London",
    price: 165,
    rating: 4.8,
    reviews: 156,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    image: property3,
    images: [
      property3,
      hero1,
      hero3,
    ],
    amenities: [
      {
        category: "Essentials",
        items: ["WiFi", "Heating", "Smoke Alarm", "Fire Extinguisher"],
      },
      {
        category: "Features",
        items: ["Exposed Brick", "High Ceilings", "Skylight", "Industrial Design"],
      },
      {
        category: "Kitchen",
        items: ["Modern Kitchen", "Breakfast Bar", "Coffee Machine", "Full Appliances"],
      },
      {
        category: "Entertainment",
        items: ["Smart TV", "Bluetooth Speaker", "Book Collection", "Board Games"],
      },
    ],
    description: "A stylish industrial loft in trendy Shoreditch. Features exposed brick walls, soaring ceilings, and contemporary design. Walking distance to galleries, cafes, and nightlife.",
    houseRules: [
      "No smoking indoors",
      "Pets allowed with approval",
      "Self check-in with lockbox",
      "Suitable for events (inquire first)",
    ],
    checkIn: "2:00 PM - 11:00 PM",
    checkOut: "10:00 AM",
    lat: 51.5252,
    lng: -0.0811,
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    name: "Sarah M.",
    rating: 5,
    comment: "Absolutely stunning apartment! The location was perfect and the host was incredibly responsive. Would definitely stay again.",
    date: "2024-10-15",
  },
  {
    id: "2",
    name: "James R.",
    rating: 5,
    comment: "Everything was even better than the photos. Spotlessly clean, modern amenities, and the view was breathtaking. Highly recommend!",
    date: "2024-10-08",
  },
  {
    id: "3",
    name: "Emma L.",
    rating: 4,
    comment: "Great stay overall. The apartment had everything we needed and the check-in process was seamless. Only minor issue was street noise, but earplugs were provided.",
    date: "2024-09-28",
  },
  {
    id: "4",
    name: "Michael Chen",
    rating: 5,
    comment: "Perfect for our business trip. Fast WiFi, comfortable workspace, and close to everything. The host thought of every detail.",
    date: "2024-09-20",
  },
  {
    id: "5",
    name: "Sophie B.",
    rating: 5,
    comment: "We loved our weekend here! The kitchen was well-equipped, beds were comfortable, and the neighborhood felt safe. Will be back!",
    date: "2024-09-12",
  },
];
