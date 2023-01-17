import { useContext, useState } from "react";
import FormBreadcrumbs from "../../form-components/FormBreadcrumbs";
import s from "./TicketForm.module.css";
import NumberField from "../../form-components/NumberField";
import {
  CartContext,
  CartDispatchContext,
} from "../../../../contexts/CartContext";
import InlineError from "../../form-components/inline-error/InlineError";
import Image from "next/image";

function TicketForm({ error }) {
  const [disabled, setDisabled] = useState(true);
  const [checked, setChecked] = useState("none");
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);

  function handleRadio(e) {
    if (e.target.value === "green") {
      setDisabled(true);
      setChecked("green");
      dispatch({ type: "GREEN", payload: true });
      dispatch({ type: "PRE", payload: false });
    } else if (e.target.value === "pre") {
      setDisabled(false);
      setChecked("pre");
      dispatch({ type: "GREEN", payload: false });
      dispatch({ type: "PRE", payload: true });
    } else {
      setChecked("none");
    }
  }

  return (
    <div className={s.ticket_form}>
      <fieldset className={s.fieldset}>
        <legend className={s.legend}>Choose your prefered ticket</legend>

        <article className={s.flex_horizontal}>
          <div className={s.inner}>
            <Image
              src={"/images/vikingfest-icons/other/ticket-regular.svg"}
              width={64}
              height={64}
              alt={"Regular Ticket"}
            />
            <div>
              <h3>VikingFest 1st Edition Regular Ticket</h3>
              <p>
                This ticket gives you access to the festival for all 7 days.
              </p>
              <p>*This ticket does not allow you access to VIP areas</p>
            </div>
          </div>
          <NumberField
            min={0}
            max={10}
            step={1}
            label={"799 DKK"}
            id={"regular"}
            disabled={false}
          />
        </article>
        <article className={s.flex_horizontal}>
          <div className={s.inner}>
            <Image
              src={"/images/vikingfest-icons/other/ticket-vip.svg"}
              width={64}
              height={64}
              alt={"VIP Ticket"}
            />
            <div>
              <h3>VikingFest 1st Edition VIP Ticket</h3>
              <p>
                This ticket gives you access to the VikingFest for all 7 days,
                it also gives you access to vip areas.
              </p>
            </div>
          </div>
          <NumberField
            min={0}
            max={10}
            step={1}
            label={"1299 DKK"}
            disabled={false}
            id={"vip"}
          />
        </article>
        {error.ticket === 1 && (
          <InlineError message={"Choose at least 1 ticket"} />
        )}
      </fieldset>
      <fieldset>
        <legend className={s.legend}>Choose your camping</legend>
        <article>
          <div>
            <h3 className={s.h3}>Fixed booking fee</h3>
            <p>
              A fee of 99,- DKK is included. This fee is only paid once no
              matter how many tents you decide to include.
            </p>
          </div>
          <p className={s.align_end}>99,- DKK</p>
        </article>
        <article>
          <div>
            <label htmlFor="green">
              <input
                type="radio"
                name="camping"
                id="green"
                value="green"
                onChange={handleRadio}
                checked={checked === "green" ? true : false}
                className={s.radio_button}
              />
              Optional: Green Camping
            </label>
            <p>
              This ticket gives you access to the VikingFest for all 7 days, it
              also gives you access to vip areas, and accomodation spots.
            </p>
          </div>
          <p className={s.align_end}>249,- DKK</p>
        </article>
        <article className={s.flex_vert}>
          <div>
            <label htmlFor="pre">
              <input
                type="radio"
                name="camping"
                id="pre"
                value="pre"
                onChange={handleRadio}
                checked={checked === "pre" ? true : false}
                className={s.radio_button}
              />
              Optional: Pre-setup of tents
            </label>
            <p>The crew will setup all the tents for you.</p>
            <p className={s.additional_info}>
              *The number of tent spots must match the number of people in the
              group
            </p>
          </div>
          <div className={s.tents}>
            <div>
              <h4>2 Person tent</h4>
              <NumberField
                min={0}
                max={10}
                step={1}
                label={"299,-DKK"}
                id={"2p"}
                disabled={disabled}
              />
            </div>
            <div>
              <h4>3 Person tent</h4>
              <NumberField
                min={0}
                max={10}
                step={1}
                label={"299,-DKK"}
                id={"3p"}
                disabled={disabled}
              />
            </div>
            {error.ticket === 2 && (
              <InlineError
                message={`The number of tent space must be 1 or more, and cannot exceed ${
                  cart.vip.quantity + cart.regular.quantity > 1
                    ? cart.vip.quantity + cart.regular.quantity + 1
                    : 2
                }`}
              />
            )}
          </div>
        </article>
        <article>
          <div>
            <label htmlFor="none">
              <input
                type="radio"
                name="camping"
                id="none"
                value="none"
                onChange={handleRadio}
                checked={checked === "none" ? true : false}
                className={s.radio_button}
              />
              I do not want green camping neither pre setup tents
            </label>
            <p>
              Choose this option in case you do not want neither of the options
              above.
            </p>
          </div>
        </article>
      </fieldset>
    </div>
  );
}

export default TicketForm;
