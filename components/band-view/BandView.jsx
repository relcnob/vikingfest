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
            <span
              className={`${styles.ornamentTopRight} ${
                styles[props.data.genre]
              }`}
            >
              <svg viewBox="0 0 84 84">
                <g>
                  <g>
                    <polygon points="41,0.2 41,41.7 0,41.7 0,35.7 35,35.7 35,0.2 		" />
                  </g>
                  <g>
                    <polygon
                      points="83,0.4 83,32.7 60.8,32.7 60.8,61.9 31.9,61.9 31.9,83.2 0,83.2 0,77.2 25.9,77.2 25.9,61.9 0,61.9 
			0,55.9 54.8,55.9 54.8,0.4 60.8,0.4 60.8,26.7 77,26.7 77,0.4 		"
                    />
                  </g>
                </g>
              </svg>
            </span>
            <span
              className={`${styles.ornamentBottomLeft} ${
                styles[props.data.genre]
              }`}
            >
              <svg viewBox="0 0 84 84">
                <g>
                  <g>
                    <polygon points="41,0.2 41,41.7 0,41.7 0,35.7 35,35.7 35,0.2 		" />
                  </g>
                  <g>
                    <polygon
                      points="83,0.4 83,32.7 60.8,32.7 60.8,61.9 31.9,61.9 31.9,83.2 0,83.2 0,77.2 25.9,77.2 25.9,61.9 0,61.9 
			0,55.9 54.8,55.9 54.8,0.4 60.8,0.4 60.8,26.7 77,26.7 77,0.4 		"
                    />
                  </g>
                </g>
              </svg>
            </span>
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
          <BandSchedule name={props.data.name} schedule={props.schedule} />
          {/* <CampingMap/> */}
        </div>
      </div>
    </div>
  );
}

export default BandView;
