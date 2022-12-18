import { useState, useRef, useContext } from "react";
import s from "./PersonalInfo.module.css";
import InlineError from "../../form-components/inline-error/InlineError";
import { CartContext } from "../../../../contexts/CartContext";

function PersonalInfoFieldset(props) {
  const cart = useContext(CartContext);
  const fullName = useRef(null);
  const email = useRef(null);
  const dob = useRef(null);
  const phone = useRef(null);

  return (
    <>
      <fieldset>
        <legend>{props.index === 0 ? "Personal information" : `Guest ${props.index} information`}</legend>
        <div className={s.input_grid}>
          <label htmlFor={`full_name_guest_${props.index}`} className={s["full_row"]}>
            Full name (required)
            <input type="text" name={`full_name_guest_${props.index}`} id={`full_name_guest_${props.index}`} placeholder="Full name" ref={fullName} />
            {cart.personal_errors.includes(`full_name_guest_${props.index}`) && <InlineError message={"Please insert your full name"} />}
          </label>
          <label htmlFor={`email_guest_${props.index}`} className={s.full_row}>
            Email (required)
            <input type="email" name={`email_guest_${props.index}`} id={`email_guest_${props.index}`} placeholder="Email" ref={email} />
            {cart.personal_errors.includes(`email_guest_${props.index}`) && <InlineError message={"Please insert your email"} />}
          </label>
          <label htmlFor={`dob_guest_${props.index}`}>
            Date of birth (required)
            <input type="date" name={`dob_guest_${props.index}`} id={`dob_guest_${props.index}`} ref={dob} />
            {cart.personal_errors.includes(`dob_guest_${props.index}`) && <InlineError message={"Please insert your date of birth"} />}
          </label>
          <label htmlFor={`phone_guest_${props.index}`}>
            Phone number (optional)
            <input type="tel" name={`phone_guest_${props.index}`} id={`phone_guest_${props.index}`} placeholder="+45 xx xx xx xx" ref={phone} />
          </label>
        </div>
      </fieldset>
    </>
  );
}

export default PersonalInfoFieldset;
