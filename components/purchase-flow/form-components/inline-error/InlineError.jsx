import ErrorSVG from "./ErrorSVG";
import s from "./InlineError.module.css";
function InlineError(props) {
  return (
    <span className={s.error}>
      <ErrorSVG />
      {props.message}
    </span>
  );
}

export default InlineError;
