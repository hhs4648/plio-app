import { useState } from "react";
import { MobileFrame } from "../../components/layout/MobileFrame";
import { StatusBar } from "../../components/layout/StatusBar";
import { Button } from "../../components/ui/Button";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { TextField } from "../../components/ui/TextField";
import { levels, signupInterests } from "../../data/mock";
import { saveUser } from "../../utils/authStorage";

type SignupPageProps = {
  onComplete: () => void;
  onBack: () => void;
  onLogin: () => void;
};

const TOTAL_STEPS = 3;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function SignupPage({ onComplete, onBack, onLogin }: SignupPageProps) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [levelError, setLevelError] = useState("");

  const handleBack = () => {
    if (step > 0) {
      setStep((current) => current - 1);
      return;
    }
    onBack();
  };

  const validateStep1 = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");

    if (!isValidEmail(email)) {
      setEmailError("이메일 주소 확인해주세요");
      valid = false;
    }

    if (password !== passwordConfirm) {
      setPasswordError("비밀번호 설정 재확인 해주세요");
      valid = false;
    }

    return valid;
  };

  const handleNext = () => {
    if (step === 0) {
      if (!validateStep1()) return;
      setStep(1);
      return;
    }

    if (step === 1) {
      setStep(2);
      return;
    }

    if (!selectedLevel) {
      setLevelError("영어 실력을 선택해주세요");
      return;
    }

    saveUser({
      name: name.trim(),
      email: email.trim(),
      password,
      interests: selectedInterests,
      level: selectedLevel,
    });

    onComplete();
  };

  const toggleInterest = (item: string) => {
    setSelectedInterests((prev) =>
      prev.includes(item) ? prev.filter((interest) => interest !== item) : [...prev, item],
    );
  };

  return (
    <MobileFrame>
      <div className="relative flex h-full w-full flex-col bg-plio-bg">
        <StatusBar />

        <button
          type="button"
          onClick={handleBack}
          aria-label="뒤로가기"
          className="absolute left-[20px] top-[46px] z-10 text-[21px] text-plio-midnight"
        >
          ←
        </button>

        <ProgressBar step={step + 1} total={TOTAL_STEPS} />

        <div className="flex-1 overflow-y-auto px-[20px] pb-[120px] pt-[8px]">
          {step === 0 && (
            <>
              <h1 className="mt-[26px] text-[26px] font-bold text-plio-midnight">기본 정보</h1>
              <p className="mt-[8px] text-[14px] leading-[1.3] text-plio-muted">
                학습을 시작하기 위해 간단한 정보를 입력해주세요
              </p>

              <div className="mt-[32px] flex flex-col gap-[20px]">
                <TextField
                  label="이름"
                  placeholder="이름 입력"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <div>
                  <TextField
                    label="이메일"
                    placeholder="이메일 주소 입력"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (emailError) setEmailError("");
                    }}
                  />
                  {emailError && (
                    <p className="mt-[8px] text-[12px] text-red-500">{emailError}</p>
                  )}
                </div>
                <TextField
                  label="비밀번호"
                  placeholder="8자 이상 입력"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    if (passwordError) setPasswordError("");
                  }}
                />
                <div>
                  <TextField
                    label="비밀번호 확인"
                    placeholder="비밀번호 재입력"
                    type="password"
                    autoComplete="new-password"
                    value={passwordConfirm}
                    onChange={(event) => {
                      setPasswordConfirm(event.target.value);
                      if (passwordError) setPasswordError("");
                    }}
                  />
                  {passwordError && (
                    <p className="mt-[8px] text-[12px] text-red-500">{passwordError}</p>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={onLogin}
                className="mt-[24px] w-full text-center text-[13px] text-plio-muted"
              >
                이미 계정이 있으신가요? <span className="text-plio-midnight">로그인</span>
              </button>
            </>
          )}

          {step === 1 && (
            <>
              <h1 className="mt-[26px] text-[26px] font-bold text-plio-midnight">관심사 선택</h1>
              <p className="mt-[8px] text-[14px] text-plio-muted">
                관심 있는 주제를 골라주세요 (복수 선택)
              </p>

              <div className="mt-[20px] grid grid-cols-2 gap-[10px]">
                {signupInterests.map((item) => {
                  const active = selectedInterests.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleInterest(item)}
                      className={`flex h-[48px] items-center justify-center rounded-[12px] text-[14px] transition-colors ${
                        active
                          ? "border-2 border-plio-primary bg-plio-surface font-semibold text-plio-primary"
                          : "border border-plio-border bg-white font-normal text-plio-midnight"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="mt-[26px] text-[26px] font-bold leading-[1.2] text-plio-midnight">
                영어 실력이
                <br />
                어느 정도예요?
              </h1>
              <p className="mt-[8px] text-[14px] text-plio-muted">
                맞춤 콘텐츠를 추천해드릴게요
              </p>

              <div className="mt-[24px] flex flex-col gap-[12px]">
                {levels.map((level) => {
                  const active = selectedLevel === level.id;
                  return (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => {
                        setSelectedLevel(level.id);
                        setLevelError("");
                      }}
                      className={`relative flex h-[72px] flex-col justify-center rounded-[14px] border px-[20px] text-left transition-colors ${
                        active
                          ? "border-plio-primary bg-plio-surface"
                          : "border-plio-border bg-white"
                      }`}
                    >
                      <span className="text-[16px] font-semibold text-plio-midnight">{level.label}</span>
                      <span className="mt-[4px] text-[13px] text-plio-muted">{level.desc}</span>
                      {active && (
                        <span className="absolute right-[20px] top-1/2 flex h-[24px] w-[24px] -translate-y-1/2 items-center justify-center rounded-full bg-plio-primary text-[12px] text-white">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {levelError && (
                <p className="mt-[12px] text-[12px] text-red-500">{levelError}</p>
              )}
            </>
          )}
        </div>

        <div className="absolute bottom-[38px] left-[20px] w-[350px]">
          <Button height={56} onClick={handleNext}>
            {step === TOTAL_STEPS - 1 ? "완료" : "다음"}
          </Button>
        </div>
      </div>
    </MobileFrame>
  );
}
