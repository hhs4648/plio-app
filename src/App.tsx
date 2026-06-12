import { useCallback, useState } from "react";
import type { AppScreen, AuthScreen, TabId } from "./types/navigation";
import { SplashPage } from "./pages/auth/SplashPage";
import { OnboardingPage } from "./pages/auth/OnboardingPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { SignupPage } from "./pages/auth/SignupPage";
import { TermsPage } from "./pages/auth/TermsPage";
import { HomePage, ExplorePage } from "./pages/home/HomePage";
import { PlayerPage, WordDetailModal } from "./pages/player/PlayerPage";
import { VocabPage, FlashcardPage } from "./pages/vocab/VocabPage";
import { GroupListPage, GroupDetailPage, GroupChatPage } from "./pages/group/GroupPage";
import { ProfilePage, ProfileEditPage } from "./pages/profile/ProfilePage";

export default function App() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [authScreen, setAuthScreen] = useState<AuthScreen>("onboarding");
  const [appScreen, setAppScreen] = useState<AppScreen>({ type: "tabs", tab: "home" });
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);

  const enterApp = useCallback(() => {
    setIsAuthed(true);
    setAppScreen({ type: "tabs", tab: "home" });
  }, []);

  const logout = useCallback(() => {
    setIsAuthed(false);
    setAuthScreen("login");
    setAppScreen({ type: "tabs", tab: "home" });
    setFlashcardFlipped(false);
  }, []);

  if (!isAuthed) {
    if (authScreen === "onboarding") {
      return (
        <OnboardingPage
          onComplete={() => setAuthScreen("splash")}
          onSkip={() => setAuthScreen("splash")}
        />
      );
    }
    if (authScreen === "splash") {
      return <SplashPage onComplete={() => setAuthScreen("login")} />;
    }
    if (authScreen === "login") {
      return (
        <LoginPage
          onLoginSuccess={enterApp}
          onSignup={() => setAuthScreen("terms")}
        />
      );
    }
    if (authScreen === "terms") {
      return (
        <TermsPage
          onComplete={() => setAuthScreen("signup")}
          onBack={() => setAuthScreen("login")}
        />
      );
    }
    if (authScreen === "signup") {
      return (
        <SignupPage
          onComplete={enterApp}
          onBack={() => setAuthScreen("terms")}
          onLogin={() => setAuthScreen("login")}
        />
      );
    }
  }

  const setTab = (tab: TabId) => setAppScreen({ type: "tabs", tab });

  if (appScreen.type === "player") {
    return (
      <PlayerPage
        videoId={appScreen.videoId}
        onBack={() => setAppScreen({ type: "tabs", tab: "home" })}
        onWordDetail={(word) =>
          setAppScreen({ type: "word-detail", word, videoId: appScreen.videoId })
        }
        onTabChange={setTab}
      />
    );
  }

  if (appScreen.type === "word-detail") {
    return (
      <WordDetailModal
        word={appScreen.word}
        onClose={() => setAppScreen({ type: "player", videoId: appScreen.videoId })}
      />
    );
  }

  if (appScreen.type === "flashcard") {
    return (
      <FlashcardPage
        flipped={flashcardFlipped}
        onBack={() => {
          setFlashcardFlipped(false);
          setAppScreen({ type: "tabs", tab: "vocab" });
        }}
        onFlip={() => setFlashcardFlipped(true)}
        onKnown={() => {
          setFlashcardFlipped(false);
          setAppScreen({ type: "tabs", tab: "vocab" });
        }}
        onUnknown={() => setFlashcardFlipped(false)}
      />
    );
  }

  if (appScreen.type === "group-detail") {
    return (
      <GroupDetailPage
        groupId={appScreen.groupId}
        onBack={() => setAppScreen({ type: "tabs", tab: "group" })}
        onChat={() => setAppScreen({ type: "group-chat", groupId: appScreen.groupId })}
        onTabChange={setTab}
      />
    );
  }

  if (appScreen.type === "group-chat") {
    return (
      <GroupChatPage
        onBack={() => setAppScreen({ type: "group-detail", groupId: appScreen.groupId })}
      />
    );
  }

  if (appScreen.type === "profile-edit") {
    return (
      <ProfileEditPage
        onBack={() => setAppScreen({ type: "tabs", tab: "profile" })}
        onSave={() => setAppScreen({ type: "tabs", tab: "profile" })}
      />
    );
  }

  const tab = appScreen.type === "tabs" ? appScreen.tab : "home";

  switch (tab) {
    case "home":
      return (
        <HomePage
          activeTab="home"
          onTabChange={setTab}
          onVideoClick={(id) => setAppScreen({ type: "player", videoId: id })}
        />
      );
    case "explore":
      return (
        <ExplorePage
          activeTab="explore"
          onTabChange={setTab}
          onVideoClick={(id) => setAppScreen({ type: "player", videoId: id })}
        />
      );
    case "vocab":
      return (
        <VocabPage
          activeTab="vocab"
          onTabChange={setTab}
          onReview={() => {
            setFlashcardFlipped(false);
            setAppScreen({ type: "flashcard" });
          }}
        />
      );
    case "group":
      return (
        <GroupListPage
          activeTab="group"
          onTabChange={setTab}
          onGroupClick={(id) => setAppScreen({ type: "group-detail", groupId: id })}
        />
      );
    case "profile":
      return (
        <ProfilePage
          activeTab="profile"
          onTabChange={setTab}
          onEdit={() => setAppScreen({ type: "profile-edit" })}
          onLogout={logout}
        />
      );
    default:
      return (
        <HomePage
          activeTab="home"
          onTabChange={setTab}
          onVideoClick={(id) => setAppScreen({ type: "player", videoId: id })}
        />
      );
  }
}
