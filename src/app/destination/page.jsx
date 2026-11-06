
import DestinationCard from '@/components/DestinationsGrid';
import React from 'react';

const DestinitionPage = async() => {

    const res = await fetch("http://localhost:3001/destination")
    const data = await res.json()
    return (
        <div className='container mx-auto'>

            <div className='my-10'>
                <h1 className='text-5xl'> Explore All Destinations</h1>
                <p>Find your perfect travel experience from our curated collection</p>
               
            </div>
             <p className='mb-5'>Showing {data.length} destinations</p>

            <div className='grid grid-cols-3 gap-4'>
                {
                    data.map(item => <DestinationCard key={item._id} destanition = {item}></DestinationCard>)
                }
            </div>
            
        </div>
    );
};

export default DestinitionPage;