import React from "react";
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
import { View } from "react-native";

export default function Stats() {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar style="dark" />
      <Header>
        <BackButtonWrapper>
          <BackBtn>
            <ArrowLeft size={32} color={theme.colors.green_dark} />
          </BackBtn>
        </BackButtonWrapper>
        <StatTextWrapper>
          <StatText>98,5%</StatText>
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
          value="22"
        />
        <VerticalSpacer space={12} />
        <KpiCard
          color={theme.colors.gray_6}
          description="refeições registradas"
          value="105"
        />
        <VerticalSpacer space={12} />
        <MealsKpisWrapper>
          <LeftWrapper>
            <KpiCard
              color={theme.colors.green_mid}
              description="refeições dentro da dieta"
              value="99"
            />
          </LeftWrapper>
          <HorizontalSpacer space={12} />
          <LeftWrapper>
            <KpiCard
              color={theme.colors.red_mid}
              description="refeições fora da dieta"
              value="17"
            />
          </LeftWrapper>
        </MealsKpisWrapper>
      </Content>
    </Container>
  );
}
