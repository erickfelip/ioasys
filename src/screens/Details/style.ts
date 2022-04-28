import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Icon = styled(Ionicons)`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.gray100};
  position: absolute;
  padding: 40px;
  align-items: flex-start;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.homeBackground};
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.Image`
  width: 240px;
  height: 351px;
`;

export const DetailsBook = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 28px;
`;

export const ResumeTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 12px;
`;

export const Author = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.author};
`;
export const Information = styled.View`
  align-items: flex-end;
  padding-left: 120px;
`;

export const Informations = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
`;

export const Pages = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
`;
export const Editor = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
`;
export const Published = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
`;
export const Idioma = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
`;
export const OriginalTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
`;
export const Isbn10 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
`;
export const Isbn13 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
`;
export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
`;
export const DescriptionWrapper = styled.View`
  justify-content: center;
  align-items: flex-start;
  padding: 0 40px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.gray300};
`;
