import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";

interface IProps {
  title: string;
  description: string;
  image: string;
  imageText: string;
  linkText: string;
}

const headerColor = {
  acura: "secondary",
  honda: "primary",
};

const Hero = ({ title, description, image, imageText, linkText }: IProps) => {
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
            <Link variant="subtitle1" href="#">
              {linkText}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Hero;
