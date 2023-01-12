import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import {
  Container,
  Header,
  BackButtonWrapper,
  BackBtn,
  HeaderSpacer,
  Content,
  HeaderText,
  HeaderTextWrapper,
  MealNameText,
  DescriptionText,
  Footer,
  DietTag,
  Dot,
  TagText,
} from "./styles";
import { mealsGetStatistics } from "@storage/meals/mealsGetStatistics";
import GenericButton from "@components/GenericButton";
import { MealsStorageDTO } from "@storage/meals/MealStorageDTO";
import { mealsGetById } from "@storage/meals/mealsGetById";
import { mealsDeleteById } from "@storage/meals/mealsDeleteById";

type RouteParams = {
  mealId: number;
};

export default function Meal() {
  const theme = useTheme();
  const { goBack, navigate } = useNavigation();

  const route = useRoute();
  const { mealId } = route.params as RouteParams;

  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<MealsStatisticsDTO>();
  const [meal, setMeal] = useState<MealsStorageDTO>();

  function handleEditMeal() {
    navigate("addMeal", { mealId });
  }

  async function mealDelete() {
    await mealsDeleteById(mealId);
    navigate("home");
  }

  function handleDeleteMeal() {
    Alert.alert("Remover", "Deseja remover a refeição?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => mealDelete() },
    ]);
  }

  async function loadStatistics() {
    const statistics = await mealsGetStatistics();
    const storageMeal = await mealsGetById(mealId);

    setMeal(storageMeal);
    setStats(statistics);
  }

  useEffect(() => {
    loadStatistics();
  }, []);

  return (
    <Container
      color={meal?.onDiet ? theme.colors.green_light : theme.colors.red_light}
    >
      <StatusBar style="dark" />
      <Header>
        <BackButtonWrapper>
          <BackBtn onPress={goBack}>
            <ArrowLeft
              size={32}
              color={
                meal?.onDiet ? theme.colors.green_dark : theme.colors.red_dark
              }
            />
          </BackBtn>
        </BackButtonWrapper>
        <HeaderTextWrapper>
          <HeaderText>Refeição</HeaderText>
        </HeaderTextWrapper>
        <HeaderSpacer style={{ width: 32 }}></HeaderSpacer>
      </Header>
      <Content>
        <MealNameText>{meal?.name}</MealNameText>
        <DescriptionText>{meal?.description}</DescriptionText>
        <HeaderText>Data e hora</HeaderText>
        <DescriptionText>{`${meal?.date} às ${meal?.time}`}</DescriptionText>
        <DietTag>
          <Dot
            color={
              meal?.onDiet ? theme.colors.green_dark : theme.colors.red_dark
            }
          />
          {meal?.onDiet ? (
            <TagText>Dentro da dieta</TagText>
          ) : (
            <TagText>Fora da dieta</TagText>
          )}
        </DietTag>
      </Content>
      <Footer>
        <GenericButton
          title="Editar refeição"
          fill="DARK"
          style={{ marginBottom: 8 }}
          onPress={handleEditMeal}
          icon="EDIT"
        />
        <GenericButton
          title="Excluir refeição"
          fill="LIGHT"
          onPress={handleDeleteMeal}
          icon="DELETE"
        />
      </Footer>
    </Container>
  );
}
