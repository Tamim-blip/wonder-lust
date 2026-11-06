"use client";

import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon, UserRoundIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "cn";

const testimonials = [
  {
    quote:
      "\"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.\"",
    author: "Michael Chen",
    location: "Singapore",
    photo: "/image/testimonials/michael-chen.jpg",
  },
  {
    quote:
      "\"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!\"",
    author: "Sarah Johnson",
    location: "New York, USA",
    photo: "/image/testimonials/sarah-johnson.jpg",
  },
  {
    quote:
      "\"Greece Island Hopping Was A Dream Come True. The Sunsets In Santorini Were Stunning And The Crew Took Care Of Everything.\"",
    author: "Priya Sharma",
    location: "Toronto, Canada",
    photo: "/image/testimonials/priya-sharma.jpg",
  },
  {
    quote:
      "\"Japan Cherry Blossom Tour Was Magical From Start To Finish. Every Ryokan Stay Was Unforgettable And The Food Was Incredible.\"",
    author: "David Kim",
    location: "Sydney, Australia",
    photo: "/image/testimonials/david-kim.jpg",
  },
];

function TNavButton({ direction, ...props }) {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();
  const isPrev = direction === "prev";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-sm"
      disabled={isPrev ? !canScrollPrev : !canScrollNext}
      onClick={isPrev ? scrollPrev : scrollNext}
      aria-label={isPrev ? "Previous testimonials" : "Next testimonials"}
      {...props}
      className={cn(
        "size-11 rounded-full border-neutral-200 text-neutral-500 shadow-none hover:bg-white",
        props.className
      )}
    >
      {isPrev ? <ArrowLeftIcon size={19} /> : <ArrowRightIcon size={19} />}
    </Button>
  );
}

function Photo({ src, author }) {
  if (!src) {
    // Placeholder until a real portrait is provided
    return (
      <div
        data-slot="testimonial-photo"
        className="flex w-[146px] shrink-0 items-center justify-center bg-gradient-to-br from-fuchsia-200 via-purple-200 to-indigo-200"
      >
        <UserRoundIcon size={44} strokeWidth={1.25} className="text-white/80" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`Portrait of ${author}`}
      width={146}
      height={200}
      className="w-[146px] shrink-0 self-stretch object-cover"
    />
  );
}

function TestimonialCard({ quote, author, location, photo }) {
  return (
    <article
      data-slot="testimonial-card"
      className="flex min-h-[207px] gap-2 border border-[#ECEBED] bg-white p-4"
    >
      <div className="flex min-w-0 flex-1 flex-col px-2 pt-1 pb-1">
        <blockquote className="font-serif text-[15px] leading-[19px] text-neutral-900">
          {quote}
        </blockquote>

        <div className="mt-auto pt-6">
          <p className="flex gap-2 text-[13px] font-medium text-[#16A1BF]">
            <span aria-hidden>&mdash;</span>
            {author}
          </p>
          <p className="mt-1 pl-[19px] text-[11px] text-neutral-400">
            {location}
          </p>
        </div>
      </div>

      <Photo src={photo} author={author} />
    </article>
  );
}

function Testimonials() {
  return (
    <section data-slot="testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-12">
        <Carousel>
          <header className="flex items-start justify-between">
            <div>
              <h2 className="font-serif text-[40px] leading-none text-neutral-900">
                What Travelers Say
              </h2>
              <p className="mt-2 text-sm text-neutral-400">
                Real experiences from our happy travelers
              </p>
            </div>

            <div className="flex gap-5">
              <TNavButton direction="prev" />
              <TNavButton direction="next" />
            </div>
          </header>

          <CarouselContent className="mt-8 -ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.author}
                className="pl-4 md:basis-1/2"
              >
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
