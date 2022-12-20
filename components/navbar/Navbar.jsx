import React from "react";
import Image from "next/image";
import Anchor from "../Anchor";
import styles from "./Navbar.module.css";
import { useState } from "react";

function Navbar() {
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
          <p>
            <em>VIKING</em>fest
          </p>
        </Anchor>
        <div className={styles.mobileNav}>
          <ul className={styles.navWrapper}>
            <li
              onClick={() => {
                ToggleMenu === styles.show ? setToggleMenu("") : "";
              }}
            >
              <Anchor href="/bands" className={styles.link}>
                Bands
              </Anchor>
            </li>
            <li
              onClick={() => {
                ToggleMenu === styles.show ? setToggleMenu("") : "";
              }}
            >
              <Anchor href="/about" className={styles.link}>
                About
              </Anchor>
            </li>
            <li
              onClick={() => {
                ToggleMenu === styles.show ? setToggleMenu("") : "";
              }}
            >
              <Anchor
                href="https://vikingfest-app.netlify.app/"
                className={styles.link}
              >
                Schedule App
              </Anchor>
            </li>
          </ul>
          <Anchor
            className={styles.button}
            href="/booking"
            onClick={() => {
              ToggleMenu === styles.show ? setToggleMenu("") : "";
            }}
          >
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

export default Navbar;
