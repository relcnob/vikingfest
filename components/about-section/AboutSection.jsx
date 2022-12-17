import React from "react";
import Image from "next/image";
import styles from "./AboutSection.module.css";
function AboutSection(props) {
  return (
    <section className={`${styles.wrapper} ${styles[props.order]}`}>
      <Image
        alt={props.headline}
        src={props.image}
        height="768"
        width="768"
        className={styles.img}
      ></Image>
      <div className={props.order === "rev" ? styles.reverse : ""}>
        <h2 className={styles.headline}>{props.headline}</h2>
        <p className={styles.content}>{props.content}</p>
      </div>
    </section>
  );
}

export default AboutSection;
