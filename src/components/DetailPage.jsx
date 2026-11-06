import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  CheckIcon,
  MapPinIcon,
  PenSquareIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react";
import { cn } from "cn";

const TEAL = "bg-[#16A1BF] hover:bg-[#128CA8]";
const GREEN = "text-[#16A34A]";

const highlightItems = [
  "Luxury beachfront accommodation",
  "Visit Uluwatu Temple at sunset",
  "Traditional Balinese spa treatment",
  "Private beach dinner experience",
  "Sunrise trek to Mount Batur",
];

const perks = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
];

// Not present in the backend schema yet — static until fields are added
const RATING = "4.9";
const REVIEWS = "(234 reviews)";

function formatDate(value) {
  try {
    return new Date(value).toLocaleDateString("en-US");
  } catch {
    return value ?? "";
  }
}

function DestinationDetail({ destination }) {
  const { name, country, price, duration, departure, imageUrl, description } =
    destination;

  return (
    <main >
      {/* Top bar */}
     

      {/* Hero image */}
      <Image
        src={imageUrl}
        alt={name}
        width={1140}
        height={440}
        className="mt-8 h-[440px] w-full rounded-lg object-cover"
      />

      <hr className="mt-8 border-[#ECECF0]" />

      {/* Content */}
      <div className="mt-10 grid grid-cols-1 gap-x-16 lg:grid-cols-[1fr_353px]">
        {/* Left column */}
        <div>
          <p className="flex items-center gap-1.5 text-sm text-neutral-500">
            <MapPinIcon size={16} />
            {country}
          </p>

          <h1 className="mt-2 font-serif text-[44px] leading-none text-[#0C0B0B]">
            {name}
          </h1>

          <div className="mt-4 flex items-center gap-5 text-[15px]">
            <span className="flex items-center gap-1.5">
              <StarIcon size={16} className="fill-[#16A34A] text-[#16A34A]" />
              <b className="text-neutral-900">{RATING}</b>
              <span className="text-neutral-400">{REVIEWS}</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium text-neutral-900">
              <CalendarIcon size={16} className="text-neutral-500" />
              {duration}
            </span>
          </div>

          <h2 className="mt-9 font-serif text-2xl text-[#0C0B0B]">Overview</h2>
          <p className="mt-3 text-[15px] leading-7 text-neutral-500">
            {description}
          </p>

          <h2 className="mt-10 font-serif text-2xl text-[#0C0B0B]">
            Highlights
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-neutral-500">
            {description}
          </p>

          <ul className="mt-7 grid gap-x-12 gap-y-4 sm:grid-cols-2">
            {highlightItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-neutral-600">
                <CheckIcon size={16} className={cn("shrink-0", GREEN)} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Booking sidebar */}
        <aside className="mt-10 h-fit rounded-lg border border-[#ECECF0] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.05)] lg:mt-0">
          <p className="text-sm text-neutral-500">Starting from</p>
          <p className="mt-1 font-serif text-[40px] leading-none font-medium text-[#16A1BF]">
            ${price}
          </p>
          <p className="mt-1.5 text-sm text-neutral-500">per person</p>

          <div className="mt-6 border-y border-[#ECECF0] py-5">
            <div className="flex h-10 items-center bg-[#F8FAFC] px-3.5 text-[15px] font-medium text-neutral-900">
              {formatDate(departure)}
            </div>

            <button
              type="button"
              className={cn(
                "mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-md text-[15px] font-semibold text-white transition-colors",
                TEAL
              )}
            >
              Book Now
              <ArrowRightIcon size={16} />
            </button>
          </div>

          <ul className="mt-5 space-y-3.5">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-sm text-neutral-600">
                <CheckIcon size={16} className={cn("shrink-0", GREEN)} />
                {perk}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}

export default DestinationDetail;
