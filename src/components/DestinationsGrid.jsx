import Image from "next/image";
import { MapPinIcon, CalendarIcon, ArrowUpRightIcon, StarIcon } from "lucide-react";
import { cn } from "cn";
import Link from "next/link";

function DestinationCard({destanition}) {
  return (
    
      <div>
        <div className="relative">
        <Image
          src={destanition.imageUrl}
          alt={destanition.name}
          width={364}
          height={203}
          className="h-[203px] w-full rounded-md object-cover"
        />
        
      </div>

      <div className="mt-3.5 flex flex-col">
        <p className="flex items-center gap-1.5 text-[13px] text-neutral-500">
          <MapPinIcon size={15} />
          {destanition.country}
        </p>

        <div className="mt-1 flex items-baseline justify-between">
          <h3 className="font-serif text-[19px] text-[#0C0B0B]">{destanition.name}</h3>
          <p>
            <span className="font-serif text-[20px] font-semibold text-[#0C0B0B]">
              ${destanition.price}
            </span>
            <span className="text-xs text-neutral-500">/Person</span>
          </p>
        </div>

        <p className="mt-1 flex items-center gap-1.5 text-[13px] text-neutral-500">
          <CalendarIcon size={15} />
          {destanition.duration}
        </p>

        <Link
          href={`/destination/${destanition._id}`}
          className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-[#16A1BF] uppercase underline underline-offset-3 transition-colors hover:text-[#128CA8] self-start"
        >
          <span>Book Now</span>
          <ArrowUpRightIcon size={15} />
        </Link>
      </div>
      </div>
   
  );
}



export default DestinationCard;


// // "name": "Bhole",
//     "country": "Barishal",
//     "price": "50",
//     "duration": "2days/1night",
//     "departure": "2026-11-10",
//     "imageUrl": "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S-XjMpV8U8Gs_LQzQPepQTzghHh2w0d_CpFYCgPjyoq8rXieQXiEx-s_9FCMmLctIXtJlAsPHVCV0B99jRYBFQ58R5nvMHiJr6Ku1kZiDvyhEf6FnfE4xtUti-Z_MEncmiLAM6=s1360-w1360-h1020-rw",
//     "description": "Best place in bangladesh."