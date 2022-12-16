import React from "react";
import styles from "./TermsAndConditions.module.css";
function TermsAndConditions() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.header}>
        <em>VIKING</em>fest terms and conditions
      </h1>
      <ol>
        <li>
          All attendees must be at least 18 years of age or accompanied by a
          parent or guardian.
        </li>
        <li>
          All attendees must purchase a ticket to gain entry to the festival
          grounds.
        </li>
        <li>
          All attendees must present a valid ID upon entry to the festival.
        </li>
        <li>
          The sale or distribution of illegal substances is strictly prohibited
          on festival grounds.
        </li>
        <li>
          The possession or use of weapons of any kind is strictly prohibited on
          festival grounds.
        </li>
        <li>
          Attendees must follow all festival rules and guidelines as posted on
          festival grounds and communicated by festival staff.
        </li>
        <li>
          Attendees must respect the rights and property of other attendees and
          festival staff. Any behavior deemed disruptive or harmful to others
          will not be tolerated.
        </li>
        <li>
          The festival is not responsible for any lost or stolen personal items.
          Attendees are encouraged to keep their belongings secure at all times.
        </li>
        <li>
          The festival reserves the right to refuse entry or remove any attendee
          from the festival grounds for any reason.
        </li>
        <li>
          The festival is held rain or shine and tickets are non-refundable.
        </li>
        <li>
          The festival is not responsible for any injuries or accidents that may
          occur on festival grounds. Attendees are encouraged to take necessary
          precautions to ensure their own safety.
        </li>
        <li>
          By purchasing a ticket to the festival, attendees agree to the terms
          and conditions outlined above and acknowledge that they have read and
          understood them.
        </li>
      </ol>
    </section>
  );
}

export default TermsAndConditions;
