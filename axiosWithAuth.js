import axios from "axios";

//build a module that initiates a new axios object
//with our auth info already plugged in

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

  return axios.create({
    baseUrl: "http://localhost:5000/api",
    headers: { Authorization: token }
  });
}
