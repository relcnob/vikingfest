import Image from "next/image";
import styles from "./EventCard.module.css";
import placeholder from "../../../public/images/placeholder-viking.webp";
function EventCard(props) {
  return (
    <article className={styles.cardWrapper}>
      <Image alt="Image here" src={placeholder} className={styles.img} />
      <div className={styles.contentWrapper}>
        <h1 className={styles.cardHeadline}>{props.headline}</h1>
        <div className={styles.eventDetails}>
          <p>{props.date}</p>
          <p>{props.time}</p>
          <p className={`${styles[props.stage]}`}> {props.stage}</p>
        </div>
        <p className={styles.cardText}>{props.text}</p>
      </div>
    </article>
  );
}

export default EventCard;
