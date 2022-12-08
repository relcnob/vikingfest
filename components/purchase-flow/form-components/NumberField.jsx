import React from "react";
import s from "./NumberField.module.css";
function NumberField(props) {
  return (
    <div className={s.mini_label}>
      <div className={`${s.input_field} ${s.input_number}`}>
        <input className={s.input} type="number" id={props.id} min={props.min} max={props.max} step={props.step} name={props.id} />
        <div className={s.input_number_arrows}></div>
      </div>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export default NumberField;
