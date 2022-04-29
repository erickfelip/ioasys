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
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
  Details: any;
};

export type authScreenProp = StackNavigationProp<
  RootStackParamList,
  "Details",
  "SignIn"
>;

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
  const [listBooks, setListBooks] = useState(books);
  const [searchText, setSearchText] = useState("");

  async function dataBooks() {
    const dataSolicitaion = await fetchBooks(searchText);
    setBooks(dataSolicitaion.data);
  }

  function handleDetails(book: Books): void {
    navigation.navigate("Details", { book });
  }

  async function handleLogout() {
    await AsyncStorage.clear();
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  }

  function handleSearch(t: string) {}

  useEffect(() => {
    dataBooks();
    if (searchText === "") {
      setBooks(books);
    } else {
      setBooks(
        books.filter((item) => {
          return (
            item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
          );
        })
      );
    }
  }, [searchText]);

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
          <TouchableOpacity onPress={handleLogout}>
            <Icon name="location-exit" />
          </TouchableOpacity>
        </TitleWrapper>
        <SearchBook>
          <SearchInput
            placeholder="Procure um livro"
            value={searchText}
            onChangeText={(t) => setSearchText(t)}
          />
          <TouchableOpacity>
            <Search name="search" />
          </TouchableOpacity>
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
