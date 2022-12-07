import React from "react";
import styles from "./ArtistsOverview.module.css";
function ArtistsOverview() {
  return (
    <section className={styles.artist_list}>
      <div className="container">
        <h2 className={styles.heading}>Artists</h2>
        <ul className={styles.list}>
          <li>Son & Sons</li>
          <li>Daughters</li>
          <li>Uncles</li>
          <li>Aunts</li>
          <li>Fathers & mothers</li>
          <li>Nephews</li>
        </ul>
        <ul class={styles["small_list"]}>
          <li>Cousins</li>
          <li>Grandparents</li>
          <li>The godparents</li>
          <li>Cousins</li>
          <li>Grandparents</li>
        </ul>
      </div>
    </section>
  );
}

export default ArtistsOverview;
