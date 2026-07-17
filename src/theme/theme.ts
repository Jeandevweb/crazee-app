// Les couleurs pointent vers des variables CSS (définies dans index.css) afin de
// pouvoir basculer clair/sombre sans toucher aux composants. Voir useThemeMode.
const colors = {
  dark: "var(--color-dark)",
  incognito: "var(--color-incognito)",
  white: "var(--color-white)",
  surface: "var(--color-surface)",
  background_white: "var(--color-background_white)",
  background_dark: "var(--color-background_dark)",
  primary: "var(--color-primary)",
  appFrame: "var(--color-app-frame)",
  green: "var(--color-green)",
  success: "var(--color-success)",
  red: "var(--color-red)",
  redSecondary: "var(--color-redSecondary)",
  blue: "var(--color-blue)",
  greyLight: "var(--color-greyLight)",
  greyMedium: "var(--color-greyMedium)",
  greySemiDark: "var(--color-greySemiDark)",
  greyDark: "var(--color-greyDark)",
  greyBlue: "var(--color-greyBlue)",
  loginLine: "var(--color-loginLine)",
}

const spacing = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "52px",
  xxl: "84px",
}

const fonts = {
  size: {
    XXXS: "8px",
    XXS: "10px",
    XS: "12px",
    SM: "15px",
    P0: "16px",
    P1: "18px",
    P2: "20px",
    P3: "24px",
    P4: "36px",
    P5: "48px",
    P6: "60px",
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    heavy: 800,
  },
  family: {
    stylish: '"Amatic SC", cursive',
    openSans: '"Open Sans", sans-serif',
  },
}
const gridUnit = 8
const borderRadius = {
  subtle: 1,
  round: "5px",
  extraRound: "15px",
  circle: "50%",
}

const shadows = {
  subtle: "0px -6px 8px -2px rgba(0, 0, 0, 0.1)",
  medium: "-8px 8px 20px 0px rgb(0 0 0 / 20%)",
  strong: "0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset",
  orangeHighlight: "0 0 8px 0 rgb(255 154 35 / 100%)",
  basket: "inset 0px 0px 20px rgba(0, 0, 0, 0.2)",
  cardBasket: "-4px 4px 15px 0 rgb(0 0 0 / 20%)",
}

const animations = {
  speed: {
    quick: "300ms",
    slow: "500ms",
  },
}

export const theme = {
  colors,
  fonts,
  gridUnit,
  borderRadius,
  shadows,
  spacing,
  animations,
}
