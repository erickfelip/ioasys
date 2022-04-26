import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import background from "../../../assets/background.png";
import { Container, InputArea, Title, Logo, EntryText } from "./style";
import { Teste } from "../../../components/style";

export function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
    {/*   <Image source={background} resizeMode="contain" /> */}
      <Logo>ioasys</Logo>
      <Title>Books</Title>
      <Teste
        placeholder="USERNAME"
        value={username}
        onChangeText={setUsername}
      />
       <Teste
        placeholder="PASSWORD"
        value={password}
        onChangeText={setPassword}
      />

    </Container>
  );
}
