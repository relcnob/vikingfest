import { useContext, useState } from "react";
import Cart from "./cart/Cart";
import s from "./PurchaseFlow.module.css";
import TicketForm from "./form-steps/ticket-form/TicketForm";
import LocationForm from "./form-steps/location-form/LocationForm";
import BillingForm from "./form-steps/billing-form/BillingForm";
import FormBreadcrumbs from "./form-components/FormBreadcrumbs";
import FormSubmit from "./form-components/FormSubmit";
import PersonalInfo from "./form-steps/personal-info/PersonalInfo";
import Success from "./form-steps/success-view/Success";
import LoadingForm from "./form-steps/loading/LoadingForm";
import { CartContext } from "../../contexts/CartContext";

function PurchaseFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    ticket: 0,
    location: 0,
    personal: 0,
    billing: 0,
  });
  const cart = useContext(CartContext);

  // setMessage("Hello world");
  const validateCurrentStep = (step) => {
    switch (step) {
      case 1:
        {
          if (cart.vip.quantity <= 0 && cart.regular.quantity <= 0) {
            setError((old) => {
              return { ...old, ticket: 1 };
            });
          } else if (cart.pre.checked === true && !checkTents()) {
            setError((old) => {
              return { ...old, ticket: 2 };
            });
          } else {
            setError((old) => {
              return { ...old, ticket: 0 };
            });
            nextStep();
          }
        }
        break;
      case 2:
        {
          nextStep();
        }
        break;
      case 3:
        {
          nextStep();
        }
        break;
      case 4:
        {
          nextStep();
        }
        break;
    }
  };
  function checkTents() {
    const tickets = cart.vip.quantity + cart.regular.quantity;
    const tents = cart["2p"].quantity * 2 + cart["3p"].quantity * 3;
    if (tickets === 1 && tents === 2) {
      return true;
    }
    if (tickets > 1 && (tents === tickets || tents === tickets + 1)) {
      return true;
    }
    return false;
  }

  function nextStep() {
    if (currentStep < 5) {
      // Change to next step
      setCurrentStep((old) => old + 1);
    }
  }
  function prevStep() {
    // Change to prev step
    if (currentStep > 1) {
      setCurrentStep((old) => old - 1);
    }
  }
  function currentTitle() {
    if (currentStep === 1) {
      return "Buy a ticket";
    } else if (currentStep === 2) {
      return "Choose where you sleep";
    } else if (currentStep === 3) {
      return "Personal information";
    } else if (currentStep === 4) {
      return "Payment information";
    } else {
      return "Congratulations";
    }
  }
  function displayCurrentStep() {
    if (currentStep === 1) {
      return <TicketForm error={error.ticket} />;
    } else if (currentStep === 2) {
      return <LocationForm error={error.location} />;
    } else if (currentStep === 3) {
      return <PersonalInfo error={error.personal} />;
    } else if (currentStep === 4) {
      return <BillingForm error={error.billing} />;
    }
  }

  return (
    <section className={s.purchase_flow}>
      <div className="container">
        {loading ? (
          <LoadingForm />
        ) : (
          currentStep !== 5 && (
            <form className={s.form}>
              <h1 className={s.h1}>{currentTitle()}</h1>
              <FormBreadcrumbs currentStep={currentStep} />
              {displayCurrentStep()}
              <FormSubmit currentStep={currentStep} prev={prevStep} next={validateCurrentStep} price={1736.35} />
            </form>
          )
        )}
        {currentStep !== 5 && !loading && <Cart className={s.cart} />}
        {currentStep === 5 && !loading && <Success />}
      </div>
    </section>
  );
}

export default PurchaseFlow;
