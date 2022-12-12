import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
