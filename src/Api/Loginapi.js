import axios from "axios";

const API_URL = axios.create({
    // baseURL: "http://localhost:5000/auth",
    baseURL: "https://google-auth-backend-kohl.vercel.app/auth",
})

export const loginWithGooogle = (code) => API_URL.get(`/google-login?code=${code}`)

// import axios from "axios";

// const API_URL = axios.create({
//     baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/auth",
// });

// export const loginWithGoogle = (code) =>
//     API_URL.get(`/google-login?code=${encodeURIComponent(code)}`);
