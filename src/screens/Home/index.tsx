import React from "react";
import { useTheme } from "styled-components/native";
import {
  Container,
  Header,
  AppLogo,
  Avatar,
  AvatarImage,
  Content,
  Meals,
  AddMealWrapper,
  MealTitle,
  MealsList,
  MealDayText,
} from "./styles";

import KpiCard from "@components/KpiCard";
import GenericButton from "@components/GenericButton";

import AppLogoSvg from "@assets/DailyDietLogo.svg";
import MealCard from "@components/MealCard";
import { StatusBar } from "expo-status-bar";
const avatar = require("@assets/sample_avatar.png");

export default function Home() {
  const theme = useTheme();
  return (
    <Container>
      <StatusBar style="dark" />
      <Header>
        <AppLogo>
          <AppLogoSvg />
        </AppLogo>
        <Avatar>
          <AvatarImage source={avatar} />
        </Avatar>
      </Header>
      <Content>
        <KpiCard
          color={theme.colors.green_light}
          value={"98,5%"}
          description={"das refeições dentro da dieta"}
        />
        <Meals>
          <AddMealWrapper>
            <MealTitle>Refeições</MealTitle>
            <GenericButton
              title="+ Nova Refeição"
              onPress={() => console.log("worked!")}
            />
          </AddMealWrapper>
        </Meals>
        <MealsList>
          <MealDayText>07.01.2023</MealDayText>
          <MealCard
            id={67}
            diet={false}
            time={"16:57"}
            title={"Pão de queijo"}
          />
          <MealCard
            id={67}
            diet={true}
            time={"16:57"}
            title={"Pão de queijo"}
          />
          <MealCard
            id={67}
            diet={true}
            time={"16:57"}
            title={"Pão de queijo"}
          />
          <MealCard
            id={67}
            diet={false}
            time={"16:57"}
            title={"Pão de queijo"}
          />
        </MealsList>
      </Content>
    </Container>
  );
}
