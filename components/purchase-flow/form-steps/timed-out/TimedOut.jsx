import { useContext } from "react";
import s from "./TimedOut.module.css";
import { CartContext } from "../../../../contexts/CartContext";
import Anchor from "../../../Anchor";
// import QRCode from "./QRCode";

function TimedOut() {
  const cart = useContext(CartContext);
  return (
    <div className={s.success}>
      <div>
        <div className={s.header}>
          <h1>Your reservation has timed out</h1>
          <span>Please start from the begining</span>
          <button className={s.link} onClick={(e) => location.reload()}>
            Back to start
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimedOut;
