import s from "./LocationForm.module.css";
function LocationForm() {
  return (
    <div className={s.location_form}>
      <fieldset>
        <legend>Click on the camping spot</legend>
        <div className={s.map_wrapper}></div>
        <div className={s.map_legend}>
          <div>
            <div className={s.color}></div>
            <p>Camping 1</p>
          </div>
          <div>
            <div className={s.color}></div>
            <p>Camping 2</p>
          </div>
          <div>
            <div className={s.color}></div>
            <p>Camping 3</p>
          </div>
          <div>
            <div className={s.color}></div>
            <p>Camping 4</p>
          </div>
          <div>
            <div className={s.color}></div>
            <p>Camping 5</p>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default LocationForm;
