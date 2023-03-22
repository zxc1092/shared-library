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

export const useStyles = makeStyles<Theme, IProps>((theme) => {
  const isAcura = theme.name === "acura";

  return {
    base: {
      padding: isAcura ? "16px 33px" : "9px 24px",
      textTransform: "none",
      borderRadius: isAcura ? "0" : "19px",
      "&:focus": {
        ...focusableStyles(),
        outlineColor: (props) => (props.isDark ? "white" : "black"),
      },
    },
  };
});
