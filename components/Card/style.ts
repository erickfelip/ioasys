import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  width: 90%;
  height: 160px;
  background-color: ${({ theme }) => theme.colors.white100};
  flex-direction: row;
  padding: 24px;
  margin-bottom: 16px;
  border-radius: 4px;
  box-shadow: 0px 6px 24px;
`;

export const Details = styled.View`
  margin-left: 20px;
`;

export const CardImage = styled.Image`
  width: 81px;
  height: 122px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black200};
  line-height: 20px;
`;

export const Author = styled.Text`
  color: ${({ theme }) => theme.colors.author};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  line-height: 20px;
`;

export const About = styled.View`
  justify-content: center;
  margin-top: 16px;
`;

export const Pages = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 12px;
`;

export const Editor = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 12px;
`;

export const Published = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 12px;
`;
