import localFont from "next/font/local";
import Header from "@/common/components/Header/Header";

const mainFont = localFont({ src: "../common/fonts/Thewitcher-jnOj.ttf" });

export default function Home() {
  return (
    <main className={mainFont.className}>
      <Header />
    </main>
  );
}
