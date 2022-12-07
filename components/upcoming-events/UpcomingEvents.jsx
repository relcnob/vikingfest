import styles from "./UpcomingEvents.module.css";
import EventCard from "./event-card/EventCard";

function UpcomingEvents() {
  return (
    <section className={styles.upcomingEventsWrapper}>
      <h1 className={styles.headline}>Upcoming Events</h1>
      <section className={styles.cardWrapper}>
        <EventCard />
        <EventCard />
        <EventCard />
      </section>
    </section>
  );
}

export default UpcomingEvents;
