export function getCartTotal(cart) {
  const total_no_tax = cart.regular.price * cart.regular.quantity + cart.vip.price * cart.vip.quantity + cart["2p"].price * cart["2p"].quantity + cart["3p"].price * cart["3p"].quantity + cart.camping_fee;
  const total_tax = total_no_tax * cart.tax;
  const total_donation = cart.donation.value_in_percentage !== 0 ? total_no_tax * (cart.donation.value_in_percentage / 100) : 0;
  return total_tax + total_no_tax + total_donation;
}

export function getSubTotal(cart) {
  const subtotal = cart.regular.price * cart.regular.quantity + cart.vip.price * cart.vip.quantity + cart["2p"].price * cart["2p"].quantity + cart["3p"].price * cart["3p"].quantity;
  return subtotal;
}

export function getTotalTaxes(cart) {
  const total_no_tax = cart.regular.price * cart.regular.quantity + cart.vip.price * cart.vip.quantity + cart["2p"].price * cart["2p"].quantity + cart["3p"].price * cart["3p"].quantity + cart.camping_fee;
  const total_tax = total_no_tax * cart.tax;
  return total_tax;
}

export function getTotalDonation(cart) {
  const total_no_tax = cart.regular.price * cart.regular.quantity + cart.vip.price * cart.vip.quantity + cart["2p"].price * cart["2p"].quantity + cart["3p"].price * cart["3p"].quantity + cart.camping_fee;
  const total_donation = cart.donation.value_in_percentage !== 0 ? total_no_tax * (cart.donation.value_in_percentage / 100) : 0;

  return total_donation.toFixed(2);
}

/* calculate total tickets  */
