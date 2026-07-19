"use client";
import { useEffect, useRef } from "react";

// Checkout embebido de OrioPay (React) con LAZY LOAD.
//
// - Solo inyecta embed.js (iframe pesado + Stripe, ~100 req / ~3.6MB) cuando `show`
//   es true → no carga en cada visita ni dispara InitiateCheckout antes de abrir.
//   Se inyecta con async=false para que document.currentScript funcione en embed.js.
// - Se carga desde www.oriopay.app (NO el apex: el apex hace 307→www y embed.js
//   rechazaría los mensajes de altura por mismatch de origen → se cortaría).
// - La altura la ajusta OrioPay solo (postMessage oriopay:height). No fijar altura.
// - data-color = teal de marca (#0E7C7B); data-font = Nunito (fuente del body).
export default function CheckoutEmbed({
  slug,
  show,
  color = "#0E7C7B",
  font = "Nunito",
  radius = "12",
}) {
  const ref = useRef(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (!show || loaded.current || !ref.current || !slug) return;
    loaded.current = true;
    const s = document.createElement("script");
    s.src = "https://www.oriopay.app/embed.js";
    s.async = false; // necesario para document.currentScript en embed.js
    s.setAttribute("data-slug", slug);
    s.setAttribute("data-color", color);
    s.setAttribute("data-font", font);
    s.setAttribute("data-radius", radius);
    ref.current.appendChild(s);
  }, [show, slug, color, font, radius]);

  return (
    <div
      ref={ref}
      className={
        "oriopay-embed w-full max-w-xl mx-auto" + (show ? " mt-8" : " hidden")
      }
    />
  );
}
