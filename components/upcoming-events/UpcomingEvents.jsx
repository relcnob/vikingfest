import styles from "./UpcomingEvents.module.css";
import EventCard from "./event-card/EventCard";
import axethrowing from "../../public/images/axe-throwing.webp";
import odinmeetup from "../../public/images/meeting-with-odin.webp";
import drinkwiththor from "../../public/images/drink-with-thor.webp";
function UpcomingEvents() {
  return (
    <section className={styles.upcomingEventsWrapper}>
      <h1 className={styles.headline}>Upcoming Events</h1>
      <section className={styles.cardWrapper}>
        <EventCard
          headline="Meeting with Odin"
          date="Monday"
          time="16:00"
          stage="Helheim"
          text="Festival Meeting with Odin is a one-of-a-kind event that brings attendees face-to-face with the Allfather himself, Odin. Known as the god of wisdom, war, and death in Norse mythology, Odin is a powerful and revered figure who is said to possess great knowledge and insight."
          image={odinmeetup}
        />
        <EventCard
          headline="Axe throwing competition"
          date="Wednesday"
          time="13:00"
          stage="Svartheim"
          text="The Festival Axe Throwing Competition is a thrilling event that puts attendees' skills and accuracy to the test. This high-energy competition is open to participants of all ages and skill levels, and offers a chance for attendees to hone their axe-throwing skills."
          image={axethrowing}
        />
        <EventCard
          headline="Drink with Thor"
          date="Friday"
          time="12:00"
          stage="Niflheim"
          text="The Drinking Competition with Thor is a rowdy and entertaining event that celebrates the legendary strength and hearty appetite of the god of thunder. Open to participants of legal drinking age, this competition combines elements of traditional drinking games with Thor-themed challenges and activities."
          image={drinkwiththor}
        />
      </section>
    </section>
  );
}

export default UpcomingEvents;
