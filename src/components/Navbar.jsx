import Image from "next/image";
import Link from "next/link";
import { UserRound } from "lucide-react";
import { cn } from "cn";



const leftLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destination" },
  { label: "My Bookings", href: "#bookings" },
  { label: "Add Destination", href: "/add-destinition" },
];

const rightLinks = [
  { label: "Profile", href: "#profile", icon: UserRound },
  { label: "Login", href: "#login" },
  { label: "Sign Up", href: "#signup" },
];

function NavLink({ href, label, icon: Icon, active = false }) {
  return (
    <a
      href={href}
      data-slot="nav-link"
      className={cn(
        "text-[15px] font-semibold transition-colors",
        active
          ? "rounded-sm border border-dotted border-sky-400 px-1.5 py-0.5 text-sky-500"
          : "text-neutral-900 hover:text-[#16A1BF]"
      )}
    >
      <span className="flex items-center gap-1.5">
        {Icon ? <Icon size={16} strokeWidth={2.25} /> : null}
        {label}
      </span>
    </a>
  );
}

function Navbar() {
  return (
    <header className="bg-emerald-50 sticky top-0 z-50 py-2 " >
     <div className="mx-10">
       <nav className="flex h-[38px] items-center gap-6 px-4">
        {/* Left links */}
        <div className="flex flex-1 items-center gap-6">
          {leftLinks.map((link) => (
            <NavLink key={link.label} {...link}  />
          ))}
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
          {rightLinks.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
        </div>
      </nav>
     </div>
    </header>
  );
}

export default Navbar;
