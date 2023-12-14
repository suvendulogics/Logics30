import axios from "axios";

const client = axios.create({
  //baseURL: "https://jsonplaceholder.typicode.com"https://cors-anywhere.herokuapp.com/ ,
  //  baseURL: "https://cors-anywhere.herokuapp.com/saumendra.irslogics.kitchen/users",
  baseURL: "https://saumendra.irslogics.kitchen/users",
  //baseURL : "https://portalapi2.logics.com/dev/api/v1",
  withCredentials: false,
  accesscontrolalloworigin: "*",
  accesscontrolallowMethods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
});

const subdomain = "saumendra";

const AccountServices = {
  getPosts: () => client.get("/posts"),

  login:(data) => client.post('/saumendra/Token',data,{
    //mode: 'no-cors',
 
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "XMLHttpRequest",
    },
    json: true,
    // withCredentials: true,
    // credentials: 'same-origin',
   }),

  // async testApi(data) {
  //   return axios.post(
  //     `https://saumendra.irslogics.kitchen/users/saumendra/token`,
  //     data,
  //     {
  //       mode: "no-cors",
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //       credentials: "same-origin",
  //     }
  //   );
  // },

  //  login:(data) => client.post('/Account/authenticate',data,{
  //   mode: 'no-cors',
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json',
  //   },
  //   withCredentials: true,
  //   credentials: 'same-origin',
  //  }),

  getLeftMenu: (token) =>
    client.get("/saumendra/Users/GetTreeViewNode", {
      headers: {
        Authorization: "bearer " + token,
      },
    }),




    getLogo: (token) =>
    client.get("/saumendra/Users/GetLogo", {
      headers: {
        Authorization: "bearer " + token,
      },
    }),


    getUserLog: (token) =>
    client.get("/saumendra/Users/getuserlog?userId=3143", {
      headers: {
        Authorization: "bearer " + token,
      },
    }),


  
};


export default AccountServices;
