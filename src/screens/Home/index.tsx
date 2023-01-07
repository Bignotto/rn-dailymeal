import React from "react";
import { useTheme } from "styled-components/native";
import {
  Container,
  Header,
  AppLogo,
  Avatar,
  AvatarImage,
  Content,
} from "./styles";

import KpiCard from "@components/KpiCard";

import AppLogoSvg from "@assets/DailyDietLogo.svg";
const avatar = require("@assets/sample_avatar.png");

export default function Home() {
  const theme = useTheme();
  return (
    <Container>
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
      </Content>
    </Container>
  );
}
