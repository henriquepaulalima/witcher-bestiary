"use client";

import localFont from "next/font/local";
import Header from "@/common/components/Header/Header";
import { RecoilRoot } from "recoil";

const mainFont = localFont({
  src: "../common/fonts/Thewitcher-jnOj.ttf",
  variable: "--main-font",
});

export default function Home() {
  return (
    <main className={mainFont.className}>
      <RecoilRoot>
        <Header />
      </RecoilRoot>
    </main>
  );
}
