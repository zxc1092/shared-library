import { ComponentsVariants } from "@mui/material";

export const acuraButton: {
  MuiButton: { variants: ComponentsVariants["MuiButton"] };
} = {
  MuiButton: {
    variants: [
      {
        props: { variant: "contained" },
        style: {
          padding: "16px 33px",
          borderRadius: 0,
        },
      },
      {
        props: { variant: "outlined" },
        style: {
          padding: "16px 33px",
          borderRadius: 0,
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
