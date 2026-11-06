"use client";

import { ArrowUpRightIcon } from "lucide-react";

function NewsletterForm() {
  return (
    <form
      className="mt-4 flex h-8 w-[208px] items-center bg-[#373737] pr-1.5 pl-3.5"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-neutral-400"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex size-7 cursor-pointer items-center justify-center text-white transition-colors hover:text-neutral-300"
      >
        <ArrowUpRightIcon size={18} />
      </button>
    </form>
  );
}

export default NewsletterForm;
