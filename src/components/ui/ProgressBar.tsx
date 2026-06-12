export function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = (step / total) * 100;
  return (
    <>
      <div className="mx-[20px] mt-[30px] h-[3px] rounded-full bg-plio-surface">
        <div
          className="h-[3px] rounded-full bg-plio-primary transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-[8px] px-[20px] text-right text-[12px] text-plio-muted">
        {step} / {total}
      </p>
    </>
  );
}
