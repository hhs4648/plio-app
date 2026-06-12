import { useState } from "react";
import { AppShell } from "../../components/layout/AppShell";
import { StatusBar } from "../../components/layout/StatusBar";
import { SearchBar } from "../../components/ui/SearchBar";
import { SegmentTabs } from "../../components/ui/SegmentTabs";
import { words, videos } from "../../data/mock";
import type { TabId } from "../../types/navigation";

type VocabPageProps = {
  activeTab?: TabId;
  onTabChange: (tab: TabId) => void;
  onReview: () => void;
};

export function VocabPage({ activeTab = "vocab", onTabChange, onReview }: VocabPageProps) {
  const [tab, setTab] = useState<"all" | "video">("all");

  return (
    <AppShell activeTab={activeTab} onTabChange={onTabChange}>
      <StatusBar />
      <div className="flex items-start justify-between px-[20px] pt-[12px]">
        <div>
          <h1 className="text-[24px] font-bold text-plio-midnight">단어장</h1>
          <p className="mt-[4px] text-[13px] text-plio-muted">총 32개</p>
        </div>
        <button
          type="button"
          onClick={onReview}
          className="mt-[6px] flex h-[36px] items-center rounded-[18px] bg-plio-primary px-[20px] text-[13px] font-semibold text-white"
        >
          🧠 복습하기
        </button>
      </div>

      {tab === "all" && (
        <SearchBar placeholder="단어 검색" className="mx-[20px] mt-[16px]" />
      )}

      <div className="mt-[12px]">
        <SegmentTabs
          tabs={[
            { id: "all", label: "전체 단어" },
            { id: "video", label: "영상별" },
          ]}
          active={tab}
          onChange={setTab}
        />
      </div>

      {tab === "all" ? (
        <div className="mt-[12px] overflow-y-auto px-[20px] pb-[96px] [height:calc(100%-240px)]">
          {words.map((item) => (
            <div
              key={item.id}
              className="relative mb-[12px] flex h-[68px] flex-col justify-center rounded-[12px] border border-plio-border-light bg-white px-[16px]"
            >
              <div className="absolute left-0 top-[10px] h-[48px] w-[4px] rounded-r bg-plio-primary" />
              <div className="flex items-baseline gap-[8px]">
                <span className="text-[15px] font-semibold text-plio-midnight">{item.word}</span>
                <span className="text-[11px] text-plio-muted">{item.phonetic}</span>
              </div>
              <p className="mt-[2px] text-[13px] text-plio-muted">{item.meaning}</p>
              <span className="absolute right-[36px] top-[12px] inline-flex h-[20px] items-center rounded-[6px] bg-plio-surface px-[6px] text-[10px] text-plio-muted">
                {item.source}
              </span>
              <span className="absolute right-[12px] top-[38px] text-[14px]">🔖</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-[12px] overflow-y-auto px-[20px] pb-[96px] [height:calc(100%-200px)]">
          {videos.slice(0, 3).map((video) => (
            <div
              key={video.id}
              className="mb-[12px] flex h-[88px] items-center gap-[12px] rounded-[12px] border border-plio-border-light bg-white p-[12px]"
            >
              <div className="relative h-[64px] w-[64px] shrink-0 rounded-[10px]" style={{ backgroundColor: video.thumbnail }}>
                <span className="absolute inset-0 flex items-center justify-center text-[15px] text-white">▶</span>
              </div>
              <div className="min-w-0 flex-1">
                <span className="inline-flex h-[20px] items-center rounded-[6px] bg-plio-primary px-[6px] text-[10px] font-semibold text-white">
                  {video.badge}
                </span>
                <p className="mt-[4px] truncate text-[13px] font-semibold text-plio-midnight">{video.title}</p>
                <p className="text-[12px] text-plio-muted">단어 {8 + Number(video.id)}개</p>
              </div>
              <span className="text-[20px] text-plio-muted">›</span>
            </div>
          ))}
        </div>
      )}
    </AppShell>
  );
}

export function FlashcardPage({
  flipped = false,
  onBack,
  onFlip,
  onKnown,
  onUnknown,
}: {
  flipped?: boolean;
  onBack: () => void;
  onFlip: () => void;
  onKnown: () => void;
  onUnknown: () => void;
}) {
  return (
    <AppShell showTabBar={false}>
      <StatusBar />
      <button type="button" onClick={onBack} className="absolute left-[20px] top-[46px] text-[21px] text-plio-midnight">
        ←
      </button>
      <h1 className="mt-[52px] text-center text-[18px] font-semibold text-plio-midnight">
        플래시카드 복습
      </h1>

      <div className="mx-[20px] mt-[16px]">
        <div className="h-[6px] rounded-full bg-plio-surface">
          <div className="h-[6px] w-[40%] rounded-full bg-plio-primary" />
        </div>
        <p className="mt-[8px] text-[12px] text-plio-muted">4 / 10</p>
      </div>

      <button
        type="button"
        onClick={onFlip}
        className="mx-[20px] mt-[16px] flex h-[320px] w-[350px] flex-col items-center justify-center rounded-[16px] border border-plio-border-light bg-white"
      >
        {!flipped ? (
          <>
            <span className="mb-[12px] inline-flex h-[24px] items-center rounded-[6px] bg-plio-surface px-[14px] text-[11px] text-plio-muted">
              🎮 롤 명장면
            </span>
            <p className="text-[48px] font-bold text-plio-midnight">clutch</p>
            <p className="mt-[8px] text-[14px] text-plio-muted">[klʌtʃ]</p>
            <p className="mt-[24px] text-[13px] text-plio-muted">탭해서 뜻 확인하기</p>
            <span className="mt-[16px] text-[24px]">↩️</span>
          </>
        ) : (
          <>
            <p className="text-[36px] font-bold text-plio-midnight">clutch</p>
            <p className="mt-[16px] text-[14px] text-plio-midnight">① 결정적인 순간에 해내는</p>
            <p className="mt-[4px] text-[13px] text-plio-muted">② (게임) 클러치 플레이</p>
            <p className="mt-[20px] text-[13px] italic text-plio-midnight">&quot;He carried the whole team!&quot;</p>
            <p className="mt-[4px] text-[12px] text-plio-muted">그가 팀 전체를 캐리했다!</p>
            <span className="mt-[16px] inline-flex h-[32px] items-center rounded-[8px] bg-plio-surface px-[20px] text-[12px] text-plio-primary">
              단어장 저장
            </span>
          </>
        )}
      </button>

      {!flipped && (
        <div className="mx-[20px] mt-[16px] rounded-[12px] bg-plio-surface p-[16px]">
          <p className="text-[14px] italic text-plio-midnight">&quot;He carried the whole team!&quot;</p>
          <p className="mt-[8px] text-[12px] text-plio-muted">예문을 보고 뜻을 맞춰보세요</p>
        </div>
      )}

      {flipped && (
        <p className="mt-[16px] text-center text-[13px] text-plio-muted">다음 단어 → respawn</p>
      )}

      <div className="absolute bottom-[38px] left-[20px] flex w-[350px] gap-[22px]">
        <button
          type="button"
          onClick={onUnknown}
          className="flex h-[56px] flex-1 items-center justify-center rounded-[14px] border border-plio-border bg-white text-[14px] font-semibold text-plio-midnight"
        >
          😅 다시 볼게요
        </button>
        <button
          type="button"
          onClick={onKnown}
          className="flex h-[56px] flex-1 items-center justify-center rounded-[14px] bg-plio-primary text-[14px] font-semibold text-white"
        >
          ✅ 외웠어요
        </button>
      </div>
    </AppShell>
  );
}
