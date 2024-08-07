import React, { ReactNode } from "react";
import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";
import { motion } from "framer-motion";

export default function Layout({
  children,
  disableMeta,
}: {
  children: ReactNode;
  home?: boolean;
  disableMeta?: boolean;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>purrnama | Freelance Developer & Designer</title>
        <meta
          name="title"
          content="purrnama - Freelance Developer and Designer"
        />
        <meta
          name="description"
          content="purrnama is a software engineering student, freelance developer and designer based in Malaysia."
        />
        {!disableMeta && (
          <>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="purrnama.dev" />
            <meta
              property="og:title"
              content="purrnama - Freelance Developer and Designer"
            />
            <meta
              property="og:description"
              content="purrnama is a software engineering student, freelance developer and designer based in Malaysia."
            />
            <meta
              property="og:image"
              content="https://portfolio-purrnama.vercel.app/img/meta-img.png"
            />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="purrnama.dev" />
            <meta
              property="twitter:title"
              content="purrnama - Freelance Developer and Designer"
            />
            <meta
              property="twitter:description"
              content="purrnama is a software engineering student, freelance developer and designer based in Malaysia."
            />
            <meta
              property="twitter:image"
              content="https://portfolio-purrnama.vercel.app/img/meta-img.png"
            />
          </>
        )}

        <link rel="icon" href="/img/logo-favicon-v2.png" />
      </Head>

      <Header />
      <motion.div
        className="flex-1"
        initial={{ x: 5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -5, opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
