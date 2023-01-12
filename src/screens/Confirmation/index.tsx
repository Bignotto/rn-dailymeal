import GenericButton from "@components/GenericButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  Container,
  Ilustration,
  MessageText,
  OnDietTitleText,
  OffDietTitleText,
} from "./styles";

const ilustrationOffDiet = require("@assets/offdiet.png");
const ilustrationOnDiet = require("@assets/ondiet.png");

type RouteParams = {
  onDiet: boolean;
};
export default function Confirmation() {
  const { navigate } = useNavigation();
  const route = useRoute();
  const { onDiet } = route.params as RouteParams;

  function handleGoHome() {
    navigate("home");
  }

  return (
    <Container>
      {onDiet ? (
        <>
          <OnDietTitleText>Continue assim!</OnDietTitleText>
          <MessageText>Você continua dentro da dieta! Parabéns!</MessageText>
          <Ilustration source={ilustrationOnDiet} />
        </>
      ) : (
        <>
          <OffDietTitleText>Que pena!</OffDietTitleText>
          <MessageText>
            Você saiu da dieta dessa vez, mas continue se esforçando e não
            desista!
          </MessageText>
          <Ilustration source={ilustrationOffDiet} />
        </>
      )}

      <GenericButton
        title="Ir para a tela principal"
        onPress={handleGoHome}
        style={{ width: 191 }}
      />
    </Container>
  );
}
