import React from "react";
import ComingUp from "./coming-up/ComingUp";
import CurrentlyPlaying from "./currently-playing/CurrentlyPlaying";
import styles from "./InformationBar.module.css";
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
    </section>
  );
}

export default InformationBar;
