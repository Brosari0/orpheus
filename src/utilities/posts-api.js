import sendRequest from "./send-request";

const BASE_URL = '/api/posts';

export async function create(payload) {
  return sendRequest(BASE_URL, 'POST', payload);
}
export async function getMedia() {
  return sendRequest(`${BASE_URL}/media`);
}