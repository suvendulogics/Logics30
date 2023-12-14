import axios from "axios";
// import { getStringData, storeStringData } from "../utilities/asyncStorage";

const environment = "portalapi2";
const baseURL = `https://saumendra.irslogics.kitchen/users`;

const axiosConfig = {
  baseURL: baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
  },
};

let instance = axios.create(axiosConfig);

// instance.interceptors.request.use(
//   async (config) => {
//     const token = await getStringData("UserAccesToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

function refreshToken(email, password) {
  // axios.post('https://saumendra.irslogics.kitchen/users/saumendra/Token', {
  //     email: email,
  //     password: password
  // }).then((res) => {
  //     console.log('Response ===>', res.data)
  // }).catch((err) => {
  //     console.log('Error ===>', err)
  // })

  let url = "https://saumendra.irslogics.kitchen/users/saumendra/Token";

  let body = JSON.stringify({
    email: "shilpa@logics.com",
    password: "irslogics123",
    //  email: email,
    //  password: password
  });

  var authOptions = {
    method: "post",
    url: url,
    data: body,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "XMLHttpRequest",
    },
    json: true,
  };

  axios(authOptions)
    .then((resp) => {
      console.log("response :- ", resp);
    })
    .catch((error) => {
      alert(error);
    });
}

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error) {
//       const refreshedToken = await refreshToken();
//       if (refreshedToken) {
//         await storeStringData("UserAccesToken", refreshedToken);
//         error.config.headers.Authorization = `Bearer ${refreshedToken}`;
//         return axios.request(error.config);
//       } else {
//         console.log("===> Unable to refresh the token");
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default refreshToken;
