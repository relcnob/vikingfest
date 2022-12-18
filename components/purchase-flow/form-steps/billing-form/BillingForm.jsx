import { useContext } from "react";
import { CartContext, CartDispatchContext } from "../../../../contexts/CartContext";
import s from "./BillingForm.module.css";

function BillingForm() {
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  function handleRadio(e) {
    console.log(e.target.value);
    dispatch({ type: "DONATION", payload: e.target.value });
  }

  return (
    <div className={s.billing_form}>
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
              <input type="radio" id="radio1" name="selector" className={s.selector_item_radio} value={15} onChange={handleRadio} checked={cart.donation.value_in_percentage === 15} />
              <label htmlFor="radio1" className={s.selector_item_label}>
                15%
              </label>
            </div>
            <div className={s.selecotr_item}>
              <input type="radio" id="radio2" name="selector" className={s.selector_item_radio} value={20} onChange={handleRadio} checked={cart.donation.value_in_percentage === 20} />
              <label htmlFor="radio2" className={s.selector_item_label}>
                20%
              </label>
            </div>
            <div className={s.selecotr_item}>
              <input type="radio" id="radio3" name="selector" className={s.selector_item_radio} value={25} onChange={handleRadio} checked={cart.donation.value_in_percentage === 25} />
              <label htmlFor="radio3" className={s.selector_item_label}>
                25%
              </label>
            </div>
            <div className={s.selecotr_item}>
              <input type="radio" id="radio4" name="selector" className={s.selector_item_radio} value={0} onChange={handleRadio} checked={cart.donation.value_in_percentage === 0} />
              <label htmlFor="radio4" className={s.selector_item_label}>
                None
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default BillingForm;
