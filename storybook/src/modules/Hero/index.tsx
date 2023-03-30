import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface Props {
  title: string;
  description: string;
  image: string;
  imageText: string;
  linkText: string;
  linkVariant: "contained" | "outlined" | "text";
}

const headerColor = {
  acura: "secondary",
  honda: "primary",
};

const Hero = ({
  title,
  description,
  image,
  imageText,
  linkText,
  linkVariant,
}: Props) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${image})`,
      }}
    >
      <img style={{ display: "none" }} src={image} alt={imageText} />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {description}
            </Typography>
            <Button variant={linkVariant} href="#">
              {linkText}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Hero;
