import MyBookingCard from '@/components/MyBooking';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBooking = async() => {

    const session = await auth.api.getSession({
        headers : await headers()
    })

    const user = session?.user


    const res = await fetch(`http://localhost:3001/booking/${user.email}`)
    const bookings = await res.json()

   
    return (
        <div className='container mx-auto my-15'>
            <h1 className='text-5xl my-5'>My Bookings</h1>
            <p className='mb-6'>Manage and view your upcoming travel plans</p>
            <div className='grid gap-5'>
                {
                    bookings.map(booking => <MyBookingCard key={booking._id}  booking = {booking}></MyBookingCard>)
                }
            </div>
        </div>
    );
};

export default MyBooking;