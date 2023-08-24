import React from "react";
import { ThemeProvider } from "styled-components";

const Theme = ({ children }) => {
  const theme = {
    colors: {
      backgroundColorDarkBlue: "rgb(20 23 24)",
      backgroundColorDarkGrey: "rgb(35 38 39)",
      backgroundColorGrey: "rgb(57, 62, 64)",
      textColorGrey: "rgb(108 114 117)",
      darkBlue: "rgb(56, 89, 130)",
      buttonBlue: "rgb(0 132 255)",
      buttonBlueAlt: "rgb(0, 110, 255)",
      textColorWhite: "rgb(254 254 254)",
    },
    breakpoints: {
      mobile: "360px",
      tablet: "768px",
      laptop: "1366px",
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
