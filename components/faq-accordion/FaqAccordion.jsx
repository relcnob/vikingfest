import styles from "./FaqAccordion.module.css";
import AccordionItem from "./accordion-item/AccordionItem.jsx";
function FaqAccordion() {
  return (
    <section className={styles.accordionWrapper}>
      <AccordionItem
        question="What is the location of VIKINGfest?"
        answer="VIKINGfest is located in Valhalla, you can find the exact location in the footer part of the website."
      ></AccordionItem>
      <AccordionItem
        question="How do I purchase tickets for VIKINGfest?"
        answer="You can book a tricket through our booking feature on this website."
      ></AccordionItem>
      <AccordionItem
        question="Are there age restrictions for VIKINGfest?"
        answer="VIKINGfest is an experience for adults, you can find more information in our terms of service."
      ></AccordionItem>
      <AccordionItem
        question="How do I get to VIKINGfest?"
        answer="You can arrive at the island by using your own longship or any other available drakkars provided by VIKINGfest."
      ></AccordionItem>
      <AccordionItem
        question="Is there a dress code for VIKINGfest?"
        answer="You can wear whatever you like to wear, although Viking-styled clothing is preffered."
      ></AccordionItem>
    </section>
  );
}

export default FaqAccordion;
