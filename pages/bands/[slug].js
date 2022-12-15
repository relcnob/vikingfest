import BandView from "../../components/band-view/BandView.jsx";

function bandPage(props) {
  console.log(props.data);
  return <BandView data={props.data}></BandView>;
}

export async function getServerSideProps(context) {
  const slug = context.params.slug;
  const res = await fetch("http://localhost:8080/bands");

  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();

  const band = data.filter((entry) => entry.slug === slug);
  return {
    props: {
      data: band[0],
    },
  };
}

export default bandPage;
