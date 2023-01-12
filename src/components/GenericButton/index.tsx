import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, TitleText } from "./styles";

type GenericButtonProps = TouchableOpacityProps & {
  title: string;
  fill?: "DARK" | "LIGHT";
};

export default function GenericButton({
  title,
  fill = "DARK",
  ...rest
}: GenericButtonProps) {
  return (
    <Container {...rest} fill={fill}>
      <TitleText fill={fill}>{title}</TitleText>
    </Container>
  );
}
