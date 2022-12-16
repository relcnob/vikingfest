import Image from "next/image";
import styles from "./EventCard.module.css";
function EventCard(props) {
  return (
    <article className={styles.cardWrapper}>
      <Image
        alt={props.headline}
        src={props.image}
        className={styles.img}
        width="512"
        height="512"
      />
      <div className={styles.contentWrapper}>
        <h1 className={styles.cardHeadline}>{props.headline}</h1>
        <div className={styles.eventDetails}>
          <p>{props.date}</p>
          <p>{props.time}</p>
          <p className={`${styles[props.stage.toLowerCase()]}`}>
            {props.stage}
          </p>
        </div>
        <p className={styles.cardText}>{props.text}</p>
      </div>
    </article>
  );
}

export default EventCard;
