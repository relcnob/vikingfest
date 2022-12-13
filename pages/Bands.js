import React from "react";
import BandList from "../components/band-list/BandList";
import { useEffect, useState } from "react";
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
      <span
        onClick={() => {
          currentPage > 1 ? setCurrentPage(currentPage + -1) : [];
        }}
      >
        -
      </span>
      <span>{currentPage}</span>
      <span
        onClick={() => {
          currentPage < 9 ? setCurrentPage(currentPage + 1) : [];
        }}
      >
        +
      </span>
    </>
  );
}

export default Bands;
