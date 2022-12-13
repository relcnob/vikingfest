import styles from "./BandList.module.css";
import BandCard from "./BandCard/BandCard";
import { useEffect, useState } from "react";
function BandList(props) {
  console.log(props.start);
  const displayedArr = props.data;
  let slicedArr;
  function handlePage() {
    let firstIndex, lastIndex;
    if (props.start === 1) {
      firstIndex = 0;
      lastIndex = props.start * 14;
    } else {
      firstIndex = props.start * 14 - 14;
      lastIndex = props.start * 14;
    }
    slicedArr = displayedArr.slice(firstIndex, lastIndex);
    console.log(slicedArr);
    // console.log("first", firstIndex);
    // console.log("last", lastIndex);
  }
  handlePage();

  return (
    <section className={styles.wrapper}>
      <header className={styles.bandListHeader}>
        <h2 className={styles.headline}>Artists</h2>
        <div className={styles.bandListOptions}>
          <p className={styles.function}>Sort</p>
          <p className={styles.function}>Filter</p>
        </div>
      </header>
      <div className={styles.bandList}>
        {slicedArr.map((band) => {
          return (
            <BandCard
              key={band.slug}
              name={band.name}
              genre={band.genre}
              id={band.slug}
              image={band.logo}
            ></BandCard>
          );
        })}
      </div>
    </section>
  );
}

export default BandList;
