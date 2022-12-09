import React from "react";
import BandAbout from "./band-about/BandAbout";
import styles from "./BandView.module.css";
function BandView() {
  return (
    <div class={styles.about}>
      <BandAbout
        name="SON & SONS"
        genre="alternative rock"
        id="1"
        image="img"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, assumenda. Quod in, numquam tenetur voluptatibus excepturi et consequuntur, quis odit tempora illo quasi vero voluptatum, explicabo iure qui deserunt nihil?
Quibusdam necessitatibus ea quis doloremque dolore, autem illo consequatur soluta delectus temporibus, voluptates, pariatur ipsum quisquam eos?"
        members="jacob, klaus, peter, jonas"
        schedule=""
      />
    </div>
  );
}

export default BandView;
