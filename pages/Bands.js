import React from "react";
import BandList from "../components/band-list/BandList";
function Bands({ data }) {
  // Rendering data
  return (
    <>
      <BandList data={data} />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8080/bands`);
  const data = await res.json();
  console.log(data);

  // Pass data to the page via props
  return { props: { data } };
}

export default Bands;
