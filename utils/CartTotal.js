export function getCartTotal(cart) {
  const total_no_tax =
    cart.regular.price * cart.regular.quantity + cart.vip.price * cart.vip.quantity + cart["2p"].price * cart["2p"].quantity + cart["3p"].price * cart["3p"].quantity + cart.camping_fee;
  const total_tax = total_no_tax * cart.tax;
  const total_donation = cart.donation.value_in_percentage !== 0 ? total_no_tax * (cart.donation.value_in_percentage / 100) : 0;
  if (cart.green.checked) {
    return (total_tax + total_no_tax + total_donation + cart.green.price).toFixed(2);
  }
  return (total_tax + total_no_tax + total_donation).toFixed(2);
}

export function getSubTotal(cart) {
  const subtotal = cart.regular.price * cart.regular.quantity + cart.vip.price * cart.vip.quantity + cart["2p"].price * cart["2p"].quantity + cart["3p"].price * cart["3p"].quantity;
  if (cart.green.checked) {
    return (subtotal + cart.green.price).toFixed(2);
  }
  return subtotal.toFixed(2);
}

export function getTotalTaxes(cart) {
  const total_no_tax =
    cart.regular.price * cart.regular.quantity + cart.vip.price * cart.vip.quantity + cart["2p"].price * cart["2p"].quantity + cart["3p"].price * cart["3p"].quantity + cart.camping_fee;
  if (cart.green.checked) {
    const total_tax = (total_no_tax + cart.green.price) * cart.tax;
    return total_tax.toFixed(2);
  }
  const total_tax = total_no_tax * cart.tax;
  return total_tax.toFixed(2);
}

export function getTotalDonation(cart) {
  const total_no_tax =
    cart.regular.price * cart.regular.quantity + cart.vip.price * cart.vip.quantity + cart["2p"].price * cart["2p"].quantity + cart["3p"].price * cart["3p"].quantity + cart.camping_fee;
  if (cart.green.checked) {
    const total_donation = cart.donation.value_in_percentage !== 0 ? (total_no_tax + cart.green.price) * (cart.donation.value_in_percentage / 100) : 0;

    return total_donation.toFixed(2);
  }
  const total_donation = cart.donation.value_in_percentage !== 0 ? total_no_tax * (cart.donation.value_in_percentage / 100) : 0;

  return total_donation.toFixed(2);
}
