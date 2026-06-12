import { useState } from "react";
import { PlioLogoMark, PlioWordmark } from "../../components/brand/PlioLogo";
import { KakaoIcon, GoogleIcon } from "../../components/brand/SocialIcons";
import { MobileFrame } from "../../components/layout/MobileFrame";
import { StatusBar } from "../../components/layout/StatusBar";
import { Button } from "../../components/ui/Button";
import { Divider } from "../../components/ui/Divider";
import { TextField } from "../../components/ui/TextField";
import { verifyLogin } from "../../utils/authStorage";

type LoginPageProps = {
  onLoginSuccess: () => void;
  onSignup: () => void;
};

export function LoginPage({ onLoginSuccess, onSignup }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = () => {
    if (!verifyLogin(email, password)) {
      setLoginError("이메일 또는 비밀번호를 확인해주세요");
      return;
    }

    setLoginError("");
    onLoginSuccess();
  };

  return (
    <MobileFrame>
      <div className="relative h-full w-full bg-plio-bg">
        <StatusBar />

        <div className="px-[20px]">
          <div className="mt-[8px] flex h-[90px] w-[350px] items-center gap-[12px] rounded-[16px] bg-plio-surface px-[10px]">
            <PlioLogoMark size={70} />
            <div>
              <PlioWordmark size="md" />
              <p className="mt-[2px] text-[11px] text-plio-muted">
                Learn through what you love
              </p>
            </div>
          </div>

          <div className="mt-[16px] h-[0.5px] w-[350px] bg-plio-border" />

          <h1 className="mt-[20px] text-[26px] font-bold leading-none text-plio-midnight">
            로그인
          </h1>

          <div className="mt-[16px] flex flex-col gap-[12px]">
            <TextField
              placeholder="이메일"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (loginError) setLoginError("");
              }}
            />
            <TextField
              placeholder="비밀번호"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                if (loginError) setLoginError("");
              }}
            />
          </div>

          {loginError && (
            <p className="mt-[12px] text-[12px] text-red-500">{loginError}</p>
          )}

          <button
            type="button"
            className="mt-[14px] ml-auto block text-[12px] text-plio-primary"
          >
            비밀번호를 잊으셨나요?
          </button>

          <div className="mt-[16px]">
            <Button onClick={handleLogin}>로그인</Button>
          </div>

          <div className="mt-[22px]">
            <Divider />
          </div>

          <div className="mt-[18px] flex flex-col gap-[12px]">
            <Button variant="kakao" className="gap-[8px]">
              <KakaoIcon />
              카카오로 계속하기
            </Button>
            <Button variant="google" className="gap-[8px]">
              <GoogleIcon />
              Google로 계속하기
            </Button>
          </div>

          <button
            type="button"
            onClick={onSignup}
            className="mt-[36px] w-full text-center text-[13px] text-plio-muted"
          >
            계정이 없으신가요?{" "}
            <span className="text-plio-midnight">회원가입</span>
          </button>
        </div>
      </div>
    </MobileFrame>
  );
}
