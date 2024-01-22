import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL;

const api = async (obj,token) => {
 
  const config = {
    headers: {
      accepts: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `${API_URL}/admin`
  const res = await axios.put(url, obj, config);
   return res;
};

const updateClubService = {
  api,
};
export default updateClubService;
