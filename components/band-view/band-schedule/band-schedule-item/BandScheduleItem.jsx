import React from "react";
import styles from "./BandScheduleItem.module.css";

function BandScheduleItem(props) {
  return (
    <li className={styles.li}>
      <p className={styles.date}>{props.date}</p>
      <p className={styles.time}>{props.time}</p>
      <p className={`${styles[props.stage]}`}>{props.stage}</p>
    </li>
  );
}

export default BandScheduleItem;
