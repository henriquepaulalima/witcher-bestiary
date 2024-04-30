import { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import SideMenu from "./SideMenu/SideMenu";
import { useRecoilState } from "recoil";
import { menuState } from "@/common/state/menu/menuState";

export default function Header() {
  const [showMenu, setShowMenu] = useRecoilState(menuState);

  return (
    <header className={styles.header__container}>
      <nav>
        <h1>
          Witcher
          <br />
          Bestiary
        </h1>
        <button onClick={() => setShowMenu(true)}>
          <Image
            src="/images/bars.svg"
            width={40}
            height={40}
            alt="Menu icon"
          />
        </button>
      </nav>
      {showMenu && <SideMenu />}
    </header>
  );
}
