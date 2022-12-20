import sendRequest from "./send-request";

const BASE_URL = '/api/comments';

export async function create(payload) {
  return sendRequest(`${BASE_URL}/create/${payload._id}`, 'POST', payload); 
}