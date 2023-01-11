import React, { useCallback, useEffect, useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import KpiCard from "@components/KpiCard";
import GenericButton from "@components/GenericButton";
import MealCard from "@components/MealCard";

import { StatusBar } from "expo-status-bar";
import { SectionList } from "react-native";
import { mealsGetAll } from "@storage/meals/mealsGetAll";
import { formatMealsList } from "@utils/formatMealsList";
import { MealsStorageDTO } from "@storage/meals/MealStorageDTO";

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

import AppLogoSvg from "@assets/DailyDietLogo.svg";
import { mealsGetStatistics } from "@storage/meals/mealsGetStatistics";
const avatar = require("@assets/sample_avatar.png");

export default function Home() {
  const theme = useTheme();
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<MealsStorageDTO[]>([]);
  const [ratio, setRatio] = useState(0);

  function handleAddMeal() {
    navigation.navigate("addMeal");
  }

  function handleEditMeal() {
    navigation.navigate("addMeal");
  }

  function handleStasScreen() {
    navigation.navigate("meal");
  }

  const sectionMeals = formatMealsList(meals);

  async function fetchMeals() {
    setIsLoading(true);
    try {
      const storage = await mealsGetAll();
      const { ratio } = await mealsGetStatistics();
      setMeals(storage);
      setRatio(ratio);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

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
            value={`${ratio.toFixed(1)}%`}
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
            sections={sectionMeals}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <MealButton onPress={handleEditMeal}>
                <MealCard
                  id={item.id}
                  diet={item.onDiet}
                  time={item.time}
                  title={item.name}
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
