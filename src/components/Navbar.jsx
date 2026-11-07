'use client'

import Image from "next/image";
import Link from "next/link";
import { UserRound } from "lucide-react";

import { signOut, useSession } from "@/lib/auth-client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button";





 function Navbar() {

  const {data : session} =  useSession()
  const user = session?.user

  
const Icon = UserRound




  return (
    <header className="bg-emerald-50 sticky top-0 z-50 py-2 " >
     <div className="mx-10">
       <nav className="flex h-[38px] items-center gap-6 px-4">
        {/* Left links */}
        <div className="flex flex-1 items-center gap-6">
          <Link className=" hover:text-sky-500" href={'/'}>Home</Link>
          <Link className=" hover:text-sky-500" href={'/destination'}>Destinations</Link>
          <Link className=" hover:text-sky-500" href={'/my-booking'}>My Bookings</Link>
          <Link className=" hover:text-sky-500" href={'/add-destinition'}>Add Destination</Link>
        </div>

        {/* Centered logo */}
        <div className="flex-none">
          <Link href="/" aria-label="Wanderlast home">
            <Image
              src="/image/Wanderlast.png"
              alt="Wanderlast"
              width={162}
              height={24}
              priority
            />
          </Link>
        </div>

        {/* Right links */}
        <div className="flex flex-1 items-center justify-end gap-6">
         {
          session?.user ? <>
          <Link className="flex gap-0.5 items-center" href={'#/profile'}>
          <Icon size={16} strokeWidth={2.25} />Profile</Link>

          

    <Popover>
  <PopoverTrigger render={
     <button>
      <Avatar>
      <AvatarImage
      referrerPolicy = "no-referrer"
        src={user?.image}
        alt="@shadcn"
        className="grayscale"
      />
      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
    </Avatar>
     </button>

  }>
    Open Popover
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>{user?.name}</PopoverTitle>
      <PopoverDescription>{user?.email}</PopoverDescription>
      <PopoverDescription><Button variant={"destructive"} onClick={() => signOut()}>Sign out</Button></PopoverDescription>
      
    </PopoverHeader>
  </PopoverContent>
</Popover>


          </> : <>
           <Link className=" hover:text-sky-500" href={'/login'}>Login</Link>
          <Link  className=" hover:text-sky-500" href={'/sign-up'}>Sign up</Link>
          </>
         }
        </div>
      </nav>
     </div>
    </header>
  );
}

export default Navbar;
