import React from "react";
import Anchor from "../Anchor";
import AreaOverview from "../area-overview/AreaOverview";
import styles from "./AreaSection.module.css";
function AreaSection() {
  return (
    <section className={styles.sectionWrapper}>
      <div>
        <h2>Area Overview</h2>
        <p>
          The camping areas are named after different realms in Norse mythology,
          with Muspelheim being the realm of fire, Niflheim being the realm of
          ice and mist, Helheim being the realm of the dead, Svartheim being the
          realm of the dwarves, and Alfheim being the realm of the light elves.
          The stages are also named after different realms in Norse mythology,
          with Jotunheim being the realm of the giants, Midgard being the realm
          of humans, and Vanaheim being the realm of the Vanir, a group of
          deities in Norse mythology. VIKINGfest is a unique and immersive event
          that combines music and Norse mythology in a creative way.
        </p>
        <Anchor href="/order" className="button">
          Book tickets
        </Anchor>
      </div>
      <AreaOverview></AreaOverview>
    </section>
  );
}

export default AreaSection;
