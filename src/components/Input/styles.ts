import styled from "styled-components/native";

type InputProps = {
  height: number;
};

export const InputComponent = styled.TextInput`
  flex: 1;
  padding: 10px 12px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray_1};

  border-color: ${({ theme }) => theme.colors.gray_5};
  border-width: 1px;

  border-radius: 5px;
  margin-top: 4px;
`;

export const InputWrapper = styled.View<InputProps>`
  width: 100%;
  height: ${({ theme, height }) => height}px;
`;

export const InputLabelText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_2};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
`;
