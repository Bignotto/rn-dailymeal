import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import GenericButton from "@components/GenericButton";
import Input from "@components/Input";
import OnDietSelector from "@components/OnDietSelector";
import { ArrowLeft } from "phosphor-react-native";

import { MealsStorageDTO } from "@storage/meals/MealStorageDTO";
import { mealsCreate } from "@storage/meals/mealsCreate";

import {
  BackBtn,
  BackButtonWrapper,
  ColumnWrapper,
  Container,
  Content,
  Footer,
  Form,
  Header,
  HeaderTitle,
  HorizontalSpacer,
  LabelText,
  TwoColumnWrapper,
  VerticalSpacer,
} from "./styles";
import { mealsClear } from "@storage/meals/mealsClearData";
import { mealsGetById } from "@storage/meals/mealsGetById";
import { mealsUpdateById } from "@storage/meals/mealsUpdateById";

type RouteProps = {
  mealId: number | undefined;
};

export default function AddMeal() {
  const theme = useTheme();
  const { goBack, navigate } = useNavigation();
  const route = useRoute();
  const { mealId } = route.params as RouteProps;

  const [selectedButton, setSelectedButton] = useState<"NONE" | "YES" | "NO">(
    "NONE"
  );

  const [mealName, setMealName] = useState("");
  const [mealDescription, setmealDescription] = useState("");
  const [mealDate, setmealDate] = useState("");
  const [mealTime, setmealTime] = useState("");
  const [onDiet, setOnDiet] = useState(false);

  function onSelect(select: "YES" | "NO") {
    setOnDiet(select === "YES");
    setSelectedButton(select);
  }

  async function handleAddMeal() {
    if (!mealName || !mealDescription || !mealDate || !mealTime)
      return Alert.alert(
        "Preencha todos os campos para cadastrar uma nova refeição."
      );

    const newMeal: MealsStorageDTO = {
      id: mealId ? mealId : Date.now(),
      name: mealName,
      description: mealDescription,
      date: mealDate,
      time: mealTime,
      onDiet,
    };

    mealId ? await mealsUpdateById(newMeal) : await mealsCreate(newMeal);
    navigate("home");
  }

  async function loadMeal() {
    let meal;

    if (!mealId) return;

    meal = await mealsGetById(mealId);

    setMealName(meal.name);
    setmealDescription(meal.description);
    setmealDate(meal.date);
    setmealTime(meal.time);
    setSelectedButton(meal.onDiet ? "YES" : "NO");
  }

  useEffect(() => {
    loadMeal();
  }, []);

  return (
    <Container>
      <Header>
        <BackButtonWrapper>
          <BackBtn onPress={goBack}>
            <ArrowLeft size={32} color={theme.colors.gray_2} />
          </BackBtn>
        </BackButtonWrapper>
        <HeaderTitle>Nova refeição</HeaderTitle>
        <BackButtonWrapper />
      </Header>
      <Content>
        <Form>
          <Input
            height={64}
            label="Nome"
            value={mealName}
            onChangeText={setMealName}
          />
          <VerticalSpacer space={24} />
          <Input
            height={148}
            label="Descrição"
            multiline
            textAlignVertical="top"
            value={mealDescription}
            onChangeText={setmealDescription}
          />
          <VerticalSpacer space={24} />
          <TwoColumnWrapper>
            <ColumnWrapper>
              <Input
                height={64}
                label="Data"
                value={mealDate}
                onChangeText={setmealDate}
              />
            </ColumnWrapper>
            <HorizontalSpacer space={20} />
            <ColumnWrapper>
              <Input
                height={64}
                label="Hora"
                value={mealTime}
                onChangeText={setmealTime}
              />
            </ColumnWrapper>
          </TwoColumnWrapper>
          <VerticalSpacer space={8} />
          <LabelText>Está dentro da dieta?</LabelText>
          <OnDietSelector selectedButton={selectedButton} onSelect={onSelect} />
        </Form>
      </Content>
      <Footer>
        <GenericButton
          title="Cadastrar refeição"
          onPress={handleAddMeal}
          style={{ marginBottom: 8 }}
        />
        <GenericButton title="Limpar async storage!" onPress={mealsClear} />
      </Footer>
    </Container>
  );
}
