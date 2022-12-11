import React from "react";
import Image from "next/image";
import BandAbout from "./band-about/BandAbout";
import BandSchedule from "./band-schedule/BandSchedule";
import styles from "./BandView.module.css";
import ornament from "../../public/images/ornament.svg";
import placeholderImage from "../../public/images/placeholderBand.png";
function BandView() {
  return (
    <div className={styles.bandView}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.image}>
            <Image className={styles.image} src={placeholderImage} alt={"band name"} />
            <Image className={styles.ornamentTopRight} src={ornament} alt={"ornament"} />
            <Image className={styles.ornamentBottomLeft} src={ornament} alt={"ornament"} />
          </div>
          <div class={styles.about}>
            <BandAbout
              name="SON & SONS"
              genre="alternative rock"
              id="1"
              image="img"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, assumenda. Quod in, numquam tenetur voluptatibus excepturi et consequuntur, quis odit tempora illo quasi vero voluptatum, explicabo iure qui deserunt nihil?
              Quibusdam necessitatibus ea quis doloremque dolore, autem illo consequatur soluta delectus temporibus, voluptates, pariatur ipsum quisquam eos?"
              members="jacob klauristsen, klaus petersen, peter jones, jonas jacobsen "
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
