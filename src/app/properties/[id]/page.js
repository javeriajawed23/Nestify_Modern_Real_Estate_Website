import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Calendar,
  Heart,
  Share2,
  Phone,
  Mail,
  CheckCircle2,
  Home,
  Ruler,
  Car,
  Wifi,
  Thermometer,
  Lock,
  TreePine,
} from "lucide-react";
import MortgageCalculator from "@/components/mortgage-calculator";
import PropertyGallery from "@/components/property-gallery";
import ScheduleTour from "@/components/schedule-tour";
import Link from "next/link";

export const metadata = {
  title: "Property Details | Nestify",
  description: "View detailed information about this property",
};

export default async function PropertyDetailsPage({ params }) {
  const { id } = await params;
  const property = {
    id: id,
    title: "Luxury Villa with Private Pool",
    description:
      "This stunning luxury villa offers the perfect blend of elegant design and modern comfort. Featuring spacious living areas, high ceilings, and floor-to-ceiling windows that flood the home with natural light. The gourmet kitchen is equipped with top-of-the-line appliances and opens to a beautiful dining area. The primary suite is a true retreat with a spa-like bathroom and walk-in closet. Outside, enjoy the private pool, landscaped garden, and covered patio perfect for entertaining. Located in a prestigious neighborhood with easy access to shopping, dining, and schools.",
    price: "$1,250,000",
    location: "123 Luxury Lane, Beverly Hills, CA 90210",
    beds: 5,
    baths: 4,
    area: 3500,
    yearBuilt: 2018,
    lotSize: "0.5 acres",
    garage: "2-car attached",
    type: "For Sale",
    features: [
      "Private Pool",
      "Gourmet Kitchen",
      "Home Office",
      "Walk-in Closets",
      "Hardwood Floors",
      "Central Air",
      "Smart Home System",
      "Fireplace",
      "Outdoor Kitchen",
      "Garden",
      "Security System",
      "Wine Cellar",
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "(123) 456-7890",
      email: "sarah@nestify.com",
      image: "/agent1.jpg",
    },
  };

  return (
    <main className="flex-1">
      {/* Property Gallery */}
      <section className="relative bg-[#FFF3B0] p-10">
        <PropertyGallery />
        <div className="mt-4 flex gap-2">
          <Badge className="bg-[#FFDAB3] text-[#5D4037]">{property.type}</Badge>
          <Badge variant="outline" className="bg-white/80 text-[#5D4037] backdrop-blur-sm">
            Property ID: {property.id}
          </Badge>
        </div>
      </section>

      <div className="px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Property Details Left */}
          <div className="lg:col-span-2">
            <div className="mb-6 rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-[#5D4037]">
                    {property.title}
                  </h1>
                  <div className="mt-2 flex items-center text-[#6D4C41]">
                    <MapPin className="mr-1 h-4 w-4 text-[#5D4037]" />
                    {property.location}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-[#5D4037]">{property.price}</p>
                  <p className="text-sm text-[#8D6E63]">
                    ${(1250000 / 3500).toFixed(2)}/sqft
                  </p>
                </div>
              </div>
            </div>

            {/* Property Stats */}
            <div className="mb-8 grid grid-cols-3 gap-4 rounded-lg border bg-white p-6 shadow-sm sm:flex sm:justify-between">
              {[
                { icon: Bed, value: property.beds, label: "Bedrooms" },
                { icon: Bath, value: property.baths, label: "Bathrooms" },
                { icon: Square, value: property.area, label: "Sq Ft" },
                { icon: Calendar, value: property.yearBuilt, label: "Year Built" },
                { icon: Ruler, value: property.lotSize, label: "Lot Size" },
                { icon: Car, value: property.garage, label: "Garage" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center rounded-lg bg-[#FFF3B0] p-3 transition-all hover:bg-[#FFE5B4]"
                >
                  <stat.icon className="mb-1 h-5 w-5 text-[#5D4037]" />
                  <span className="text-lg font-semibold text-[#5D4037]">{stat.value}</span>
                  <span className="text-xs text-[#6D4C41]">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mb-8 flex flex-wrap gap-3">
              <Button
                variant="outline"
                className="gap-2 rounded-full border-[#FFDAB3] text-[#5D4037] hover:bg-[#FFE5B4]"
              >
                <Heart className="h-4 w-4" /> Save
              </Button>
              <Button
                variant="outline"
                className="gap-2 rounded-full border-[#FFDAB3] text-[#5D4037] hover:bg-[#FFE5B4]"
              >
                <Share2 className="h-4 w-4" /> Share
              </Button>
              <Button
                variant="outline"
                className="gap-2 rounded-full border-[#FFDAB3] text-[#5D4037] hover:bg-[#FFE5B4]"
              >
                <Calendar className="h-4 w-4" /> Schedule Tour
              </Button>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="details" className="rounded-lg border bg-white p-6 shadow-sm">
              <TabsList className="w-full justify-start grid grid-cols-2 sm:grid-cols-4 gap-2 h-11">
                {["details", "features", "calculator", "schedule"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="cursor-pointer data-[state=active]:bg-[#FFDAB3] data-[state=active]:text-[#5D4037]"
                  >
                    {tab === "details" && "Details"}
                    {tab === "features" && "Features"}
                    {tab === "calculator" && "Mortgage Calculator"}
                    {tab === "schedule" && "Schedule Tour"}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Details Tab */}
              <TabsContent value="details" className="mt-6 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#5D4037]">Property Description</h2>
                  <p className="text-[#6D4C41] leading-relaxed">{property.description}</p>

                  <div className="my-6 h-px bg-[#FFDAB3]/50"></div>

                  <h3 className="text-xl font-bold text-[#5D4037]">Property Details</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      { icon: Home, label: "Property Type", value: "Villa" },
                      { icon: Bed, label: "Bedrooms", value: property.beds },
                      { icon: Bath, label: "Bathrooms", value: property.baths },
                      { icon: Square, label: "Area", value: property.area + " sq ft" },
                      { icon: Calendar, label: "Year Built", value: property.yearBuilt },
                      { icon: Ruler, label: "Lot Size", value: property.lotSize },
                      { icon: Car, label: "Garage", value: property.garage },
                      { icon: TreePine, label: "Outdoor", value: "Pool, Garden, Patio" },
                    ].map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 rounded-lg bg-[#FFF3B0] p-3 transition-all hover:bg-[#FFE5B4]"
                      >
                        <detail.icon className="h-5 w-5 text-[#5D4037]" />
                        <div>
                          <span className="font-medium text-[#5D4037]">{detail.label}:</span>
                          <p className="text-[#6D4C41]">{detail.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Features Tab */}
              <TabsContent value="features" className="mt-6 space-y-6">
                <h2 className="text-2xl font-bold text-[#5D4037]">Property Features</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {property.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-lg bg-[#FFF3B0] p-3 transition-all hover:bg-[#FFE5B4]"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#5D4037]" />
                      <span className="text-[#5D4037]">{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="mt-8 text-xl font-bold text-[#5D4037]">Interior Features</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div className="flex items-center gap-2 rounded-lg bg-[#FFF3B0] p-3 transition-all hover:bg-[#FFE5B4]">
                    <Wifi className="h-5 w-5 text-[#5D4037]" />
                    <span className="text-[#5D4037]">High-Speed Internet</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-[#FFF3B0] p-3 transition-all hover:bg-[#FFE5B4]">
                    <Thermometer className="h-5 w-5 text-[#5D4037]" />
                    <span className="text-[#5D4037]">Central Heating & Cooling</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-[#FFF3B0] p-3 transition-all hover:bg-[#FFE5B4]">
                    <Lock className="h-5 w-5 text-[#5D4037]" />
                    <span className="text-[#5D4037]">Security System</span>
                  </div>
                </div>
              </TabsContent>

              {/* Mortgage Calculator */}
              <TabsContent value="calculator" className="mt-6">
                <MortgageCalculator propertyPrice={1250000} />
              </TabsContent>

              {/* Schedule Tour */}
              <TabsContent value="schedule" className="mt-6">
                <ScheduleTour />
              </TabsContent>
            </Tabs>
          </div>

          {/* Agent & Sidebar */}
          <div>
            <div className="sticky top-20 space-y-6">
              {/* Agent Info */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-[#FFDAB3]">
                    <Image
                      src={property.agent.image || "/placeholder.svg"}
                      alt={property.agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#5D4037]">{property.agent.name}</h3>
                    <p className="text-sm text-[#6D4C41]">Real Estate Agent</p>
                    <div className="mt-1 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2 rounded-lg bg-[#FFF3B0] p-2 transition-all hover:bg-[#FFE5B4]">
                    <Phone className="h-4 w-4 text-[#5D4037]" />
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-[#FFF3B0] p-2 transition-all hover:bg-[#FFE5B4]">
                    <Mail className="h-4 w-4 text-[#5D4037]" />
                    <span>{property.agent.email}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full gap-2 bg-[#FFDAB3] text-[#5D4037] hover:bg-[#FFE5B4]">
                    <Phone className="h-4 w-4" /> Contact Agent
                  </Button>
                  <Button variant="outline" className="w-full gap-2 border-[#FFDAB3] text-[#5D4037] hover:bg-[#FFE5B4]">
                    <Mail className="h-4 w-4" /> Email Agent
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
