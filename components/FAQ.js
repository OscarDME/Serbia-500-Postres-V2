"use client";

import { useState } from "react";
import { copy } from "@/lib/copy";

export default function FAQ() {
  const { faq } = copy;
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="w-full bg-[#FFF4E9] py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#0E7C7B]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#0B615F]">
            {faq.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2A1B22] sm:text-4xl md:text-5xl">
            {faq.headline}
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faq.items.map((it, i) => {
            const open = openIdx === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border transition ${
                  open
                    ? "border-[#0E7C7B] bg-white shadow-lg"
                    : "border-[#E3D2C4] bg-white shadow-sm"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7 md:py-6"
                >
                  <span className="font-display text-base font-extrabold text-[#2A1B22] md:text-lg">
                    {it.q}
                  </span>
                  <span
                    aria-hidden
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-black transition ${
                      open ? "rotate-45 bg-[#0E7C7B] text-white" : "bg-[#FDE9DD] text-[#0B615F]"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-[#F4E3D3] px-5 py-5 text-[15px] leading-relaxed text-[#5C4550] md:px-7">
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
