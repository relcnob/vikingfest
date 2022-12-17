import React from "react";
import styles from "./ArtistsOverview.module.css";
import Anchor from "../Anchor";
function ArtistsOverview() {
  return (
    <section className={styles.artist_list}>
      <div className="container">
        <h2 className={styles.heading}>Artists</h2>
        <ul className={styles.list}>
          <li>
            <Anchor href="/bands/a-perfect-circle">A Perfect Circle</Anchor>
          </li>
          <li>
            <Anchor href="/bands/tool">Tool</Anchor>
          </li>
          <li>
            <Anchor href="/bands/terminalist">Terminalist</Anchor>
          </li>
          <li>
            <Anchor href="/bands/led-zeppelin">Led Zeppelin</Anchor>
          </li>
          <li>
            <Anchor href="/bands/the-beatles">The Beatles</Anchor>
          </li>
          <li>
            <Anchor href="/bands/pink-floyd">Pink Floyd</Anchor>
          </li>
        </ul>
        <ul className={styles["small_list"]}>
          <li>
            <Anchor href="/bands/jenkins-and-sons">Jenkins And Sons</Anchor>
          </li>
          <li>
            <Anchor href="/bands/dibbert-llc">Dibbert LLC</Anchor>
          </li>
          <li>
            <Anchor href="/bands/price-ortiz">Price - Ortiz</Anchor>
          </li>
          <li>
            <Anchor href="/bands/leffler-group">Leffler Group</Anchor>
          </li>
          <li>
            {" "}
            <Anchor href="/bands/schowalter-schowalter-and-padberg">
              Schowalter, Schowalter and Padberg
            </Anchor>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ArtistsOverview;
