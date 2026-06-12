import { useState } from "react";
import { onboardingImages } from "../../assets/images/onboarding";
import { MobileFrame } from "../../components/layout/MobileFrame";
import { getAppTheme } from "../../constants/theme";

type OnboardingSlide = {
  label: string;
  showSkip: boolean;
};

const slides: OnboardingSlide[] = [
  { label: "온보딩 1 — 좋아하는 영상으로 언어를 배워요", showSkip: true },
  { label: "온보딩 2 — 모르는 단어와 문장을 바로 저장해요", showSkip: true },
  { label: "온보딩 3 — 함께 배우면 더 재미있어요", showSkip: false },
];

type OnboardingPageProps = {
  onComplete: () => void;
  onSkip?: () => void;
};

export function OnboardingPage({ onComplete, onSkip }: OnboardingPageProps) {
  const [step, setStep] = useState(0);
  const theme = getAppTheme();
  const images = onboardingImages[theme];
  const slide = slides[step];
  const isLast = step === slides.length - 1;

  const handleNext = () => {
    if (isLast) {
      onComplete();
      return;
    }
    setStep((current) => current + 1);
  };

  const handleSkip = () => {
    (onSkip ?? onComplete)();
  };

  return (
    <MobileFrame>
      <div className="relative h-full w-full overflow-hidden bg-plio-bg">
        <img
          src={images[step]}
          alt={slide.label}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-top"
          draggable={false}
        />

        {slide.showSkip && (
          <button
            type="button"
            onClick={handleSkip}
            aria-label="건너뛰기"
            className="absolute right-[16px] top-[48px] z-10 h-[36px] min-w-[72px] rounded-[8px] bg-transparent"
          />
        )}

        <button
          type="button"
          onClick={handleNext}
          aria-label={isLast ? "Plio 시작하기" : "다음"}
          className="absolute bottom-[32px] left-[20px] z-10 h-[56px] w-[350px] rounded-[16px] bg-transparent"
        />
      </div>
    </MobileFrame>
  );
}
