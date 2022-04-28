import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1",
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  console.log("@@@@", token);
  if (config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

async function requestSignIn(email: string, password: string) {
  try {
    const response = await api.post("/auth/sign-in", { email, password });
    console.log("POST API", response);
    return response;
  } catch (error) {}
}

async function fetchBooks() {
  try {
    const response = await api.get("/books?page=1&amount=10");
    /*  console.log("Livros da api", response); */
    console.log("@@@");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { requestSignIn, fetchBooks, api };
