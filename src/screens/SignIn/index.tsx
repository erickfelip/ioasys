import { Image } from "react-native";
import React, { useState } from "react";
import fundo from "../../../assets/fundo.png";
import { Container, Title, Logo, Form, TitleWrapper } from "./style";
import { TextInput } from "../../../components/Input";
import { Button } from "../../../components/Button";

export function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  return (
    <Container>
      <Image
        source={fundo}
        style={{
          position: "absolute",
          height: 845,
          width: 1137,
          left: -341,
          top: 0,
        }}
      />
      <TitleWrapper>
        <Logo>ioasys</Logo>
        <Title>Books</Title>
      </TitleWrapper>
      <Form>
        <TextInput
          placeholder="USUARIO"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          placeholder="PASSWORD"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <Button title="Entrar" />
      </Form>
    </Container>
  );
}
