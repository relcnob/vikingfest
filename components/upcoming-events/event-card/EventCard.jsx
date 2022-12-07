import Image from "next/image";
import styles from "./EventCard.module.css";
function EventCard() {
  return (
    <article className={styles.cardWrapper}>
      <Image alt="Image here" />
      <h1>Grab a drink with Thor</h1>
      <div>
        <p>11.12.22</p>
        <p>16:00</p>
        <p>Stage name</p>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,
        aspernatur. Delectus magnam modi praesentium atque vel omnis, odio ab
        aperiam quia sed corporis asperiores culpa!
      </p>
    </article>
  );
}

export default EventCard;
