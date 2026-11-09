"use client"

import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import React from 'react';
import { cn } from "cn";
import { authClient, useSession } from '@/lib/auth-client';
import { da } from 'date-fns/locale';
const perks = [
    "Free cancellation up to 7 days",
    "Travel insurance included",
    "24/7 customer support",
];

const GREEN = "text-[#16A34A]";
const TEAL = "bg-[#16A1BF] hover:bg-[#128CA8]";



const BookingPage = ({ destination }) => {
    const { _id, ...booking } = destination

    const { data: session } = useSession()
    const user = session?.user
    


    const HandleBooking = async (e) => {
        e.preventDefault()

        const departureDate = e.target.date.value
        

        const Data = {
            userName: user?.name,
            email: user?.email,
            userImage: user?.image,
            ...booking,
            departure: departureDate,
            bookingDate: new Date()
        }


        const {data} = await authClient.token()
        const token = data.token

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization : `Bearer ${token}`
            },
            body: JSON.stringify(Data)
        })

        const confurmation = await res.json()
       



    }
    return (
        <div>
            <aside className="mt-10 h-fit rounded-lg border border-[#ECECF0] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.05)] lg:mt-0">
                <p className="text-sm text-neutral-500">Starting from</p>
                <p className="mt-1 font-serif text-[40px] leading-none font-medium text-[#16A1BF]">
                    ${destination.price}
                </p>
                <p className="mt-1.5 text-sm text-neutral-500">per person</p>

                <div className="mt-6 border-y border-[#ECECF0] py-5">

                    <form onSubmit={HandleBooking}>
                        <input
                            type='date'
                            aria-label='Departure date'
                            name="date"
                            defaultValue={destination.departure}
                            className="flex w-full h-10 items-center bg-[#F8FAFC] px-3.5 text-[15px] font-medium text-neutral-900"

                        />
                        <button
                            type='submit'
                            className={cn(
                                "mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-md text-[15px] font-semibold text-white transition-colors",
                                TEAL
                            )}
                        >
                            Book Now
                            <ArrowRightIcon size={16} />
                        </button>
                    </form>
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
    );
};

export default BookingPage;