import sendRequest from "./send-request";

const BASE_URL = '/api/posts';

export async function getMedia() {
  return sendRequest(`${BASE_URL}/media`)
}