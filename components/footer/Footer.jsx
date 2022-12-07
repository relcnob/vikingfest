import React from "react";
import Anchor from "../Anchor";
function Footer() {
  return (
    <footer>
      <Anchor href="/">VIKINGfest</Anchor>
      <section>
        <h2>About</h2>
        <Anchor href="/">Our Story</Anchor>
        <Anchor href="/">Bands</Anchor>
        <Anchor href="/">Vikingfest area</Anchor>
      </section>
      <section>
        <h2>Info</h2>
        <Anchor href="/">Order tickets</Anchor>
        <Anchor href="/">Contact</Anchor>
        <Anchor href="/">Schedule app</Anchor>
        <Anchor href="/">FAQ</Anchor>
      </section>
      <section>
        <h2>Info</h2>
        <p>Valhalla</p>
        <p>Asgard 21 3TV</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>+45 43 67 18 18</p>
        <Anchor href="/">info@vikingfest.io</Anchor>
        <div className="social-links">
          <Anchor href="/">facebook</Anchor>
          <Anchor href="/">instagram</Anchor>
          <Anchor href="/">twitter</Anchor>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
