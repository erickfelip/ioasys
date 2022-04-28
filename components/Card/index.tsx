import {
  Container,
  Details,
  CardImage,
  Title,
  Author,
  About,
  Pages,
  Editor,
  Published,
} from "./style";
import React from "react";

interface CardData {
  title: string;
  authors: string;
  about: {
    pageCount: number;
    publisher: string;
    published: string;
  };
  thumbnail: string;
}

interface Props {
  data: CardData;
}

export function Card({ data }: Props) {
  return (
    <Container>
      <CardImage source={{ uri: data.thumbnail }} />
      <Details>
        <Title>{data.title}</Title>
        <Author>{data.authors}</Author>
        <About>
          <Pages>{`${data.about.pageCount} Páginas`}</Pages>
          <Editor>Editora loyola Teste </Editor>
          <Published>Publicado em 2020</Published>
        </About>
      </Details>
    </Container>
  );
}
