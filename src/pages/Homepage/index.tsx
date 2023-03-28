import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";
import React from "react";
import Hero from "../../modules/Hero";
import HeroText from "../../modules/HeroText";
import InfoCards from "../../modules/InfoCards";
import Navbar from "../../modules/Navbar";
import PromoCards from "../../modules/PromoCards";

const post = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
  linkVariant: "contained" as "contained",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

const heroText = {
  title: "Album layout",
  description:
    "Something short and leading about the collection below—its contents,  the creator, etc. Make it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.",
  ctaRows: [
    {
      text: "Main call to action",
      variant: "contained" as "contained",
    },
    {
      text: "Secondary action",
      variant: "outlined" as "outlined",
    },
  ],
};

const infoCards = [
  {
    title: "Album layout",
    description:
      "Something short and leading about the collection below—its contents,  the creator, etc. Make it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.",
    ctaRows: [
      {
        text: "Main call to action",
        variant: "contained" as "contained",
      },
      {
        text: "Secondary action",
        variant: "text" as "text",
      },
    ],
  },
  {
    title: "Album layout",
    description:
      "Something short and leading about the collection below—its contents,  the creator, etc. Make it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.",
    ctaRows: [
      {
        text: "Main call to action",
        variant: "contained" as "contained",
      },
      {
        text: "Secondary action",
        variant: "text" as "text",
      },
    ],
  },
  {
    title: "Album layout",
    description:
      "Something short and leading about the collection below—its contents,  the creator, etc. Make it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.",
    ctaRows: [
      {
        text: "Main call to action",
        variant: "contained" as "contained",
      },
      {
        text: "Secondary action",
        variant: "text" as "text",
      },
    ],
  },
];

const headerColor = {
  acura: "secondary",
  honda: "primary",
};

export const Page = () => {
  const theme = useTheme();

  return (
    <article>
      <Navbar color={headerColor[theme.name]} />
      <Container maxWidth="lg" sx={{ mb: 5 }}>
        <Hero {...post} />
        <PromoCards promoCards={featuredPosts} />
        <HeroText {...heroText} />
        <InfoCards cards={infoCards} />
      </Container>
    </article>
  );
};
