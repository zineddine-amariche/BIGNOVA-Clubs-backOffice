import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL_CLUB;

const api = async (obj) => {
  const {id} = obj;
  const config = {
    headers: {
      accepts: "application/json",
    },
  };
  const res = await axios.put(`${API_URL}/${id}`, obj, config);
  return res;
};

const updateClubService = {
  api,
};
export default updateClubService;
