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
} from "./style";
import { Books } from "../../screens/Home";

interface Props {
  data: Books;
}

export function Details({ data }: Props) {
  return (
    <Container>
      <CardImage
        source={{ uri: "https://d2drtqy2ezsot0.cloudfront.net/Book-9.jpg" }}
      />
      <DetailsBook>
        <Title>Teste</Title>
        <Author>Teste</Author>
      </DetailsBook>
      <Information>
        <Informations>Informações</Informations>
        <Pages>Oi</Pages>
        <Editor>Oi</Editor>
        <Published>Oi</Published>
        <Idioma> Português </Idioma>
        <OriginalTitle>Teste</OriginalTitle>
        <Isbn10>2808474342</Isbn10>
        <Isbn13>240-2808474342</Isbn13>
        <Category> Crítica Literária</Category>
      </Information>

      <DescriptionWrapper>
        <Description>
          {" "}
          Saepe aut sint et nemo. Temporibus quis beatae fuga nulla. Quia
          voluptates sit ex est eum doloremque ut. Consectetur alias qui numquam
          ullam iure. Excepturi quo animi eius voluptas ut quo. Ea ea quis eaque
          aut perspiciatis sed quis ipsam laboriosam.Suscipit rem beatae minus
          sunt est laboriosam ut culpa. Magni qui dolorem et dolorem sunt
          suscipit quia eos. At facere eveniet.
        </Description>
      </DescriptionWrapper>
    </Container>
  );
}
