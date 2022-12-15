import React from "react";
import BandList from "../components/band-list/BandList";
import { useEffect, useState } from "react";
import styles from "../components/band-list/Pagenav.module.css";
function Bands() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/bands")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const [currentArray, setCurrentArray] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <BandList data={data} start={currentPage} />
      <div className={styles.pagenavWrapper}>
        <span
          className={currentPage === 1 ? styles.grayedOut : ""}
          onClick={() => {
            currentPage > 1 ? setCurrentPage(currentPage + -1) : [];
          }}
        >
          {`<`}
        </span>
        <span>{currentPage}</span>
        <span
          className={currentPage === 9 ? styles.grayedOut : ""}
          onClick={() => {
            currentPage < 9 ? setCurrentPage(currentPage + 1) : [];
          }}
        >
          {`>`}
        </span>
      </div>
    </>
  );
}

export default Bands;
