import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
export const STOCK_API = `${API_BASE}/stats`;

export const stockSearch = async (ticker) => {
	const response = await axios.get(`${STOCK_API}/${ticker}`);
	return response.data;
};
