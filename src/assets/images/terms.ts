import termsAllDark from "./terms-all-dark.png";
import termsAllLight from "./terms-all-light.png";
import termsBaseDark from "./terms-base-dark.png";
import termsBaseLight from "./terms-base-light.png";
import termsRequiredDark from "./terms-required-dark.png";
import termsRequiredLight from "./terms-required-light.png";

export type TermsTheme = "light" | "dark";

export const termsImages: Record<TermsTheme, string[]> = {
  light: [termsBaseLight, termsAllLight, termsRequiredLight],
  dark: [termsBaseDark, termsAllDark, termsRequiredDark],
};

export const termsStepLabels = [
  "이용약관 — 기본",
  "이용약관 — 전체 동의",
  "이용약관 — 필수만",
] as const;
