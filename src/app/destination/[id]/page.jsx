import { DeleteDestination } from '@/components/deleteDestination';
import DestinationDetail from '@/components/DetailPage';

import { EditDestination } from '@/components/editDestination';
import { ArrowLeftIcon, PenSquareIcon, Trash2Icon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DetailPage = async({params}) => {

    const {id} = await params

    const res = await fetch(`http://localhost:3001/destination/${id}`)
    const detailData = await res.json()
    return (
       <main className="mx-auto max-w-7xl px-16 pt-10 pb-16">
         <header className="flex items-center justify-between">
        <Link
          href="/destination"
          className="flex items-center gap-2 text-[15px] text-neutral-600 transition-colors hover:text-neutral-900"
        >
          <ArrowLeftIcon size={18} />
          Back to Destinations
        </Link>

        <div className="flex items-center gap-4">
         
          <EditDestination destination = {detailData}></EditDestination>
          
          <DeleteDestination id = {id}></DeleteDestination>
        </div>
      </header>


      <DestinationDetail destination={detailData}></DestinationDetail>
       </main>
    );
}

export default DetailPage;