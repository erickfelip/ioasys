import React, { useEffect, useState } from "react";
import { SearchInput } from "../../../components/Search";
import {
  Container,
  Logo,
  Title,
  TitleWrapper,
  Icon,
  SearchBook,
  Search,
} from "./style";
import { api } from "../../services/api";

export function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await api.get("/books");
        console.log("LIVROS", response);
        setBooks(response.data);
      } catch (error) {}
    }
    fetchBooks();
  }, [books]);
  return (
    <Container>
      <TitleWrapper>
        <Logo>ioasys</Logo>
        <Title>Books</Title>
        <Icon name="location-exit" />
      </TitleWrapper>
      <SearchBook>
        <SearchInput placeholder="Procure um livro" />
        <Search name="search" />
      </SearchBook>
    </Container>
  );
}
