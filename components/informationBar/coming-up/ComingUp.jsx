import React from "react";
import styles from "./ComingUp.module.css";
function ComingUp(props) {
  return (
    <article>
      <h2 className={styles.title}>UPCOMING @ {props.start}</h2>
      <h1 className={styles.artist}>{props.artist}</h1>
      <h3 className={`${styles[props.stage]}`}>{props.stage} stage</h3>
    </article>
  );
}

export default ComingUp;
