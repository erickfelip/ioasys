import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.homeBackground};
`;
export const Header = styled.View`
  width: 100%;
  height: 120px;
  padding: 20px;
  margin: 50px;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.colors.homeBackground};
  align-items: center;
`;

export const Title = styled.Text`
  line-height: 40px;
  width: 220px;
  height: 40px;
  color: ${({ theme }) => theme.colors.black200};
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 28px;
`;

export const Logo = styled.Text`
  width: 105px;
  height: 36px;
  color: ${({ theme }) => theme.colors.black200};
  font-size: 30px;
  line-height: 40px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black200};
  line-height: 40px;
`;

export const SearchBook = styled.View`
  border-radius: 2px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray100};
  width: 80%;
  padding-right: 10px;
  margin-right: 40px;
`;

export const Search = styled(EvilIcons)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray100};
`;
