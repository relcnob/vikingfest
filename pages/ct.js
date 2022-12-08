import React from "react";
import InformationBar from "../components/informationBar/InformationBar";
import Sponsors from "../components/sponsors/Sponsors";
import UpcomingEvents from "../components/upcoming-events/UpcomingEvents";
import Hero from "../components/hero/Hero";
import ArtistsOverview from "../components/artists-overview/ArtistsOverview";
function testpage() {
  return (
    <>
      <Hero />
      <InformationBar />
      <ArtistsOverview />
      <Sponsors />
      <UpcomingEvents />
    </>
  );
}

export default testpage;
