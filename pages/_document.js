import React from "react";

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head />
      <body className="bg-stone-900 relative">
        <Main />

        <NextScript />
        <div id="calendly"></div>
      </body>
    </Html>
  );
}
