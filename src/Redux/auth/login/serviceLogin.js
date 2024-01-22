import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL;

//  !Login user api

const api = async (obj) => {
  const config = {
    headers: {
      accepts: "application/json",
    },
  };

  const res = await axios.post(`${API_URL}/auth/login`, obj, config);
  return res;
};

const loginService = {
  api,
};
export default loginService;
