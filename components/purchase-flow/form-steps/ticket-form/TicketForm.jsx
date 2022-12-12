import FormBreadcrumbs from "../../form-components/FormBreadcrumbs";
import s from "./TicketForm.module.css";
import NumberField from "../../form-components/NumberField";

function TicketForm() {
  return (
    <div className={s.ticket_form}>
      <fieldset className={s.fieldset}>
        <legend className={s.legend}>Choose your prefered ticket</legend>
        <article>
          <div className={s.inner}>
            <img src="/form_thumbnail.jpg" alt="Regular ticket" className={s.thumbnail} />
            <div>
              <h3>VikingFest 1st Edition Regular Ticket</h3>
              <p>This ticket gives you access to the festival for all 7 days.</p>
              <p>*This ticket does not allow you access to VIP areas</p>
            </div>
          </div>
          <NumberField min={0} max={10} step={1} label={"799,-DKK"} id={"regular"}></NumberField>
        </article>
        <article>
          <div className={s.inner}>
            <img className={s.thumbnail} src="/form_thumbnail.jpg" alt="VIP ticket" />
            <div>
              <h3>VikingFest 1st Edition VIP Ticket</h3>
              <p>This ticket gives you access to the VikingFest for all 7 days, it also gives you access to vip areas, and accomodation spots.</p>
            </div>
          </div>
          <NumberField min={0} max={10} step={1} label={"799,-DKK"} id={"vip"}></NumberField>
        </article>
      </fieldset>
      <fieldset>
        <legend className={s.legend}>Choose your camping</legend>
        <article>
          <div>
            <h3 className={s.h3}>Fixed booking fee</h3>
            <p>A fee of 99,- DKK is included. This fee is only paid once no matter how many tents you decide to include.</p>
          </div>
          <p className={s.align_end}>99,- DKK</p>
        </article>
        <article>
          <div>
            <label htmlFor="green">
              <input type="radio" name="camping" id="green" />
              Optional: Green Camping
            </label>
            <p>This ticket gives you access to the VikingFest for all 7 days, it also gives you access to vip areas, and accomodation spots.</p>
          </div>
          <p className={s.align_end}>249,- DKK</p>
        </article>
        <article className={s.flex_vert}>
          <div>
            <label htmlFor="pre">
              <input type="radio" name="camping" id="pre" />
              Optional: Pre-setup of tents
            </label>
            <p>The crew will setup all the tents for you.</p>
            <p>*The number of tent spots must match the number of people in the group</p>
          </div>
          <div className={s.tents}>
            <div>
              <h4>2 Person tent</h4>
              <NumberField min={0} max={10} step={1} label={"299,-DKK"} id={"2p"} />
            </div>
            <div>
              <h4>3 Person tent</h4>
              <NumberField min={0} max={10} step={1} label={"299,-DKK"} id={"3p"} />
            </div>
          </div>
        </article>
      </fieldset>
    </div>
  );
}

export default TicketForm;