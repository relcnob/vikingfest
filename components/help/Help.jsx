import React from "react";
import Anchor from "../Anchor";
import styles from "./Help.module.css";
function Help() {
  return (
    <section className={styles.helpSection}>
      <div className="container">
        <h3>Need More Help?</h3>
        <ul>
          <li>
            <Anchor href="/about#terms">
              <button>TERMS & CONDITIONS</button>
            </Anchor>
          </li>
          <li>
            <Anchor href="/about#contact">
              <button>CONTACT</button>
            </Anchor>
          </li>
          <li>
            <Anchor href="/about#faq">
              <button>FAQ</button>
            </Anchor>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Help;