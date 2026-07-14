import Image from "next/image";
import { copy } from "@/lib/copy";

function WaChatCard({ text, time }) {
  return (
    <div
      className="overflow-hidden rounded-[20px] shadow-xl border border-black/10 w-full max-w-[300px] mx-auto px-3 py-4"
      style={{
        backgroundImage: "url(/wallpaper-whatsapp.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative max-w-[90%]">
        <div className="absolute -left-[6px] top-0 w-0 h-0 border-t-[10px] border-t-white border-r-[8px] border-r-transparent" />
        <div className="bg-white rounded-[8px] rounded-tl-none px-3 py-2 shadow-sm">
          <p className="text-[13px] text-[#303030] leading-snug">{text}</p>
          <div className="flex items-center justify-end gap-1 mt-1">
            <span className="text-[10px] text-[#8E8E8E]">{time}</span>
            <svg className="w-3.5 h-3.5 text-[#53BDEB]" viewBox="0 0 16 11" fill="currentColor"><path d="M11.071.653a.75.75 0 0 1 .025 1.06l-6.5 7a.75.75 0 0 1-1.08.013L.904 6.115a.75.75 0 1 1 1.092-1.028l2.103 2.234 5.973-6.643a.75.75 0 0 1 1.06-.025zm3 0a.75.75 0 0 1 .025 1.06l-6.5 7a.75.75 0 0 1-1.08.013L4.904 6.115A.75.75 0 1 1 5.996 5.087l1.6 1.7L13.011.678a.75.75 0 0 1 1.06-.025z"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { testimonials } = copy;

  return (
    <section className="relative w-full bg-gradient-to-b from-[#FFF4E9] via-[#FCEAE3] to-[#FFF4E9] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#D9622A]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#A8461C]">
            {testimonials.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2A1B22] sm:text-4xl md:text-5xl">
            {testimonials.headline}
          </h2>
          <p className="mt-3 text-base font-semibold text-[#7A5B62] md:text-lg">
            {testimonials.subheadline}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((it, i) => (
            <WaChatCard key={i} text={it.text} time={it.time} />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B] px-6 py-3 text-sm font-black uppercase tracking-wider text-white shadow-lg md:text-base">
            ✓ {testimonials.studentsBadge}
          </span>
          <Image
            src={testimonials.mockup.src}
            alt={testimonials.mockup.alt}
            width={724}
            height={1024}
            loading="lazy"
            sizes="320px"
            className="h-auto w-full max-w-xs drop-shadow-2xl anim-float-slow"
          />
        </div>
      </div>
    </section>
  );
}
