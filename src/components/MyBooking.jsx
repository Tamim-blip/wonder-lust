"use client"
import Image from "next/image";
import {
  CalendarIcon,
  CircleCheckIcon,
  MapPinIcon,
  Trash2Icon,
  EyeIcon,
} from "lucide-react";
import { cn } from "cn";
import { DeleteMyBooking } from "./deleteMyBooking";

const MyBookingCard =({booking}) => {

 
 

  return (
    <div className="flex flex-col gap-6 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm sm:flex-row">
      <Image
        src={booking.imageUrl}
        alt={booking.name}
        width={280}
        height={140}
        className="h-[140px] w-full rounded-md object-cover sm:w-[280px]"
      />

      <div className="flex flex-1 flex-col">
        {/* <span
          className={cn(
            "inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[13px] font-medium",
            status === "Confirmed"
              ? "bg-green-100 text-green-700"
              : "bg-neutral-100 text-neutral-600"
          )}
        >
          <CircleCheckIcon size={15} />
          {status}
        </span> */}

        <h3 className="mt-1 font-serif text-[19px] text-[#0C0B0B]">{booking.name}</h3>

        <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-neutral-500">
          <CalendarIcon size={15} />
          Departure: {booking.departure}
        </p>

        <p className="mt-1 flex items-center gap-1.5 text-[13px] text-neutral-500">
          <MapPinIcon size={15} />
          Booking ID: {booking._id}
        </p>

        <p className="mt-1 font-serif text-[22px] font-semibold text-[#16A1BF]">
          ${booking.price}
        </p>
      </div>

      <div className="flex items-end justify-end gap-2.5 sm:self-center sm:pl-2">
        <DeleteMyBooking id = {booking._id}></DeleteMyBooking>
        <button
          type="button"
         
          className="inline-flex items-center gap-1.5 rounded-md bg-[#16A1BF] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#128CA8]"
        >
          <EyeIcon size={15} />
          View
        </button>
      </div>
    </div>
  );
}

export default MyBookingCard
