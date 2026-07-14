import { copy } from "@/lib/copy";

export default function Footer() {
  const { footer } = copy;

  return (
    <footer className="bg-[#1F1522] px-5 py-10 text-sm text-white/70 md:px-8 md:py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div className="font-display text-base font-semibold text-white/90">
          {footer.brand}
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs md:text-sm">
          {footer.links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-5xl text-center text-xs text-white/60 md:text-sm">
        {footer.copyright}
      </p>
    </footer>
  );
}
