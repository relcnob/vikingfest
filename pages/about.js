import React from "react";
import AboutSection from "../components/about-section/AboutSection";
import stageImage from "../public/images/stage_midjourney_1.webp";
import atendeeImage from "../public/images/atendee_midjourney_1.webp";
import atendeeImage2 from "../public/images/atendee_midjourney_2.webp";
import FaqAccordion from "../components/faq-accordion/FaqAccordion.jsx";

function about() {
  return (
    <div>
      <AboutSection
        headline="ABOUT VIKINGfest"
        content="VIKINGfest is a unique music festival taking place on a series of islands. It offers attendees the opportunity to experience the rich culture and history of the Vikings in a fun and festive setting.
		VIKINGfest is a nonstop, 24-hour event, running 7 days a week. Attendees can expect a truly unique and immersive Viking experience, complete with authentic food, drink, and entertainment. Whether you're a fan of Viking culture or just looking for a fun and exciting music festival, VIKINGfest is the place to be."
        image={stageImage}
      ></AboutSection>
      <AboutSection
        headline="FESTIVAL AREA"
        content="The festival features a variety of camping areas, each with its own unique sigil and color. These include Muspelheim, Svartheim, Alfheim, Helheim, and Niflheim. Each camping area offers a different atmosphere and experience, so attendees can choose the one that best suits their preferences. In addition to the camping areas, there are also several performance stages at the festival, including Midgard, Jotunheim, and Vanaheim. Each of these stages has its own assigned color and sigil, and will feature a variety of music and entertainment throughout the festival."
        image={atendeeImage}
        order="rev"
      ></AboutSection>
      <AboutSection
        headline="PERFORMERS"
        content="At VIKINGfest, attendees can expect to experience a wide variety of music and entertainment that is inspired by Viking culture and traditions. This may include traditional Viking music, folk music, and contemporary music that has been influenced by Viking themes or aesthetics.
		
		In addition to music, VIKINGfest may also feature a variety of other entertainment and activities, such as reenactments, crafts, games, and more. Whether you're a fan of traditional Viking music or just looking for a fun and unique festival experience, VIKINGfest has something for everyone."
        image={atendeeImage2}
      ></AboutSection>

      <FaqAccordion></FaqAccordion>
    </div>
  );
}

export default about;
