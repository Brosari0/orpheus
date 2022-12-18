import sendRequest from "./send-request";

const BASE_URL = '/api/posts';

export async function create(payload) {
  return sendRequest(`${BASE_URL}/create`, 'POST', payload);
}

export async function find() {
  return sendRequest(`${BASE_URL}/find`);
}

export async function upload(formData) {
  return sendRequest(`${BASE_URL}/upload`, 'POST', formData, true)
}

export async function getVidSource(payload) {
  return sendRequest(`${BASE_URL}/download`, 'POST', payload)
}