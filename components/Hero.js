"use client";

import Image from "next/image";
import { copy } from "@/lib/copy";

export default function Hero() {
  const { hero } = copy;

  const scrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF4E9] via-[#FCEAE3] to-[#FFF4E9]">
      <div className="relative w-full bg-gradient-to-r from-[#D9622A] via-[#A8461C] to-[#D9622A] anim-gradient text-white text-center text-[13px] sm:text-sm font-bold tracking-wide py-2.5 px-3 shadow-md">
        <span className="inline-block">{hero.urgencyBar}</span>
      </div>

      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#D9622A]/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-32 -right-20 h-96 w-96 rounded-full bg-[#0E7C7B]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.05fr_1fr] md:gap-14 md:px-8 md:py-20 lg:py-24">
        <div className="relative reveal-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D9622A]/30 bg-[#D9622A]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#A8461C]">
            ⚡ {hero.badge}
          </span>

          <h1 className="font-display mt-5 text-4xl font-black leading-[1.05] text-[#2A1B22] sm:text-5xl md:text-6xl lg:text-[60px]">
            {hero.headline.before}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-[#A8461C]">
                {hero.headline.accent}
              </span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 z-0 h-3 rounded-full bg-[#F2A65A]/70 md:h-4"
              />
            </span>
            {hero.headline.after}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5C4550] sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {hero.trustChips.map((chip, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-[#E3D2C4] bg-white/80 px-3.5 py-2 text-xs font-semibold text-[#2A1B22] shadow-sm backdrop-blur sm:text-sm"
              >
                <span className="text-base">{chip.icon}</span>
                {chip.text}
              </span>
            ))}
          </div>

          <a
            href="#final-cta-section"
            onClick={scrollToCta}
            className="cta-shimmer anim-pulse-ring mt-8 inline-flex w-full items-center justify-center rounded-2xl border-b-4 border-[#084A49] bg-[#0E7C7B] px-6 py-5 text-base font-extrabold uppercase tracking-wide text-white shadow-xl transition hover:translate-y-[-1px] hover:bg-[#0B615F] sm:w-auto sm:px-10 sm:text-lg"
          >
            {hero.ctaLabel}
            <span className="ml-2 text-xl">→</span>
          </a>

          <div className="mt-5 flex items-center gap-2 text-sm text-[#7A5B62]">
            <span className="flex" aria-label={hero.starsAriaLabel}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#E8A23D]">★</span>
              ))}
            </span>
            <span className="font-semibold">{hero.starsRating}</span>
            <span>· {hero.socialProof}</span>
          </div>
        </div>

        <div className="relative reveal-up" style={{ animationDelay: "0.1s" }}>
          <div className="relative mx-auto max-w-[520px]">
            <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#D9622A]/20 via-white to-[#0E7C7B]/20 blur-2xl" />
            <div className="relative flex items-center justify-center">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={1770}
                height={1777}
                priority
                fetchPriority="high"
                sizes="(min-width: 768px) 460px, 90vw"
                className="h-auto w-full max-w-[460px] object-contain anim-float-slow drop-shadow-2xl"
              />
            </div>
            <div className="absolute -left-3 top-6 rotate-[-6deg] rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-[#E3D2C4] sm:-left-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{hero.floatingBadges.speed.icon}</span>
                <div className="text-left leading-tight">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#7A5B62]">
                    {hero.floatingBadges.speed.top}
                  </div>
                  <div className="text-lg font-black text-[#2A1B22]">{hero.floatingBadges.speed.bottom}</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-3 bottom-8 rotate-[5deg] rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-[#E3D2C4] sm:-right-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{hero.floatingBadges.discount.icon}</span>
                <div className="text-left leading-tight">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#7A5B62]">
                    {hero.floatingBadges.discount.top}
                  </div>
                  <div className="text-lg font-black text-[#D9622A]">{hero.floatingBadges.discount.bottom}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
