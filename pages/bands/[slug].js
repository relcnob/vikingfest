import BandView from "../../components/band-view/BandView.jsx";

function bandPage(props) {
  return <BandView data={props.data} schedule={props.schedule}></BandView>;
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const res = await fetch("https://vikingfestserver.fly.dev/bands");
  const sched = await fetch("https://vikingfestserver.fly.dev/schedule");
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

export async function getStaticPaths() {
  const res = await fetch("https://vikingfestserver.fly.dev/bands");
  const data = await res.json();

  const paths = data.map((band) => {
    return { params: { slug: band.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export default bandPage;
