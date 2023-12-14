
// const API_BASE_URL = 'http://localhost:5000/test2.0/api/Login';


const API_BASE_URL = 'http://localhost:5000';

export async function getLogo() {
  try {
    const response = await fetch(`${API_BASE_URL}/test2.0/api/Login/GetLogo`);
    if (!response.ok) {
      throw new Error('Failed to fetch logo');
    }
    const data = await response.json();
    console.log("response",data);
    console.log("console 3");
    return data.result; 
  } catch (error) {
    console.log("console 4");
    throw new Error('Failed to fetch logo');
  }
}
export const fetchLogo = async () => {
  try {
    const response = await fetch('http://localhost:5000/test2.0/api/Login/GetLogo');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.isSuccess ? data.result : null;
  } catch (error) {
    throw new Error('Error fetching logo: ' + error.message);
  }
};

export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const fetchLogoImage = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/GetLogo`); 
    console.log("response",response);
    if (!response.ok) {
      throw new Error('Failed to fetch logo image');
    }

    const logos = await response.logos();
    const imageUrl = URL.createObjectURL(logos);
    return imageUrl;
  } catch (error) {
    console.error('Error fetching logo image:', error);
    throw error;
  }
};






// function getCookie(name) {
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(";");
//     for (var i = 0; i < ca.length; i++) {
//       var c = ca[i];
//       while (c.charAt(0) == " ") c = c.substring(1, c.length);
//       if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//     }
//     return null;
//   }

// async function loginpg(values) {
//     var token = localStorage.getItem("access-token");
//     let device_id = localStorage.getItem("deviceId");
//     let ipaddress = localStorage.getItem("ipaddress");
//     let user_id = getCookie("userId");
//     let countryCode = getCookie("country_code");

//     const customConfig = {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         "Access-Control-Allow-Origin": true,
//         crossorigin: true,
//         "access-token": token,
//         country_code: countryCode,
//         dev_id: device_id,
//         ip: ipaddress,
//         device_type: "web",
//       },
//       // body: {
//       //     'user_email': values.email,
//       //     'password': values.password,
//       // }
//     };
//     var url = new URL(process.env.REACT_APP_API_URL + "account/login"),
//       params = {
//         user_email: values.email,
//         password: values.password,
//       };
//     Object.keys(params).forEach((key) =>
//       url.searchParams.append(key, params[key])
//     );
//     let res = {};
//     let response = await fetch(url, customConfig);
//     res.status = response.status;
//     res.data = await response.json();
//     return res;
   
//   }

//   export const Login = {
//     loginpg,
//     getCookie
//   }