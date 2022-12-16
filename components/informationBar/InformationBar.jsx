import React from "react";
import Image from "next/image";
import ComingUp from "./coming-up/ComingUp";
import CurrentlyPlaying from "./currently-playing/CurrentlyPlaying";
import styles from "./InformationBar.module.css";
import ornament from "../../public/images/ornament.svg";
function InformationBar(props) {
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let today = new Date();
  const nowDay = days[today.getDay()];
  const nowTime = today.getHours();
  const playingIndex = Math.floor(nowTime / 2);

  console.log(props.schedule.Jotunheim[nowDay][playingIndex]);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.display}>
          <div className={styles.eventWrapper}>
            <CurrentlyPlaying
              stage="Midgard"
              artist={props.schedule.Midgard[nowDay][playingIndex].act}
            />
            <CurrentlyPlaying
              stage="Vanaheim"
              artist={props.schedule.Vanaheim[nowDay][playingIndex].act}
            />
            <CurrentlyPlaying
              stage="Jotunheim"
              artist={props.schedule.Jotunheim[nowDay][playingIndex].act}
            />
          </div>
          <div className={styles.eventWrapper}>
            <ComingUp
              stage="Midgard"
              start={`${playingIndex * 2 + 2}:00`}
              artist={props.schedule.Midgard[nowDay][playingIndex + 1].act}
            />
            <ComingUp
              stage="Vanaheim"
              start={`${playingIndex * 2 + 2}:00`}
              artist={props.schedule.Vanaheim[nowDay][playingIndex + 1].act}
            />
            <ComingUp
              stage="Jotunheim"
              start={`${playingIndex * 2 + 2}:00`}
              artist={props.schedule.Jotunheim[nowDay][playingIndex + 1].act}
            />
          </div>
        </div>
        <h2 className={styles.h2}>
          <em>VIKING</em>fest
        </h2>
      </div>
      <Image
        src={ornament}
        className={styles.ornamentLeft}
        alt="viking ornament"
      />
      <Image
        src={ornament}
        className={styles.ornamentRight}
        alt="viking ornament"
      />
    </section>
  );
}

export default InformationBar;
