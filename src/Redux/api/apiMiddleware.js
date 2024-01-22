// apiMiddleware.js

// import axiosInstance from "./api"; // Adjust the path to api.js based on the file structure

const apiMiddleware = (store) => (next) => (action) => {
  if (action.meta?.api) {
    const { token } = store.getState().auth; // Assuming you have an auth slice that stores the token
    if (token) {
      action.meta.api.headers = {
        ...action.meta.api.headers,
        Authorization: `Bearer ${token}`,
      };
    }
  }

  return next(action);
};

export default apiMiddleware;
