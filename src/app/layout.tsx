"use client";

import { RecoilRoot } from "recoil";
import "./globals.css";
import Header from "@/common/components/Header/Header";
import localFont from "next/font/local";

const mainFont = localFont({
  src: "../common/fonts/Thewitcher-jnOj.ttf",
  variable: "--main-font",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Wicther Bestiary</title>
        <meta
          name="description"
          content="Bestiary from the world of the Witcher"
        />
      </head>
      <body className={mainFont.className}>
        <RecoilRoot>
          <Header />
          <main>{children}</main>
        </RecoilRoot>
      </body>
    </html>
  );
}
