import React from "react";
import { useTheme } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";
import {
  Container,
  ValueWrapper,
  ValueText,
  DescriptionWrapper,
  DescriptionText,
  ArrowWrapper,
} from "./styles";

type KpiCardProps = {
  value: string;
  description: string;
  color: string;
  arrow?: boolean;
};

export default function KpiCard({
  value,
  description,
  color,
  arrow = false,
}: KpiCardProps) {
  const theme = useTheme();

  return (
    <Container color={color}>
      {arrow && (
        <ArrowWrapper>
          <ArrowUpRight size={24} color={theme.colors.green_dark} />
        </ArrowWrapper>
      )}
      <ValueWrapper>
        <ValueText>{value}</ValueText>
      </ValueWrapper>
      <DescriptionWrapper>
        <DescriptionText>{description}</DescriptionText>
      </DescriptionWrapper>
    </Container>
  );
}
