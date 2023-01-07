import React from "react";
import {
  Container,
  ValueWrapper,
  ValueText,
  DescriptionWrapper,
  DescriptionText,
} from "./styles";

type KpiCardProps = {
  value: string;
  description: string;
  color: string;
};

export default function KpiCard({ value, description, color }: KpiCardProps) {
  return (
    <Container color={color}>
      <ValueWrapper>
        <ValueText>{value}</ValueText>
      </ValueWrapper>
      <DescriptionWrapper>
        <DescriptionText>{description}</DescriptionText>
      </DescriptionWrapper>
    </Container>
  );
}
