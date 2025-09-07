import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Users,
  Award,
  Clock,
  Building,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "About Us | Nestify",
  description:
    "Discover Nestify and our mission to make finding your dream home simple and enjoyable",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-[#FFF3B0] py-16 md:py-24 px-10">
        <div className="mx-auto max-w-3xl text-center text-[#5D4037]">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About Nestify
          </h1>
          <p className="mt-6 text-xl text-[#8D6E63]">
            We make finding, buying, and renting homes simple, stress-free, and enjoyable.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#5D4037]">Our Story</h2>
            <div className="mt-6 space-y-4 text-[#6D4C41]">
              <p>
                Nestify was founded to transform the real estate experience into a seamless, client-first journey. 
              </p>
              <p>
                Our team combines industry expertise with innovative technology to create a platform that prioritizes transparency, efficiency, and trust.
              </p>
              <p>
                Today, Nestify serves thousands of users, connecting them with homes that truly match their lifestyle and preferences.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="/team.jpeg"
              alt="Nestify team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-[#FFE5B4] py-16 md:py-24 px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#5D4037]">
            Our Mission & Values
          </h2>
          <p className="mt-4 text-[#6D4C41]">
            At Nestify, we follow core principles that guide everything we do.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Users,
              title: "Client-Focused",
              description:
                "We prioritize your needs, ensuring personalized support throughout your home journey.",
            },
            {
              icon: CheckCircle2,
              title: "Integrity & Transparency",
              description:
                "Honest communication and full transparency are at the heart of every interaction.",
            },
            {
              icon: Award,
              title: "Excellence & Expertise",
              description:
                "We continuously improve our skills and knowledge to provide exceptional service.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-full bg-[#FFDAB3] p-3 text-[#5D4037]">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#5D4037]">{value.title}</h3>
              <p className="text-[#6D4C41]">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Nestify */}
      <section className="py-16 md:py-24 px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#5D4037]">
            Why Choose Nestify
          </h2>
          <p className="mt-4 text-[#6D4C41]">
            Our combination of local knowledge and innovative technology ensures a home-finding experience like no other.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Clock,
              title: "Save Time",
              description:
                "Streamlined processes save you time at every step of your journey.",
            },
            {
              icon: Building,
              title: "Vast Selection",
              description:
                "Explore thousands of listings tailored to your preferences.",
            },
            {
              icon: Users,
              title: "Expert Guidance",
              description:
                "Work with professionals who truly understand the market.",
            },
            {
              icon: MapPin,
              title: "Local Insights",
              description:
                "Benefit from our deep knowledge of neighborhoods and market trends.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-full bg-[#FFDAB3] p-3 text-[#5D4037]">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#5D4037]">{feature.title}</h3>
              <p className="text-sm text-[#6D4C41]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFE5B4] py-16 text-[#5D4037] md:py-24 px-10">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Find Your Dream Home?
            </h2>
            <p className="mt-4 text-[#8D6E63]">
              Let our team guide you to the perfect home.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/properties">
              <Button
                size="lg"
                variant="outline"
                className="border-[#5D4037] text-[#5D4037] bg-transparent cursor-pointer"
              >
                Browse Properties
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#FFDAB3] text-[#5D4037] hover:bg-[#FFE0A3] cursor-pointer"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
