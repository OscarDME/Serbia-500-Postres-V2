import { copy } from "@/lib/copy";
import SampleVideo from "@/components/SampleVideo";

export default function Samples() {
  const { samples } = copy;
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FDE9DD] via-[#FFF4E9] to-[#FDE9DD] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#0E7C7B]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#0B615F]">
            {samples.kicker}
          </span>
          <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2A1B22] sm:text-4xl md:text-5xl">
            {samples.headline}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {samples.items.map((it, i) => (
            <div
              key={i}
              className="lift group overflow-hidden rounded-3xl border border-[#E3D2C4] bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#FFF4E9]">
                <SampleVideo
                  src={it.src.replace(/\.gif$/, ".mp4")}
                  poster={it.src.replace(/\.gif$/, "-poster.webp")}
                  alt={it.alt}
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#0E7C7B] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow">
                  {samples.badge}
                </span>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-display text-lg font-black leading-tight text-[#2A1B22] md:text-xl">
                  {it.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#A8461C]">
                  {it.variant}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FDE9DD] px-3 py-1.5 text-xs font-bold text-[#2A1B22]">
                    <span>🔥</span>
                    <span>{samples.caloriesLabel}: {it.kcal}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E3F1F0] px-3 py-1.5 text-xs font-bold text-[#0B615F]">
                    <span>⏱️</span>
                    <span>{samples.timeLabel}: {it.time}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
