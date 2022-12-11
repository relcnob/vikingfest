import React from "react";
import Image from "next/image";
import ComingUp from "./coming-up/ComingUp";
import CurrentlyPlaying from "./currently-playing/CurrentlyPlaying";
import styles from "./InformationBar.module.css";
import ornament from "../../public/images/ornament.svg";
function InformationBar() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.display}>
          <CurrentlyPlaying stage="svartheim" artist="SONS & SONS" />
          <ComingUp stage="alfheim" start="12:00" artist="DAUGHTERS" />
        </div>
        <h2 className={styles.h2}>VIKINGfest</h2>
      </div>
      <Image src={ornament} className={styles.ornamentLeft} alt="viking ornament" />
      <Image src={ornament} className={styles.ornamentRight} alt="viking ornament" />
    </section>
  );
}

export default InformationBar;
