import sendRequest from "./send-request";

const BASE_URL = '/api/users';

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

// export async function signUp(userData) {
//   // Fetch uses an options object as a second arg
//   // to make requests other than GET, include data,
//   // set headers.
//   const res = await fetch(BASE_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(userData)
//   });
//   // Check if request was successful
//   if (res.ok) {
//     // res.json() will resolve to the JWT
//     return res.json();
//   } else {
//     throw new Error('Invalid Sign Up');
//   }
// }

// export async function login(credentials) {
//   // Fetch uses an options object as a second arg to make
//   // requests other than GET and/or send data and/or set headers
//   const res = await fetch(`${BASE_URL}/login`, {
//     method: 'POST',
//     // MIME type of application/json
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(credentials)
//   });
//   // Check if request succeeded
//   if (res.ok) {
//     // Promise will resolve to the JWT
//     return res.json();
//   } else {
//     throw new Error('Invalid Log In');
//   }
// }