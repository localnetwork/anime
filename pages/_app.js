import "nprogress/nprogress.css";
import "@/styles/globals.css";

import Layout from "@/components/misc/Layout";
import Router from "next/router";
import NProgress from "nprogress";

// Bind the nprogress methods to Next.js router events
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
