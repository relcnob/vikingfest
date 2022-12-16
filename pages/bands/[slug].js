import BandView from "../../components/band-view/BandView.jsx";

function bandPage(props) {
  return <BandView data={props.data} schedule={props.schedule}></BandView>;
}

export async function getServerSideProps(context) {
  const slug = context.params.slug;
  const res = await fetch("http://localhost:8080/bands");
  const sched = await fetch("http://localhost:8080/schedule");
  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();
  const band = data.filter((entry) => entry.slug === slug);

  const schedule = await sched.json();

  return {
    props: {
      data: band[0],
      schedule,
    },
  };
}

export default bandPage;
