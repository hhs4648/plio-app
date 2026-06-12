type PlioLogoMarkProps = {
  size?: number;
  className?: string;
};

export function PlioLogoMark({ size = 124, className = "" }: PlioLogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 124 124"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect x="18" y="18" width="34" height="88" rx="17" fill="#1E2A5E" />
      <circle cx="78" cy="62" r="34" fill="#6C5CE7" />
      <circle cx="92" cy="48" r="22" fill="#6C5CE7" fillOpacity="0.45" />
    </svg>
  );
}

type PlioWordmarkProps = {
  size?: "lg" | "md" | "sm";
  className?: string;
};

const wordmarkStyles = {
  lg: "text-[48px] tracking-[-2px]",
  md: "text-[28px] tracking-[-2px]",
  sm: "text-[22px] tracking-[-1px]",
};

export function PlioWordmark({ size = "lg", className = "" }: PlioWordmarkProps) {
  return (
    <span
      className={`font-bold leading-none text-plio-midnight ${wordmarkStyles[size]} ${className}`}
    >
      plio
    </span>
  );
}

type PlioMascotProps = {
  size?: number;
  className?: string;
};

/** Plio 캐릭터 — SVG로 구현 (이미지 대신 컴포넌트) */
export function PlioMascot({ size = 200, className = "" }: PlioMascotProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-label="Plio 캐릭터"
    >
      <circle cx="100" cy="100" r="90" fill="#EEF0FB" />
      <circle cx="100" cy="95" r="55" fill="#6C5CE7" />
      <circle cx="82" cy="88" r="8" fill="#1E2A5E" />
      <circle cx="118" cy="88" r="8" fill="#1E2A5E" />
      <circle cx="84" cy="86" r="3" fill="white" />
      <circle cx="120" cy="86" r="3" fill="white" />
      <path
        d="M85 108 Q100 120 115 108"
        stroke="#1E2A5E"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="55" y="145" width="90" height="35" rx="17" fill="#1E2A5E" />
      <text x="100" y="168" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">
        plio
      </text>
    </svg>
  );
}
