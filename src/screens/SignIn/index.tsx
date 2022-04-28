import { Image, Alert } from "react-native";
import React, { useState } from "react";
import fundo from "../../../assets/fundo.png";
import { Container, Title, Logo, Form, TitleWrapper } from "./style";
import { TextInput } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BlurView } from "expo-blur";
import { requestSignIn } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    const response = await requestSignIn(username, password);
    if (response && !response.data) {
      Alert.alert("Aviso", "Credenciais inválidas.");
    } else {
      AsyncStorage.setItem("token", response?.headers?.authorization || "");
      navigation.reset({
        routes: [{ name: "Home" }],
      });
    }
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
        <BlurView
          intensity={80}
          tint="dark"
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            borderRadius: 5,
            marginBottom: 15,
          }}
        >
          <TextInput
            style={{ paddingLeft: 10 }}
            placeholder="Email"
            onChangeText={setUsername}
            value={username}
          />
        </BlurView>
        <BlurView
          intensity={80}
          tint="dark"
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <TextInput
            style={{ paddingLeft: -20 }}
            placeholder="Senha"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
          <Button title="Entrar" onPress={handleSignIn} />
        </BlurView>
      </Form>
    </Container>
  );
}
