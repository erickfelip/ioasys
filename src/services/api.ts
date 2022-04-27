import axios from "axios";

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1",
});

async function requestSignIn(email: string, password: string) {
  try {
    const response = await api.post("/auth/sign-in", { email, password });
    console.log("POST API", response);
    return response.data;
  } catch (error) {}
}

async function fetchBooks() {
  try {
    const response = await api.get("/books");
    console.log("Livros da api", response);
    return response.data;
  } catch (error) {}
}

export { requestSignIn, fetchBooks, api};
