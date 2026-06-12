# Plio — 모바일 웹앱

관심사 영상으로 영어를 배우는 모바일 웹앱 프로토타입입니다.

## 기술 스택

- **React** 19
- **TypeScript**
- **Tailwind CSS** 4
- **Vite** 8

## UI 구현 규칙

- 화면 전체를 이미지로 출력하지 않음
- 모든 UI는 React 컴포넌트로 구현
- 이미지는 캐릭터, 로고, 아이콘(SVG)만 사용
- 화면 구조는 컴포넌트 단위로 분리

## 시작하기

```bash
cd plio-app
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

## 프로젝트 구조

```
plio-app/
├── public/
│   └── favicon.svg              # 앱 파비콘
├── src/
│   ├── components/
│   │   ├── brand/
│   │   │   └── PlioLogo.tsx     # 로고 마크, 워드마크, 캐릭터(SVG)
│   │   ├── layout/
│   │   │   ├── AppShell.tsx     # 앱 레이아웃 + BackHeader
│   │   │   ├── MobileFrame.tsx  # 390×844 모바일 프레임
│   │   │   └── StatusBar.tsx    # 상태바 (시간, 신호, 배터리)
│   │   ├── navigation/
│   │   │   └── TabBar.tsx       # 하단 탭 네비게이션
│   │   ├── onboarding/
│   │   │   ├── OnboardingIllustrations.tsx  # 온보딩 일러스트(UI)
│   │   │   └── PageDots.tsx     # 페이지 인디케이터
│   │   ├── home/
│   │   │   └── VideoCard.tsx    # 영상 카드
│   │   ├── group/
│   │   │   └── GroupCard.tsx    # 스터디 그룹 카드
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── TextField.tsx
│   │       ├── Divider.tsx
│   │       ├── ChipRow.tsx
│   │       ├── SearchBar.tsx
│   │       ├── ProgressBar.tsx
│   │       └── SegmentTabs.tsx
│   ├── constants/
│   │   └── layout.ts            # 모바일 프레임 크기 상수
│   ├── data/
│   │   └── mock.ts              # 목업 데이터
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── SplashPage.tsx   # 스플래시
│   │   │   ├── OnboardingPage.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   ├── SignupPage.tsx
│   │   │   └── TermsPage.tsx
│   │   ├── home/
│   │   │   └── HomePage.tsx     # 홈 + 탐색
│   │   ├── player/
│   │   │   └── PlayerPage.tsx   # 영상 플레이어 + 단어 시트
│   │   ├── vocab/
│   │   │   └── VocabPage.tsx    # 단어장 + 플래시카드
│   │   ├── group/
│   │   │   └── GroupPage.tsx    # 그룹 목록/상세/채팅
│   │   └── profile/
│   │       └── ProfilePage.tsx  # 마이페이지 + 프로필 편집
│   ├── types/
│   │   └── navigation.ts        # 화면/탭 타입 정의
│   ├── App.tsx                  # 라우팅 (상태 기반)
│   ├── index.css                # Tailwind + 디자인 토큰
│   └── main.tsx
├── index.html
├── vite.config.ts
└── package.json
```

## 화면 흐름

```
Splash → Onboarding → Login ⇄ Signup → Terms → Main App
                                              ↓
                    ┌─────────────────────────────────────┐
                    │  Home │ Explore │ Vocab │ Group │ Profile  │
                    └─────────────────────────────────────┘
                              ↓              ↓
                         PlayerPage    FlashcardPage
                              ↓
                        WordDetailModal
```

## 디자인 토큰

`src/index.css`의 `@theme` 블록에서 Plio 브랜드 컬러를 관리합니다.

| 토큰 | 값 | 용도 |
|------|-----|------|
| `plio-primary` | `#6C5CE7` | 주요 버튼, 강조 |
| `plio-midnight` | `#1E2A5E` | 제목, 본문 |
| `plio-bg` | `#F8F8FE` | 배경 |
| `plio-surface` | `#EEF0FB` | 카드, 칩 배경 |
| `plio-muted` | `#8C94B8` | 보조 텍스트 |
