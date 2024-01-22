import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL_CLUB;

const api = async (obj, token) => {
  const { id,argument } = obj;
  let body = {
    argument,
  };
  const config = {
    headers: {
      accepts: "application/json",
      Authorization: `Bearer ${token}`, // Set the Authorization header with the token
    },
  };
  const res = await axios.put(`${API_URL}/validated/${id}`, body, config);
  return res;
};

const validateClubService = {
  api,
};
export default validateClubService;
