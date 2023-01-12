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
  StatTextWrapper,
  StatText,
  StatInfoWrapper,
  StatInfoText,
  Content,
  TitleText,
  MealsKpisWrapper,
  LeftWrapper,
  HorizontalSpacer,
  VerticalSpacer,
} from "./styles";
import KpiCard from "@components/KpiCard";
import { mealsGetStatistics } from "@storage/meals/mealsGetStatistics";

export default function Stats() {
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
        <StatTextWrapper>
          <StatText>{`${stats?.ratio.toFixed(1)}%`}</StatText>
        </StatTextWrapper>
        <StatInfoWrapper>
          <StatInfoText>das refeições dentro da dieta!</StatInfoText>
        </StatInfoWrapper>
      </Header>
      <Content>
        <TitleText>Estatísticas Gerais</TitleText>
        <KpiCard
          color={theme.colors.gray_6}
          description="melhor sequência de pratos dentro da dieta"
          value={stats?.bestSequence.toString() || ""}
        />
        <VerticalSpacer space={12} />
        <KpiCard
          color={theme.colors.gray_6}
          description="refeições registradas"
          value={`${stats?.mealsTotal}`}
        />
        <VerticalSpacer space={12} />
        <MealsKpisWrapper>
          <LeftWrapper>
            <KpiCard
              color={theme.colors.green_mid}
              description="refeições dentro da dieta"
              value={`${stats?.mealsOnDietTotal}`}
            />
          </LeftWrapper>
          <HorizontalSpacer space={12} />
          <LeftWrapper>
            <KpiCard
              color={theme.colors.red_mid}
              description="refeições fora da dieta"
              value={`${stats?.mealsOffDietTotal}`}
            />
          </LeftWrapper>
        </MealsKpisWrapper>
      </Content>
    </Container>
  );
}
