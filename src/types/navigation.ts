export type TabId = "home" | "explore" | "vocab" | "group" | "profile";

export type AuthScreen =
  | "splash"
  | "onboarding"
  | "login"
  | "signup"
  | "terms";

export type AppScreen =
  | { type: "tabs"; tab: TabId }
  | { type: "player"; videoId?: string }
  | { type: "word-detail"; word: string; videoId?: string }
  | { type: "flashcard" }
  | { type: "group-detail"; groupId: string }
  | { type: "group-chat"; groupId: string }
  | { type: "profile-edit" };
