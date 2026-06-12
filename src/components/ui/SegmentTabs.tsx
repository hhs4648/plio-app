export function SegmentTabs<T extends string>({
  tabs,
  active,
  onChange,
}: {
  tabs: { id: T; label: string }[];
  active: T;
  onChange: (id: T) => void;
}) {
  return (
    <div className="mx-[20px] flex h-[40px] rounded-[12px] bg-plio-surface p-[4px]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`flex flex-1 items-center justify-center rounded-[8px] text-[14px] ${
            active === tab.id
              ? "bg-white font-semibold text-plio-midnight shadow-sm"
              : "font-normal text-plio-muted"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
