import DownloadIcon from "./DownloadIcon";
import s from "./Success.module.css";

function Success() {
  return (
    <div className={s.success}>
      <div>
        <div className={s.header}>
          <h1>Congratulations</h1>
          <span>Your order is confirmed.</span>
        </div>
        <section className={s.qrCodeSection}>
          <h2>Here is your ticket, we will see each other soon!</h2>
          <div className={s.qrCodeArea}>
            <div>
              <div>QR CODE</div>
              <span>You can either screenshot it and show at the entrance, or download the ticket via the pdf</span>
            </div>
            <div className={s.downloadArea}>
              <h3>Download the ticket in pdf format</h3>
              <button className={`button ${s.downloadBtn}`}>
                Download your ticket as pdf <DownloadIcon />
              </button>
            </div>
          </div>
        </section>
        <section className={s.appSection}>
          <h2>You can follow the VikingFest schedule on our app</h2>
          <button className="button">Visit our app</button>
        </section>
        <section className={s.customerSection}>
          <h2>Customer information</h2>

          <div className={s.contactInfo}>
            <h3>Contact information</h3>
            <span>John Doe</span>
            <span>DD/MM/YYYY</span>
            <span>+45 XX XX XX XX</span>
            <span>name@example.com</span>
          </div>
          <div className={s.paymentInfo}>
            <h3>Payment method</h3>
            <span>ending with 4242 - 1736,35 DKK</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Success;
