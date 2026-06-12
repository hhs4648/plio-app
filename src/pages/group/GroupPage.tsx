import { useState } from "react";
import { AppShell, BackHeader } from "../../components/layout/AppShell";
import { StatusBar } from "../../components/layout/StatusBar";
import { GroupCard } from "../../components/group/GroupCard";
import { SearchBar } from "../../components/ui/SearchBar";
import { chatMessages, groups } from "../../data/mock";
import type { TabId } from "../../types/navigation";

type GroupListPageProps = {
  activeTab?: TabId;
  onTabChange: (tab: TabId) => void;
  onGroupClick: (id: string) => void;
};

export function GroupListPage({ activeTab = "group", onTabChange, onGroupClick }: GroupListPageProps) {
  const [filterTab, setFilterTab] = useState<"all" | "interest" | "region">("all");
  const mine = groups.filter((g) => g.isMine);
  const recommended = groups.filter((g) => !g.isMine);
  const regions = ["전체", "서울", "경기", "부산", "인천", "대구"];

  return (
    <AppShell activeTab={activeTab} onTabChange={onTabChange}>
      <StatusBar />
      <div className="flex items-center justify-between px-[20px] pt-[12px]">
        <h1 className="text-[24px] font-bold text-plio-midnight">스터디 그룹</h1>
        <button type="button" className="flex h-[34px] items-center rounded-[17px] border border-plio-primary px-[17px] text-[13px] font-semibold text-plio-primary">
          + 그룹 만들기
        </button>
      </div>

      <SearchBar placeholder="그룹 검색" className="mx-[20px] mt-[8px] h-[36px]" />

      <div className="mt-[8px] flex gap-[8px] overflow-x-auto px-[20px] [scrollbar-width:none]">
        {regions.map((r, i) => (
          <span
            key={r}
            className={`flex h-[28px] shrink-0 items-center rounded-[14px] px-[12px] text-[12px] ${
              i === 0 ? "bg-plio-primary font-semibold text-white" : "bg-plio-surface text-plio-muted"
            }`}
          >
            {r}
          </span>
        ))}
      </div>

      <div className="relative mt-[8px] flex h-[38px] border-b border-plio-border-light">
        {(["all", "interest", "region"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setFilterTab(tab)}
            className={`flex-1 text-[14px] ${filterTab === tab ? "font-semibold text-plio-primary" : "text-plio-muted"}`}
          >
            {tab === "all" ? "전체" : tab === "interest" ? "관심사별" : "지역별"}
          </button>
        ))}
        {filterTab === "all" && (
          <div className="absolute bottom-0 left-[12px] h-[2px] w-[106px] bg-plio-primary" />
        )}
      </div>

      <div className="overflow-y-auto px-[20px] pb-[96px] [height:calc(100%-260px)]">
        <p className="mt-[16px] text-[14px] font-semibold text-plio-midnight">내 그룹</p>
        {mine.map((g) => (
          <GroupCard key={g.id} group={g} onClick={() => onGroupClick(g.id)} />
        ))}
        <div className="my-[12px] h-[0.5px] bg-plio-border-light" />
        <p className="text-[14px] font-semibold text-plio-midnight">추천 그룹</p>
        <p className="text-[12px] text-plio-muted">관심사 기반으로 추천해드려요</p>
        {recommended.map((g) => (
          <GroupCard key={g.id} group={g} onClick={() => onGroupClick(g.id)} />
        ))}
      </div>
    </AppShell>
  );
}

export function GroupDetailPage({
  groupId,
  onBack,
  onChat,
  onTabChange,
}: {
  groupId: string;
  onBack: () => void;
  onChat: () => void;
  onTabChange: (tab: TabId) => void;
}) {
  const group = groups.find((g) => g.id === groupId) ?? groups[0];
  const [tab, setTab] = useState<"intro" | "member" | "words">("intro");
  const wordTags = ["clutch", "respawn", "carry", "gank"];

  return (
    <AppShell activeTab="group" onTabChange={onTabChange}>
      <BackHeader title="" onBack={onBack} />
      <div className="flex flex-col items-center px-[20px] pb-[8px]">
        <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-plio-surface text-[24px]">
          {group.emoji}
        </span>
        <h2 className="mt-[8px] text-[18px] font-bold text-plio-midnight">{group.name}</h2>
        <p className="mt-[4px] text-[12px] text-plio-muted">
          {group.members} · {group.location} · {group.badge}
        </p>
      </div>

      <div className="flex gap-[12px] px-[20px]">
        <button type="button" onClick={onChat} className="flex h-[44px] flex-1 items-center justify-center rounded-[12px] border border-plio-primary text-[14px] font-semibold text-plio-primary">
          채팅방 입장
        </button>
        <button type="button" className="flex h-[44px] flex-1 items-center justify-center rounded-[12px] bg-plio-surface text-[14px] font-semibold text-plio-muted">
          가입중
        </button>
      </div>

      <div className="mx-[20px] mt-[14px] flex h-[40px] rounded-[12px] bg-plio-surface p-[4px]">
        {([
          ["intro", "소개"],
          ["member", "멤버"],
          ["words", "공유 단어"],
        ] as const).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`flex-1 rounded-[8px] text-[13px] ${tab === id ? "bg-white font-semibold text-plio-midnight shadow-sm" : "text-plio-muted"}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="overflow-y-auto px-[20px] pb-[96px] [height:calc(100%-380px)]">
        {tab === "intro" && (
          <>
            <div className="mt-[14px] rounded-[12px] bg-plio-surface p-[16px] text-[13px] leading-[1.5] text-plio-midnight">
              롤 영어 해설을 함께 공부하는 그룹이에요. 매주 토요일 오전 10시 온라인 스터디!
            </div>
            <p className="mt-[16px] text-[14px] font-semibold text-plio-midnight">멤버</p>
            <div className="mt-[8px] flex items-center gap-[10px]">
              {["김", "이", "박", "최"].map((m) => (
                <span key={m} className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-plio-primary text-[13px] font-bold text-white">
                  {m}
                </span>
              ))}
              <span className="text-[12px] text-plio-muted">+20명</span>
            </div>
            <p className="mt-[16px] text-[14px] font-semibold text-plio-midnight">이번 주 학습 단어</p>
            <div className="mt-[8px] flex flex-wrap gap-[8px]">
              {wordTags.map((w) => (
                <span key={w} className="inline-flex h-[30px] items-center rounded-[15px] bg-plio-surface px-[16px] text-[12px] text-plio-midnight">
                  {w}
                </span>
              ))}
            </div>
            <div className="mt-[16px] rounded-[12px] bg-plio-surface p-[16px]">
              <p className="text-[13px] font-semibold text-plio-midnight">다음 스터디</p>
              <p className="mt-[4px] text-[13px] text-plio-muted">토요일 오전 10:00 · Zoom 온라인</p>
            </div>
          </>
        )}
      </div>
    </AppShell>
  );
}

export function GroupChatPage({ onBack }: { onBack: () => void }) {
  return (
    <AppShell showTabBar={false}>
      <StatusBar />
      <div className="flex items-center gap-[10px] border-b border-plio-border-light px-[16px] py-[10px]">
        <button type="button" onClick={onBack} className="text-[20px] text-plio-midnight">←</button>
        <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-plio-surface text-[14px]">👾</span>
        <div>
          <p className="text-[14px] font-semibold text-plio-midnight">롤 영어 스터디 그룹</p>
          <p className="text-[11px] text-plio-muted">멤버 24명</p>
        </div>
      </div>

      <div className="overflow-y-auto px-[16px] pb-[80px] pt-[12px] [height:calc(100%-120px)]">
        <p className="mb-[12px] text-center text-[11px] text-plio-muted">오늘</p>
        {chatMessages.map((msg) => (
          <div key={msg.id} className={`mb-[16px] flex ${msg.mine ? "justify-end" : "justify-start"}`}>
            {!msg.mine && (
              <span className="mr-[8px] flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-plio-surface text-[11px]">
                {msg.initial}
              </span>
            )}
            <div className={`max-w-[220px] ${msg.mine ? "items-end" : ""}`}>
              {!msg.mine && <p className="mb-[4px] text-[11px] text-plio-muted">{msg.user}</p>}
              <div className={`rounded-[14px] px-[12px] py-[10px] text-[13px] leading-[1.4] ${msg.mine ? "bg-plio-primary text-white" : "bg-plio-surface text-plio-midnight"}`}>
                {msg.text}
              </div>
              <p className={`mt-[4px] text-[10px] text-plio-muted ${msg.mine ? "text-right" : ""}`}>{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 flex h-[56px] w-full items-center gap-[8px] border-t border-plio-border-light bg-white px-[16px]">
        <input
          type="text"
          placeholder="메시지 입력..."
          className="h-[40px] flex-1 rounded-[20px] bg-plio-surface px-[16px] text-[14px] outline-none"
        />
        <button type="button" className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-plio-primary text-white">
          ↑
        </button>
      </div>
    </AppShell>
  );
}
