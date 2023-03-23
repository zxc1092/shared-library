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
    base: {},
  };
});
