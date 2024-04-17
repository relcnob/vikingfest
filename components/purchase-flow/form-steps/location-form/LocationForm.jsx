import { useContext, useEffect, useState } from "react";
import s from "./LocationForm.module.css";
import LoadingInline from "../../form-components/loading-inline/LoadingInline";
import FormOverview from "../../form-components/form-overview/FormOverview";
import { CartContext } from "../../../../contexts/CartContext";
// import AreaMap from "../../form-components/area-map/AreaMap";

function LocationForm({ error }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [availableSpots, setAvailableSpots] = useState({});
  const cart = useContext(CartContext);
  useEffect(() => {
    async function getAvailability() {
      setMessage("Getting available spots");
      setLoading(true);
      const res = await fetch(
        `https://vikingfest-api.onrender.com/available-spots`
      );
      const spots = await res.json();
      if (!error) {
        const newSpots = {};
        spots.forEach((spot) => {
          newSpots[spot.area] = Number(spot.available);
        });
        setAvailableSpots((old) => {
          return { ...old, ...newSpots };
        });
      }
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
            <FormOverview
              error={error}
              availableSpots={availableSpots}
              tickets={cart.vip.quantity + cart.regular.quantity}
            />
          </fieldset>
        </div>
      )}
    </>
  );
}

export default LocationForm;
