import s from "./BillingForm.module.css";

function BillingForm() {
  return (
    <div className={s.billing_form}>
      <fieldset>
        <legend>Personal information</legend>
        <div className={s.input_grid}>
          <label htmlFor="first_name">
            First name
            <input type="text" name="first_name" id="first_name" placeholder="First name" />
          </label>
          <label htmlFor="last_name">
            Last name
            <input type="text" name="last_name" id="last_name" placeholder="Last name" />
          </label>
          <label htmlFor="email" className={s.full_row}>
            Email
            <input type="text" name="email" id="email" placeholder="Email" />
          </label>
          <label htmlFor="dob">
            Date of birth
            <input type="date" name="dob" id="dob" placeholder="Date of birth (DD/MM/YY)" />
          </label>
          <label htmlFor="phone">
            Phone number
            <input type="text" name="phone" id="phone" placeholder="+45 xx xx xx xx" />
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Payment information</legend>
        <div className={s.input_grid}>
          <label htmlFor="cc" className={s.full_row}>
            Card number
            <input type="text" name="cc" id="cc" placeholder="Card number" />
          </label>
          <label htmlFor="name_on_card" className={s.full_row}>
            Name on card
            <input type="text" name="name_on_card" id="name_on_card" placeholder="Name on card" />
          </label>
          <label htmlFor="expiration">
            Expiration date
            <input type="text" name="expiration" id="expiration" placeholder="Expiration date (MM/YY)" />
          </label>
          <label htmlFor="security_code">
            Security code
            <input type="number" name="security_code" id="security_code" placeholder="Security code (CVV)" />
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Show your support to the Viking Museum</legend>
        <p className={s.subtitle}>100% of the donations are going to be sent to the Viking Museum to help them maintain the viking history among us.</p>
        <div className={s.container}>
          <div className={s.selector}>
            <div className={s.selecotr_item}>
              <input type="radio" id="radio1" name="selector" className={s.selector_item_radio} checked />
              <label for="radio1" className={selector_item_label}>
                radio 1
              </label>
            </div>
            <div className={s.selecotr_item}>
              <input type="radio" id="radio2" name="selector" className={s.selector_item_radio} />
              <label for="radio2" className={selector - item_label}>
                radio 2
              </label>
            </div>
            <div className={selecotr_item}>
              <input type="radio" id="radio3" name="selector" className={selector_item_radio} />
              <label for="radio3" className={selector - item_label}>
                radio 3
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default BillingForm;
