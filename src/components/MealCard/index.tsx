import React from "react";
import {
  Container,
  TimeText,
  Separator,
  TitleText,
  DietIcon,
  LeftColumn,
} from "./styles";

type MealCardProps = {
  id: number;
  time: string;
  title: string;
  diet: boolean;
};

export default function MealCard({ id, time, title, diet }: MealCardProps) {
  return (
    <Container>
      <LeftColumn>
        <TimeText>{time}</TimeText>
        <Separator />
        <TitleText>{title}</TitleText>
      </LeftColumn>
      <DietIcon diet={diet} />
    </Container>
  );
}
