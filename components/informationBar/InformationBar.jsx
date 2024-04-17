import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import ComingUp from "./coming-up/ComingUp";
import CurrentlyPlaying from "./currently-playing/CurrentlyPlaying";
import styles from "./InformationBar.module.css";
import ornament from "../../public/images/ornament.svg";
function InformationBar(props) {
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let today = new Date();
  const nowDay = days[today.getDay()];
  const nowTime = today.getHours();
  const playingIndex =
    Math.floor(nowTime / 2) > 0 ? Math.floor(nowTime / 2) : 1;
  const [data, setData] = useState();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  useEffect(() => {
    async function fetchData() {
      fetch("https://vikingfest-api.onrender.com/schedule").then((res) =>
        res.json().then((data) => {
          setData(data);
          setIsDataLoaded(true);
        })
      );
    }

    fetchData();
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        {data && isDataLoaded && nowDay && playingIndex && (
          <div className={styles.display}>
            <div className={styles.eventWrapper}>
              <CurrentlyPlaying
                stage="Midgard"
                artist={data.Midgard[nowDay][playingIndex].act}
              />
              <CurrentlyPlaying
                stage="Vanaheim"
                artist={data.Vanaheim[nowDay][playingIndex].act}
              />
              <CurrentlyPlaying
                stage="Jotunheim"
                artist={data.Jotunheim[nowDay][playingIndex].act}
              />
            </div>
            <div className={styles.eventWrapper}>
              <ComingUp
                stage="Midgard"
                start={`${playingIndex * 2 + 2}:00`}
                artist={
                  playingIndex >= 11
                    ? data.Midgard[days[today.getDay() + 1]][1].act
                    : data.Midgard[nowDay][playingIndex + 1].act
                }
              />
              <ComingUp
                stage="Vanaheim"
                start={`${playingIndex * 2 + 2}:00`}
                artist={
                  playingIndex >= 11
                    ? data.Vanaheim[days[today.getDay() + 1]][1].act
                    : data.Vanaheim[nowDay][playingIndex + 1].act
                }
              />
              <ComingUp
                stage="Jotunheim"
                start={`${playingIndex * 2 + 2}:00`}
                artist={
                  playingIndex >= 11
                    ? data.Vanaheim[days[today.getDay() + 1]][1].act
                    : data.Vanaheim[nowDay][playingIndex + 1].act
                }
              />
            </div>
          </div>
        )}
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
