import React from "react";
import { TextInputProps } from "react-native";
import { Container } from "./style";

type Props = TextInputProps;

export function TextInput({ ...rest }: Props) {
  return <Container {...rest} placeholderTextColor="#888888" />;
}
