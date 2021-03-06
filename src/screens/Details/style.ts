import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Back = styled(Ionicons)`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.gray300};
  margin-right: 340px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.homeBackground};
`;

export const Static = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  margin-left: 30px;
`;

export const WrapperInformation = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 12px;
  flex-direction: row;
`;

export const StaticText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 12px;
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
  margin-top: 50px;
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
  padding-left: 40px;
  margin-right: 40px;
`;

export const InfoWrapper = styled.View`
  width: 100%;
  align-items: flex-start;
  padding-left: 40px;
  padding-top: 20px;
`;

export const Informations = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  align-items: flex-start;
`;

export const Pages = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 12px;
`;
export const Editor = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 12px;
`;
export const Published = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 12px;
`;
export const Idioma = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 12px;
`;
export const OriginalTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 12px;
`;
export const Isbn10 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 12px;
`;
export const Isbn13 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 12px;
`;
export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 12px;
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
