import Head from "next/head";
import BandView from "../components/band-view/BandView";

export default function band() {
  return (
    <div>
      <Head>
        <title>VIKINGfest | Band</title>
        <meta name="description" content="FooFest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BandView />
      </main>
    </div>
  );
}
