import s from "./CartItem.module.css";

function CartItem(props) {
  return (
    <article className={s.cart_item}>
      <div className={s.thumbnail}></div>
      <div className={s.content}>
        <span className={s.title}>{props.title}</span>
        {props.quantity && <span className={s.quantity}>Quantity: {props.quantity}</span>}
      </div>
      {props.price && <span className={s.price}>{props.price},- DKK</span>}
    </article>
  );
}

export default CartItem;
