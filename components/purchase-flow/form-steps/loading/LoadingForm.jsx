import s from "./LoadingForm.module.css";
import LoadingSVG from "./LoadingSVG";

function LoadingForm(props) {
  return (
    <div className={s.loading}>
      <div>
        <h1>We are processing your purchase</h1>
        <span>Be patient for Odin&apos;s sake</span>
      </div>
      <LoadingSVG />
    </div>
  );
}

export default LoadingForm;
