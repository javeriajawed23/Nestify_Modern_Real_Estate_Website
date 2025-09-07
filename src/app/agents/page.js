import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Phone, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Our Agents | Nestify",
  description: "Meet our team of experienced real estate professionals",
};

const agents = [
  { id: 1, name: "John Smith", role: "Senior Real Estate Agent", specialization: "Residential Properties", experience: "10+ years", email: "john@nestify.com", phone: "(123) 456-7890", image: "/agent1.jpg" },
  { id: 2, name: "Sarah Johnson", role: "Commercial Property Specialist", specialization: "Office & Retail Spaces", experience: "8 years", email: "sarah@nestify.com", phone: "(123) 456-7891", image: "/agent1.jpg" },
  { id: 3, name: "Michael Chen", role: "Luxury Home Specialist", specialization: "High-end Properties", experience: "12 years", email: "michael@nestify.com", phone: "(123) 456-7892", image: "/agent1.jpg" },
  { id: 4, name: "Emily Rodriguez", role: "First-time Buyer Specialist", specialization: "Affordable Housing", experience: "5 years", email: "emily@nestify.com", phone: "(123) 456-7893", image: "/agent1.jpg" },
  { id: 5, name: "David Wilson", role: "Investment Property Advisor", specialization: "Rental Properties", experience: "15 years", email: "david@nestify.com", phone: "(123) 456-7894", image: "/agent1.jpg" },
  { id: 6, name: "Jessica Lee", role: "Property Manager", specialization: "Residential Rentals", experience: "7 years", email: "jessica@nestify.com", phone: "(123) 456-7895", image: "/agent1.jpg" },
  { id: 7, name: "Robert Taylor", role: "Commercial Leasing Specialist", specialization: "Industrial Properties", experience: "9 years", email: "robert@nestify.com", phone: "(123) 456-7896", image: "/agent1.jpg" },
  { id: 8, name: "Amanda Garcia", role: "Relocation Specialist", specialization: "International Clients", experience: "6 years", email: "amanda@nestify.com", phone: "(123) 456-7897", image: "/agent1.jpg" },
];

const features = [
  { title: "Local Market Knowledge", desc: "Deep insights into neighborhoods, property values, and market trends." },
  { title: "Negotiation Skills", desc: "Our agents negotiate the best possible deal on your behalf." },
  { title: "Professional Network", desc: "Connections with trusted lenders, inspectors, and contractors." },
  { title: "Personalized Service", desc: "Every plan is tailored to match your unique needs and preferences." },
];

export default function AgentsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-[#FFF3B0] py-16 md:py-24 px-10">
        <div className="mx-auto max-w-3xl text-center text-[#5D4037]">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Meet Our Agents
          </h1>
          <p className="mt-6 text-xl text-[#8D6E63]">
            Our team of experienced professionals is here to help you with all your real estate needs.
          </p>
        </div>
      </section>

      {/* Search & Intro */}
      <section className="py-16 px-10">
        <div className="mb-8 flex flex-col sm:flex-row justify-between gap-4 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#5D4037]">Our Real Estate Experts</h2>
            <p className="text-[#6D4C41]">
              Find the right agent to guide you through your real estate journey
            </p>
          </div>
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-3 h-4 w-4 text-[#6D4C41]" />
            <Input placeholder="Search agents" className="pl-9" />
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {agents.map((agent) => (
            <Card key={agent.id} className="overflow-hidden transition-all hover:shadow-md p-0">
              <div className="relative h-64 w-full">
                <Image src={agent.image} alt={agent.name} fill className="object-cover" />
              </div>
              <CardContent className="px-4 text-center">
                <h3 className="text-lg font-bold text-[#5D4037]">{agent.name}</h3>
                <p className="text-sm text-[#6D4C41]">{agent.role}</p>
                <div className="mt-2 flex justify-center space-x-3">
                  {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="rounded-full bg-[#FFDAB3] p-1.5 text-[#5D4037] transition-all hover:bg-[#FFE0A3]"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">Social</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center border-t p-4">
                <Button variant="outline" className="w-full gap-2 text-[#5D4037] border-[#5D4037] hover:bg-[#FFE0A3]">
                  <Phone className="h-4 w-4" />
                  Contact
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section className="bg-[#FFE5B4] py-16 md:py-24 px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#5D4037]">Join Our Team</h2>
          <p className="mt-4 text-[#6D4C41]">
            Are you a real estate professional looking to take your career to the next level? Nestify offers a supportive environment, cutting-edge tools, and excellent commission structures.
          </p>
          <div className="mt-8">
            <Link href="/careers">
              <Button className="bg-[#FFDAB3] text-[#5D4037] hover:bg-[#FFE0A3] cursor-pointer">
                View Career Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 px-10">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <Badge variant="outline" className="mb-4 text-sm tracking-wider text-[#5D4037]">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight leading-tight text-[#5D4037]">
              Work With Trusted Real Estate Experts
            </h2>
            <p className="mt-4 text-[#6D4C41] text-base leading-relaxed">
              Our agents are handpicked for their industry expertise, strong work ethic, and dedication to delivering exceptional client experiences. Here’s what you gain:
            </p>

            <ul className="mt-6 space-y-5">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 text-[#FFDAB3]">
                    <CheckCircle className="h-5 w-5 text-[#5D4037]" />
                  </div>
                  <span className="text-base text-[#5D4037]">
                    <strong>{item.title}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/feature-img.jpg"
              alt="Real estate agent with client"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFF3B0] py-16 text-[#5D4037] md:py-24 px-10">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Work With Our Agents?
            </h2>
            <p className="mt-4 text-[#8D6E63]">
              Contact us today to get matched with the perfect agent for your needs.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" className="bg-[#FFDAB3] text-[#5D4037] hover:bg-[#FFE0A3]">
                Contact Us
              </Button>
            </Link>
            <Link href="/properties">
              <Button size="lg" variant="outline" className="border-[#5D4037] text-[#5D4037] hover:bg-[#FFE0A3]">
                Browse Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
