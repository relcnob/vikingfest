import React from "react";
import BandScheduleItem from "./band-schedule-item/BandScheduleItem";
import styles from "./BandSchedule.module.css";
import { useState, useEffect } from "react";

function BandSchedule(props) {
  const stages = Object.keys(props.schedule);

  const midgard = Object.entries(props.schedule[stages[0]]);
  const vanaheim = Object.entries(props.schedule[stages[1]]);
  const jotunheim = Object.entries(props.schedule[stages[2]]);
  let midgardActs = [];
  let vanaheimActs = [];
  let jotunheimActs = [];

  midgard.forEach((day) => {
    day[1].forEach((entry) => {
      if (entry.act == props.name) {
        let gig = [entry, day[0]];
        midgardActs.push(gig);
      }
    });
  });

  jotunheim.forEach((day) => {
    day[1].forEach((entry) => {
      if (entry.act == props.name) {
        let gig = [entry, day[0]];
        jotunheimActs.push(gig);
      }
    });
  });

  vanaheim.forEach((day) => {
    day[1].forEach((entry) => {
      if (entry.act == props.name) {
        let gig = [entry, day[0]];
        vanaheimActs.push(gig);
      }
    });
  });

  return (
    <article className={styles.article}>
      <h2>{props.name} Schedule</h2>
      <ol>
        {midgardActs.length > 0
          ? midgardActs.map((act) => {
              return (
                <BandScheduleItem
                  date={act[1].toUpperCase()}
                  stage="Midgard"
                  key={act.name}
                  time={`${act[0].start} - ${act[0].end}`}
                ></BandScheduleItem>
              );
            })
          : ""}
        {vanaheimActs.length > 0
          ? vanaheimActs.map((act) => {
              return (
                <BandScheduleItem
                  date={act[1].toUpperCase()}
                  stage="Vanaheim"
                  key={act.name}
                  time={`${act[0].start} - ${act[0].end}`}
                ></BandScheduleItem>
              );
            })
          : ""}
        {jotunheimActs.length > 0
          ? jotunheimActs.map((act) => {
              return (
                <BandScheduleItem
                  date={act[1].toUpperCase()}
                  stage="Jotunheim"
                  key={act.name}
                  time={`${act[0].start} - ${act[0].end}`}
                ></BandScheduleItem>
              );
            })
          : ""}
        {jotunheimActs.length === 0 &&
        vanaheimActs.length === 0 &&
        midgardActs.length === 0 ? (
          <BandScheduleItem
            key="not playing"
            time="Band not playing at Vikingfest or Cancelled"
          ></BandScheduleItem>
        ) : (
          ""
        )}
      </ol>
    </article>
  );
}

export default BandSchedule;
