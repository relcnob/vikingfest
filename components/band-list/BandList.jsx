import styles from "./BandList.module.css";
import BandCard from "./BandCard/BandCard";
import { useEffect, useState } from "react";
function BandList(props) {
  const [sortValue, setSortValue] = useState("Sorting");
  const [filterValue, setFilterValue] = useState("All genres");
  let displayedArr;

  function handleFilter() {
    if (filterValue != "All genres") {
      const filteredArray = [...props.data];

      function isMatching(band) {
        if (band.genre === filterValue) {
          return band;
        } else {
          return 0;
        }
      }

      displayedArr = filteredArray.filter(isMatching);
      props.setMaxPage(Math.ceil(displayedArr.length / 14));
      props.setCurrentPage(1);
    } else {
      displayedArr = props.data;
      props.setMaxPage(Math.ceil(displayedArr.length / 14));
    }
  }

  function handleSort() {
    if (sortValue != "Sorting") {
      if (sortValue === "By name A-Z") {
        displayedArr.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        displayedArr.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    } else {
      displayedArr = displayedArr;
    }
  }

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
  }
  handleFilter();
  handleSort();
  handlePage();

  return (
    <section className={styles.wrapper}>
      <header className={styles.bandListHeader}>
        <h2 className={styles.headline}>Artists</h2>
        <div className={styles.bandListOptions}>
          <span className={styles.function}>
            <select
              value={sortValue}
              onChange={(e) => {
                setSortValue(e.target.value);
              }}
            >
              <option>Sorting</option>
              <option>By name A-Z</option>
              <option>By name Z-A</option>
            </select>
          </span>
          <span className={styles.function}>
            <select
              value={filterValue}
              onChange={(e) => {
                setFilterValue(e.target.value);
              }}
            >
              <option>All genres</option>
              <option>Country</option>
              <option>Electronic</option>
              <option>Pop</option>
              <option>Punk</option>
              <option>Rap</option>
              <option>Rock</option>
              <option>Soul</option>
              <option>World</option>
            </select>
          </span>
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
