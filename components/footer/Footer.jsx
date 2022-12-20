import React from "react";
import Anchor from "../Anchor";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.logo}>
            <em>VIKING</em>fest
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
                    <Anchor href="https://facebook.com/vikingfest">
                      FACEBOOK
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="https://instagram.com/vikingfest">
                      INSTAGRAM
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="https://twitter.com/vikingfest">
                      TWITTER
                    </Anchor>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className={styles.column1}>
            <section className={styles.about}>
              <h2 className={styles.h2}>About</h2>
              <ul className={styles.ul}>
                <li>
                  <Anchor href="/about" className={styles.link}>
                    Our Story
                  </Anchor>
                </li>
                <li>
                  <Anchor href="/bands" className={styles.link}>
                    Bands
                  </Anchor>
                </li>
                <li></li>
              </ul>
            </section>
            <section className={styles.info}>
              <h2 className={styles.h2}>Info</h2>
              <ul className={styles.ul}>
                <li>
                  <Anchor href="/booking" className={styles.link}>
                    Order Ticket
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    href="mailto:contact@vikingfest.io"
                    className={styles.link}
                  >
                    Contact
                  </Anchor>
                </li>
                <li>
                  <Anchor href="/ScheduleApp" className={styles.link}>
                    Schedule App
                  </Anchor>
                </li>
                <li>
                  <Anchor href="/about" className={styles.link}>
                    FAQ
                  </Anchor>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.privacyTerms}>
            <Anchor href="/privacy" className={styles.link}>
              Privacy Policy
            </Anchor>
            <Anchor href="/terms" className={styles.link}>
              Terms & Conditions{" "}
            </Anchor>
          </div>
          <p>2022 TechnoToots. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
