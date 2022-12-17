import React from "react";
import styles from "./AccordionItem.module.css";
import { useState } from "react";
function AccordionItem(props) {
  const [showItem, setShowItem] = useState("");
  return (
    <div className={styles.wrapper}>
      <h3
        onClick={() => {
          showItem == "" ? setShowItem("showSection") : setShowItem("");
        }}
      >
        {props.question}
        <span>{showItem === "" ? "+" : "-"}</span>
      </h3>
      <div className={styles[showItem]}>
        <p>{props.answer}</p>
      </div>
    </div>
  );
}

export default AccordionItem;
