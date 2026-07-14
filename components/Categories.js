"use client";

import Image from "next/image";
import { copy } from "@/lib/copy";

export default function Categories() {
  const { categories } = copy;

  const scrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="w-full bg-[#FFF4E9] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#0E7C7B]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#0B615F]">
            {categories.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2A1B22] sm:text-4xl md:text-5xl">
            {categories.headline}
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          {categories.groups.map((g, i) => (
            <div
              key={i}
              className="lift rounded-3xl border border-[#E3D2C4] bg-white p-5 shadow-sm md:p-7"
            >
              <h3 className="font-display text-xl font-black text-[#A8461C] md:text-2xl">
                {g.title}
              </h3>
              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
                {g.items.map((it, j) => (
                  <div
                    key={j}
                    className="relative aspect-square overflow-hidden rounded-2xl border border-[#F3E2D2] bg-[#FFF4E9]"
                  >
                    <Image
                      src={it.src}
                      alt={it.alt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 768px) 15vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#final-cta-section"
            onClick={scrollToCta}
            className="cta-shimmer anim-pulse-ring inline-flex items-center justify-center rounded-2xl border-b-4 border-[#084A49] bg-[#0E7C7B] px-10 py-5 text-base font-black uppercase tracking-wide text-white shadow-xl transition hover:translate-y-[-1px] hover:bg-[#0B615F] sm:text-lg"
          >
            {categories.ctaLabel}
            <span className="ml-2 text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
