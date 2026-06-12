import onboarding1Dark from "./onboarding-1-dark.png";
import onboarding1Light from "./onboarding-1-light.png";
import onboarding2Dark from "./onboarding-2-dark.png";
import onboarding2Light from "./onboarding-2-light.png";
import onboarding3Dark from "./onboarding-3-dark.png";
import onboarding3Light from "./onboarding-3-light.png";

export type OnboardingTheme = "light" | "dark";

export const onboardingImages: Record<OnboardingTheme, string[]> = {
  light: [onboarding1Light, onboarding2Light, onboarding3Light],
  dark: [onboarding1Dark, onboarding2Dark, onboarding3Dark],
};

export const onboardingImageFiles = {
  light: [
    "onboarding-1-light.png",
    "onboarding-2-light.png",
    "onboarding-3-light.png",
  ],
  dark: [
    "onboarding-1-dark.png",
    "onboarding-2-dark.png",
    "onboarding-3-dark.png",
  ],
} as const;
