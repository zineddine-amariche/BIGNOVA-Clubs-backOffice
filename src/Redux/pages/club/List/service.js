import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL_CLUB;

const api = async () => {
  const config = {
    headers: {
      accepts: "application/json",
    },
  };
  const res = await axios.get(`${API_URL}/getClubs`, config);
  return res;
};

const getClubsService = {
  api,
};
export default getClubsService;
