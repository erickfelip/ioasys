import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import background from "../../../assets/background.png";
import { Container, Title, Logo } from "./style";
import { TextInput } from "../../../components/Input";

export function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
    {/*   <Image source={background} resizeMode="cover" /> */}
      <Logo>ioasys</Logo>
      <Title>Books</Title>
      <TextInput placeholder="USUARIO" />
      <TextInput placeholder="PASSWORD" />
    </Container>
  );
}
