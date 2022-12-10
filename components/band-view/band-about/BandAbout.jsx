import React from "react";
import styles from "./BandAbout.module.css";

function BandAbout(props) {
  return (
    <article className={styles.article}>
      <section>
        <h1>{props.name}</h1>
        <h2 className={styles.genre}>{props.genre}</h2>
        <p>Members: {props.members}</p>
      </section>
      <section>
        <h2>About</h2>
        <p>{props.description}</p>
      </section>
    </article>
  );
}

export default BandAbout;
