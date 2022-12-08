import React from "react";
import Anchor from "../Anchor";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.logo}>VIKINGfest</div>
        <div className={styles.column1}>
          <section className={styles.about}>
            <h2 className={styles.h2}>About</h2>
            <ul>
              <li>
                <Anchor href="/About" className={styles.link}>
                  Our Story
                </Anchor>
              </li>

              <li>
                <Anchor href="/Bands" className={styles.link}>
                  Bands
                </Anchor>
              </li>

              <li>
                <Anchor href="/About#Map" className={styles.link}>
                  Vikingfest Area
                </Anchor>
              </li>
            </ul>
          </section>
          <section className={styles.info}>
            <h2 className={styles.h2}>Info</h2>
            <ul>
              <li>
                <Anchor href="/About" className={styles.link}>
                  Order Ticket
                </Anchor>
              </li>

              <li>
                <Anchor href="/About#Contact" className={styles.link}>
                  Contact
                </Anchor>
              </li>

              <li>
                <Anchor href="/ScheduleApp" className={styles.link}>
                  Schedule App
                </Anchor>
              </li>

              <li>
                <Anchor href="/About#FAQ" className={styles.link}>
                  FAQ
                </Anchor>
              </li>
            </ul>
          </section>
        </div>
        <div className={styles.column2}>
          <section className={styles.address}>
            <h2 className={styles.h2}>Address</h2>
            <ul className={styles.ul}>
              <li>Valhalla</li>
              <li>Asgard 3TV</li>
            </ul>
          </section>
          <section className={styles.contact}>
            <h2 className={styles.h2}>Contact</h2>
            <div>
              <p>+45 30 18 18</p>
              <Anchor href="info@vikingfest.io" className={styles.emailLink}>
                info@vikingfest.io
              </Anchor>
              <ul className={styles.someList}>
                <li>
                  <Anchor href="facebook.com/vikingfest">FACEBOOK</Anchor>
                </li>
                <li>
                  <Anchor href="instagram.com/vikingfest">INSTAGRAM</Anchor>
                </li>
                <li>
                  <Anchor href="twitter.com/vikingfest">TWITTER</Anchor>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.privacyTerms}>
          <Anchor href="/about#privacy" className={styles.link}>
            Privacy Policy
          </Anchor>

          <Anchor href="/about#terms" className={styles.link}>
            Terms & Conditions{" "}
          </Anchor>
        </div>
        <p>2022 TechnoToots. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
