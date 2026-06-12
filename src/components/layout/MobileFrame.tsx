import type { ReactNode } from "react";
import { MOBILE_HEIGHT, MOBILE_WIDTH } from "../../constants/layout";

type MobileFrameProps = {
  children: ReactNode;
  className?: string;
};

export function MobileFrame({ children, className = "" }: MobileFrameProps) {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div
        className={`relative overflow-hidden bg-plio-bg shadow-[0_24px_64px_rgba(30,42,94,0.12)] ${className}`}
        style={{ width: MOBILE_WIDTH, height: MOBILE_HEIGHT }}
      >
        {children}
      </div>
    </div>
  );
}
