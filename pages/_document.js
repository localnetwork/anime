import { Header } from "@/components/utilities/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[#0E0E0E]">
        <Main />
        <NextScript />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4534759138445365"
          crossOrigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}
