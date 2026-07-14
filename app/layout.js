import "./globals.css";
import { Fraunces, Nunito } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import { copy } from "@/lib/copy";
import FacebookPixel from "@/components/FacebookPixel";
import HotmartSrcListener from "@/components/HotmartSrcListener";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: copy.metadata.title,
  description: copy.metadata.description,
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23E8538C'/></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${nunito.variable}`}>
      <head>
        <Script
          id="kill-all-hashes"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                function stripHash() {
                  if (location.hash) {
                    history.replaceState(null, "", location.pathname + location.search);
                  }
                }
                stripHash();
                window.addEventListener("hashchange", function () { stripHash(); });
                var _replaceState = history.replaceState;
                history.replaceState = function (state, title, url) {
                  try {
                    if (typeof url === "string" && url.indexOf("#") !== -1) {
                      url = url.split("#")[0];
                    }
                  } catch (e) {}
                  return _replaceState.call(history, state, title, url);
                };
                var _pushState = history.pushState;
                history.pushState = function (state, title, url) {
                  try {
                    if (typeof url === "string" && url.indexOf("#") !== -1) {
                      url = url.split("#")[0];
                    }
                  } catch (e) {}
                  return _pushState.call(history, state, title, url);
                };
                var tries = 0;
                var t = setInterval(function () {
                  stripHash();
                  tries++;
                  if (tries > 200) clearInterval(t);
                }, 50);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#FFF4E9] text-[#2A1B22] antialiased font-sans">
        <FacebookPixel />
        <Suspense fallback={null}>
          <HotmartSrcListener />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
