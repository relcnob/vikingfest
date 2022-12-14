import { useState } from "react";
import Cart from "./cart/Cart";
import s from "./PurchaseFlow.module.css";
import TicketForm from "./form-steps/ticket-form/TicketForm";
import LocationForm from "./form-steps/location-form/LocationForm";
import BillingForm from "./form-steps/billing-form/BillingForm";
import FormBreadcrumbs from "./form-components/FormBreadcrumbs";
import FormSubmit from "./form-components/FormSubmit";
import { CartProvider } from "../../contexts/CartContext";
import getAvailability from "../../api/get-availability";
import reserveSpot from "../../api/reserve-spot";

function PurchaseFlow() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    // Change to next step
    if (currentStep < 3) {
      setCurrentStep((old) => old + 1);
    }
  };
  const prevStep = () => {
    // Change to prev step
    if (currentStep > 1) {
      setCurrentStep((old) => old - 1);
    }
  };
  const currentTitle = () => {
    if (currentStep === 1) {
      return "Buy a ticket";
    } else if (currentStep === 2) {
      return "Choose where you sleep";
    } else {
      return "Payment information";
    }
  };
  const displayCurrentStep = () => {
    if (currentStep === 1) {
      return <TicketForm />;
    } else if (currentStep === 2) {
      getAvailability();
      return <LocationForm />;
    } else {
      reserveSpot("Svartheim", 2);
      return <BillingForm />;
    }
  };
  return (
    <CartProvider>
      <section className={s.purchase_flow}>
        <div className="container">
          <form className={s.form}>
            <h1 className={s.h1}>{currentTitle()}</h1>
            <FormBreadcrumbs currentStep={currentStep} />
            {displayCurrentStep()}
            <FormSubmit currentStep={currentStep} prev={prevStep} next={nextStep} price={1736.35} />
          </form>
          <Cart className={s.cart} />
        </div>
      </section>
    </CartProvider>
  );
}

export default PurchaseFlow;
