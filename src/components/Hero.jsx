import Image from "next/image";
import { ArrowRight } from "lucide-react";

const TEAL = "bg-[#16A1BF]";

const searchFields = [
  { label: "Location", value: "Address, City Or Zip" },
  { label: "Date/Duration", value: "Anytime/ 3 Days" },
  { label: "Budget", value: "$0-$3000" },
  { label: "People", value: "5-10" },
];

function SearchField({ label, value }) {
  return (
    <div
      data-slot="search-field"
      className="flex flex-col justify-center gap-0.5 border-r border-white/25 px-8"
    >
      <span className="text-lg font-semibold text-white">{label}</span>
      <span className="text-xs text-white/55">{value}</span>
    </div>
  );
}

function SearchBar() {
  return (
    <div
      data-slot="search-bar"
      className="relative z-10 grid h-12 grid-cols-2 bg-black/45 backdrop-blur-sm md:grid-cols-[2fr_2fr_2fr_1.3fr_150px]"
    >
      {searchFields.map((field) => (
        <SearchField key={field.label} {...field} />
      ))}

      <button
        type="button"
        className={
          TEAL +
          " col-span-2 text-[15px] font-semibold text-white transition-colors hover:bg-[#128CA8] md:col-span-1"
        }
      >
        Search
      </button>
    </div>
  );
}

function Hero() {
  return (
    <section
      data-slot="hero"
      className="relative flex min-h-[calc(100svh-52px)] flex-col"
    >
      <Image
        src="/image/Banner.png"
        alt="Aerial view of a coastal bay"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-20 text-center text-white">
        <h1 className="font-serif text-5xl leading-[1.08] font-medium tracking-tight md:text-[64px]">
          Discover Your
          <br />
          Next Adventure
        </h1>

        <p className="mt-5 max-w-2xl text-[15px] leading-6 text-white/85">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            className={TEAL + " flex h-10 items-center gap-3 rounded-[3px] px-9 text-[13px] font-semibold uppercase tracking-wide text-white/95 transition-colors hover:bg-[#128CA8]"}
          >
            Explore Now
            <ArrowRight size={16} strokeWidth={2} />
          </button>
          <button
            type="button"
            className="h-10 rounded-[3px] bg-white/30 px-9 text-[13px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/40"
          >
            View Destination
          </button>
        </div>
      </div>

      <SearchBar />
    </section>
  );
}

export default Hero;
