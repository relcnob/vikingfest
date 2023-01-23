import React from "react";
import AboutSection from "../components/about-section/AboutSection";
import styles from "../components/impact-page/impact.module.css";
import peopleImage from "../public/images/peopleVikingMuseum.webp";
import buildingImage from "../public/images/vikingmuseumbuilding.webp";
import boatImage from "../public/images/vikingboatrestoration.webp";
function impact() {
  return (
    <section className={styles.section}>
      <h1>BEYOND THE FESTIVAL</h1>
      <AboutSection
        headline="DANISH VIKING MUSEUM"
        content="The Danish Viking Museum, located in the heart of Denmark, is dedicated to preserving and showcasing the rich history and culture of the Viking people. The museum features exhibits on Viking daily life, warfare, trade, and religious beliefs, as well as a replica Viking village where visitors can experience what it was like to live as a Viking. The museum also houses a large collection of authentic artifacts, including weapons, jewelry, and everyday items, that were discovered through archaeological excavations. The Danish Viking Museum is a must-see destination for anyone interested in learning more about the Vikings and their impact on world history."
        image={buildingImage}
      />
      <AboutSection
        headline="THE IMPACT OF YOUR VISIT"
        content="Your attendance at the Viking themed music festival not only allows you to enjoy a unique and entertaining experience, but it also makes a direct impact on preserving and promoting the history and heritage of the Vikings. All proceeds from ticket sales go towards the Danish Viking Museum, which is dedicated to preserving and showcasing the rich history and culture of the Viking people. Your visit to the festival helps to support the ongoing preservation and promotion of this important heritage, ensuring that it will be available for future generations to learn from and enjoy. By attending the festival, you are not only having a great time but also actively supporting the preservation of the viking heritage."
        image={peopleImage}
        order="rev"
      />

      <AboutSection
        headline="PRESERVATION OF VIKING HERITAGE"
        content="The proceeds from the festival will go towards the Danish Viking Museum, which is dedicated to preserving and promoting the history and culture of the Viking people. The funds will be used to support ongoing preservation efforts, such as the restoration of ancient Viking boats, the maintenance of the replica Viking village, and the acquisition of new artifacts for the museum's collections. Additionally, the money will also be used to support educational programs and research initiatives, which help to promote a deeper understanding of the Viking heritage among the general public. By attending the festival, you will be not only enjoying a unique and entertaining experience but also actively supporting the preservation of the Viking heritage and promoting it."
        image={boatImage}
      />
    </section>
  );
}

export default impact;
