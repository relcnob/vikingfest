import React from "react";
import styles from "./Sponsors.module.css";

function Sponsors() {
  return (
    <section className={styles.sponsors}>
      <div className="container">
        <div className={styles.titles}>
          <h2 className={styles.h2}>Sponsors</h2>
          <h3 className={styles.h3}>
            VIKINGfest would not be possible without them
          </h3>
        </div>
        <ul className={styles.ul}>
          <li className={styles.li}>LOREM IPSUM</li>
          <li className={styles.li}>TUBORG</li>
          <li className={styles.li}>JONAS & KLAUS</li>
          <li className={styles.li}>ODIN</li>
          <li className={styles.li}>PETER&apos;S POTS</li>
          <li className={styles.li}>CARLSBERG</li>
          <li className={styles.li}>TECHNOTOOTS</li>
        </ul>
      </div>
    </section>
  );
}

export default Sponsors;
