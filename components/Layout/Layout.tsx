import React from "react";
import Navbar from "../Navbar/Navbar";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />

        <meta
          name="og:title"
          content="Next.js Ecommerce | A simple ecommerce store made with Next.js and Redux"
        />

        <link
          rel="icon"
          href=""
        />
      </Head>

      <Navbar />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
