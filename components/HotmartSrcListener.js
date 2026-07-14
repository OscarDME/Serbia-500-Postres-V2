"use client";

import { useEffect } from "react";

export default function HotmartSrcListener() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const src = params.get("src");
      const fbclid = params.get("fbclid");
      if (src) localStorage.setItem("hotmart_src", src);
      if (fbclid) localStorage.setItem("hotmart_fbclid", fbclid);
    } catch (e) {}
  }, []);

  return null;
}
