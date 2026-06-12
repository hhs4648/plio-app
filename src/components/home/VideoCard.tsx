import type { VideoItem } from "../../data/mock";

type VideoCardProps = {
  video: VideoItem;
  onClick: () => void;
};

export function VideoCard({ video, onClick }: VideoCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="overflow-hidden rounded-[12px] border-[0.5px] border-plio-border-light bg-plio-bg text-left"
    >
      <div className="relative h-[142.8px] w-full" style={{ backgroundColor: video.thumbnail }}>
        <span
          className="absolute left-[8px] top-[8px] inline-flex h-[20px] items-center rounded-[6px] px-[6px] text-[10px] font-semibold text-white"
          style={{ backgroundColor: video.badgeColor ?? "#6C5CE7" }}
        >
          {video.badge}
        </span>
        <span className="absolute left-1/2 top-1/2 flex h-[32px] w-[32px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[16px] bg-black/55 text-[13px] text-white">
          ▶
        </span>
        <span className="absolute bottom-[8px] right-[8px] inline-flex h-[16px] items-center rounded-[4px] bg-black/65 px-[6px] text-[9px] font-semibold text-white">
          {video.duration}
        </span>
      </div>
      <div className="flex gap-[8px] px-[8px] py-[8px]">
        <span
          className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white"
          style={{ backgroundColor: video.avatarBg }}
        >
          {video.avatar}
        </span>
        <div className="min-w-0">
          <h3 className="line-clamp-2 text-[11px] font-semibold leading-[1.2] text-plio-midnight">
            {video.title}
          </h3>
          <p className="mt-[4px] text-[10px] text-plio-muted">
            {video.channel} · {video.views}
          </p>
        </div>
      </div>
    </button>
  );
}
