import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL;

const api = async (obj,token) => {
  const { id } = obj;
  const config = {
    headers: {
      accepts: "application/json",
      Authorization: `Bearer ${token}`, // Set the Authorization header with the token
    
    },
  };
  const res = await axios.get(`${API_URL}/auth/getUsers/${id}`, config);
  return res;
};

const getAdminByIdService = {
  api,
};
export default getAdminByIdService;
