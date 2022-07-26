/* global fetch */
// based on https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// Example POST method implementation:
export async function postFetch (url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
  if (!response.ok) {
    console.log(response)
    const err = new Error('Not 2xx response')
    err.response = response
    throw err
  }
  return response.json() // parses JSON response into native JavaScript objects
}
