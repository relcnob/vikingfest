import { useContext } from "react";
import s from "./NumberField.module.css";
import { CartContext, CartDispatchContext } from "../../../contexts/CartContext";

function NumberField(props) {
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);

  function handleChange(e) {
    dispatch({ type: props.id.toUpperCase(), payload: e.target.value });
    console.log(cart);
  }
  return (
    <div className={s.mini_label}>
      <div className={`${s.input_field} ${s.input_number}`}>
        <input className={s.input} type="number" id={props.id} min={props.min} max={props.max} step={props.step} name={props.id} value={cart[props.id].quantity} onChange={handleChange} />
        <div className={s.input_number_arrows}></div>
      </div>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export default NumberField;
