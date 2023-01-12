import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

type SpacerProps = {
  space: number;
};

type HeaderProps = {
  color: string;
};

export const Container = styled.View<HeaderProps>`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme, color }) => color};
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 30}px;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
`;

export const BackButtonWrapper = styled.View`
  width: 100%;
`;

export const BackBtn = styled.TouchableOpacity``;

export const StatTextWrapper = styled.View``;

export const StatText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_2};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 42px;
  margin-top: 4px;
  margin-bottom: 8px;
`;

export const StatInfoWrapper = styled.View``;

export const StatInfoText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_2};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 32px;

  padding: 0 25px;
  background-color: ${({ theme }) => theme.colors.gray_7};

  border-radius: 20px;
`;

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_2};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  margin-top: 32px;
  margin-bottom: 24px;
  align-self: center;
`;

export const VerticalSpacer = styled.View<SpacerProps>`
  width: 100%;
  height: ${({ theme, space }) => space}px;
`;

export const HorizontalSpacer = styled.View<SpacerProps>`
  height: 100%;
  width: ${({ theme, space }) => space}px;
`;

export const MealsKpisWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftWrapper = styled.View`
  flex: 1;
`;
