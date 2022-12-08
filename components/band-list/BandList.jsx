import styles from "./BandList.module.css";
import BandCard from "./BandCard/BandCard";
function BandList() {
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
        <BandCard
          name="son & sons"
          genre="alternative rock"
          id="1"
          image="img"
        ></BandCard>
        <BandCard
          name="son & sons"
          genre="alternative rock"
          id="1"
          image="img"
        ></BandCard>
        <BandCard
          name="son & sons"
          genre="alternative rock"
          id="1"
          image="img"
        ></BandCard>
        <BandCard
          name="son & sons"
          genre="alternative rock"
          id="1"
          image="img"
        ></BandCard>
        <BandCard
          name="son & sons"
          genre="alternative rock"
          id="1"
          image="img"
        ></BandCard>
        <BandCard
          name="son & sons"
          genre="alternative rock"
          id="1"
          image="img"
        ></BandCard>
        <BandCard
          name="son & sons"
          genre="alternative rock"
          id="1"
          image="img"
        ></BandCard>
        <BandCard
          name="son & sons"
          genre="alternative rock"
          id="1"
          image="img"
        ></BandCard>
        <BandCard
          name="son & sons"
          genre="alternative rock"
          id="1"
          image="img"
        ></BandCard>
        <BandCard
          name="son & sons"
          genre="alternative rock"
          id="1"
          image="img"
        ></BandCard>
        <BandCard
          name="son & sons"
          genre="alternative rock"
          id="1"
          image="img"
        ></BandCard>
        <BandCard
          name="son & sons"
          genre="alternative rock"
          id="1"
          image="img"
        ></BandCard>
        <BandCard
          name="son & sons"
          genre="alternative rock"
          id="1"
          image="img"
        ></BandCard>
        <BandCard
          name="son & sons"
          genre="alternative rock"
          id="1"
          image="img"
        ></BandCard>
      </div>
    </section>
  );
}

export default BandList;
