// ct - reserve spot (rerturns id! :)

export default function reserveSpot(selectedArea, selectedAmount) {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: `{"area":"${selectedArea}","amount":${selectedAmount}}`,
  };
  fetch("http://localhost:8080/reserve-spot", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
