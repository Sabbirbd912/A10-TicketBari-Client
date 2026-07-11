"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css/bundle";

export default function Banner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slidesData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200",
      title: "Grab Your Bus Tickets",
      subtitle:
        "Travel across the country safely with top-rated bus operators.",
      link: "/tickets?type=bus",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1661952633186-adf9f47719c3?q=80&w=870",
      title: "Fast & Comfortable Train Journey",
      subtitle:
        "Avoid traffic jams. Book your train seats instantly from home.",
      link: "/tickets?type=train",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200",
      title: "Fly High with TicketBari",
      subtitle:
        "Get exclusive discounts on domestic and international flights.",
      link: "/tickets?type=flight",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1200",
      title: "Scenic Waterways & Launch Tickets",
      subtitle: "Enjoy a relaxing journey through the rivers of Bangladesh.",
      link: "/tickets?type=launch",
    },
  ];

  if (!mounted) {
    return (
      <div className="w-full h-125 md:h-150 bg-default-100 animate-pulse rounded-xl" />
    );
  }

  return (
    <div className="w-full h-125 md:h-150 relative overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            <div className="absolute inset-0 bg-black/60 dark:bg-black/70 flex items-center justify-center px-6" />

            <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center justify-center h-full text-white">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md">
                {slide.title}
              </h1>
              <p className="mt-4 text-sm md:text-lg text-gray-200 font-medium max-w-xl drop-shadow-sm">
                {slide.subtitle}
              </p>

              <div className="mt-8">
                <Link href={slide.link}>
                  <Button
                    as="span"
                    size="lg"
                    radius="md"
                    // bg-gradient-to-r এর মাধ্যমে কাস্টম গ্রেডিয়েন্ট সেট করা হয়েছে
                    className="bg-linear-to-r from-emerald-500 to-neutral-950 text-white font-semibold shadow-lg hover:opacity-95 hover:scale-105 transition-all duration-200"
                  >
                    Book Tickets Now
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
