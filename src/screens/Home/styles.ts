import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_7};
`;

export const SimpleText = styled.Text`
  font-size: 34px;
  color: ${({ theme }) => theme.colors.gray_1};
`;
