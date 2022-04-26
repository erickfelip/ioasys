import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  width: 25%;
  background-color: ${({ theme }) => theme.colors.white100};
  border-radius: 20px;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.button};
`;
