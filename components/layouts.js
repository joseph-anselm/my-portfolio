import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import Head from "next/head";
import BackToTop from "./backtotop";
import WhatsAppFlyer from "./WhatsAppFlyer";
import WhatsAppButton from "./WhatsAppButton";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Joseph Anselm</title>
        <meta name="description" content="Joseph Anselm Portfolio | Web, Applications, Tech Support and more.... " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.jpg" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <WhatsAppFlyer/>
      <WhatsAppButton />
      <Footer />
      <BackToTop />
    </>
  );
}
