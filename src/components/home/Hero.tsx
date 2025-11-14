"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import imgMealA from "@/assets/burger.jpg";
import imgMealB from "@/assets/curry.jpg";
import imgMealC from "@/assets/dumplings.jpg";
import imgMealD from "@/assets/macncheese.jpg";
import imgMealE from "@/assets/pizza.jpg";
import imgMealF from "@/assets/schnitzel.jpg";
import imgMealG from "@/assets/tomato-salad.jpg";
import Image from "next/image";
import { useRef } from "react";

const carouselItems = [
  { src: imgMealA, alt: "Meal A" },
  { src: imgMealB, alt: "Meal B" },
  { src: imgMealC, alt: "Meal C" },
  { src: imgMealD, alt: "Meal D" },
  { src: imgMealE, alt: "Meal E" },
  { src: imgMealF, alt: "Meal F" },
  { src: imgMealG, alt: "Meal G" },
];

const Hero = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <div className="meal-container">
      <div className="hero-clip-path bg-accent h-5"></div>
      <div className="grid gap-4 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr_2fr] py-5 items-center">
        <article className="relative">
          <Carousel
            className="w-full max-w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={item.src}
                    height={100}
                    width={100}
                    alt={item.alt}
                    className="w-full h-52 sm:h-auto object-cover rounded-xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </article>
        <article>
          <h1 className="text-xl sm:text-2xl lg:text-3xl capitalize mb-3 font-bold bg-linear-to-r from-primary via-pink-500 to-pink-500 text-transparent bg-clip-text">
            Welcome to Foodie&apos;s Paradise
            <br className="hidden lg:inline" /> Discover Delicious Recipes
          </h1>
          <p className="mb-6">
            Taste & Share Your Culinary Adventures with Us!
          </p>
          <div className="flex items-center gap-3">
            <Button asChild>
              <Link href="/community">Join the Community</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/meals">Explore Meals</Link>
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
};
export default Hero;
