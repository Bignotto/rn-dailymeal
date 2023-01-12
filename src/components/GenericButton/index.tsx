import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, TitleText } from "./styles";
import { PencilSimpleLine, Trash, Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

type GenericButtonProps = TouchableOpacityProps & {
  title: string;
  fill?: "DARK" | "LIGHT";
  icon?: "EDIT" | "DELETE" | "ADD" | "NONE";
};

export default function GenericButton({
  title,
  fill = "DARK",
  icon = "NONE",
  ...rest
}: GenericButtonProps) {
  const theme = useTheme();
  return (
    <Container {...rest} fill={fill}>
      {icon === "EDIT" && (
        <PencilSimpleLine
          size={18}
          color={fill === "DARK" ? theme.colors.gray_7 : theme.colors.gray_2}
        />
      )}
      {icon === "DELETE" && (
        <Trash
          size={18}
          color={fill === "DARK" ? theme.colors.gray_7 : theme.colors.gray_2}
        />
      )}
      {icon === "ADD" && (
        <Plus
          size={18}
          color={fill === "DARK" ? theme.colors.gray_7 : theme.colors.gray_2}
        />
      )}
      <TitleText
        fill={fill}
        style={
          fill
            ? {
                marginLeft: 8,
              }
            : {}
        }
      >
        {title}
      </TitleText>
    </Container>
  );
}
