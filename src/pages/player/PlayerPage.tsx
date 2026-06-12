import { useState } from "react";
import { MobileFrame } from "../../components/layout/MobileFrame";
import { StatusBar } from "../../components/layout/StatusBar";
import { TabBar } from "../../components/navigation/TabBar";
import { PlioWordmark } from "../../components/brand/PlioLogo";
import { videoWords, videos } from "../../data/mock";
import type { TabId } from "../../types/navigation";

type PlayerPageProps = {
  videoId?: string;
  onBack: () => void;
  onWordDetail: (word: string) => void;
  onTabChange: (tab: TabId) => void;
};

export function PlayerPage({ videoId = "1", onBack, onWordDetail, onTabChange }: PlayerPageProps) {
  const [showWordSheet, setShowWordSheet] = useState(false);
  const video = videos.find((v) => v.id === videoId) ?? videos[0];
  const chips = ["전체", "⚽", "🎮", "🎵", "✈️", "🔍"];

  return (
    <MobileFrame>
      <div className="relative h-full w-full overflow-hidden" style={{ backgroundColor: video.thumbnail }}>
        <div className="absolute inset-0 bg-black/30" />
        <StatusBar />
        <div className="relative z-10 flex items-center justify-between px-[20px] pt-[34px]">
          <button type="button" onClick={onBack} className="text-[20px] text-white">←</button>
          <PlioWordmark size="sm" className="!text-white" />
          <span className="w-[20px]" />
        </div>

        <div className="relative z-10 mt-[12px] flex gap-[8px] overflow-x-auto px-[16px] [scrollbar-width:none]">
          {chips.map((chip, i) => (
            <span
              key={chip}
              className={`flex h-[28px] shrink-0 items-center rounded-[14px] px-[10px] text-[12px] ${
                i === 0 ? "bg-white/20 font-semibold text-white" : "bg-black/20 text-white/80"
              }`}
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="absolute left-1/2 top-[45%] z-10 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-[22px] text-white">
          ▶
        </div>

        <div className="absolute right-[16px] top-[42%] z-10 flex flex-col items-center gap-[20px] text-white">
          <div className="text-center">
            <span className="text-[27px]">❤️</span>
            <p className="text-[10px]">2.4만</p>
          </div>
          <span className="text-[26px]">🔖</span>
          <span className="text-[25px]">↗️</span>
          <button type="button" onClick={() => setShowWordSheet(true)} className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-plio-primary text-[18px]">
            📖
          </button>
        </div>

        <div className="absolute bottom-[96px] left-0 z-10 w-full px-[16px]">
          <span className="inline-flex h-[24px] items-center rounded-[6px] bg-black/40 px-[7px] text-[11px] text-white">
            ⚽ 축구
          </span>
          <h2 className="mt-[8px] text-[15px] font-semibold text-white">{video.title}</h2>
          <p className="mt-[4px] text-[12px] text-white/70">{video.channel} · 조회 {video.views}</p>

          <button
            type="button"
            onClick={() => onWordDetail("score")}
            className="mt-[12px] w-full rounded-[14px] bg-white/95 p-[12px] text-left"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[14px] font-semibold text-plio-midnight">✨ &quot;score&quot;</p>
                <p className="text-[13px] text-plio-muted">→ 점수, 득점</p>
              </div>
              <span className="rounded-[8px] bg-plio-primary px-[12px] py-[6px] text-[12px] font-semibold text-white">
                저장 +
              </span>
            </div>
            <p className="mt-[4px] text-right text-[10px] text-plio-muted">탭하면 자세히 보기</p>
          </button>
        </div>

        <div className="absolute bottom-[80px] left-0 z-10 w-full px-[16px]">
          <div className="h-[3px] rounded-full bg-white/20">
            <div className="h-[3px] w-[35%] rounded-full bg-plio-primary" />
          </div>
          <p className="mt-[4px] text-center text-[11px] text-white/60">↑ 스와이프하여 다음 영상</p>
        </div>

        <TabBar active="home" onChange={onTabChange} />

        {showWordSheet && (
          <WordSheet onClose={() => setShowWordSheet(false)} onWordClick={onWordDetail} />
        )}
      </div>
    </MobileFrame>
  );
}

function WordSheet({
  onClose,
  onWordClick,
}: {
  onClose: () => void;
  onWordClick: (word: string) => void;
}) {
  return (
    <div className="absolute inset-0 z-30 flex flex-col justify-end bg-black/50" onClick={onClose}>
      <div
        className="rounded-t-[20px] bg-white pb-[96px] pt-[12px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto h-[4px] w-[40px] rounded-full bg-plio-border-light" />
        <div className="mt-[12px] flex items-start justify-between px-[20px]">
          <div>
            <h3 className="text-[16px] font-bold text-plio-midnight">이 영상의 단어</h3>
            <p className="text-[12px] text-plio-muted">손흥민의 EPL 명장면 · 8개 단어</p>
          </div>
          <button type="button" className="h-[30px] rounded-[8px] bg-plio-primary px-[14px] text-[12px] font-semibold text-white">
            전체 저장
          </button>
        </div>
        <div className="mx-[20px] mt-[12px] h-[0.5px] bg-plio-border-light" />
        <div className="mt-[8px] max-h-[280px] overflow-y-auto px-[20px]">
          {videoWords.map((item) => (
            <button
              key={item.word}
              type="button"
              onClick={() => onWordClick(item.word)}
              className="flex w-full items-center gap-[10px] border-b border-plio-border-light py-[14px] text-left"
            >
              <span className="h-[8px] w-[8px] rounded-full bg-plio-primary" />
              <div className="flex-1">
                <p className="text-[15px] font-semibold text-plio-midnight">{item.word}</p>
                <p className="text-[12px] text-plio-muted">{item.meaning}</p>
              </div>
              <span>🔖</span>
            </button>
          ))}
        </div>
        <button type="button" className="mx-[20px] mt-[8px] flex h-[44px] w-[350px] items-center justify-center rounded-[12px] bg-plio-surface text-[13px] text-plio-midnight">
          내 단어장 전체 보기 →
        </button>
      </div>
    </div>
  );
}

export function WordDetailModal({
  word,
  onClose,
}: {
  word: string;
  onClose: () => void;
}) {
  return (
    <MobileFrame>
      <div className="relative flex h-full items-center justify-center" style={{ backgroundColor: "#123a8c" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-[24px] w-[342px] rounded-[20px] bg-white p-[24px]">
          <p className="text-center text-[40px] font-bold text-plio-midnight">{word}</p>
          <p className="mt-[4px] text-center text-[14px] text-plio-muted">[skɔːr]</p>
          <div className="my-[16px] h-[0.5px] bg-plio-border-light" />
          <p className="text-[14px] text-plio-midnight">① 점수, 득점</p>
          <p className="mt-[4px] text-[13px] text-plio-muted">② (경기에서) 득점하다</p>
          <p className="mt-[16px] text-[13px] italic text-plio-midnight">&quot;He scored a brilliant goal!&quot;</p>
          <p className="mt-[4px] text-[12px] text-plio-muted">그는 훌륭한 골을 넣었다!</p>
          <button type="button" className="mt-[20px] flex h-[44px] w-full items-center justify-center rounded-[12px] bg-plio-primary text-[14px] font-semibold text-white">
            단어장에 저장하기
          </button>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute bottom-[120px] z-10 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white/20 text-[18px] text-white"
        >
          ✕
        </button>
      </div>
    </MobileFrame>
  );
}
