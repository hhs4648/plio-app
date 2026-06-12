import signup1Dark from "./signup-1-dark.png";
import signup1Light from "./signup-1-light.png";
import signup2Dark from "./signup-2-dark.png";
import signup2Light from "./signup-2-light.png";
import signup3Dark from "./signup-3-dark.png";
import signup3Light from "./signup-3-light.png";

export type SignupTheme = "light" | "dark";

export const signupImages: Record<SignupTheme, string[]> = {
  light: [signup1Light, signup2Light, signup3Light],
  dark: [signup1Dark, signup2Dark, signup3Dark],
};

export const signupImageFiles = {
  light: ["signup-1-light.png", "signup-2-light.png", "signup-3-light.png"],
  dark: ["signup-1-dark.png", "signup-2-dark.png", "signup-3-dark.png"],
} as const;
