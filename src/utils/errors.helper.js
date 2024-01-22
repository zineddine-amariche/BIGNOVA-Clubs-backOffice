export const handleError = (error) => {
  if (error.response && error.response.data) {
    return error.response.data;
  } else if (error.message === "Network Error") {
    return { error: "Network Error" };
  } else {
    return { error: error.toString() };
  }
};