export default function fullfillReserversation(spotID) {
  fetch("http://localhost:8080/fullfill-reservation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      id: `${spotID}`,
    },
  })
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
