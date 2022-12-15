import sendRequest from "./send-request";

const BASE_URL = '/api/posts';

export async function create(payload) {
  return sendRequest(BASE_URL, 'POST', payload);
}
export async function find() {
  return sendRequest(`${BASE_URL}/find`);
}