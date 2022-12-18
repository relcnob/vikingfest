import { useContext, useEffect, useState } from "react";
import s from "./LocationForm.module.css";
import LoadingInline from "../../form-components/loading-inline/LoadingInline";

function LocationForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function getAvailability() {
      setMessage("Getting available spots");
      setLoading(true);
      const res = await fetch(`http://localhost:8080/available-spots`);
      const spots = await res.json();
      console.log(spots);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    getAvailability();
  }, []);
  return (
    <>
      {loading ? (
        <LoadingInline message={message} />
      ) : (
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
      )}
    </>
  );
}

export default LocationForm;
