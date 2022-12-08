import React from "react";
import FormBreadcrumbs from "./FormBreadcrumbs";
import s from "../PurchaseFlow.module.css";
import NumberField from "../form-components/NumberField";

function TicketForm() {
  return (
    <>
      <h1 className={s.h1}>Buy a ticket</h1>
      <FormBreadcrumbs />
      <fieldset className={s.fieldset}>
        <legend className={s.legend}>Choose your prefered ticket</legend>
        <article>
          <img src="" alt="Regular ticket" />
          <div>
            <h3 className={s.h3}>VikingFest 1st Edition Regular Ticket</h3>
            <p>This ticket gives you access to the festival for all 7 days.</p>
            <p>*This ticket does not allow you access to VIP areas</p>
          </div>
          <NumberField min={0} max={10} step={1} label={"799,-DKK"} id={"regular"}></NumberField>
        </article>
        <article>
          <img src="" alt="VIP ticket" />
          <div>
            <h3 className={s.h3}>VikingFest 1st Edition VIP Ticket</h3>
            <p>This ticket gives you access to the VikingFest for all 7 days, it also gives you access to vip areas, and accomodation spots.</p>
          </div>
          <NumberField min={0} max={10} step={1} label={"799,-DKK"} id={"vip"}></NumberField>
        </article>
      </fieldset>
      <fieldset>
        <legend>Choose your camping</legend>
        <article>
          <div>
            <h3 className={s.h3}>Fixed booking fee</h3>
            <p>A fee of 99,- DKK is included. This fee is only paid once no matter how many tents you decide to include.</p>
          </div>
          <p>99,- DKK</p>
        </article>
        <article>
          <div>
            <label htmlFor="green_camping">
              <input type="radio" name="green_camping" id="green_camping" />
              Optional: Green Camping
            </label>
            <p>This ticket gives you access to the VikingFest for all 7 days, it also gives you access to vip areas, and accomodation spots.</p>
          </div>
          <p>249,- DKK</p>
        </article>
        <article>
          <div>
            <label htmlFor="pre_camping">
              <input type="radio" name="pre_camping" id="pre_camping" />
              Optional: Pre-setup of tents
            </label>
            <p>The crew will setup all the tents for you.</p>
            <p>*The number of tent spots must match the number of people in the group</p>
          </div>
          <p>249,- DKK</p>
        </article>
      </fieldset>
      <section>
        <p>
          Total: <span>1496,95,- DKK</span>
        </p>
        <button>Continue to location</button>
      </section>
    </>
  );
}

export default TicketForm;
