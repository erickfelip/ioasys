import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  width: 90%;
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.white100};
  border-radius: 8px;
  margin-bottom: 12px;
`;
