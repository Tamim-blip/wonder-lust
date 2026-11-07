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
import BookingPage from "./bookingPage";


const GREEN = "text-[#16A34A]";

const highlightItems = [
  "Luxury beachfront accommodation",
  "Visit Uluwatu Temple at sunset",
  "Traditional Balinese spa treatment",
  "Private beach dinner experience",
  "Sunrise trek to Mount Batur",
];



// Not present in the backend schema yet — static until fields are added
const RATING = "4.9";
const REVIEWS = "(234 reviews)";



function DestinationDetail({ destination }) {
  const { name, country,  duration, imageUrl, description } =
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
       <BookingPage  destination = { destination}></BookingPage>
      </div>
    </main>
  );
}

export default DestinationDetail;
