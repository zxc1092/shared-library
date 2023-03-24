import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

interface IProps {
  promoCards: {
    title: string;
    description: string;
    date: string;
    image: string;
    imageText: string;
  }[];
}

const headerColor = {
  acura: "secondary",
  honda: "primary",
};

const PromoCards = ({ promoCards }: IProps) => {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      {promoCards.map((post) => (
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: "flex" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {post.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                image={post.image}
                alt={post.imageText}
              />
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
};

export default PromoCards;
