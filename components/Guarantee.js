import { copy } from "@/lib/copy";

export default function Guarantee() {
  const { guarantee } = copy;
  return (
    <section className="w-full bg-[#FFF4E9] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E3D2C4] bg-gradient-to-br from-white via-[#FDE9DD] to-white p-8 shadow-xl md:p-12">
          <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#0E7C7B]/15 blur-3xl" />

          {/* Sin sello de imagen (no existe en este set): solo el mensaje, centrado. */}
          <div className="relative text-center">
            <span className="inline-block rounded-full bg-[#0E7C7B]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#0B615F]">
              {guarantee.kicker}
            </span>
            <h2 className="font-display mt-4 text-3xl font-black leading-tight text-[#2A1B22] sm:text-4xl">
              {guarantee.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5C4550] md:text-lg">
              {guarantee.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
