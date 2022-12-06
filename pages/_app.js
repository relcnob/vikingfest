import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../components/Navbar/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

{
  /* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&family=Josefin+Sans:wght@700&display=swap" rel="stylesheet"></link> */
}
