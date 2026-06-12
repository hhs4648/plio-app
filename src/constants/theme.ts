export const THEME_STORAGE_KEY = "plio-theme";

export type AppTheme = "light" | "dark";

/** 설정이 없으면 일반모드(light)를 기본값으로 사용 */
export function getAppTheme(): AppTheme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "dark" ? "dark" : "light";
}

export function setAppTheme(theme: AppTheme) {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}
