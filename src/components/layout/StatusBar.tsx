export function StatusBar() {
  return (
    <div className="relative z-10 flex h-[36px] items-center justify-between px-[20px] pt-[14px]">
      <span className="text-[13px] font-semibold leading-none text-plio-midnight">
        9:41
      </span>
      <div className="flex items-center gap-[6px]">
        <SignalIcon />
        <WifiIcon />
        <BatteryIcon />
      </div>
    </div>
  );
}

function SignalIcon() {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden>
      <rect x="0" y="7" width="3" height="5" rx="0.5" fill="#1E2A5E" />
      <rect x="4.5" y="5" width="3" height="7" rx="0.5" fill="#1E2A5E" />
      <rect x="9" y="2.5" width="3" height="9.5" rx="0.5" fill="#1E2A5E" />
      <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="#1E2A5E" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden>
      <path d="M8 10.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#1E2A5E" />
      <path d="M4.5 7.2a4.5 4.5 0 0 1 7 0" stroke="#1E2A5E" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M1.5 4.2a8 8 0 0 1 13 0" stroke="#1E2A5E" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden>
      <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="#1E2A5E" strokeOpacity="0.35" />
      <rect x="2" y="2" width="16" height="8" rx="1.5" fill="#1E2A5E" />
      <path d="M23 4v4a1.5 1.5 0 0 0 0-4Z" fill="#1E2A5E" fillOpacity="0.4" />
    </svg>
  );
}
