import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import background from "../../../assets/background.png";
import fundo from "../../../assets/fundo.png";
import { Container, Title, Logo } from "./style";
import { TextInput } from "../../../components/Input";

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
      <Logo>ioasys</Logo>
      <Title>Books</Title>
      <TextInput placeholder="USUARIO" />
      <TextInput placeholder="PASSWORD" />
    </Container>
  );
}
