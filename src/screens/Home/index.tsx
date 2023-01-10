import React from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
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
  KpiButton,
  MealButton,
} from "./styles";

import KpiCard from "@components/KpiCard";
import GenericButton from "@components/GenericButton";

import AppLogoSvg from "@assets/DailyDietLogo.svg";
import MealCard from "@components/MealCard";
import { StatusBar } from "expo-status-bar";
import { SectionList } from "react-native";
const avatar = require("@assets/sample_avatar.png");

const DATA = [
  {
    title: "08.01.2023",
    data: [
      {
        id: 57,
        title: "Café Gordo",
        description: "Descrição completa da refeição incluindo ingredientes.",
        diet: false,
        date: "08.01.2023",
        time: "07:00",
      },
      {
        id: 58,
        title: "Peixe grelhado",
        description: "Descrição completa da refeição incluindo ingredientes.",
        diet: true,
        date: "08.01.2023",
        time: "12:00",
      },
    ],
  },
  {
    title: "07.01.2023",
    data: [
      {
        id: 59,
        title: "Refeição gorda 1",
        description: "Descrição completa da refeição incluindo ingredientes.",
        diet: false,
        date: "07.01.2023",
        time: "13:00",
      },
      {
        id: 60,
        title: "Refeição magra",
        description: "Descrição completa da refeição incluindo ingredientes.",
        diet: true,
        date: "07.01.2023",
        time: "21:00",
      },
    ],
  },
  {
    title: "06.01.2023",
    data: [
      {
        id: 61,
        title: "Café Gordo",
        description: "Descrição completa da refeição incluindo ingredientes.",
        diet: false,
        date: "08.01.2023",
        time: "07:00",
      },
      {
        id: 62,
        title: "Peixe grelhado",
        description: "Descrição completa da refeição incluindo ingredientes.",
        diet: true,
        date: "08.01.2023",
        time: "12:00",
      },
    ],
  },
  {
    title: "05.01.2023",
    data: [
      {
        id: 63,
        title: "Café Gordo",
        description: "Descrição completa da refeição incluindo ingredientes.",
        diet: false,
        date: "08.01.2023",
        time: "07:00",
      },
      {
        id: 64,
        title: "Peixe grelhado",
        description: "Descrição completa da refeição incluindo ingredientes.",
        diet: true,
        date: "08.01.2023",
        time: "12:00",
      },
    ],
  },
];

export default function Home() {
  const navigation = useNavigation();

  function handleAddMeal() {
    navigation.navigate("addMeal");
  }

  function handleEditMeal() {
    navigation.navigate("addMeal");
  }

  function handleStasScreen() {
    navigation.navigate("stats");
  }
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
        <KpiButton onPress={handleStasScreen}>
          <KpiCard
            color={theme.colors.green_light}
            value={"98,5%"}
            description={"das refeições dentro da dieta"}
          />
        </KpiButton>
        <Meals>
          <AddMealWrapper>
            <MealTitle>Refeições</MealTitle>
            <GenericButton title="+ Nova Refeição" onPress={handleAddMeal} />
          </AddMealWrapper>
        </Meals>
        <MealsList>
          <SectionList
            sections={DATA}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <MealButton onPress={handleEditMeal}>
                <MealCard
                  id={item.id}
                  diet={item.diet}
                  time={item.time}
                  title={item.title}
                />
              </MealButton>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <MealDayText>{title}</MealDayText>
            )}
          />
        </MealsList>
      </Content>
    </Container>
  );
}
