import React from "react";
import Image from "next/image";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import background from "../../public/images/vikingfest_background.svg";
import middleground from "../../public/images/vikingfest_middleground.svg";
import foreground from "../../public/images/vikingfest_foreground.svg";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <ParallaxProvider>
      <ParallaxBanner className={styles.parallaxWrapper}>
        <ParallaxBannerLayer speed={-50} className={styles.backgroundWrapper}>
          <Image
            src={background}
            alt="foreground"
            className={styles.background}
          ></Image>
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-20} className={styles.middlegroundWrapper}>
          <Image
            src={middleground}
            alt="middleground"
            className={styles.middleground}
          ></Image>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={-35}>
          <div className={styles.heroWrapper}>
            <h1 className={styles.headline}>
              VIKING<em>fest</em> 2022 <br /> PARTY EVERYDAY
            </h1>
            <p>24 hours, 7 days a week</p>
          </div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className={styles.foregroundWrapper}>
          <Image
            src={foreground}
            alt="foreground"
            className={styles.foreground}
          ></Image>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </ParallaxProvider>
  );
}

export default Hero;
