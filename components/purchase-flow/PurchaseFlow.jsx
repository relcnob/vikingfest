import { useState } from "react";
import Cart from "./cart/Cart";
import s from "./PurchaseFlow.module.css";
import TicketForm from "./form-steps/ticket-form/TicketForm";
import LocationForm from "./form-steps/location-form/LocationForm";
import BillingForm from "./form-steps/billing-form/BillingForm";
import FormBreadcrumbs from "./form-components/FormBreadcrumbs";
import FormSubmit from "./form-components/FormSubmit";

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
      return <LocationForm />;
    } else {
      return <BillingForm />;
    }
  };
  return (
    <section className={s.purchase_flow}>
      <div className="container">
        <form className={s.form}>
          <h1 className={s.h1}>{currentTitle()}</h1>
          <FormBreadcrumbs currentStep={currentStep} />
          {displayCurrentStep()}
          <FormSubmit currentStep={currentStep} prev={prevStep} next={nextStep} />
        </form>
        <Cart className={s.cart}></Cart>
      </div>
    </section>
  );
}

export default PurchaseFlow;
