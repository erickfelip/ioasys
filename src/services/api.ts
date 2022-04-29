import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1",
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

async function requestSignIn(email: string, password: string) {
  try {
    const response = await api.post("/auth/sign-in", { email, password });
    return response;
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert("Usuário ou senha inválida", "Não autorizado.");
    }
  }
}

async function fetchBooks(searchText: string) {
  try {
    const response = await api.get(
      `/books?page=1&amount=25&title${searchText}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { requestSignIn, fetchBooks, api };
