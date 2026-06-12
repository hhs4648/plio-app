import type { GroupItem } from "../../data/mock";

type GroupCardProps = {
  group: GroupItem;
  onClick: () => void;
};

export function GroupCard({ group, onClick }: GroupCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-[12px] flex h-[88px] w-full items-center gap-[12px] rounded-[12px] border border-plio-border-light bg-white p-[12px] text-left"
    >
      <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-plio-surface text-[20px]">
        {group.emoji}
      </span>
      <div className="min-w-0 flex-1">
        <span className="inline-flex h-[20px] items-center rounded-[6px] bg-plio-surface px-[8px] text-[10px] font-semibold text-plio-primary">
          {group.badge}
        </span>
        <p className="mt-[4px] truncate text-[14px] font-semibold text-plio-midnight">
          {group.name}
        </p>
        <p className="text-[12px] text-plio-muted">
          {group.members} · {group.location}
        </p>
      </div>
      <span className="text-[16px] text-plio-muted">›</span>
    </button>
  );
}
