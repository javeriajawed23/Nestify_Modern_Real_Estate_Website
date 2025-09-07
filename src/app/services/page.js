import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Home,
  Building,
  MapPin,
  Search,
  Key,
  Briefcase,
  BarChart,
  FileText,
  Users,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Our Services | Nestify",
  description: "Explore our comprehensive real estate services",
};

const advantages = [
  {
    icon: Users,
    title: "Personalized Approach",
    description:
      "We take the time to understand your unique needs and preferences to provide tailored solutions.",
  },
  {
    icon: BarChart,
    title: "Market Expertise",
    description:
      "Our agents have deep knowledge of local markets and trends to help you make informed decisions.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description:
      "We leverage cutting-edge technology and creative strategies to achieve the best outcomes.",
  },
  {
    icon: FileText,
    title: "Transparent Process",
    description:
      "We keep you informed at every step, ensuring a clear understanding of the entire process.",
  },
];

const steps = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "We begin by understanding your goals, preferences, and requirements to tailor our services to your needs.",
  },
  {
    step: 2,
    title: "Strategy Development",
    description:
      "Based on your needs, we develop a customized strategy to help you achieve your real estate objectives.",
  },
  {
    step: 3,
    title: "Implementation",
    description:
      "We put our plan into action, whether it's marketing your property, searching for your dream home, or managing your investment.",
  },
  {
    step: 4,
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end at closing. We provide continued support and guidance as your real estate needs evolve.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-[#FFF3B0] py-16 md:py-24 px-10">
        <div className="mx-auto max-w-3xl text-center text-[#5D4037]">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-[#8D6E63]">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* How We Can Help */}
      <section className="py-16 md:py-24 px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#5D4037]">
            How We Can Help You
          </h2>
          <p className="mt-4 text-[#6D4C41]">
            At Nestify, we offer a wide range of services to meet all your real estate needs,
            whether you&apos;re buying, selling, renting, or investing.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Home,
              title: "Residential Sales",
              description:
                "Find your dream home or sell your property with our expert guidance and marketing strategies.",
            },
            {
              icon: Building,
              title: "Commercial Real Estate",
              description:
                "Specialized services for buying, selling, and leasing commercial properties of all types.",
            },
            {
              icon: Key,
              title: "Property Management",
              description:
                "Comprehensive management services for landlords, ensuring your investment is well-maintained and profitable.",
            },
            {
              icon: Search,
              title: "Property Valuation",
              description:
                "Accurate market analysis and property valuation to help you make informed decisions.",
            },
            {
              icon: MapPin,
              title: "Relocation Services",
              description:
                "Streamlined assistance for individuals and families moving to a new area.",
            },
            {
              icon: Briefcase,
              title: "Investment Advisory",
              description:
                "Expert advice on real estate investments to maximize returns and build your portfolio.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-full bg-[#FFDAB3] p-3 text-[#5D4037]">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#5D4037]">{service.title}</h3>
              <p className="text-[#6D4C41]">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Nestify Advantage */}
      <section className="bg-[#FFE5B4] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#5D4037]">
              The <span className="text-[#5D4037]">Nestify</span> Advantage
            </h2>
            <p className="text-[#6D4C41] text-lg">
              What sets us apart is our commitment to excellence and client satisfaction.
              Our approach combines industry expertise with innovative technology to provide
              an unmatched real estate experience.
            </p>

            <div className="grid gap-6">
              {advantages.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="bg-[#FFDAB3] text-[#5D4037] p-3 rounded-full">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#5D4037]">{item.title}</h3>
                    <p className="text-sm text-[#6D4C41]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src="/advantage-img.jpeg"
              alt="Real estate professionals"
              width={600}
              height={400}
              className="rounded-xl shadow-lg ring-1 ring-[#FFDAB3]"
            />
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#5D4037]">Our Process</h2>
          <p className="mt-4 text-[#6D4C41]">
            We&apos;ve streamlined our approach to make your real estate journey smooth and stress-free.
          </p>
        </div>

        <div className="relative mt-20 space-y-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-[#FFDAB3] md:block" />

          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "relative z-10 flex flex-col items-center gap-6 md:flex-row",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              <div className="flex-1">
                <div
                  className={cn(
                    "rounded-xl bg-white p-6 shadow-md transition-all",
                    index % 2 === 0 ? "md:mr-8 text-right" : "md:ml-8 text-left"
                  )}
                >
                  <div className="text-sm font-semibold text-[#5D4037] mb-1">Step {step.step}</div>
                  <h3 className="text-xl font-semibold text-[#5D4037]">{step.title}</h3>
                  <p className="mt-2 text-[#6D4C41]">{step.description}</p>
                </div>
              </div>

              <div className="z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#5D4037] text-white text-lg font-bold shadow-lg border-4 border-white">
                {step.step}
              </div>

              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFE5B4] py-16 text-[#5D4037] md:py-24 px-10">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-[#8D6E63]">
              Contact us today to discuss how we can help with your real estate needs.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#FFDAB3] text-[#5D4037] hover:bg-[#FFE0A3] cursor-pointer"
              >
                Contact Us
              </Button>
            </Link>
            <Link href="/properties">
              <Button
                size="lg"
                variant="outline"
                className="border-[#5D4037] text-[#5D4037] bg-transparent cursor-pointer"
              >
                Browse Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
