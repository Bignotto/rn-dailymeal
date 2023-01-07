import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, TitleText } from "./styles";

type GenericButtonProps = TouchableOpacityProps & {
  title: string;
};

export default function GenericButton({ title, ...rest }: GenericButtonProps) {
  return (
    <Container {...rest}>
      <TitleText>{title}</TitleText>
    </Container>
  );
}
