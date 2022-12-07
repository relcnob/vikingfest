import styles from "./UpcomingEvents.module.css";
import EventCard from "./event-card/EventCard";

function UpcomingEvents() {
  return (
    <section className={styles.upcomingEventsWrapper}>
      <h1 className={styles.headline}>Upcoming Events</h1>
      <section className={styles.cardWrapper}>
        <EventCard
          headline="Drink with Thor"
          date="11.12.22"
          time="13:00"
          stage="svartheim"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a nostrum in voluptatem reiciendis corrupti est suscipit voluptatum, natus ab? A nostrum in voluptatem reiciendis corrupti est suscipit voluptatum, natus ab?"
        />
        <EventCard
          headline="Drink with Thor"
          date="11.12.22"
          time="13:00"
          stage="muspelheim"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a nostrum in voluptatem reiciendis corrupti est suscipit voluptatum, natus ab? A nostrum in voluptatem reiciendis corrupti est suscipit voluptatum, natus ab?"
        />
        <EventCard
          headline="Drink with Thor"
          date="11.12.22"
          time="13:00"
          stage="niflheim"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a nostrum in voluptatem reiciendis corrupti est suscipit voluptatum, natus ab? A nostrum in voluptatem reiciendis corrupti est suscipit voluptatum, natus ab?"
        />
      </section>
    </section>
  );
}

export default UpcomingEvents;
