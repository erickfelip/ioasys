import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black100};
  padding-top: 10px;
`;

export const Title = styled.Text`
  line-height: 40px;
  width: 77px;
  height: 40px;
  color: white;
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 28px;
`;

export const Logo = styled.Text`
  width: 105px;
  height: 36px;
  color: white;
  font-size: 30px;
  line-height: 40px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Form = styled.View`
  width: 100%;
  padding: 30px;
`;

export const TitleWrapper = styled.View`
  padding-right: 170px;
  flex-direction: row;
`;

export const SearchBook = styled.View`
  flex-direction: row;
  /* padding-bottom: 10px; */
  align-items: center;
  border-width: 0.5px;
  border-color: #000;
`;
