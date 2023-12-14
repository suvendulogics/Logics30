const API_BASE_URL = 'https://saumendra.irslogics.kitchen/users';

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
    const response = await fetch('https://saumendra.irslogics.kitchen/users/GetLogo');
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



export const fetchToken = async () => {
    const apiUrl = 'https://saumendra.irslogics.kitchen/users/saumendra/Token';
  
    const requestBody = {
      email: 'saumendra@irslogics.com',
      password: 'irslogics123',
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      const token = data.token;
  
  
      return token;
    } catch (error) {
      throw new Error('Error fetching token: ' + error.message);
    }
  };
  