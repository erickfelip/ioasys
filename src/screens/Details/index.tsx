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
  Wrapper,
} from "./style";
import { Books } from "../../screens/Home";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { RectButtonProperties } from "react-native-gesture-handler";

interface Params extends RectButtonProperties {
  book: Books;
}

export function Details() {
  const route = useRoute();
  const { book } = route.params as Params;

  return (
    <Container>
      <ScrollView>
        <Wrapper>
          <DetailsBook>
            <CardImage source={{ uri: book.imageUrl }} />
            <Title>{book.title}</Title>
            <Author>{book.authors.join(", ")} </Author>
          </DetailsBook>
          <Information>
            <Informations>Informações</Informations>
            <Pages>{`Páginas ${book.pageCount}`}</Pages>
            <Editor>{`Editora ${book.publisher}`}</Editor>
            <Published>{`Publicação ${book.published}`}</Published>
            <Idioma>{`Idioma ${book.language}`}</Idioma>
            <OriginalTitle>{`Título Original ${book.title}`}</OriginalTitle>
            <Isbn10>{`ISBN-10 ${book.isbn10}`}</Isbn10>
            <Isbn13>{`ISBN-13 ${book.isbn10}`}</Isbn13>
            <Category>{`Categoria ${book.category}`}</Category>
          </Information>
          <DescriptionWrapper>
            <ResumeTitle>RESENHA DA EDITORA</ResumeTitle>
            <Description>{book.description}</Description>
          </DescriptionWrapper>
        </Wrapper>
      </ScrollView>
    </Container>
  );
}
