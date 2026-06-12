export function ChipRow({
  items,
  activeIndex = 0,
}: {
  items: string[];
  activeIndex?: number;
}) {
  return (
    <div className="flex gap-[8px] overflow-x-auto px-[16px] py-[8px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {items.map((item, i) => (
        <span
          key={item}
          className={`flex h-[30px] shrink-0 items-center rounded-[15px] px-[12px] text-[12px] leading-none ${
            i === activeIndex
              ? "bg-plio-primary font-semibold text-white"
              : "border border-plio-border-light bg-plio-surface font-normal text-plio-muted"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
