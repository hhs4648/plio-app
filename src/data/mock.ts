export type WordItem = {
  id: string;
  word: string;
  phonetic: string;
  meaning: string;
  source: string;
};

export type VideoItem = {
  id: string;
  title: string;
  channel: string;
  views: string;
  duration: string;
  badge: string;
  badgeColor?: string;
  thumbnail: string;
  avatar: string;
  avatarBg: string;
  category: string;
};

export type GroupItem = {
  id: string;
  name: string;
  emoji: string;
  badge: string;
  members: string;
  location: string;
  isMine?: boolean;
};

export const words: WordItem[] = [
  { id: "1", word: "respawn", phonetic: "[riːspɔːn]", meaning: "부활하다, 재시작", source: "🎮 롤 명장면" },
  { id: "2", word: "clutch", phonetic: "[klʌtʃ]", meaning: "훌륭한, 눈부신", source: "🎮 롤 명장면" },
  { id: "3", word: "carry", phonetic: "[kæri]", meaning: "팀을 이끌다, 캐리하다", source: "🎮 롤 명장면" },
  { id: "4", word: "lag", phonetic: "[læɡ]", meaning: "렉, 지연", source: "🎮 e스포츠" },
  { id: "5", word: "gank", phonetic: "[ɡæŋk]", meaning: "기습하다, 갱킹하다", source: "🎮 e스포츠" },
];

export const videos: VideoItem[] = [
  {
    id: "1",
    title: "페이커의 롤 명장면 베스트 10",
    channel: "롤공식",
    views: "51만회",
    duration: "2:34",
    badge: "🎮 게임",
    thumbnail: "#123a8c",
    avatar: "풋",
    avatarBg: "#6C5CE7",
    category: "게임",
  },
  {
    id: "2",
    title: "파리 여행 필수 영어 표현",
    channel: "여행유튜버",
    views: "38만회",
    duration: "1:45",
    badge: "✈️ 여행",
    thumbnail: "#8c4814",
    avatar: "영",
    avatarBg: "#8C4814",
    category: "여행",
  },
  {
    id: "3",
    title: "BTS 영어 인터뷰 따라하기",
    channel: "팝영어TV",
    views: "44만회",
    duration: "3:12",
    badge: "🎵 음악",
    thumbnail: "#146446",
    avatar: "여",
    avatarBg: "#146446",
    category: "음악",
  },
  {
    id: "4",
    title: "NBA 영어 중계 핵심표현",
    channel: "스포츠영어",
    views: "29만회",
    duration: "2:18",
    badge: "🏀 스포츠",
    thumbnail: "#a03214",
    avatar: "스",
    avatarBg: "#A03214",
    category: "스포츠",
  },
  {
    id: "5",
    title: "고든 램지 요리 영어 배우기",
    channel: "요리채널",
    views: "17만회",
    duration: "4:01",
    badge: "🍳 요리",
    badgeColor: "#B43C78",
    thumbnail: "#501478",
    avatar: "팝",
    avatarBg: "#501478",
    category: "요리",
  },
  {
    id: "6",
    title: "스타벅스 영어 주문 완벽가이드",
    channel: "카페영어",
    views: "22만회",
    duration: "1:58",
    badge: "✈️ 여행",
    thumbnail: "#1450a0",
    avatar: "스",
    avatarBg: "#1450A0",
    category: "여행",
  },
];

export const groups: GroupItem[] = [
  {
    id: "mine",
    name: "롤 영어 스터디 그룹",
    emoji: "👾",
    badge: "게임",
    members: "멤버 24명",
    location: "서울 강남구",
    isMine: true,
  },
  {
    id: "2",
    name: "넷플릭스 드라마 영어",
    emoji: "🎬",
    badge: "드라마",
    members: "멤버 18명",
    location: "서울 마포구",
  },
  {
    id: "3",
    name: "토익 900점 영어 스터디",
    emoji: "📝",
    badge: "토익",
    members: "멤버 32명",
    location: "서울 강서구",
  },
  {
    id: "4",
    name: "BTS 영어 가사 분석",
    emoji: "🎵",
    badge: "음악",
    members: "멤버 41명",
    location: "부산광역시",
  },
  {
    id: "5",
    name: "NBA 영어 중계 스터디",
    emoji: "🏀",
    badge: "스포츠",
    members: "멤버 15명",
    location: "서울 송파구",
  },
];

export const signupInterests = [
  "⚽ 축구", "🎮 게임", "✈️ 여행", "💪 운동",
  "👗 패션", "🍳 요리", "🎵 음악", "📚 공부",
  "🎬 영화", "💻 테크", "💼 비즈니스",
  "🍜 먹방", "⚾ 야구", "🏀 농구", "📺 예능",
];

export const interests = signupInterests;

export const levels = [
  { id: "beginner", label: "입문", desc: "영어를 거의 모르는 단계" },
  { id: "basic", label: "초급", desc: "기초 단어와 문장을 알아요" },
  { id: "intermediate", label: "중급", desc: "일상 회화가 가능해요" },
  { id: "advanced", label: "고급", desc: "원어민과 대화할 수 있어요" },
];

export const regions = [
  "서울특별시", "경기도", "부산광역시", "인천광역시",
  "대구광역시", "대전광역시", "광주광역시", "울산광역시",
  "세종특별자치시", "강원도", "충청북도", "충청남도",
  "전라북도", "전라남도", "경상북도", "경상남도", "제주특별자치도",
];

export const districts = [
  "강남구", "강동구", "강북구", "강서구", "관악구", "광진구",
  "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구",
];

export const videoWords = [
  { word: "score", meaning: "점수, 득점하다" },
  { word: "brilliant", meaning: "훌륭한, 눈부신" },
  { word: "assist", meaning: "어시스트, 돕다" },
  { word: "incredible", meaning: "믿을 수 없는, 놀라운" },
];

export const chatMessages = [
  { id: "1", user: "이영희", initial: "이", text: '"clutch" 오늘 영상에서 배웠어요! 🎉', time: "10:24", mine: false },
  { id: "2", user: "박민수", initial: "박", text: "저도요! carry도 진짜 많이 쓰네요", time: "10:25", mine: false },
  { id: "3", user: "나", initial: "김", text: "같이 플래시카드로 복습해요! 😊", time: "10:26", mine: true },
  { id: "4", user: "이영희", initial: "이", text: '"respawn" 뜻이 부활이었군요 몰랐어요 👀', time: "10:28", mine: false },
  { id: "5", user: "나", initial: "김", text: "맞아요! 게임에서 죽고 다시 살아나는 거예요 ✨", time: "10:29", mine: true },
];
