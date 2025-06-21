import axios from "axios";

const API_URL = axios.create({
    // baseURL: "http://localhost:5000/auth",
    baseURL: "https://google-auth-backend-alpha.vercel.app/auth",
})

export const loginWithGooogle = (code) => API_URL.get(`/google-login?code=${code}`);
