import Image from "next/image";
import { copy } from "@/lib/copy";

export default function Story() {
  const { story } = copy;
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFF4E9] via-[#FDE9DD] to-[#FFF4E9] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
          <div className="relative reveal-up">
            <div aria-hidden className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#D9622A]/20 via-white to-[#0E7C7B]/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-2xl">
              <Image
                src={story.image.src}
                alt={story.image.alt}
                width={1024}
                height={1024}
                loading="lazy"
                sizes="(min-width: 768px) 45vw, 90vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="reveal-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block rounded-full bg-[#D9622A]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#A8461C]">
              {story.kicker}
            </span>
            <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2A1B22] sm:text-4xl md:text-5xl">
              {story.headline}
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#5C4550] md:text-base">
              {story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
