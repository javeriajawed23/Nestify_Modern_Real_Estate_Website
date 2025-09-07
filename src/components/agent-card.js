import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";

export default function AgentCard() {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg p-0 rounded-xl border border-yellow-200">
      {/* Agent Image */}
      <div className="relative h-64 w-full">
        <Image
          src="/agent1.jpg"
          alt="Nestify real estate agent"
          fill
          className="object-cover"
        />
      </div>

      {/* Agent Info */}
      <CardContent className="p-5 text-center bg-gradient-to-b from-yellow-50 to-orange-50">
        <h3 className="text-xl font-semibold text-orange-900">John Smith</h3>
        <p className="text-sm text-brown-700">Senior Real Estate Agent</p>

        {/* Social Icons */}
        <div className="mt-3 flex justify-center space-x-3">
          <Link
            href="#"
            className="rounded-full bg-yellow-100 p-2 text-orange-700 transition-colors hover:bg-orange-200 hover:text-brown-900"
          >
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="#"
            className="rounded-full bg-yellow-100 p-2 text-orange-700 transition-colors hover:bg-orange-200 hover:text-brown-900"
          >
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="#"
            className="rounded-full bg-yellow-100 p-2 text-orange-700 transition-colors hover:bg-orange-200 hover:text-brown-900"
          >
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </CardContent>

      {/* Contact Button */}
      <CardFooter className="flex justify-center border-t bg-white p-4">
        <Button
          variant="outline"
          className="w-full gap-2 cursor-pointer border-yellow-300 text-orange-800 hover:bg-yellow-100 hover:text-brown-900"
        >
          <Phone className="h-4 w-4" />
          Contact
        </Button>
      </CardFooter>
    </Card>
  );
}
