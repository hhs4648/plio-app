import splashDark from "./splash-dark.png";
import splashLight from "./splash-light.png";

export type SplashTheme = "light" | "dark";

export const splashImages: Record<SplashTheme, string> = {
  light: splashLight,
  dark: splashDark,
};
