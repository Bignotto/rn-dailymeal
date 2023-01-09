import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type DotProps = {
  color: string;
};

type ButtonProps = {
  selected: boolean;
};

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const YesButton = styled.TouchableOpacity<ButtonProps>`
  width: 47%;
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.green_light : theme.colors.gray_6};

  border-width: ${({ theme, selected }) => (selected ? 1 : 0)}px;
  border-color: ${({ theme }) => theme.colors.green_dark};
`;

export const Dot = styled.View<DotProps>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: 0 4px;
  background-color: ${({ theme, color }) => color};
`;

export const ButtonTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
`;

export const NoButton = styled.TouchableOpacity<ButtonProps>`
  width: 47%;
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.red_light : theme.colors.gray_6};

  border-width: ${({ theme, selected }) => (selected ? 1 : 0)}px;
  border-color: ${({ theme }) => theme.colors.red_dark};
`;
