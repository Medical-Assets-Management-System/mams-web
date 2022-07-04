import axios from "axios";

let jwt;

const login = (values) => {
  return axios
    .post("https://mams-api.herokuapp.com/login", {
      user: {
        email: values.email,
        password: values.password,
      },
    })
    .then(async (res) => {
      if (res.headers.authorization) {
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        localStorage.setItem("userRole", res.data.data.role);
        localStorage.setItem("userID", JSON.stringify(res.data.data.id));
        localStorage.setItem("userToken", res.headers.authorization);
        console.log(res.data.data.role);
        console.log(res.headers.authorization);
      }
      return res.headers.authorization;
    })
    .catch((error) => {
      console.log(error);
    });
};

const AuthServices = {
  login,
};
export default AuthServices;
