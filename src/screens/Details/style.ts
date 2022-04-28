import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.homeBackground};
`;

export const CardImage = styled.Image`
  width: 240px;
  height: 351px;
`;

export const DetailsBook = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 28px;
`;

export const ResumeTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
`;

export const Author = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.author};
`;
export const Information = styled.View``;

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
  align-items: center;
`;
export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  padding: 40px;
`;
