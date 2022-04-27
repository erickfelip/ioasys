import React from "react";
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

export function Home() {
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
