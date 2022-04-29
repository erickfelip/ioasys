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
  Static,
  StaticText,
  WrapperInformation,
  InfoWrapper,
  Back,
} from "./style";
import { Books } from "../../screens/Home";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButtonProperties } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Home";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Params extends RectButtonProperties {
  book: Books;
}

export type HomeProp = StackNavigationProp<RootStackParamList, "Home">;

export function Details() {
  const route = useRoute();
  const { book } = route.params as Params;
  const navigation = useNavigation<HomeProp>();

  function handleGoBack() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <ScrollView>
        <Wrapper>
          <DetailsBook>
            <TouchableOpacity onPress={handleGoBack}>
              <Back name="arrow-back-circle-outline" />
            </TouchableOpacity>
            <CardImage source={{ uri: book.imageUrl }} />
            <Title>{book.title}</Title>
            <Author>{book.authors.join(", ")} </Author>
          </DetailsBook>
          <InfoWrapper>
            <Informations>INFORMAÇÕES</Informations>
          </InfoWrapper>
          <WrapperInformation>
            <Static>
              <StaticText>Páginas</StaticText>
              <StaticText>Editora</StaticText>
              <StaticText>Publicação</StaticText>
              <StaticText>Idioma</StaticText>
              <StaticText>Título Original</StaticText>
              <StaticText>ISBN-10</StaticText>
              <StaticText>ISBN-13</StaticText>
              <StaticText>Categoria</StaticText>
            </Static>
            <Information>
              <Pages>{`${book.pageCount} páginas `}</Pages>
              <Editor>{book.publisher}</Editor>
              <Published>{book.published}</Published>
              <Idioma>{book.language}</Idioma>
              <OriginalTitle>{book.title}</OriginalTitle>
              <Isbn10>{book.isbn10}</Isbn10>
              <Isbn13>{book.isbn10}</Isbn13>
              <Category>{book.category}</Category>
            </Information>
          </WrapperInformation>
          <DescriptionWrapper>
            <ResumeTitle>RESENHA DA EDITORA</ResumeTitle>
            <Description>{book.description}</Description>
          </DescriptionWrapper>
        </Wrapper>
      </ScrollView>
    </Container>
  );
}
