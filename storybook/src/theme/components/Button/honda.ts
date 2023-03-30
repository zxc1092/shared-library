import { ComponentsVariants } from "@mui/material";

export const hondaButton: {
  MuiButton: { variants: ComponentsVariants["MuiButton"] };
} = {
  MuiButton: {
    variants: [
      {
        props: { variant: "contained" },
        style: {
          padding: "9px 24px",
          borderRadius: "19px",
        },
      },
      {
        props: { variant: "outlined" },
        style: {
          padding: "9px 24px",
          borderRadius: "19px",
        },
      },
      {
        props: { variant: "text" },
        style: {
          padding: "5px",
          borderRadius: 0,
        },
      },
    ],
  },
};
