export function Divider({ label = "또는" }: { label?: string }) {
  return (
    <div className="relative flex h-[15px] items-center justify-center">
      <div className="absolute left-0 top-1/2 h-[0.5px] w-[140px] -translate-y-1/2 bg-plio-border" />
      <span className="relative z-[1] bg-plio-bg px-[8px] text-[12px] text-plio-muted">
        {label}
      </span>
      <div className="absolute right-0 top-1/2 h-[0.5px] w-[140px] -translate-y-1/2 bg-plio-border" />
    </div>
  );
}
