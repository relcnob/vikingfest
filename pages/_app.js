import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar></NavBar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
