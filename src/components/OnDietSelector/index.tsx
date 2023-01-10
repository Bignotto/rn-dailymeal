import React, { useState } from "react";
import { useTheme } from "styled-components";
import { Container, YesButton, Dot, ButtonTitleText, NoButton } from "./styles";

type OnDietSelectorProps = {
  selectedButton: "NONE" | "YES" | "NO";
  onSelect: (select: "YES" | "NO") => void;
};

export default function OnDietSelector({
  selectedButton = "NONE",
  onSelect,
}: OnDietSelectorProps) {
  const theme = useTheme();

  function handleSelectButton(selected: "YES" | "NO") {
    onSelect(selected);
  }

  return (
    <Container>
      <YesButton
        selected={selectedButton === "YES"}
        onPress={() => handleSelectButton("YES")}
      >
        <Dot color={theme.colors.green_dark} />
        <ButtonTitleText>Sim</ButtonTitleText>
      </YesButton>
      <NoButton
        selected={selectedButton === "NO"}
        onPress={() => handleSelectButton("NO")}
      >
        <Dot color={theme.colors.red_dark} />
        <ButtonTitleText>Não</ButtonTitleText>
      </NoButton>
    </Container>
  );
}
