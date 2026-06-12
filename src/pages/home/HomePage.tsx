import { AppShell } from "../../components/layout/AppShell";
import { StatusBar } from "../../components/layout/StatusBar";
import { PlioWordmark } from "../../components/brand/PlioLogo";
import { VideoCard } from "../../components/home/VideoCard";
import { ChipRow } from "../../components/ui/ChipRow";
import { SearchBar } from "../../components/ui/SearchBar";
import { videos } from "../../data/mock";
import type { TabId } from "../../types/navigation";

const categories = ["전체", "🎮 게임", "✈️ 여행", "🎵 음악", "🏀 스포츠", "🍳 요리"];

type HomePageProps = {
  activeTab?: TabId;
  onTabChange: (tab: TabId) => void;
  onVideoClick: (id: string) => void;
};

export function HomePage({ activeTab = "home", onTabChange, onVideoClick }: HomePageProps) {
  return (
    <AppShell activeTab={activeTab} onTabChange={onTabChange}>
      <StatusBar />
      <header className="flex h-[52px] items-center justify-between px-[20px]">
        <PlioWordmark size="sm" />
        <span className="text-[20px]">🔔</span>
      </header>
      <div className="h-[0.5px] bg-plio-border-light" />
      <ChipRow items={categories} />
      <div className="grid grid-cols-2 gap-x-[16px] gap-y-[12px] overflow-y-auto px-[16px] pb-[96px] [height:calc(100%-164px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onClick={() => onVideoClick(video.id)} />
        ))}
      </div>
    </AppShell>
  );
}

export function ExplorePage({
  activeTab = "explore",
  onTabChange,
  onVideoClick,
}: HomePageProps) {
  return (
    <AppShell activeTab={activeTab} onTabChange={onTabChange}>
      <StatusBar />
      <h1 className="px-[20px] pt-[12px] text-[24px] font-bold text-plio-midnight">탐색</h1>
      <SearchBar placeholder="영상, 단어, 채널 검색" className="mx-[20px] mt-[12px]" />
      <p className="mt-[20px] px-[20px] text-[14px] font-semibold text-plio-midnight">인기 카테고리</p>
      <ChipRow items={categories.slice(1)} />
      <p className="mt-[8px] px-[20px] text-[14px] font-semibold text-plio-midnight">추천 영상</p>
      <div className="mt-[8px] flex flex-col gap-[12px] overflow-y-auto px-[20px] pb-[96px] [height:calc(100%-280px)]">
        {videos.slice(0, 4).map((video) => (
          <button
            key={video.id}
            type="button"
            onClick={() => onVideoClick(video.id)}
            className="flex gap-[12px] rounded-[12px] border border-plio-border-light bg-white p-[12px] text-left"
          >
            <div className="relative h-[64px] w-[64px] shrink-0 rounded-[10px]" style={{ backgroundColor: video.thumbnail }}>
              <span className="absolute inset-0 flex items-center justify-center text-white">▶</span>
            </div>
            <div>
              <span className="inline-flex h-[20px] items-center rounded-[6px] bg-plio-primary px-[6px] text-[10px] font-semibold text-white">
                {video.badge}
              </span>
              <p className="mt-[4px] text-[13px] font-semibold text-plio-midnight">{video.title}</p>
              <p className="mt-[2px] text-[11px] text-plio-muted">{video.channel} · {video.views}</p>
            </div>
          </button>
        ))}
      </div>
    </AppShell>
  );
}
