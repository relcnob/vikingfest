import React from "react";
import styles from "./CurrentlyPlaying.module.css";
function CurrentlyPlaying(props) {
  return (
    <article>
      <h2 className={styles.title}>Currently performing</h2>
      <h1 className={styles.artist}>{props.artist}</h1>
      <h3 className={`${styles[props.stage]}`}>{props.stage} stage</h3>
    </article>
  );
}

export default CurrentlyPlaying;
