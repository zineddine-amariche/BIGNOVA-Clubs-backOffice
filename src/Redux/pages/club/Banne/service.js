import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL_CLUB;

const api = async (obj, token) => {
  const { id,argument } = obj;
  
  let body = {
    argument,
  };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, 
      "Content-Type": "application/json",
    },
  };
  const res = await axios.put(`${API_URL}/banned/${id}`, body, config);
  return res;
};

const BanneClubService = {
  api,
};
export default BanneClubService;
 
