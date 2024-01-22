import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL;

//  !Login user api
const api = async (values,token) => {

  const config = {
    headers: {
      accepts: "application/json",
      Authorization: `Bearer ${token}`, 
      'Content-Type': 'multipart/form-data',

    },
  };
  const res = await axios.post(`${API_URL}/auth/account`, values, config);
  return res;
};

const createAdminService = {
  api,
};
export default createAdminService;
