import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../components/navbar/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
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
