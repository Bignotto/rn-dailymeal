import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray_7};
`;

export const SimpleText = styled.Text`
  font-size: 34px;
  color: ${({ theme }) => theme.colors.gray_1};
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 30}px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
`;

export const AppLogo = styled.View``;

export const Avatar = styled.View`
  background-color: red;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.gray_2};
  border-radius: 50px;
`;

export const AvatarImage = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;
