import Head from "next/head";
import Hero from "../components/hero/Hero.jsx";
import InformationBar from "../components/informationBar/InformationBar.jsx";
import ArtistsOverview from "../components/artists-overview/ArtistsOverview.jsx";
/* import AreaOverview from "../components/area-overview/AreaOverview.jsx"; */
import Sponsors from "../components/sponsors/Sponsors.jsx";
import UpcomingEvents from "../components/upcoming-events/UpcomingEvents.jsx";
/* import Help from "../components/help/Help.jsx"; */
export default function Home() {
  return (
    <div>
      <Head>
        <title>VIKINGfest</title>
        <meta name="description" content="FooFest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <InformationBar />
        <ArtistsOverview />
        {/* <AreaOverview/> */}
        <Sponsors />
        <UpcomingEvents />
        {/* <Help /> */}
      </main>
    </div>
  );
}
