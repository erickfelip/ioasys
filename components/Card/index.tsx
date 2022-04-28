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
import { Books } from "../../src/screens/Home";

interface Props {
  data: Books;
}

export function Card({ data }: Props) {
  return (
    <Container>
      <CardImage source={{ uri: data.imageUrl }} />
      <Details>
        <Title>{data.title}</Title>
        <Author>{data.authors.join(", ")}</Author>
        <About>
          <Pages>{`${data.pageCount} Páginas`}</Pages>
          <Editor>{`Editora ${data.publisher}`}</Editor>
          <Published>{`Publicado em ${data.published}`}</Published>
        </About>
      </Details>
    </Container>
  );
}
