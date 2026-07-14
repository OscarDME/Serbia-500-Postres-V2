import Image from "next/image";
import { copy } from "@/lib/copy";

export default function Preview() {
  const { preview } = copy;
  return (
    <section className="w-full bg-[#FFF4E9] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#0E7C7B]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#0B615F]">
            {preview.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2A1B22] sm:text-4xl md:text-5xl">
            {preview.headline}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
          {preview.items.map((it, i) => (
            <div
              key={i}
              className="lift relative aspect-square overflow-hidden rounded-2xl border border-[#E3D2C4] bg-white shadow-sm"
            >
              <Image
                src={it.src}
                alt={it.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 12vw, (min-width: 640px) 18vw, 30vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
