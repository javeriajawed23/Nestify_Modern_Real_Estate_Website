import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Nestify",
  description: "Get in touch with our team for any inquiries or assistance",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-[#FFF3B0] py-16 md:py-24 px-10">
        <div className="mx-auto max-w-3xl text-center text-[#5D4037]">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-xl text-[#8D6E63]">
            We&apos;re here to help with all your real estate needs. Reach out to our team for personalized assistance.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 px-10">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#5D4037]">
              Get in Touch
            </h2>
            <p className="mt-4 text-[#6D4C41]">
              Fill out the form below, and one of our representatives will contact you shortly.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="first-name" className="text-sm font-medium text-[#5D4037]">
                    First name
                  </label>
                  <Input id="first-name" placeholder="John" className="h-11" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="last-name" className="text-sm font-medium text-[#5D4037]">
                    Last name
                  </label>
                  <Input id="last-name" placeholder="Doe" className="h-11" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-[#5D4037]">
                  Email
                </label>
                <Input id="email" placeholder="john@example.com" type="email" className="h-11" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-[#5D4037]">
                  Phone
                </label>
                <Input id="phone" placeholder="(123) 456-7890" type="tel" className="h-11" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-[#5D4037]">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" className="h-11" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-[#5D4037]">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us about your inquiry..." rows={5} />
              </div>

              <Button type="submit" className="w-full bg-[#FFDAB3] text-[#5D4037] hover:bg-[#FFE0A3] cursor-pointer py-6 text-base">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#5D4037]">Contact Information</h3>
              <p className="mt-2 text-[#6D4C41]">
                Reach out to us directly using the information below.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  { icon: MapPin, title: "Office Address", desc: "123 Real Estate Avenue\nProperty City, State 12345\nUnited States" },
                  { icon: Phone, title: "Phone", desc: "(123) 456-7890\n(987) 654-3210 (Toll-free)" },
                  { icon: Mail, title: "Email", desc: "info@nestify.com\nsupport@nestify.com" },
                  { icon: Clock, title: "Business Hours", desc: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="rounded-full bg-[#FFDAB3] p-3 text-[#5D4037]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#5D4037]">{item.title}</h4>
                      <p className="text-[#6D4C41] whitespace-pre-line">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 h-[300px] overflow-hidden rounded-lg border">
              <div className="flex h-full w-full items-center justify-center bg-slate-100 text-center text-[#6D4C41]">
                <div>
                  <MapPin className="mx-auto mb-2 h-8 w-8" />
                  <p>Interactive Map Would Be Embedded Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
