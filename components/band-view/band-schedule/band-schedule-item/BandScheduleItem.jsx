import React from "react";
import Image from "next/image";
import styles from "./BandScheduleItem.module.css";
import scheduleOrnament from "../../../../public/images/scheduleOrnament.svg";
function BandScheduleItem(props) {
  return (
    <li className={styles.li}>
      <Image src={scheduleOrnament} alt="ornament" className={styles.ornamentLeft} />
      <p className={styles.date}>{props.date}</p>
      <p className={styles.time}>{props.time}</p>
      <p className={`${styles[props.stage]}`}>{props.stage}</p>
      <Image src={scheduleOrnament} alt="ornament" className={styles.ornamentRight} />
    </li>
  );
}

export default BandScheduleItem;
