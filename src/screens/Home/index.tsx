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
  BooksList,
  Header,
} from "./style";
import { Card } from "../../../components/Card";
import { fetchBooks } from "../../services/api";
import { StatusBar } from "react-native";

export type Books = {
  authors: string[];
  category: string | any;
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
};

export function Home() {
  const [books, setBooks] = useState<Books[]>([]);
  const cardData = {
    title: "Crossing the Chasm",
    authors: "Geoffrey A. Moore",
    about: {
      pageCount: 600,
      publisher: "Editora loyola",
      published: "Publicado em 2020",
    },
    thumbnail: "https://d2drtqy2ezsot0.cloudfront.net/Book-7.jpg",
  };


  useEffect(() => {
    fetchBooks();
  }, [books]);

  
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

      <BooksList
        data={[1,2,3,4,5]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Card data={cardData} />}
      />
    </Container>
  );
}
