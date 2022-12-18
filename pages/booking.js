import React from "react";
import PurchaseFlow from "../components/purchase-flow/PurchaseFlow";

import { CartProvider } from "../contexts/CartContext";

function booking() {
  return (
    <>
      <CartProvider>
        <PurchaseFlow />
      </CartProvider>
    </>
  );
}

export default booking;
