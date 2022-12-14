// ct - get availiability on map page
export default function checkAvailability() {
  const options = { method: "GET" };

  fetch("http://localhost:8080/available-spots", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
