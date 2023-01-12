import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Ilustration = styled.Image`
  height: 288px;
  width: 224px;
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 32px;
`;

export const OffDietTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 34px;
  color: ${({ theme }) => theme.colors.red_dark};
`;

export const OnDietTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 34px;
  color: ${({ theme }) => theme.colors.green_dark};
`;

export const MessageText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.gray_2};
`;
