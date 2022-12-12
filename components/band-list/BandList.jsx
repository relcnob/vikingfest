import styles from "./BandList.module.css";
import BandCard from "./BandCard/BandCard";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
function BandList(props) {
  console.log(props);
  console.log(props.data);

  return (
    <section className={styles.wrapper}>
      <header className={styles.bandListHeader}>
        <h2 className={styles.headline}>Artists</h2>
        <div className={styles.bandListOptions}>
          <p className={styles.function}>Sort</p>
          <p className={styles.function}>Filter</p>
          <p className={styles.function}>Search</p>
        </div>
      </header>

      <div className={styles.bandList}>
        {props.data.map((BandCard) => {
          return <BandCard key={props.data.name} name="son & sons" genre="alternative rock" image="img"></BandCard>;
        })}
        <BandCard name="son & sons" genre="alternative rock" id="1" image="img"></BandCard>
        <BandCard name="son & sons" genre="alternative rock" id="1" image="img"></BandCard>
        <BandCard name="son & sons" genre="alternative rock" id="1" image="img"></BandCard>
        <BandCard name="son & sons" genre="alternative rock" id="1" image="img"></BandCard>
        <BandCard name="son & sons" genre="alternative rock" id="1" image="img"></BandCard>
        <BandCard name="son & sons" genre="alternative rock" id="1" image="img"></BandCard>
        <BandCard name="son & sons" genre="alternative rock" id="1" image="img"></BandCard>
        <BandCard name="son & sons" genre="alternative rock" id="1" image="img"></BandCard>
        <BandCard name="son & sons" genre="alternative rock" id="1" image="img"></BandCard>
        <BandCard name="son & sons" genre="alternative rock" id="1" image="img"></BandCard>
        <BandCard name="son & sons" genre="alternative rock" id="1" image="img"></BandCard>
        <BandCard name="son & sons" genre="alternative rock" id="1" image="img"></BandCard>
        <BandCard name="son & sons" genre="alternative rock" id="1" image="img"></BandCard>
        <BandCard name="son & sons" genre="alternative rock" id="1" image="img"></BandCard>
      </div>
    </section>
  );
}

export default BandList;
