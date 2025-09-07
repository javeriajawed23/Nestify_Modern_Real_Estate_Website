"use client";

import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Slider from "react-slick";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "Nestify made finding our dream home so simple. Our agent was knowledgeable, responsive, and truly understood what we were looking for. We couldn't be happier with our new home!",
    avatar: "/agent1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    content:
      "As a real estate investor, I've worked with many agencies, but Nestify stands out for their market knowledge and professionalism. They've helped me find multiple profitable investment properties.",
    avatar: "/agent1.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "First-time Buyer",
    content:
      "Being a first-time homebuyer was intimidating, but Nestify guided me through every step of the process. They found me a beautiful condo within my budget and made the closing process smooth.",
    avatar: "/agent1.jpg",
    rating: 4,
  },
];

export default function TestimonialSlider() {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    dots: false,
  };

  return (
    <div className="relative w-full">
      <div className="mx-auto max-w-3xl">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <Card className="border-none shadow-lg bg-white rounded-2xl">
                <CardContent className="p-8 text-center">
                  {/* Avatar */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-[#FFDAB3] shadow-md">
                      <Image
                        src={testimonial.avatar || "/agent1.jpg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-4 flex justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gray-300" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="mb-6 text-lg italic text-[#6D4C41] leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>

                  {/* Name + Role */}
                  <h3 className="text-xl font-bold text-[#5D4037]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-[#8D6E63]">{testimonial.role}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>

      {/* Arrows */}
      <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-between px-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-[#FFDAB3] bg-white/80 backdrop-blur-sm shadow-md hover:bg-[#FFE5B4] cursor-pointer"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <ChevronLeft className="h-5 w-5 text-[#5D4037]" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-[#FFDAB3] bg-white/80 backdrop-blur-sm shadow-md hover:bg-[#FFE5B4] cursor-pointer"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <ChevronRight className="h-5 w-5 text-[#5D4037]" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  );
}
