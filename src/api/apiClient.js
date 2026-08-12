
// const API_BASE_URL = 'https://your-backend.com';
// const APP_ID = 'your-id-app';
// const TOKEN = 'your-token-app';

// export const apiClient = async(endpoint, options = {}) => {
//     const url = `${API_BASE_URL}/{endpoint}`;

//     const headers = {
//         'Content-Type': 'application/json',
//         'X-App-Id': APP_ID,
//         'Authorization': `Bearer ${TOKEN}`,
//         ...options.headers,
//     };

//     const response = await fetch(url, {
//         ...options,
//         headers,
//     });

//     if(!response.ok) {
//         throw new Error(`HTTP error! status: ${ response.status }`);
//     }

//     return response.json();
// };


import axios from "axios";

const API_BASE_URL = "https://your-backend.com";
const APP_ID = "your-app-id";
const TOKEN = "your-token-auth";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-App-Id": APP_ID,
    Authorization: `Bearer ${TOKEN}`,
  },
});
