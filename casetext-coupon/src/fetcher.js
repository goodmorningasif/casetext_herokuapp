export default function({ url, method, auth }) {
  return fetch(url, {
    method: method,
    headers: {
      Authorization: `Bearer ${auth}`
    }
  })
    .then(response => response.json())
    .then(json => json)
    .catch(function(err) {
      console.warn("there was an error with your request", err);
    });
}
