import s from "./CartItem.module.css";
import Image from "next/image";

function CartItem(props) {
  return (
    <article className={s.cart_item}>
      <div className={s.thumbnail}>
        {props.name === "vip" && <Image src={"/images/vikingfest-icons/other/ticket-vip.svg"} width={64} height={64} alt={"decorative"} />}
        {props.name === "regular" && <Image src={"/images/vikingfest-icons/other/ticket-regular.svg"} width={64} height={64} alt={"decorative"} />}
        {props.name === "3p" && <Image src={"/images/vikingfest-icons/other/tent.svg"} width={64} height={64} alt={"decorative"} />}
        {props.name === "2p" && <Image src={"/images/vikingfest-icons/other/tent.svg"} width={64} height={64} alt={"decorative"} />}
        {props.name === "green" && <Image src={"/images/vikingfest-icons/other/green-camping.svg"} width={64} height={64} alt={"decorative"} />}
        {props.name === "donation" && <Image src={"/images/vikingfest-icons/other/donation.svg"} width={64} height={64} alt={"decorative"} />}
      </div>
      <div className={s.content}>
        <span className={s.title}>{props.title}</span>
        {props.quantity && <span className={s.quantity}>Quantity: {props.quantity}</span>}
      </div>
      {props.price && <span className={s.price}>{props.price},- DKK</span>}
    </article>
  );
}

export default CartItem;
