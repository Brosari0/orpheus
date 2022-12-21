import sendRequest from "./send-request";

const BASE_URL = '/api/comments';

export async function create(newComment, postId) {
  return sendRequest(`${BASE_URL}/create/${postId}`, 'POST', {content: newComment}); 
}