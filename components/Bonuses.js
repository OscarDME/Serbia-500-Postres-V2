"use client";

import Image from "next/image";
import { copy } from "@/lib/copy";

export default function Bonuses() {
  const { bonuses } = copy;

  const scrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#2A1B22] via-[#3B2A3D] to-[#2A1B22] py-16 text-white md:py-24">
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[#D9622A]/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#0E7C7B]/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#D9622A]/20 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#F2A65A]">
            {bonuses.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            {bonuses.headline}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.items.map((it, i) => (
            <div
              key={i}
              className="lift relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur"
            >
              <span className="inline-block rounded-full bg-[#F2A65A]/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#F2A65A]">
                {it.label}
              </span>
              <div className="mt-4 flex items-start gap-4">
                <Image
                  src={it.image.src}
                  alt={it.image.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  sizes="96px"
                  className="h-32 w-24 shrink-0 rounded-xl object-cover shadow-xl anim-float-slow"
                />
                <div>
                  <h3 className="font-display text-lg font-black leading-tight text-white md:text-xl">
                    {it.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/75">
                    {it.desc}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-baseline gap-3 border-t border-white/10 pt-4">
                <span className="text-sm font-bold text-white/60 line-through decoration-[#D9622A] decoration-2">
                  {it.price}
                </span>
                <span className="rounded-full bg-[#0E7C7B] px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
                  {it.freeLabel}
                </span>
              </div>
            </div>
          ))}

          <div className="lift relative overflow-hidden rounded-3xl border border-[#D9622A]/40 bg-gradient-to-br from-[#D9622A]/20 to-[#A8461C]/10 p-6 backdrop-blur">
            <span className="inline-block rounded-full bg-[#F2A65A] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#2A1B22]">
              {bonuses.secretBonus.label}
            </span>
            <div className="mt-4 flex items-start gap-4">
              <Image
                src={bonuses.secretBonus.image.src}
                alt={bonuses.secretBonus.image.alt}
                width={1024}
                height={1024}
                loading="lazy"
                sizes="96px"
                className="h-32 w-24 shrink-0 rounded-xl object-contain shadow-xl anim-float-slow"
              />
              <div>
                <h3 className="font-display text-lg font-black leading-tight text-white md:text-xl">
                  {bonuses.secretBonus.name}
                </h3>
              </div>
            </div>
            <div className="mt-5 flex items-baseline gap-3 border-t border-white/10 pt-4">
              <span className="text-sm font-bold text-white/60 line-through decoration-[#D9622A] decoration-2">
                {bonuses.secretBonus.price}
              </span>
              <span className="rounded-full bg-[#0E7C7B] px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
                {bonuses.secretBonus.freeLabel}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#final-cta-section"
            onClick={scrollToCta}
            className="cta-shimmer anim-pulse-ring inline-flex items-center justify-center rounded-2xl border-b-4 border-[#084A49] bg-[#0E7C7B] px-10 py-5 text-base font-black uppercase tracking-wide text-white shadow-2xl transition hover:translate-y-[-1px] hover:bg-[#0B615F] sm:text-lg"
          >
            {bonuses.ctaLabel}
            <span className="ml-2 text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
