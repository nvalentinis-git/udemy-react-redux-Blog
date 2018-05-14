// https://reduxblog.herokuapp.com/

import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST_ID = 'FETCH_POST_ID';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'key=nvalentinis-redux'

export function fetchPost() {
  const requestPromise = axios.get(`${ROOT_URL}/posts?${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: requestPromise
    // this is a Promise then redux-promise will unwrapp
    // and leave the response.
  };
}

export function createPost(props) {
  const requestPromise = axios.post(`${ROOT_URL}/posts?${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: requestPromise
  }
}

export function fetchPostsById(id) {
  const requestPromise = axios.get(`${ROOT_URL}/posts/${id}?${API_KEY}`);

  return {
    type: FETCH_POST_ID,
    payload: requestPromise
  }
}
