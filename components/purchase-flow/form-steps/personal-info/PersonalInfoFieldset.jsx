import s from "./PersonalInfo.module.css";

function PersonalInfoFieldset(props) {
  return (
    <>
      <fieldset>
        <legend>{props.index === 0 ? "Personal information" : `Guest ${props.index} information`}</legend>
        <div className={s.input_grid}>
          <label htmlFor={`first_name_guest_${props.index}`}>
            First name
            <input type="text" name={`first_name_guest_${props.index}`} id={`first_name_guest_${props.index}`} placeholder="First name" />
          </label>
          <label htmlFor={`last_name_guest_${props.index}`}>
            Last name
            <input type="text" name={`last_name_guest_${props.index}`} id={`last_name_guest_${props.index}`} placeholder="Last name" />
          </label>
          <label htmlFor={`email_guest_${props.index}`} className={s.full_row}>
            Email
            <input type="text" name={`email_guest_${props.index}`} id={`email_guest_${props.index}`} placeholder="Email" />
          </label>
          <label htmlFor={`dob_guest_${props.index}`}>
            Date of birth
            <input type="date" name={`dob_guest_${props.index}`} id={`dob_guest_${props.index}`} placeholder="Date of birth (DD/MM/YY)" />
          </label>
          <label htmlFor={`phone_guest_${props.index}`}>
            Phone number
            <input type="text" name={`phone_guest_${props.index}`} id={`phone_guest_${props.index}`} placeholder="+45 xx xx xx xx" />
          </label>
        </div>
      </fieldset>
    </>
  );
}

export default PersonalInfoFieldset;
