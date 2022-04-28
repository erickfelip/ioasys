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
  Header,
} from "./style";
import { Card } from "../../../components/Card";
import { fetchBooks } from "../../services/api";
import { FlatList, StatusBar } from "react-native";

export interface Books {
  authors: string[];
  category: string;
  description: string;
  id: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pageCount: number;
  published: number;
  publisher: string;
  title: string;
}

export function Home() {
  const [books, setBooks] = useState<Books[]>([]);

  async function dataBooks() {
    const dataSolicitaion = await fetchBooks();
    setBooks(dataSolicitaion.data);
  }

  useEffect(() => {
    dataBooks();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <TitleWrapper>
          <Logo>ioasys</Logo>
          <Title>Books</Title>
          <Icon name="location-exit" />
        </TitleWrapper>
        <SearchBook>
          <SearchInput placeholder="Procure um livro" />
          <Search name="search" />
        </SearchBook>
      </Header>

      <FlatList<Books>
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card data={item} />}
      />
    </Container>
  );
}
