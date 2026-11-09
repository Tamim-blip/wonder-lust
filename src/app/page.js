

import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import FeaturedDestination from "@/components/featuredDestination";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDestination></FeaturedDestination>
      <WhyChoose />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
