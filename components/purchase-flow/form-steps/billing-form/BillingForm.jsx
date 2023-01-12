import { useContext, useState, useEffect } from "react";
import { CartContext, CartDispatchContext } from "../../../../contexts/CartContext";
import s from "./BillingForm.module.css";
import InlineError from "../../form-components/inline-error/InlineError";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";

function BillingForm() {
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);
  const ERROR_MESSAGES = {
    emptyCardNumber: "Invalid credit card number",
    invalidCardNumber: "Invalid credit card number, try 4242 4242...",
    emptyExpiryDate: "Empty expiry date",
    monthOutOfRange: "The month must be between 1 and 12",
    yearOutOfRange: "Year must be current or future",
    dateOutOfRange: "The date must not be in the past",
    invalidExpiryDate: "Invalid Expiry Date",
    emptyCVC: "The CVC is required",
    invalidCVC: "Invalid CVC",
  };
  const { wrapperProps, getCardImageProps, getCardNumberProps, getExpiryDateProps, getCVCProps, meta } = usePaymentInputs({
    errorMessages: ERROR_MESSAGES,
  });

  function handleRadio(e) {
    dispatch({ type: "DONATION", payload: e.target.value });
  }

  const styling = {
    fieldWrapper: {
      base: {
        fontSize: "1rem",
        fontWeight: "400",
      },
      // errored: css | Object,
    },
    inputWrapper: {
      base: {
        display: "flex",
        gap: ".5rem",
        paddingBlock: "1.5rem",
        borderRadius: "4px",
        border: "2px solid var(--secondary-100)",
        // border: "none",
      },
      // errored: css | Object,
      // focused: css | Object,
    },
    input: {
      base: {
        padding: ".5rem",
        borderRadius: "4px",
        fontSize: `${screenWidth > 400 ? "1rem" : ".8rem"}`,
        // outline: "2px solid black",
      },
      //   errored: css | Object,
      //   cardNumber: css | Object,
      //   expiryDate: css | Object,
      //   cvc: css | Object,
    },
    errorText: {
      base: {
        color: `var(--secondary-300)`,
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-2xs)",
        fontSize: "var(--type-label)",
        padding: "var(--spacing-2xs)",
        backgroundColor: "rgba(255, 0, 0, 0.197)",
        borderRadius: "25px",
        border: "1px solid var(--accent-red)",
        marginTop: ".5rem",
        paddingLeft: "2rem",
        backgroundImage: "url(/images/error.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "6px",
        backgroundPositionY: "center",
      },
      /*
color: var(--secondary-300);
  display: flex;
  align-items: center;
  gap: var(--spacing-2xs);
  font-size: var(--type-label);
  padding: var(--spacing-2xs);
  background-color: rgba(255, 0, 0, 0.197);
  border-radius: 25px;
  border: 1px solid var(--accent-red);
     */
    },
  };

  return (
    <div className={s.billing_form}>
      <fieldset>
        <legend>Billing</legend>
        <div className={s.input_grid}>
          <PaymentInputsWrapper styles={styling} {...wrapperProps}>
            <svg {...getCardImageProps({ images })} />
            <input {...getCardNumberProps()} />
            <input {...getExpiryDateProps()} />
            <input {...getCVCProps()} />
          </PaymentInputsWrapper>
          {/* <label htmlFor="cc" className={s.full_row}>
            Card number
            <input type="text" name="cc" id="cc" placeholder="Card number" />
            {cart.payment_errors.includes("cc") && <InlineError message={"Please insert a 16 digit card number"} />}
          </label> */}
          <label htmlFor="name_on_card" className={s.full_row}>
            Name on card
            <input type="text" name="name_on_card" id="name_on_card" placeholder="Name on card" />
            {cart.payment_errors.includes("name_on_card") && <InlineError message={"Please insert the name written on your card"} />}
          </label>
          {/* <label htmlFor="expiration">
            Expiration date
            <input type="text" name="expiration" id="expiration" placeholder="Expiration date (MM/YY)" />
            {cart.payment_errors.includes("expiration") && <InlineError message={"Please insert the expiration date of your card"} />}
          </label> */}
          {/* <label htmlFor="security_code">
            Security code
            <input type="number" name="security_code" id="security_code" placeholder="Security code (CVV)" />
            {cart.payment_errors.includes("security_code") && <InlineError message={"Please insert the three digit security code from the back of your card"} />}
          </label> */}
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
