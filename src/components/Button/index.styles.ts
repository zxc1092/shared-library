import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

interface IProps {
  isDark?: boolean;
}

function focusableStyles() {
  return {
    outline: `.2rem solid`,
    outlineOffset: ".3rem",
  };
}

const brandStyles = {
  acura: {
    padding: "16px 33px",
  },
  honda: {
    padding: "9px 24px",
    borderRadius: "19px",
  },
};

export const useStyles = makeStyles<Theme, IProps>((theme) => {
  return {
    base: {
      ...brandStyles[theme.name],
      textTransform: "none",
      fontWeight: "bold",
      "&:focus": {
        ...focusableStyles(),
        outlineColor: (props) => (props.isDark ? "white" : "black"),
      },
    },
  };
});
