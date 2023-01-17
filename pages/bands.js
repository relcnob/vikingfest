import React from "react";
import BandList from "../components/band-list/BandList";
import { useEffect, useState } from "react";
import styles from "../components/band-list/Pagenav.module.css";

function Bands({ data }) {
  const [currentArray, setCurrentArray] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(Math.ceil(data.length / 14));
  return (
    <>
      <BandList
        data={data}
        start={currentPage}
        setMaxPage={setMaxPage}
        setCurrentPage={setCurrentPage}
      />
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
          className={currentPage === maxPage ? styles.grayedOut : ""}
          onClick={() => {
            currentPage < maxPage ? setCurrentPage(currentPage + 1) : [];
          }}
        >
          {`>`}
        </span>
      </div>
    </>
  );
}

export async function getStaticProps(ctx) {
  const res = await fetch("https://vikingfestserver.fly.dev/bands");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

// export async function getStaticPaths() {

// }

export default Bands;
