import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

type SpacerProps = {
  space: number;
};

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray_5};
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

export const BackButtonWrapper = styled.View`
  width: 24px;
`;

export const BackBtn = styled.Text``;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray_2};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 32px;

  padding: 0 25px;
  background-color: ${({ theme }) => theme.colors.gray_7};

  border-radius: 20px;
`;

export const Form = styled.View`
  flex: 1;
  padding-top: 24px;
`;

export const Footer = styled.View`
  padding: 25px;
`;

export const InputWrapper = styled.View`
  height: 64px;
`;

export const InputLabelText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_2};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
`;

export const TwoColumnWrapper = styled.View`
  flex-direction: row;
`;

export const ColumnWrapper = styled.View`
  flex: 1;
`;

export const HorizontalSpacer = styled.View<SpacerProps>`
  height: 100%;
  width: ${({ theme, space }) => space}px;
`;

export const VerticalSpacer = styled.View<SpacerProps>`
  width: 100%;
  height: ${({ theme, space }) => space}px;
`;
