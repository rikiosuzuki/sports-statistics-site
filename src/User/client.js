import axios from "axios";

const request = axios.create({
    withCredentials: true,
});


export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";
export const USERS_API = `${BASE_API}/api/users`;



export const signin = async (credentials) => {
    const response = await request.post( `${USERS_API}/signin`, credentials );
    return response.data;
};