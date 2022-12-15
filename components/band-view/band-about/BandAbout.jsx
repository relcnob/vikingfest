import React from "react";
import styles from "./BandAbout.module.css";

function BandAbout(props) {
  return (
    <article className={styles.article}>
      <section>
        <h1>{props.name.toUpperCase()}</h1>
        <h2 className={`${styles.genre} ${styles[props.genre]}`}>
          {props.genre}
        </h2>
        <div className={styles.memberWrapper}>
          <h2>Members: </h2>
          <p className={styles.bodytext}>{props.members.join(", ")}</p>
        </div>
      </section>
      <section>
        <h2>About</h2>
        <p className={styles.bodytext}>{props.description}</p>
      </section>
    </article>
  );
}

export default BandAbout;
