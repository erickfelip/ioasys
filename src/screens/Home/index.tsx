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
  Filter,
  FilterWrapper,
  WrapperFilter,
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

  function handleSearch(t: string) {
    setSearchText(t);
    if (searchText === "") {
      setBooks(books);
    } else {
      setListBooks(
        books.filter((item) => {
          return (
            item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
          );
        })
      );
    }
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
          <TouchableOpacity onPress={handleLogout}>
            <Icon name="location-exit" />
          </TouchableOpacity>
        </TitleWrapper>
        <FilterWrapper>
          <SearchBook>
            <SearchInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Procure um livro"
              value={searchText}
              onChangeText={(t) => handleSearch(t)}
            />
            <TouchableOpacity>
              <Search name="search" />
            </TouchableOpacity>
          </SearchBook>
          <WrapperFilter>
            <TouchableOpacity>
              <Filter name="filter-outline" />
            </TouchableOpacity>
          </WrapperFilter>
        </FilterWrapper>
      </Header>
      <FlatList<Books>
        style={{ padding: 18 }}
        data={searchText === "" ? books : listBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card data={item} onPress={() => handleDetails(item)} />
        )}
      />
    </Container>
  );
}
