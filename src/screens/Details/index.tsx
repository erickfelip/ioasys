import React from "react";
import {
  Container,
  CardImage,
  DetailsBook,
  Title,
  Author,
  Information,
  Pages,
  Editor,
  Published,
  Idioma,
  OriginalTitle,
  Isbn10,
  Isbn13,
  Category,
  DescriptionWrapper,
  Description,
  Informations,
  ResumeTitle,
} from "./style";
import { Books } from "../../screens/Home";
import { useRoute } from "@react-navigation/native";

interface Params {
  book: Books;
}

export function Details() {
  const route = useRoute();
  const { book } = route.params as Params;

  return (
    <Container>
      <DetailsBook>
        <CardImage source={{ uri: book.imageUrl }} />
        <Title>{book.title}</Title>
        <Author>{book.authors.join(", ")} </Author>
      </DetailsBook>
      <Information>
        <Informations>Informações</Informations>
        <Pages>{book.pageCount}</Pages>
        <Editor>{book.publisher}</Editor>
        <Published>{book.published}</Published>
        <Idioma>{book.language}</Idioma>
        <OriginalTitle>{book.title}</OriginalTitle>
        <Isbn10>{book.isbn10}</Isbn10>
        <Isbn13>240-{book.isbn13}</Isbn13>
        <Category>{book.category}</Category>
      </Information>
      <DescriptionWrapper>
        <ResumeTitle>RESENHA DA EDITORA</ResumeTitle>
        <Description>{book.description}</Description>
      </DescriptionWrapper>
    </Container>
  );
}
