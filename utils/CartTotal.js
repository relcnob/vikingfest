export default function getCartTotal(cart) {
  const total_no_tax = cart.regular.price * cart.regular.quantity + cart.vip.price * cart.vip.quantity + cart["2p"].price * cart["2p"].quantity + cart["3p"].price * cart["3p"].quantity;
  const total_tax = total_no_tax * cart.tax;
  const total_donation = cart.donation.value_in_percentage !== 0 ? total_no_tax + total_no_tax * (cart.donation.value_in_percentage / 100) : 0;
  return total_tax + total_no_tax + total_donation;
}
