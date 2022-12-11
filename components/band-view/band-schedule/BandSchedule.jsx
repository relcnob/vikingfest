import React from "react";
import BandScheduleItem from "./band-schedule-item/BandScheduleItem";
import styles from "./BandSchedule.module.css";

function BandSchedule(props) {
  return (
    <article className={styles.article}>
      <h2>{props.name} Schedule</h2>
      <ol>
        <BandScheduleItem date="01/12" time="16:30" stage="svartheim" />
        <BandScheduleItem date="04/12" time="12:00" stage="alfheim" />
        <BandScheduleItem date="04/12" time="12:00" stage="niflheim" />
        <BandScheduleItem date="04/12" time="12:00" stage="muspelheim" />
        <BandScheduleItem date="04/12" time="12:00" stage="helheim" />
      </ol>
    </article>
  );
}

export default BandSchedule;
