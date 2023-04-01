import React, { ReactNode } from "react";
import Grid from "@mui/material/Grid";
import useTheme from "@mui/material/styles/useTheme";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "../../components/Typography";

interface Props {
  promoCards: {
    title: ReactNode;
    description: ReactNode;
    date: ReactNode;
    ctaRows: {
      buttonContent: ReactNode;
      buttonVariant: "contained" | "outlined" | "text";
      color: "primary" | "secondary";
      isLink: boolean;
    }[];
  }[];
}

const PromoCards = ({ promoCards }: Props) => {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      {promoCards.map((post) => (
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: "flex" }}>
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography component="h3" variant="title3">
                  {post.title}
                </Typography>
                <Typography component="span" variant="body2">
                  {post.date}
                </Typography>
                <Typography component="p" variant="body3">
                  {post.description}
                </Typography>
                <Typography component="p" variant="body1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                image="https://source.unsplash.com/random"
                alt="random"
              />
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
};

export default PromoCards;
