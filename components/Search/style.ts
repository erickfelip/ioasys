import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  width: 246px;
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.homeBackground}; 
`;
