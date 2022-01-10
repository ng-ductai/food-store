import { createTheme } from "@material-ui/core";
import PRIMARY_RED_COLOR from "../constants/colors";

const Theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_RED_COLOR,
    },
  },
});

export default Theme;
