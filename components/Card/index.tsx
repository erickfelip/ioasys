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
import { RectButtonProperties } from "react-native-gesture-handler";

interface Props extends RectButtonProperties {
  data: Books;
}

export function Card({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <CardImage source={{ uri: data.imageUrl }} />
      <Details>
        <Title>{data.title}</Title>
        <Author>{data.authors.join(", \n")}</Author>
        <About>
          <Pages>{`${data.pageCount} Páginas`}</Pages>
          <Editor>{`Editora ${data.publisher}`}</Editor>
          <Published>{`Publicado em ${data.published}`}</Published>
        </About>
      </Details>
    </Container>
  );
}
