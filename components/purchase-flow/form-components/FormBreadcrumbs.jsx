import React from "react";
import s from "./FormBreadcrumbs.module.css";
function FormBreadcrumbs(props) {
  return (
    <div className={s.wrapper}>
      <div className={`${s.divider} ${props.currentStep === 1 ? s.active : ""}`}>
        <span>Cart</span>
        <div className={s.indicator}></div>
      </div>
      <div className={`${s.divider} ${props.currentStep === 2 ? s.active : ""}`}>
        <span>Location</span>
        <div className={s.indicator}></div>
      </div>
      <div className={`${s.divider} ${props.currentStep === 3 ? s.active : ""}`}>
        <span>Payment</span>
        <div className={s.indicator}></div>
      </div>
    </div>
  );
}

export default FormBreadcrumbs;
