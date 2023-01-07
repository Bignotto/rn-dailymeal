import styled from "styled-components/native";

type DietProps = {
  diet: boolean;
};

export const Container = styled.View`
  height: 50px;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_5};
  border-radius: 6px;

  padding: 0 12px;
  margin-bottom: 8px;
`;

export const LeftColumn = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

export const TimeText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_2};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Separator = styled.View`
  width: 2px;
  height: 40%;
  background-color: ${({ theme }) => theme.colors.gray_5};
  margin-left: 8px;
  margin-right: 8px;
`;

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_2};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const DietIcon = styled.View<DietProps>`
  height: 14px;
  width: 14px;
  border-radius: 7px;
  background-color: ${({ theme, diet }) =>
    diet ? theme.colors.green_mid : theme.colors.red_mid};
`;
