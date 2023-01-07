import React from "react";
import { Container, Header, AppLogo, Avatar, AvatarImage } from "./styles";

import AppLogoSvg from "@assets/DailyDietLogo.svg";
const avatar = require("@assets/sample_avatar.png");

export default function Home() {
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
    </Container>
  );
}
