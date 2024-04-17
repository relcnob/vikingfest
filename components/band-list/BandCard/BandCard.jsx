import styles from "./BandCard.module.css";
import Image from "next/image";
import imageSrc from "../../../public/images/placeholder-viking.webp";
import shieldOverlay from "../../../public/images/shield.svg";
import Anchor from "../../Anchor";
function BandCard(props) {
  const getImage = () => {
    if (props.image.includes("placeimg")) {
      return `https://via.assets.so/album.png?id=${Math.floor(
        Math.random() * 64 + 1
      )}&q=95&w=360&h=360&fit=fill`;
    } else {
      return props.image.includes("http")
        ? props.image
        : `https://vikingfest-api.onrender.com/logos/${props.image}`;
    }
  };

  return (
    <article className={styles.bandCard}>
      <section className={`${styles.ornaments} ${styles[props.genre]}`}>
        <span>
          <svg viewBox="0 0 84 84">
            <g>
              <g>
                <polygon points="41,0.2 41,41.7 0,41.7 0,35.7 35,35.7 35,0.2 		" />
              </g>
              <g>
                <polygon
                  points="83,0.4 83,32.7 60.8,32.7 60.8,61.9 31.9,61.9 31.9,83.2 0,83.2 0,77.2 25.9,77.2 25.9,61.9 0,61.9 
			0,55.9 54.8,55.9 54.8,0.4 60.8,0.4 60.8,26.7 77,26.7 77,0.4 		"
                />
              </g>
            </g>
          </svg>
        </span>
        <span>
          <svg viewBox="0 0 84 84">
            <g>
              <g>
                <polygon points="41,0.2 41,41.7 0,41.7 0,35.7 35,35.7 35,0.2 		" />
              </g>
              <g>
                <polygon
                  points="83,0.4 83,32.7 60.8,32.7 60.8,61.9 31.9,61.9 31.9,83.2 0,83.2 0,77.2 25.9,77.2 25.9,61.9 0,61.9 
			0,55.9 54.8,55.9 54.8,0.4 60.8,0.4 60.8,26.7 77,26.7 77,0.4 		"
                />
              </g>
            </g>
          </svg>
        </span>
        <span>
          <svg viewBox="0 0 84 84">
            <g>
              <g>
                <polygon points="41,0.2 41,41.7 0,41.7 0,35.7 35,35.7 35,0.2 		" />
              </g>
              <g>
                <polygon
                  points="83,0.4 83,32.7 60.8,32.7 60.8,61.9 31.9,61.9 31.9,83.2 0,83.2 0,77.2 25.9,77.2 25.9,61.9 0,61.9 
			0,55.9 54.8,55.9 54.8,0.4 60.8,0.4 60.8,26.7 77,26.7 77,0.4 		"
                />
              </g>
            </g>
          </svg>
        </span>
        <span>
          <svg viewBox="0 0 84 84">
            <g>
              <g>
                <polygon points="41,0.2 41,41.7 0,41.7 0,35.7 35,35.7 35,0.2 		" />
              </g>
              <g>
                <polygon
                  points="83,0.4 83,32.7 60.8,32.7 60.8,61.9 31.9,61.9 31.9,83.2 0,83.2 0,77.2 25.9,77.2 25.9,61.9 0,61.9 
			0,55.9 54.8,55.9 54.8,0.4 60.8,0.4 60.8,26.7 77,26.7 77,0.4 		"
                />
              </g>
            </g>
          </svg>
        </span>
      </section>
      <Image
        src={shieldOverlay}
        alt="shield"
        className={styles.shieldOverlay}
      ></Image>
      <Image
        src={getImage()}
        alt="bandimage"
        className={styles.bandImage}
        width="768"
        height="768"
      ></Image>
      <section className={styles.bandDetails}>
        <h2>{props.name}</h2>
        <p>{props.genre}</p>
        <Anchor href={`/bands/${props.id}`}>Check details</Anchor>
      </section>
    </article>
  );
}

export default BandCard;
