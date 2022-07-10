import axios from "axios";
import authHeader from "./authHeader";

const getMedicalDevice = async (id) => {
  let token = await authHeader();
  console.log(token);
  return axios.get("https://mams-api.herokuapp.com/medical_devices/" + id, {
    headers: { Authorization: token },
  });
};

const updateMedicalDevice = async (id, data) => {
  let token = await authHeader();
  console.log(token);
  console.log(id, data);
  return axios.patch(
    "https://mams-api.herokuapp.com/medical_devices/" + id,
    data,
    { headers: { Authorization: token } }
  );
};

const apiServices = {
  getMedicalDevice,
  updateMedicalDevice,
};

export default apiServices;
