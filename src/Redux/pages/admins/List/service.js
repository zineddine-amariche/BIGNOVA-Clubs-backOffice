import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL;

const api = async () => {
  const config = {
    headers: {
      accepts: "application/json",
    },
  };
  const res = await axios.get(`${API_URL}/auth/getUsers`, config);
  return res;
};

const getAdminsService = {
  api,
};
export default getAdminsService;
