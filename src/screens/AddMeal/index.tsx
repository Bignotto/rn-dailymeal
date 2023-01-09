import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
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
import GenericButton from "@components/GenericButton";
import Input from "@components/Input";
import OnDietSelector from "@components/OnDietSelector";

export default function AddMeal() {
  const theme = useTheme();

  const [selectedButton, setSelectedButton] = useState<"NONE" | "YES" | "NO">(
    "NONE"
  );

  function onSelect(select: "YES" | "NO") {
    setSelectedButton(select);
  }

  return (
    <Container>
      <Header>
        <BackButtonWrapper>
          <BackBtn>
            <ArrowLeft size={32} color={theme.colors.gray_2} />
          </BackBtn>
        </BackButtonWrapper>
        <HeaderTitle>Nova refeição</HeaderTitle>
        <BackButtonWrapper />
      </Header>
      <Content>
        <Form>
          <Input height={64} label="Nome" />
          <VerticalSpacer space={24} />
          <Input
            height={148}
            label="Descrição"
            multiline
            textAlignVertical="top"
          />
          <VerticalSpacer space={24} />
          <TwoColumnWrapper>
            <ColumnWrapper>
              <Input height={64} label="Data" />
            </ColumnWrapper>
            <HorizontalSpacer space={20} />
            <ColumnWrapper>
              <Input height={64} label="Hora" />
            </ColumnWrapper>
          </TwoColumnWrapper>
          <VerticalSpacer space={8} />
          <LabelText>Está dentro da dieta?</LabelText>
          <OnDietSelector selectedButton={selectedButton} onSelect={onSelect} />
        </Form>
        <Footer>
          <GenericButton title="Cadastrar refeição" />
        </Footer>
      </Content>
    </Container>
  );
}
