import React from "react";
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface IProps {
  title: string;
  description: string;
  ctaRow: {
    text: string;
    variant: "contained" | "outlined" | "text";
  }[];
}

const headerColor = {
  acura: "secondary",
  honda: "primary",
};

const HeroText = ({ title, description, ctaRow }: IProps) => {
  const theme = useTheme();

  return (
    <Container maxWidth="sm">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        {description}
      </Typography>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        {ctaRow.map((cta) => (
          <Button variant={cta.variant}>{cta.text}</Button>
        ))}
      </Stack>
    </Container>
  );
};

export default HeroText;
