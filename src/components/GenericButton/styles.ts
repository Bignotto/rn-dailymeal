import styled from "styled-components/native";

type ContainerProps = {
  fill: "DARK" | "LIGHT";
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  height: 50px;
  border-radius: 6px;
  background-color: ${({ theme, fill }) =>
    fill !== "DARK" ? theme.colors.gray_7 : theme.colors.gray_2};
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_2}; ;
`;

export const TitleText = styled.Text<ContainerProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  color: ${({ theme, fill }) =>
    fill !== "DARK" ? theme.colors.gray_2 : theme.colors.gray_7};
`;
