import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square, MapPin, Heart } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Modern Apartment with Ocean View",
    price: "$450,000",
    location: "Miami Beach, FL",
    beds: 2,
    baths: 2,
    area: 1200,
    image: "/home1.avif",
    type: "For Sale",
  },
  {
    id: 2,
    title: "Luxury Villa with Private Pool",
    price: "$1,250,000",
    location: "Beverly Hills, CA",
    beds: 5,
    baths: 4,
    area: 3500,
    image: "/home2.jpg",
    type: "For Sale",
  },
  {
    id: 3,
    title: "Cozy Downtown Loft",
    price: "$2,800/mo",
    location: "New York, NY",
    beds: 1,
    baths: 1,
    area: 850,
    image: "/home3.jpg",
    type: "For Rent",
  },
  {
    id: 4,
    title: "Family Home with Garden",
    price: "$685,000",
    location: "Austin, TX",
    beds: 4,
    baths: 3,
    area: 2200,
    image: "/home4.jpg",
    type: "For Sale",
  },
];

export default function FeaturedProperties() {
  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {properties.map((property) => (
        <Link key={property.id} href={`/properties/${property.id}`}>
          <Card className="h-full overflow-hidden transition-all hover:shadow-lg rounded-xl border border-yellow-200 bg-gradient-to-b from-yellow-50 to-orange-50">
            {/* Property Image */}
            <div className="relative">
              <Image
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                width={500}
                height={300}
                className="h-[200px] w-full object-cover"
              />
              <Badge
                className={`absolute left-3 top-3 px-3 py-1 text-sm font-semibold text-white ${
                  property.type === "For Rent"
                    ? "bg-orange-600"
                    : "bg-yellow-600"
                }`}
              >
                {property.type}
              </Badge>

              {/* Favorite Button */}
              <button
                className="absolute right-3 top-3 rounded-full bg-white/80 p-2 text-brown-700 backdrop-blur-sm transition-colors hover:bg-yellow-100 hover:text-orange-700"
                aria-label="Add to favorites"
              >
                <Heart className="h-5 w-5" />
              </button>
            </div>

            {/* Property Info */}
            <CardContent className="px-4 py-3">
              <h3 className="line-clamp-1 text-lg font-bold text-brown-900">
                {property.title}
              </h3>
              <p className="mt-1 text-xl font-semibold text-orange-700">
                {property.price}
              </p>
              <div className="mt-2 flex items-center text-sm text-brown-600">
                <MapPin className="mr-1 h-4 w-4 text-orange-500" />
                {property.location}
              </div>
            </CardContent>

            {/* Property Stats */}
            <CardFooter className="flex justify-between border-t border-yellow-200 bg-white p-4">
              <div className="flex items-center gap-2 text-sm text-brown-800">
                <Bed className="h-4 w-4 text-orange-500" />
                <span>{property.beds} Beds</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-brown-800">
                <Bath className="h-4 w-4 text-orange-500" />
                <span>{property.baths} Baths</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-brown-800">
                <Square className="h-4 w-4 text-orange-500" />
                <span>{property.area} sqft</span>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
