import s from "./LoadingInline.module.css";
import LoadingSVG from "../../form-steps/loading/LoadingSVG";

function LoadingInline(props) {
  return (
    <div className={s.loading}>
      <div>
        <h1>{props.message}</h1>
        <span>Be patient for Odin&apos;s sake</span>
      </div>
      <LoadingSVG />
    </div>
  );
}

export default LoadingInline;
