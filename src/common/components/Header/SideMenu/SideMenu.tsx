import { menuState } from "@/common/state/menu/menuState";
import { useRecoilState } from "recoil";
import styles from "./SideMenu.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SideMenu() {
  const [showMenu, setShowMenu] = useRecoilState(menuState);
  const [showMenuAnimation, setShowMenuAnimation] = useState(false);

  useEffect(() => {
    setShowMenuAnimation(true);
  }, []);

  function closeMenu() {
    setShowMenuAnimation(false);
    setTimeout(() => {
      setShowMenu(false);
    }, 500);
  }

  return (
    <div className={styles.side_menu__container}>
      <menu
        className={classNames({
          [styles.close]: !showMenuAnimation,
        })}
      >
        <header>
          <h2>Menu</h2>
          <button onClick={() => closeMenu()}>
            <Image
              src="/images/xmark.svg"
              height={40}
              width={40}
              alt="Close icon"
            />
          </button>
        </header>
        <ul className={styles.side_menu__content}>
          <li>
            <Link href="/" onClick={() => closeMenu()}>
              <button className={styles.active}>Home</button>
            </Link>
          </li>
          <li>
            <Link href="/categories" onClick={() => closeMenu()}>
              <button>Categories</button>
            </Link>
          </li>
          <li>
            <Link href="/monsters" onClick={() => closeMenu()}>
              <button>Monsters</button>
            </Link>
          </li>
        </ul>
      </menu>
    </div>
  );
}
