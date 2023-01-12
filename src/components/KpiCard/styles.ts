import styled from "styled-components/native";

type ContainerProps = {
  color: string;
};

export const Container = styled.View<ContainerProps>`
  height: 102px;
  background-color: ${({ theme, color }) => color};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ValueWrapper = styled.View``;

export const ValueText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_1};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 32px;
`;

export const DescriptionWrapper = styled.View``;

export const DescriptionText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_1};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`;

export const ArrowWrapper = styled.View`
  width: 100%;
  align-items: flex-end;
  position: absolute;
  top: 10px;
  right: 10px;
`;
