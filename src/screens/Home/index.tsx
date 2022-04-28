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
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  SingIn: undefined;
  Home: undefined;
  Details: any;
};

type authScreenProp = StackNavigationProp<RootStackParamList, "Details">;

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
  const navigation = useNavigation<authScreenProp>();
  const [books, setBooks] = useState<Books[]>([]);

  async function dataBooks() {
    const dataSolicitaion = await fetchBooks();
    setBooks(dataSolicitaion.data);
  }

  function handleDetails(book: Books) {
    navigation.navigate("Details", { book });
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
        style={{ padding: 18 }}
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card data={item} onPress={() => handleDetails(item)} />
        )}
      />
    </Container>
  );
}
