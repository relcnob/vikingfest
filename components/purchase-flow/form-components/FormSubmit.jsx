import { useContext } from "react";
import s from "./FormSubmit.module.css";
import { CartContext } from "../../../contexts/CartContext";
import getCartTotal from "../../../utils/CartTotal";

function FormSubmit(props) {
  const cart = useContext(CartContext);
  function handleClick(e, action) {
    e.preventDefault();
    if (action === "next") {
      props.next();
    } else {
      props.prev();
    }
  }
  function buttonText() {
    if (props.currentStep === 1) {
      return "Continue to location";
    } else if (props.currentStep === 2) {
      return "Continue to payment";
    } else {
      return "Confirm your purchase";
    }
  }

  return (
    <section className={s.form_submit}>
      {/* {props.currentStep !== 1 && (
        <button className={s.prev_button} onClick={(e) => handleClick(e, "prev")}>
          Back
        </button>
      )} */}

      <p>
        Total: <span>{getCartTotal(cart)}</span>
      </p>
      <button className={s.next_button} onClick={(e) => handleClick(e, "next")}>
        {buttonText()}
      </button>
    </section>
  );
}
export default FormSubmit;
