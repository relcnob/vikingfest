import React, { useContext, useEffect, useState } from "react";
import s from "./Cart.module.css";
import CartItem from "./CartItem";
import { CartContext } from "../../../contexts/CartContext";
import { getTotalTaxes, getSubTotal, getCartTotal, getTotalDonation } from "../../../utils/CartTotal";

function Cart(props) {
  const [windowWidth, SetWindowWidth] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const cart = useContext(CartContext);

  useEffect(() => {
    SetWindowWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      SetWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      {windowWidth < 1200 && !cartOpen && (
        <button className={s.cart_open} onClick={() => setCartOpen(true)}>
          <span>Open Cart - </span>
          <span>Total: {getCartTotal(cart)} DKK</span>
        </button>
      )}

      <section className={`${s.cart} ${cartOpen || windowWidth >= 1200 ? s.open : s.closed}`}>
        {windowWidth < 1200 && (
          <button className={s.cart_close} onClick={(e) => setCartOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
          </button>
        )}
        <h2>Order summary</h2>
        <div className={s.basket_items}>
          <article>
            {cart.regular.quantity !== 0 || cart.vip.quantity !== 0 || cart["2p"].quantity !== 0 || (cart["3p"].quantity !== 0 && <h3>Overall</h3>)}
            {cart.regular.quantity !== 0 && (
              <CartItem name={"regular"} title={"VikingFest 1st Edition Regular Ticket"} quantity={cart.regular.quantity} price={Number(cart.regular.price) * Number(cart.regular.quantity)} />
            )}
            {cart.vip.quantity !== 0 && <CartItem name={"vip"} title={"VikingFest 1st Edition VIP Ticket"} quantity={cart.vip.quantity} price={cart.vip.price * cart.vip.quantity} />}
            {cart["2p"].quantity !== 0 && <CartItem name={"2p"} title={"Pre-setup of 2 preson tent"} quantity={cart["2p"].quantity} price={cart["2p"].quantity * cart["2p"].price} />}
            {cart["3p"].quantity !== 0 && <CartItem name={"3p"} title={"Pre-setup of 3 preson tent"} quantity={cart["3p"].quantity} price={cart["3p"].quantity * cart["3p"].price} />}
            {cart.green.checked && <CartItem name={"green"} title={"Green camping"} quantity={1} price={cart.green.price} />}
          </article>
          {cart.camping.site && (
            <article>
              <h3>Camping site selected</h3>
              <CartItem name={"3p"} title={`${cart.camping.site} Camping site`} />
            </article>
          )}
          {cart.donation.value_in_percentage !== 0 && (
            <article>
              <h3>Donation</h3>
              <CartItem
                name={"donation"}
                title={`You’re helping the Viking museum with ${cart.donation.value_in_percentage}% of the total
purchase, without VAT.`}
              />
            </article>
          )}
        </div>
        <div className={s.overview}>
          <div className={s.overview_item}>
            <span>Subtotal</span>
            <span>{getSubTotal(cart)} DKK</span>
          </div>
          <div className={s.overview_item}>
            <span>Camping fee</span>
            <span>{cart.camping_fee} DKK</span>
          </div>
          <div className={s.overview_item}>
            <span>Donation (Excluding VAT)</span>
            <span>{getTotalDonation(cart)} DKK</span>
          </div>
          <div className={s.overview_item}>
            <span>Taxes (VAT without the donation)</span>
            <span>{getTotalTaxes(cart)} DKK</span>
          </div>
        </div>
        <div className={s.total_container}>
          <span className={s.total_title}>Total</span>
          <span className={s.total_price}>{getCartTotal(cart)}</span>
          <span className={s.total_currency}>DKK</span>
        </div>
      </section>
    </>
  );
}

export default Cart;
