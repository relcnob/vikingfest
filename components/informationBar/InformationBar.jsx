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
      <svg className={styles.svgBotLeft} width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.25">
          <path d="M66.8478 46.2606L20.0104 46.2606L20.0104 0.0300686" stroke="#111117" stroke-width="6" stroke-miterlimit="10" />
          <path d="M66.8478 46.2606L20.0104 46.2606L20.0104 0.0300686" stroke="#111117" stroke-width="6" stroke-miterlimit="10" />
          <path d="M67.0001 30.386L36.2153 30.386L36.2153 8.31579e-05" stroke="#111117" stroke-width="6" stroke-miterlimit="10" />
          <path d="M66.8477 64L43.429 64L43.429 46.2604" stroke="#111117" stroke-width="6" stroke-miterlimit="10" />
          <path d="M3 0.0298616L3 23.1451L20.9725 23.1451" stroke="#111117" stroke-width="6" stroke-miterlimit="10" />
        </g>
      </svg>
      <svg className={styles.svgTopRight} width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.25">
          <path d="M66.8478 46.2606L20.0104 46.2606L20.0104 0.0300686" stroke="#111117" stroke-width="6" stroke-miterlimit="10" />
          <path d="M66.8478 46.2606L20.0104 46.2606L20.0104 0.0300686" stroke="#111117" stroke-width="6" stroke-miterlimit="10" />
          <path d="M67.0001 30.386L36.2153 30.386L36.2153 8.31579e-05" stroke="#111117" stroke-width="6" stroke-miterlimit="10" />
          <path d="M66.8477 64L43.429 64L43.429 46.2604" stroke="#111117" stroke-width="6" stroke-miterlimit="10" />
          <path d="M3 0.0298616L3 23.1451L20.9725 23.1451" stroke="#111117" stroke-width="6" stroke-miterlimit="10" />
        </g>
      </svg>
    </section>
  );
}

export default InformationBar;
