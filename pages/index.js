import Head from "next/head";
import Hero from "../components/hero/Hero.jsx";
import InformationBar from "../components/informationBar/InformationBar.jsx";
import ArtistsOverview from "../components/artists-overview/ArtistsOverview.jsx";
import AreaSection from "../components/area-section/AreaSection.jsx";
import Sponsors from "../components/sponsors/Sponsors.jsx";
import UpcomingEvents from "../components/upcoming-events/UpcomingEvents.jsx";
import Help from "../components/help/Help.jsx";
function Home(props) {
  return (
    <div>
      <Head>
        <title>VIKINGfest 2022 </title>
        <meta name="description" content="VIKINGfest 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <InformationBar schedule={props.data} />
        <ArtistsOverview />
        <AreaSection></AreaSection>
        <Sponsors />
        <UpcomingEvents />
        <Help />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/schedule");
  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data: data,
    },
  };
}

export default Home;
