import { useMemo, useState } from "react";
import { MobileFrame } from "../../components/layout/MobileFrame";
import { StatusBar } from "../../components/layout/StatusBar";
import { Button } from "../../components/ui/Button";

type TermsPageProps = {
  onComplete: () => void;
  onBack: () => void;
};

type TermId = "service" | "privacy" | "marketing";

const termItems: { id: TermId; label: string; required: boolean }[] = [
  { id: "service", label: "[필수] 이용약관 동의", required: true },
  { id: "privacy", label: "[필수] 개인정보 수집 및 이용 동의", required: true },
  { id: "marketing", label: "[선택] 이벤트·혜택 알림 받기", required: false },
];

type CheckedState = Record<TermId | "all", boolean>;

function Checkbox({
  checked,
  onToggle,
  label,
}: {
  checked: boolean;
  onToggle: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={checked}
      className="flex items-center gap-[12px] text-left"
    >
      <span
        className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] text-[12px] ${
          checked
            ? "bg-plio-primary text-white"
            : "border border-plio-border bg-plio-bg"
        }`}
      >
        {checked ? "✓" : ""}
      </span>
      <span className="text-[14px] text-plio-midnight">{label}</span>
    </button>
  );
}

export function TermsPage({ onComplete, onBack }: TermsPageProps) {
  const [checked, setChecked] = useState<CheckedState>({
    all: false,
    service: false,
    privacy: false,
    marketing: false,
  });

  const canProceed = checked.service && checked.privacy;

  const toggleAll = () => {
    const next = !checked.all;
    setChecked({
      all: next,
      service: next,
      privacy: next,
      marketing: next,
    });
  };

  const toggleItem = (id: TermId) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      next.all = next.service && next.privacy && next.marketing;
      return next;
    });
  };

  const agreeAllHighlight = useMemo(
    () => checked.service && checked.privacy && checked.marketing,
    [checked.marketing, checked.privacy, checked.service],
  );

  return (
    <MobileFrame>
      <div className="relative h-full w-full bg-plio-bg">
        <StatusBar />

        <button
          type="button"
          onClick={onBack}
          className="absolute left-[20px] top-[46px] text-[21px] text-plio-midnight"
          aria-label="뒤로가기"
        >
          ←
        </button>

        <div className="px-[20px] pt-[80px]">
          <h1 className="text-[26px] font-bold leading-[1.25] text-plio-midnight">
            회원가입을 위해
            <br />
            이용약관에 동의해주세요
          </h1>

          <button
            type="button"
            onClick={toggleAll}
            className={`mt-[32px] flex h-[58px] w-full items-center gap-[12px] rounded-[14px] border px-[16px] ${
              agreeAllHighlight
                ? "border-plio-primary bg-plio-surface"
                : "border-plio-border bg-white"
            }`}
          >
            <span
              className={`flex h-[22px] w-[22px] items-center justify-center rounded-[6px] text-[12px] ${
                checked.all
                  ? "bg-plio-primary text-white"
                  : "border border-plio-border bg-plio-bg"
              }`}
            >
              {checked.all ? "✓" : ""}
            </span>
            <span className="text-[15px] font-semibold text-plio-midnight">모두 동의합니다</span>
          </button>

          <div className="mt-[16px] overflow-hidden rounded-[14px] border border-plio-border bg-white">
            {termItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex h-[68px] items-center justify-between px-[16px] ${
                  index > 0 ? "border-t border-plio-border-light" : ""
                }`}
              >
                <Checkbox
                  checked={checked[item.id]}
                  onToggle={() => toggleItem(item.id)}
                  label={item.label}
                />
                <span className="text-[13px] text-plio-muted">보기 ›</span>
              </div>
            ))}
          </div>

          <p className="mt-[16px] text-center text-[12px] text-plio-muted">
            선택 항목에 동의하지 않아도 서비스 이용이 가능해요
          </p>
        </div>

        <div className="absolute bottom-[38px] left-[20px] w-[350px]">
          <Button onClick={onComplete} disabled={!canProceed}>
            다음
          </Button>
        </div>
      </div>
    </MobileFrame>
  );
}
