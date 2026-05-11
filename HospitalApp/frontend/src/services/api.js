import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// ✅ PRODUCTION BACKEND URL
const API = axios.create({
  baseURL: "https://8c1aec15-3e40-442a-b540-03dff8707bac-00-1218ftgcq2cls.sisko.replit.dev/api",
});

// ✅ TOKEN INTERCEPTOR
API.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.log("Token error:", error);
  }

  return config;
});

export default API;