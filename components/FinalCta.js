"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { copy } from "@/lib/copy";
import { BASE_CHECKOUT_URL, buildCheckoutUrl, fireBeginCheckout } from "@/lib/checkout";

export default function FinalCta() {
  const { finalCta } = copy;
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);

  useEffect(() => {
    setCheckoutUrl(buildCheckoutUrl());
  }, []);

  const handleClick = () => {
    fireBeginCheckout(finalCta.offerPrice);
  };

  return (
    <section
      id="final-cta-section"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF4E9] via-[#FDE9DD] to-[#FFF4E9] py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_20%_20%,rgba(217,98,42,0.18),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(14,124,123,0.16),transparent_50%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-8 text-center">
          <span className="inline-block rounded-full bg-[#F2A65A] px-5 py-2 text-xs font-black uppercase tracking-widest text-[#2A1B22] shadow md:text-sm">
            ⚡ {finalCta.flagline}
          </span>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] border border-[#E3D2C4] bg-white shadow-[0_40px_80px_-30px_rgba(42,27,34,0.25)]">
          <div className="grid md:grid-cols-[1fr_1.1fr]">
            <div className="relative flex items-center justify-center bg-gradient-to-br from-[#FDE9DD] to-[#FBD9C0] p-8 md:p-12">
              <Image
                src={finalCta.image.src}
                alt={finalCta.image.alt}
                width={1770}
                height={1777}
                loading="lazy"
                sizes="(min-width: 768px) 460px, 90vw"
                className="relative z-10 h-auto w-full max-w-[460px] object-contain anim-float-slow drop-shadow-2xl"
              />
              <span className="absolute left-6 top-6 rounded-full bg-[#0E7C7B] px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-lg">
                {finalCta.bonusesBadge}
              </span>
              <span className="absolute bottom-6 right-6 rotate-[-6deg] rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-[#E3D2C4]">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A5B62]">
                  {finalCta.discountStickerLabel}
                </span>
                <span className="font-display block text-xl font-black text-[#D9622A]">
                  {finalCta.discountStickerValue}
                </span>
              </span>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <h2 className="font-display text-2xl font-black leading-tight text-[#2A1B22] md:text-3xl">
                {finalCta.headline}
              </h2>
              <p className="mt-2 text-base font-semibold text-[#7A5B62] md:text-lg">
                {finalCta.subheadline}
              </p>

              <div className="mt-6 rounded-2xl border border-[#E3D2C4] bg-[#FFF4E9] p-5">
                <p className="text-xs font-black uppercase tracking-widest text-[#0B615F]">
                  {finalCta.includesTitle}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {finalCta.includes.map((item, i) => (
                    <li key={i} className="text-[14px] font-semibold text-[#2A1B22]">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-black uppercase tracking-widest text-[#A8461C]">
                  {finalCta.secretTitle}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <span className="rounded-full bg-[#D9622A] px-4 py-2 text-xs font-black uppercase tracking-widest text-white shadow">
                  {finalCta.discountLabel}
                </span>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-medium text-[#7A5B62]">{finalCta.regularPriceLabel}</span>
                    <span className="text-base font-bold text-[#7A5B62] line-through decoration-[#D9622A] decoration-2">
                      {finalCta.regularPrice}{finalCta.regularPriceSuffix}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-white p-1">
                <div className="text-sm font-semibold text-[#7A5B62]">
                  {finalCta.offerPriceLabel}
                </div>
                <div className="flex items-start gap-1">
                  <span className="font-display text-3xl font-black text-[#0E7C7B] md:text-4xl">
                    {finalCta.offerCurrency}
                  </span>
                  <span className="font-display text-6xl font-black leading-none text-[#0E7C7B] drop-shadow-sm md:text-7xl">
                    {finalCta.offerPrice}
                  </span>
                </div>
              </div>

              <a
                href={checkoutUrl}
                onClick={handleClick}
                className="cta-shimmer anim-pulse-ring mt-6 inline-flex w-full items-center justify-center rounded-2xl border-b-4 border-[#084A49] bg-[#0E7C7B] px-6 py-6 text-lg font-black uppercase tracking-wide text-white shadow-2xl transition hover:translate-y-[-1px] hover:bg-[#0B615F]"
              >
                {finalCta.button}
                <span className="ml-2 text-2xl">→</span>
              </a>

              <p className="mt-3 text-center text-sm font-black uppercase tracking-widest text-[#A8461C]">
                {finalCta.urgencyNote}
              </p>

              <div className="mt-6 flex justify-center border-t border-[#F4E3D3] pt-5">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B615F]">
                  🔒 {finalCta.secureLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
