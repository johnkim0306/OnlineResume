import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    black: "#222831",
    gray: "#393E46",
    blue: "#00ADB5",
    white: "#EEEEEE",
    gradient: "linear-gradient(128.93deg, #00ADB5 22.41%, #393E46 93.45%)",

    green: "#346751",
    red: "#C84B31",
    baige: "#ECDBBA",

    neonBlue: "#2c3fe9",
    neonGreen: "#00f18c",
  },
};

const customMediaQuery = (minWidth: number): string =>
  `@media (min-width: ${minWidth}px) and (min-height: 830px)`;

export const media = {
  custom: customMediaQuery,
  laptop: customMediaQuery(1024),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(375),
};