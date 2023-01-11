import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { ArrowLeft } from "phosphor-react-native";
import {
  Container,
  Header,
  BackButtonWrapper,
  BackBtn,
  HeaderSpacer,
  Content,
  MealsKpisWrapper,
  LeftWrapper,
  HorizontalSpacer,
  VerticalSpacer,
  HeaderText,
  HeaderTextWrapper,
  MealNameText,
  DescriptionText,
} from "./styles";
import KpiCard from "@components/KpiCard";
import { mealsGetStatistics } from "@storage/meals/mealsGetStatistics";

export default function Meal() {
  const theme = useTheme();
  const { goBack } = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<MealsStatisticsDTO>();

  async function loadStatistics() {
    const statistics = await mealsGetStatistics();
    setStats(statistics);
  }

  useEffect(() => {
    loadStatistics();
  }, []);

  return (
    <Container>
      <StatusBar style="dark" />
      <Header>
        <BackButtonWrapper>
          <BackBtn onPress={goBack}>
            <ArrowLeft size={32} color={theme.colors.green_dark} />
          </BackBtn>
        </BackButtonWrapper>
        <HeaderTextWrapper>
          <HeaderText>Refeição</HeaderText>
        </HeaderTextWrapper>
        <HeaderSpacer style={{ width: 32 }}></HeaderSpacer>
      </Header>
      <Content>
        <MealNameText>Sanduíche</MealNameText>
        <DescriptionText>
          Descrição muito longa de uma refeição para podermos verificar como o
          layout do aplicativo se comportará quando a descrição da refeição for
          bastante comprida e cheia de palavras vazias e promessas vagas.
        </DescriptionText>
      </Content>
    </Container>
  );
}
