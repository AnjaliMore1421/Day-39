import API from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);

  await AsyncStorage.setItem("token", res.data.token);

  return res.data;
};