import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black100};
`;

export const Title = styled.Text`
  /*  position: absolute;
  width: 100px;
  height: 100px;
  line-height: 40px;
  left: 30%;
  top: 32.81%; */
  line-height: 40px;
  width: 77px;
  height: 40px;

  color: white;
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 28px;
`;

export const Logo = styled.Text`
  /*   position: absolute; */
  /*   left: 5%; */
  /*   right: 62.38%; */
  /*   top: 32.81%; */
  /* bottom: 61.56%; */
  width: 105px;
  height: 36px;
  color: white;
  font-size: 30px;
  line-height: 40px;
  /*   font-style: normal; */
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
