import { useContext } from "react";
import DownloadIcon from "./DownloadIcon";
import s from "./Success.module.css";
import { CartContext } from "../../../../contexts/CartContext";
import { getCartTotal } from "../../../../utils/CartTotal";
import Anchor from "../../../Anchor";
import Image from "next/image";
// import QRCode from "./QRCode";

function Success() {
  const cart = useContext(CartContext);
  return (
    <div className={s.success}>
      <div>
        <div className={s.header}>
          <h1>Congratulations</h1>
          <span>Your order is confirmed.</span>
          <span>Reservation id: {cart.reservation.id.toUpperCase()}</span>
        </div>
        <section className={s.qrCodeSection}>
          <h2>Here is your ticket, we will see each other soon!</h2>
          <div className={s.qrCodeArea}>
            <div>
              <div className={s.qrCode}>
                <Image src={"/images/qrcode.svg"} width={120} height={120} alt={"QR Code"} />
              </div>
              <span>This QR Code leads you to our app</span>
            </div>
            {/* <div className={s.downloadArea}>
              <h3>Download the ticket in pdf format</h3>
              <button className={`button ${s.downloadBtn}`}>
                Download your ticket as pdf <DownloadIcon />
              </button>
            </div> */}
          </div>
        </section>
        <section className={s.appSection}>
          <h2>You can follow the VikingFest schedule on our app</h2>
          <Anchor className={`button ${s.visitButton}`} href={"https://vikingfest-app.netlify.app/"}>
            Visit our app
          </Anchor>
        </section>
        <section className={s.customerSection}>
          <h2>Customer information</h2>

          <div className={s.contactInfo}>
            {cart.personal_info.map((entry, index) => {
              return (
                <>
                  <h3>{index === 0 ? "Contact information" : `Contact guest ${index}`}</h3>

                  <span>{entry[`full_name_guest_${index}`]}</span>
                  <span>{entry[`dob_guest_${index}`]}</span>
                  {entry[`phone_guest_${index}`] !== "" && <span>{entry[`phone_guest_${index}`]}</span>}
                  <span>{entry[`email_guest_${index}`]}</span>
                </>
              );
            })}
          </div>
          <div className={s.paymentInfo}>
            <h3>Payment method</h3>
            <span>card ending with {cart.reservation.cc_ending}</span>
            <span>{getCartTotal(cart)} DKK</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Success;
