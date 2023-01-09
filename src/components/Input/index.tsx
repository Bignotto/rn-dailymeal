import React from "react";
import { TextInputProps } from "react-native";

import { InputComponent, InputLabelText, InputWrapper } from "./styles";

type Props = TextInputProps & {
  label: string;
  height: number;
};

export default function Input({ label, height, ...rest }: Props) {
  return (
    <InputWrapper height={height}>
      <InputLabelText>{label}</InputLabelText>
      <InputComponent {...rest} />
    </InputWrapper>
  );
}
