import { AppShell, BackHeader } from "../../components/layout/AppShell";
import { StatusBar } from "../../components/layout/StatusBar";
import { Button } from "../../components/ui/Button";
import { TextField } from "../../components/ui/TextField";
import type { TabId } from "../../types/navigation";

type ProfilePageProps = {
  activeTab?: TabId;
  onTabChange: (tab: TabId) => void;
  onEdit: () => void;
  onLogout: () => void;
};

const settings = [
  { icon: "🔔", label: "알림 설정" },
  { icon: "🌙", label: "다크 모드" },
  { icon: "🌐", label: "학습 언어 설정" },
  { icon: "⚙️", label: "계정 설정" },
  { icon: "🚪", label: "로그아웃" },
];

export function ProfilePage({ activeTab = "profile", onTabChange, onEdit, onLogout }: ProfilePageProps) {
  return (
    <AppShell activeTab={activeTab} onTabChange={onTabChange}>
      <StatusBar />
      <div className="flex items-center justify-between px-[20px] pt-[12px]">
        <h1 className="text-[24px] font-bold text-plio-midnight">마이페이지</h1>
        <span className="text-[20px]">⚙️</span>
      </div>

      <div className="mx-[20px] mt-[12px] flex h-[96px] items-center gap-[14px] rounded-[16px] bg-white p-[16px]">
        <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-plio-primary text-[24px] font-bold text-white">
          김
        </span>
        <div className="flex-1">
          <p className="text-[16px] font-bold text-plio-midnight">김플리오</p>
          <span className="mt-[4px] inline-flex h-[22px] items-center rounded-[6px] bg-plio-surface px-[10px] text-[11px] font-semibold text-plio-primary">
            초급
          </span>
          <p className="mt-[4px] text-[12px] text-plio-muted">게임 · 서울 강남구</p>
        </div>
        <button type="button" onClick={onEdit} className="flex h-[28px] items-center rounded-[8px] border border-plio-border px-[8px] text-[11px] text-plio-muted">
          ✏️ 편집
        </button>
      </div>

      <p className="mt-[20px] px-[20px] text-[14px] font-semibold text-plio-midnight">학습 통계</p>
      <div className="mt-[8px] flex gap-[4px] px-[20px]">
        {[
          { value: "127개", label: "저장 단어", sub: "이번 주 +12" },
          { value: "23일", label: "학습 일수", sub: "5일 연속" },
          { value: "89%", label: "복습 완료", sub: "목표 80%" },
        ].map((stat) => (
          <div key={stat.label} className="flex h-[80px] flex-1 flex-col items-center justify-center rounded-[12px] bg-white">
            <p className="text-[22px] font-bold text-plio-primary">{stat.value}</p>
            <p className="text-[11px] text-plio-muted">{stat.label}</p>
            <p className="text-[10px] text-plio-primary">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-[20px] flex items-center justify-between px-[20px]">
        <p className="text-[14px] font-semibold text-plio-midnight">내 단어장</p>
        <span className="text-[13px] text-plio-muted">전체 보기 ›</span>
      </div>
      <div className="mx-[20px] mt-[8px] flex h-[68px] items-center gap-[12px] rounded-[12px] bg-white p-[10px]">
        <span className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] bg-plio-surface text-[20px]">📖</span>
        <div className="flex-1">
          <p className="text-[14px] font-semibold text-plio-midnight">게임 영어 단어 모음</p>
          <p className="text-[12px] text-plio-muted">127개 단어 · 마지막 학습 오늘</p>
        </div>
        <span className="text-plio-muted">›</span>
      </div>

      <div className="mt-[16px] flex items-center justify-between px-[20px]">
        <p className="text-[14px] font-semibold text-plio-midnight">내 스터디 그룹</p>
        <span className="text-[13px] text-plio-muted">전체 보기 ›</span>
      </div>
      <div className="mx-[20px] mt-[8px] flex h-[68px] items-center gap-[12px] rounded-[12px] bg-white p-[10px]">
        <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-plio-surface text-[20px]">👾</span>
        <div className="flex-1">
          <p className="text-[14px] font-semibold text-plio-midnight">롤 영어 스터디 그룹</p>
          <p className="text-[12px] text-plio-muted">멤버 24명 · 서울 강남구</p>
        </div>
        <span className="text-plio-muted">›</span>
      </div>

      <p className="mt-[20px] px-[20px] text-[14px] font-semibold text-plio-midnight">설정</p>
      <div className="mx-[20px] mt-[8px] overflow-hidden rounded-[12px] bg-white">
        {settings.map((item, i) => (
          <button
            key={item.label}
            type="button"
            onClick={item.label === "로그아웃" ? onLogout : undefined}
            className={`flex h-[52px] w-full items-center gap-[12px] px-[14px] text-left ${i > 0 ? "border-t border-plio-border-light" : ""}`}
          >
            <span>{item.icon}</span>
            <span className="flex-1 text-[14px] text-plio-midnight">{item.label}</span>
            <span className="text-plio-muted">›</span>
          </button>
        ))}
      </div>
    </AppShell>
  );
}

export function ProfileEditPage({
  onBack,
  onSave,
}: {
  onBack: () => void;
  onSave: () => void;
}) {
  const tags = ["🎮 게임", "✈️ 여행", "🎵 음악"];

  return (
    <AppShell showTabBar={false}>
      <BackHeader title="프로필 편집" onBack={onBack} />
      <div className="h-[0.5px] bg-plio-border-light" />

      <div className="mt-[22px] flex flex-col items-center">
        <div className="relative">
          <span className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-plio-primary text-[34px] font-bold text-white">
            김
          </span>
          <span className="absolute -bottom-[2px] -right-[2px] flex h-[28px] w-[28px] items-center justify-center rounded-full border-2 border-white bg-plio-surface text-[12px]">
            📷
          </span>
        </div>
        <button type="button" className="mt-[8px] text-[13px] text-plio-primary">사진 변경</button>
      </div>

      <div className="mt-[20px] px-[20px]">
        <p className="text-[12px] text-plio-muted">닉네임</p>
        <TextField defaultValue="김플리오" className="mt-[6px]" />
        <p className="mt-[16px] text-[12px] text-plio-muted">한 줄 소개</p>
        <TextField defaultValue="게임으로 영어 정복 중 🎮" className="mt-[6px]" />
        <p className="mt-[16px] text-[12px] text-plio-muted">이메일</p>
        <div className="mt-[6px] flex h-[50px] items-center rounded-[12px] bg-plio-surface px-[16px] text-[14px] text-plio-muted">
          plio@example.com
        </div>
        <p className="mt-[16px] text-[12px] text-plio-muted">관심사</p>
        <div className="mt-[8px] flex flex-wrap gap-[8px]">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex h-[34px] items-center rounded-[17px] border-2 border-plio-primary bg-plio-surface px-[15px] text-[13px] font-semibold text-plio-primary">
              {tag}
            </span>
          ))}
          <span className="inline-flex h-[34px] w-[40px] items-center justify-center rounded-[17px] border border-dashed border-plio-border text-[18px] text-plio-muted">
            +
          </span>
        </div>
      </div>

      <div className="absolute bottom-[38px] left-[20px] w-[350px]">
        <Button onClick={onSave}>저장하기</Button>
      </div>
    </AppShell>
  );
}
