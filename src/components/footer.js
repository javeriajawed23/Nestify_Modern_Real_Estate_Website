import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-[#2a1f14] text-gray-200">
      <div className="py-12 md:py-16 px-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-yellow-400">Nestify</h3>
            <p className="mb-4">
              Helping you find your dream nest. We make property search simple,
              warm, and welcoming for everyone.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-orange-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-orange-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-orange-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-orange-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-yellow-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Properties", href: "/properties" },
                { name: "Services", href: "/services" },
                { name: "Agents", href: "/agents" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-orange-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-yellow-400">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-orange-400" />
                <span>456 Nest Lane, Cozy Town, 78910</span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-orange-400" />
                <span>(987) 654-3210</span>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-orange-400" />
                <span>support@nestify.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-yellow-400">
              Newsletter
            </h3>
            <p className="mb-4">
              Join our community and get the latest property updates and home
              tips delivered to your inbox.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-[#3a2a1e] border-[#4a3728] text-white"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 cursor-pointer">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-[#3a2a1e] pt-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <p>
              &copy; {new Date().getFullYear()} Nestify. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-orange-400">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-orange-400">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
