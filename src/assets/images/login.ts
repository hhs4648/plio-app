import loginDark from "./login-dark.png";
import loginLight from "./login-light.png";

export type LoginTheme = "light" | "dark";

export const loginImages: Record<LoginTheme, string> = {
  light: loginLight,
  dark: loginDark,
};
