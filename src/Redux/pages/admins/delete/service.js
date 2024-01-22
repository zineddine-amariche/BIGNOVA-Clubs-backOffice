import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL;

const api = async (obj, token) => {
  const { id } = obj;
  const config = {
    headers: {
      accepts: "application/json",
      Authorization: `Bearer ${token}`, // Set the Authorization header with the token
    },
  };
  const res = await axios.delete(`${API_URL}/auth/${id}`, config);
  return res;
};

const deleteAdminService = {
  api,
};
export default deleteAdminService;
