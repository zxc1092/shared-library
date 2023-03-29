import React from "react";
import Grid from "@mui/material/Grid";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

interface Props {
  cards: {
    title: string;
    description: string;
    ctaRows: {
      text: string;
      variant: "contained" | "outlined" | "text";
    }[];
  }[];
}

const headerColor = {
  acura: "secondary",
  honda: "primary",
};

const infoCards = ({ cards }: Props) => {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      {cards.map((card) => (
        <Grid item key={card.title} xs={12} sm={6} md={4}>
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
                {card.title}
              </Typography>
              <Typography>{card.description}</Typography>
            </CardContent>
            <CardActions>
              {card.ctaRows?.map((cta) => (
                <Button variant={cta.variant}>{cta.text}</Button>
              ))}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default infoCards;
