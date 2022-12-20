import { useContext, useState, useRef, useEffect } from "react";
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
import { CartContext, CartDispatchContext } from "../../contexts/CartContext";
import { supabase } from "../../utils/supabaseClient";
import TimedOut from "./form-steps/timed-out/TimedOut";

function PurchaseFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [timedOut, setTimedOut] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    ticket: 0,
    location: 0,
    personal: 0,
    billing: 0,
  });
  const [currentView, setCurrentView] = useState(null);
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  const theForm = useRef(null);
  // setMessage("Hello world");
  const validateCurrentStep = (step, e) => {
    switch (step) {
      case 1:
        {
          if (cart.vip.quantity <= 0 && cart.regular.quantity <= 0) {
            console.log("next", cart.vip.quantity <= 0 && cart.regular.quantity <= 0);
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
          if (!cart.camping.site) {
            setError((old) => {
              return { ...old, location: 1 };
            });
          } else {
            setError((old) => {
              return { ...old, location: 0 };
            });
            nextStep();
          }
        }
        break;
      case 3:
        {
          const tickets = cart.vip.quantity + cart.regular.quantity;
          const formData = new FormData(e.target.parentElement.parentElement);
          const personalData = [];
          const personal_errors = [];
          const body = {};
          for (const [key, value] of formData) {
            body[key] = value;
          }
          for (let i = 0; i < tickets; i++) {
            const obj = {};
            obj[`full_name_guest_${i}`] = body[`full_name_guest_${i}`];
            obj[`email_guest_${i}`] = body[`email_guest_${i}`];
            obj[`dob_guest_${i}`] = body[`dob_guest_${i}`];
            obj[`phone_guest_${i}`] = body[`phone_guest_${i}`];
            personalData.push(obj);
          }
          for (let i = 0; i < personalData.length; i++) {
            if (!personalData[i][`dob_guest_${i}`]) {
              personal_errors.push(`dob_guest_${i}`);
            }
            if (!personalData[i][`full_name_guest_${i}`].match(/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/)) {
              personal_errors.push(`full_name_guest_${i}`);
            }
            if (!personalData[i][`email_guest_${i}`].match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
              personal_errors.push(`email_guest_${i}`);
            }
          }

          dispatch({ type: "INFO", payload: { personalData, personal_errors } });
          if (personal_errors.length === 0) {
            nextStep();
          }
        }
        break;
      case 4:
        {
          const formData = new FormData(e.target.parentElement.parentElement);
          const body = {};
          const payment_errors = [];
          for (const [key, value] of formData) {
            body[key] = value;
          }
          console.log(body);
          if ([...body.cc.replace(" ", "").replace("-", "")].length !== 16) {
            payment_errors.push("cc");
          } else {
            dispatch({ type: "CC", payload: body.cc.slice(-4) });
          }
          if (!body.expiration) {
            payment_errors.push("expiration");
          }
          if (!body.security_code) {
            payment_errors.push("security_code");
          }
          if (!body.name_on_card.match(/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/)) {
            payment_errors.push("name_on_card");
          }
          dispatch({ type: "PAYMENT", payload: { payment_info: { ...body }, payment_errors } });
          if (payment_errors.length < 1) {
            nextStep();
          }
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
  useEffect(() => {
    if (currentStep === 1) {
      setCurrentView(<TicketForm error={error} />);
    } else if (currentStep === 2) {
      setCurrentView(<LocationForm error={error.location} />);
    } else if (currentStep === 3) {
      reserveSpot();
      setCurrentView(<PersonalInfo error={error.personal} />);
    } else if (currentStep === 4) {
      setCurrentView(<BillingForm error={error.billing} />);
    } else if (currentStep === 5) {
      setLoading(true);
      fulfillOrder();
    }

    async function reserveSpot() {
      const res = await fetch("https://vikingfestserver.fly.dev/" + "reserve-spot", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ area: cart.camping.site, amount: cart.vip.quantity + cart.regular.quantity }),
      });
      const reservation = await res.json();
      console.log(reservation);
      dispatch({ type: "RESERVATION", payload: { ...reservation, time: Date.now() } });
    }

    async function fulfillOrder() {
      if (Number(Date.now()) - Number(cart.reservation.time) < Number(cart.reservation.timeout)) {
        const res = await fetch("https://vikingfestserver.fly.dev/" + "fullfill-reservation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: cart.reservation.id }),
        });
        const fulfill = await res.json();
        const { data, error } = await supabase
          .from("orders")
          .insert([
            {
              basket: {
                tickets: {
                  regular: cart.regular.quantity,
                  vip: cart.vip.quantity,
                },
                camping: {
                  green: cart.green.checked ? 1 : 0,
                  "2p": cart["2p"].quantity,
                  "3p": cart["3p"].quantity,
                  site: cart.camping.site,
                },
                donation_in_percentage: cart.donation.value_in_percentage,
              },
              personal_info: cart.personal_info,
              order_id: cart.reservation.id,
            },
          ])
          .select("*");
        if (fulfill.message === "Reservation completed") {
          dispatch({ type: "ORDER", payload: "fulfilled" });
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
      } else {
        setLoading(false);
        setTimedOut(true);
      }
    }
  }, [currentStep, error]);

  return (
    <section className={s.purchase_flow}>
      <div className="container">
        {loading ? (
          <LoadingForm />
        ) : (
          currentStep !== 5 && (
            <form className={s.form} ref={theForm}>
              <h1 className={s.h1}>{currentTitle()}</h1>
              <FormBreadcrumbs currentStep={currentStep} />
              {currentStep !== 5 && currentView}
              <FormSubmit currentStep={currentStep} prev={prevStep} next={validateCurrentStep} />
            </form>
          )
        )}
        {currentStep !== 5 && !loading && <Cart className={s.cart} />}
        {currentStep === 5 && !loading && !timedOut && <Success />}
        {currentStep === 5 && !loading && timedOut && <TimedOut />}
      </div>
    </section>
  );
}

export default PurchaseFlow;
