import { useContext, useRef, useState } from "react";
import s from "./NumberField.module.css";
import { CartContext, CartDispatchContext } from "../../../contexts/CartContext";

function NumberField(props) {
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  const input = useRef(null);

  function handleChange(e) {
    console.log("change event");
    console.log(e.target.value);
    dispatch({ type: props.id.toUpperCase(), payload: e.target.value });
  }

  function handleArrow(e, direction) {
    e.preventDefault();
    if (direction === "up" && cart[props.id].quantity < props.max) {
      dispatch({ type: props.id.toUpperCase(), payload: cart[props.id].quantity + props.step });
      // console.log(input.current);
      // setInputValue(cart[props.id].quantity + props.step);
      // const event = new Event("change", { bubbles: true });
      // input.current.dispatchEvent(event);

      // input.dispatchEvent("change");
    } else if (direction === "down" && cart[props.id].quantity > props.min) {
      dispatch({ type: props.id.toUpperCase(), payload: cart[props.id].quantity - props.step });
    }
  }
  return (
    <div className={s.mini_label}>
      <div className={`${s.input_field} ${s.input_number}`}>
        <input
          ref={input}
          className={s.input}
          type="number"
          id={props.id}
          min={props.min}
          max={props.max}
          step={props.step}
          name={props.id}
          value={cart[props.id].quantity}
          onChange={handleChange}
          // readOnly={true}
          disabled={props.disabled ? true : false}
        />
        <div className={s.input_number_arrows}>
          <button className={`${s.button_up} ${props.disabled ? s.no_events : ""}`} onClick={(e) => handleArrow(e, "up")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
              <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
          </button>
          <button className={`${s.button_down} ${props.disabled ? s.no_events : ""}`} onClick={(e) => handleArrow(e, "down")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
        </div>
      </div>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export default NumberField;
