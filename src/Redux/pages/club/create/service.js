import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_API_BASE_URL_CLUB;

//  !Login user api
const api = async (values,token) => {
  console.log('values.photo', values.Files)


  const formData = new FormData();

  formData.append('name', values.name);
  formData.append('headName', values.headName);
  formData.append('description', values.description);
  formData.append('creationDate', values.creationDate);
  formData.append('phoneNumber', values.phoneNumber);
  formData.append('email', values.email);
  formData.append('address', values.address);
  formData.append('etat', values.etat);
  formData.append('file', values.Files);
  // formData.append('file',   {
  //   uri: values.Files.path,
  //   type: values.Files.type,
  //   name: values.Files.fileName,
  // destination: values.Files.destination
  
  // });







  const config = {
    headers: {
      accepts: "application/json",
      Authorization: `Bearer ${token}`, 
      'Content-Type': 'multipart/form-data',

    },
  };
  const res = await axios.post(`${API_URL}/register`, formData, config);
  return res;
};

const createClubService = {
  api,
};
export default createClubService;
