import { useEffect } from "react";
import { splashImages } from "../../assets/images/splash";
import { MobileFrame } from "../../components/layout/MobileFrame";
import { getAppTheme } from "../../constants/theme";

type SplashPageProps = {
  onComplete: () => void;
};

export function SplashPage({ onComplete }: SplashPageProps) {
  const theme = getAppTheme();
  const image = splashImages[theme];

  useEffect(() => {
    const timer = window.setTimeout(onComplete, 2200);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <MobileFrame>
      <div className="relative h-full w-full overflow-hidden bg-plio-bg">
        <img
          src={image}
          alt="Plio 스플래시"
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-top"
          draggable={false}
        />
      </div>
    </MobileFrame>
  );
}
