import React from "react";
import { TextInputProps } from "react-native";
import { Teste } from "./style";

export function TextInput(props: TextInputProps) {
  return <Teste placeholderTextColor="#000" {...props} />;
}
