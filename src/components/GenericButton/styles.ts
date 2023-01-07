import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  height: 50px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray_2};
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
`;
