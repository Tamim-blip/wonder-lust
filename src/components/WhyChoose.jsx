import Image from "next/image";

const features = [
  {
    icon: "/image/ShieldCheck.png",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/image/MapTrifold.png",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/image/Headset.png",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

function FeatureCard({ icon, title, description }) {
  return (
    <article data-slot="feature-card" className="bg-white p-7">
      <Image src={icon} alt="" width={32} height={32} aria-hidden />

      <h3 className="mt-3.5 font-serif text-[21px] text-neutral-900">{title}</h3>
      <p className="mt-3 text-[13px] leading-4 text-neutral-600">
        {description}
      </p>
    </article>
  );
}

function WhyChoose() {
  return (
    <section data-slot="why-choose" className="bg-[#EDFCFF] py-20">
      <div className="mx-auto max-w-6xl px-12">
        <header className="text-center">
          <h2 className="font-serif text-4xl text-neutral-900 md:text-[42px]">
            Why Choose Wanderlust
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            Your trusted partner for exceptional travel experiences
          </p>
        </header>

        <div className="mt-8 grid gap-[18px] sm:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
