import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

type SpacerProps = {
  space: number;
};

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.green_light};
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

export const BackButtonWrapper = styled.View``;

export const BackBtn = styled.TouchableOpacity``;

export const HeaderTextWrapper = styled.View``;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_2};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 20px;
  margin-bottom: 8px;
`;

export const HeaderSpacer = styled.View``;

export const Content = styled.View`
  flex: 1;
  margin-top: 32px;

  padding: 0 25px;
  background-color: ${({ theme }) => theme.colors.gray_7};

  border-radius: 20px;
`;

export const MealNameText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_2};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  margin-top: 32px;
  margin-bottom: 4px;
`;

export const DescriptionText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_2};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  margin-top: 4px;
  margin-bottom: 4px;
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
