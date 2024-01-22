import axios from "axios";
import store from "../store";

const baseURL = import.meta.env.VITE_REACT_API_BASE_URL;


// const axiosInstance = axios.create({
//     baseURL,
//   });
  
//   axiosInstance.interceptors.request.use(
//     (config) => {

//       const { auth } = store.getState();
//       console.log('auth', auth)
//       const accessToken = auth.token;
  
//       if (accessToken) {
//         config.headers['Authorization'] = `Bearer ${accessToken}`;
//       }
  
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );
  
//   export default axiosInstance;

// api.js



const axiosInstance = axios.create({
  baseURL,
  headers: {
    // Add any common headers you want to include with every request
    // For example, you can include an authorization token here if needed
    // Authorization: `Bearer ${YOUR_AUTH_TOKEN}`,
  },
});

export default axiosInstance;
