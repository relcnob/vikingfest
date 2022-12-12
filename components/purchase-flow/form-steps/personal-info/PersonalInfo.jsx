import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import s from "./PersonalInfo.module.css";
import PersonalInfoFieldset from "./PersonalInfoFieldset";

function PersonalInfo() {
  const cart = useContext(CartContext);

  function displayFieldsets() {
    let fieldsets = [];
    for (let i = 0; i < cart.regular.quantity + cart.vip.quantity; i++) {
      fieldsets.push(<PersonalInfoFieldset index={i} key={i} />);
    }
    return fieldsets;
  }
  return <div className={s.personal_info}>{displayFieldsets()}</div>;
}

export default PersonalInfo;
