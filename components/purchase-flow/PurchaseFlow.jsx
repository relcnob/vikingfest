import React from "react";
import Cart from "./cart/Cart";
import s from "./PurchaseFlow.module.css";
import TicketForm from "./form-steps/TicketForm";
function PurchaseFlow() {
  const nextStep = () => {
    // Change to next step
  };
  const prevStep = () => {
    // Change to prev step
  };
  return (
    <section className={s.purchase_flow}>
      <div className="container">
        <form className={s.form}>
          <TicketForm></TicketForm>
        </form>
        <Cart className={s.cart}></Cart>
      </div>
    </section>
  );
}

export default PurchaseFlow;
