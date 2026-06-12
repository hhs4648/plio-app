import type { TabId } from "../../types/navigation";

type TabItem = {
  id: TabId;
  label: string;
  icon: "home" | "search" | "book" | "group" | "profile";
};

const tabs: TabItem[] = [
  { id: "home", label: "홈", icon: "home" },
  { id: "explore", label: "탐색", icon: "search" },
  { id: "vocab", label: "단어장", icon: "book" },
  { id: "group", label: "그룹", icon: "group" },
  { id: "profile", label: "마이", icon: "profile" },
];

type TabBarProps = {
  active?: TabId;
  onChange?: (tab: TabId) => void;
};

export function TabBar({ active = "home", onChange }: TabBarProps) {
  return (
    <nav className="absolute bottom-0 left-0 z-20 flex h-[80px] w-full border-t-[0.5px] border-plio-border-light bg-white">
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange?.(tab.id)}
            className="flex flex-1 flex-col items-center justify-center gap-[6px] pt-[10px]"
          >
            <TabIcon name={tab.icon} active={isActive} />
            <span
              className={`text-[10px] leading-none ${
                isActive
                  ? "font-semibold text-plio-primary"
                  : "font-normal text-plio-muted"
              }`}
            >
              {tab.label}
            </span>
            {isActive && (
              <span className="h-[4px] w-[4px] rounded-full bg-plio-primary" />
            )}
          </button>
        );
      })}
    </nav>
  );
}

function TabIcon({
  name,
  active,
}: {
  name: TabItem["icon"];
  active: boolean;
}) {
  const stroke = active ? "#6C5CE7" : "#8C94B8";

  const icons = {
    home: (
      <path
        d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5Z"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="6.5" stroke={stroke} strokeWidth="1.6" />
        <path d="m16.5 16.5 4 4" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
    book: (
      <>
        <path
          d="M5 4.5h6a2 2 0 0 1 2 2V19.5H7a2 2 0 0 1-2-2v-13Z"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M19 4.5h-6a2 2 0 0 0-2 2V19.5h6a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2Z"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </>
    ),
    group: (
      <>
        <circle cx="9" cy="8" r="3" stroke={stroke} strokeWidth="1.6" />
        <circle cx="17" cy="9" r="2.5" stroke={stroke} strokeWidth="1.6" />
        <path
          d="M3.5 18.5c0-2.5 2.5-4 5.5-4s5.5 1.5 5.5 4"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M14.5 15.5c1.8.3 3.5 1.5 3.5 3"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </>
    ),
    profile: (
      <>
        <circle cx="12" cy="8" r="3.5" stroke={stroke} strokeWidth="1.6" />
        <path
          d="M5 19.5c0-3.5 3.1-6 7-6s7 2.5 7 6"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </>
    ),
  };

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      {icons[name]}
    </svg>
  );
}
