import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";
import React, { ReactNode } from "react";
import Hero from "../../modules/Hero";
import HeroText from "../../modules/HeroText";
import InfoCards from "../../modules/InfoCards";
import Navbar from "../../modules/Navbar";
import PromoCards from "../../modules/PromoCards";
import homepageData from "../../mockData";
interface IHeaderColor {
  [key: string]: "primary" | "secondary";
}

const headerColor: IHeaderColor = {
  acura: "secondary",
  honda: "primary",
};

export const Page = () => {
  const theme = useTheme();

  return (
    <article>
      <Navbar color={headerColor[theme.name]} />
      <Container maxWidth="lg" sx={{ mb: 5 }}>
        <Hero {...homepageData.hero} />
        <PromoCards promoCards={homepageData.promoCards} />
        <HeroText {...homepageData.heroText} />
        <InfoCards cards={homepageData.infoCards} />
      </Container>
    </article>
  );
};
