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

export async function deletePost(postId) {
  return sendRequest(`${BASE_URL}/delete/${postId}`, 'DELETE')
}

export async function edit() {

}