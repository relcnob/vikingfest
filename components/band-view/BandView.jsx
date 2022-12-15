import React from "react";
import Image from "next/image";
import BandAbout from "./band-about/BandAbout";
import BandSchedule from "./band-schedule/BandSchedule";
import styles from "./BandView.module.css";
import ornament from "../../public/images/ornament.svg";
import placeholderImage from "../../public/images/placeholderBand.png";
function BandView(props) {
  return (
    <div className={styles.bandView}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.image}>
            <Image
              className={styles.image}
              src={
                props.data.logo.includes("http")
                  ? props.data.logo
                  : `http://localhost:8080/logos/${props.data.logo}`
              }
              alt={"band name"}
              width="768"
              height="768"
            />
            <Image
              className={styles.ornamentTopRight}
              src={ornament}
              alt={"ornament"}
            />
            <Image
              className={styles.ornamentBottomLeft}
              src={ornament}
              alt={"ornament"}
            />
          </div>
          <div class={styles.about}>
            <BandAbout
              name={props.data.name}
              genre={props.data.genre}
              members={props.data.members}
              id="1"
              image="img"
              description={props.data.bio}
              schedule=""
            />
          </div>
        </div>
        <div className="bottom">
          <BandSchedule />
          {/* <CampingMap/> */}
        </div>
      </div>
    </div>
  );
}

export default BandView;
