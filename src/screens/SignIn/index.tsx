import { Image } from "react-native";
import React, { useState } from "react";
import fundo from "../../../assets/fundo.png";
import {
  Container,
  Title,
  Logo,
  Form,
  TitleWrapper,
  SearchBook,
} from "./style";
import { TextInput } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  SingIn: undefined;
  Home: undefined;
};

type authScreenProp = StackNavigationProp<RootStackParamList, "Home">;

export function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation<authScreenProp>();

  async function handleSignIn() {
    navigation.navigate("Home");
  }

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
          placeholder="Email"
          onChangeText={setUsername}
          value={username}
          />
          <SearchBook>
          <TextInput
            placeholder="Senha"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
          <Button title="Entrar" onPress={handleSignIn} />
        </SearchBook>
      </Form>
    </Container>
  );
}
