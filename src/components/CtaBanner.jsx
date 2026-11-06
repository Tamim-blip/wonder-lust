import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

function CtaBanner() {
  return (
    <section data-slot="cta-banner" className="relative flex h-[296px] items-center justify-center overflow-hidden text-center">
      <Image
        src="/image/CTA.png"
        alt="Aerial view of an airplane flying over a tropical island"
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative z-10 text-white">
        <h2 className="font-serif text-[40px] leading-none md:text-[42px]">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-3 text-sm text-white/90">
          Join thousands of travelers who have discovered the world with us
        </p>

        <button
          type="button"
          className="mx-auto mt-8 flex h-[38px] items-center gap-2.5 bg-white px-5 text-[13px] font-semibold uppercase tracking-wide text-[#3A3939] transition-colors hover:bg-neutral-100"
        >
          Book Your Trip Today
          <ArrowRightIcon size={16} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}

export default CtaBanner;
