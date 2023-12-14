import axios from "axios";

const request = axios.create({
  withCredentials: true,
}); 

export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;
export const POSTS_API = `${BASE_API}/api/posts`;

export const account = async () => {
  const response = await request.post(`${USERS_API}/account`);
  return response.data;
};

/* Signin stuff */
export const signin = async (credentials) => {
  const response = await request.post(`${USERS_API}/signin`, credentials);
  return response.data;
};
export const signout = async () => {
  const response = await request.post(`${USERS_API}/signout`);
  return response.data;
};
export const signup = async (credentials) => {
  const response = await request.post(`${USERS_API}/signup`, credentials);
  return response.data;
};


/* User stuff */
export const deleteUser = async (user) => {
  const response = await request.delete(`${USERS_API}/${user._id}`);
  return response.data;
};
export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
};
export const createUser = async (user) => {
  const response = await request.post(`${USERS_API}`, user);
  return response.data;
};
export const findAllUsers = async () => {
  const response = await request.get(`${USERS_API}`);
  return response.data;
};
export const updateUser = async (user) => {
  const response = await request.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};


/* Posts stuff */

export const deletePost = async (post) => {
  console.log("post", post);
  console.log("post._id", post._id);
  console.log("deleting this post");
  const response = await request.delete(`${POSTS_API}/${post._id}`);
  return response.data;
};
export const createPost = async (post) => {
  console.log("post_api", POSTS_API);
  console.log("post", post);

  const response = await request.post(`${POSTS_API}`, post);
  return response.data;
};
export const findAllPosts = async () => {
  const response = await request.get(`${POSTS_API}`);
  return response.data;
};
export const updatePost = async (post) => {
  const response = await request.put(`${POSTS_API}/${post._id}`, post);
  return response.data;
};
