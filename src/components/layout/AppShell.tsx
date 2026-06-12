import type { ReactNode } from "react";
import { MobileFrame } from "./MobileFrame";
import { TabBar } from "../navigation/TabBar";
import type { TabId } from "../../types/navigation";

type AppShellProps = {
  children: ReactNode;
  activeTab?: TabId;
  onTabChange?: (tab: TabId) => void;
  showTabBar?: boolean;
  className?: string;
};

export function AppShell({
  children,
  activeTab = "home",
  onTabChange,
  showTabBar = true,
  className = "",
}: AppShellProps) {
  return (
    <MobileFrame>
      <div className={`relative h-full w-full overflow-hidden bg-plio-bg ${className}`}>
        {children}
        {showTabBar && onTabChange && (
          <TabBar active={activeTab} onChange={onTabChange} />
        )}
      </div>
    </MobileFrame>
  );
}

export function BackHeader({
  title,
  onBack,
  right,
}: {
  title: string;
  onBack: () => void;
  right?: ReactNode;
}) {
  return (
    <>
      <div className="flex h-[44px] items-center justify-between px-[20px] pt-[14px]">
        <button type="button" onClick={onBack} className="text-[21px] text-plio-midnight">
          ←
        </button>
        <h1 className="text-[18px] font-semibold text-plio-midnight">{title}</h1>
        <div className="w-[21px]">{right}</div>
      </div>
    </>
  );
}
