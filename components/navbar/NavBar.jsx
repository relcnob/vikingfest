import React from "react";
import Image from "next/image";
import Anchor from "../Anchor";
import styles from "./NavBar.module.css";
import { useState } from "react";

function NavBar() {
  const [ToggleMenu, setToggleMenu] = useState("");
  const [BurgerState, setBurgerState] = useState(styles.burger);
  function changeMenuState() {
    if (ToggleMenu === "") {
      setToggleMenu(styles.show);
      setBurgerState(styles.cross);
    } else {
      setToggleMenu("");
      setBurgerState(styles.burger);
    }
  }

  return (
    <header className={ToggleMenu}>
      <nav className={styles.nav}>
        <Anchor href="/" className={styles.logo}>
          <Image alt="logotype" src=""></Image>
        </Anchor>
        <div className={styles.mobileNav}>
          <ul className={styles.navWrapper}>
            <li>
              <Anchor href="/Bands" className={styles.link}>
                Bands
              </Anchor>
            </li>
            <li>
              <Anchor href="/About" className={styles.link}>
                About
              </Anchor>
            </li>
            <li>
              <Anchor href="/ScheduleApp" className={styles.link}>
                Schedule App
              </Anchor>
            </li>
          </ul>
          <Anchor className={styles.button} href="/OrderTickets">
            Order Tickets
          </Anchor>
        </div>

        <div className={BurgerState} onClick={changeMenuState}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
