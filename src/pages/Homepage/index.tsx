import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Hero from "../../modules/Hero";
import HeroText from "../../modules/HeroText";
import Navbar from "../../modules/Navbar";
import PromoCards from "../../modules/PromoCards";

const cards = [1, 2, 3];

const post = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
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
  ctaRow: [
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

const headerColor = {
  acura: "secondary",
  honda: "primary",
};

export const Page = () => {
  const theme = useTheme();

  return (
    <article>
      <Navbar color={headerColor[theme.name]} />
      <Container maxWidth="lg">
        <Hero {...post} />
        <PromoCards promoCards={featuredPosts} />
        <HeroText {...heroText} />
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </article>
  );
};
