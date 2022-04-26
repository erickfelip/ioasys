import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color:red ;
`;

export const InputArea = styled.View`

  background-color: white;
  align-items: center;
`;

export const Title = styled.Text`
  position: absolute;
  width: 100px;
  height: 100px;
  line-height: 40px;
  left: 30%;
  top: 32.81%;
  color: white;

  /* width: 77px;
height: 40px;
left: 137px;
top: 208px; */

  font-size: 20px;
  font-weight: 300;
  font-size: 28px;
  line-height: 40px;
  font-style: normal;
`;

export const Logo = styled.Text`
  position: absolute;
  left: 5%;
  right: 62.38%;
  top: 32.81%;
  bottom: 61.56%;
  color: white;
  font-size: 20px;
  font-weight: 300;
  font-size: 28px;
  line-height: 40px;
  font-style: normal;
`;

export const EntryText = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: red;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border-width: 2px;
  border-color: red;
`;

export const Input = styled.TextInput`
  flex: 1;
  color: white;
  font-size: 16px;
`;
