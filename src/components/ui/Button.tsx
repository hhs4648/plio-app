import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "kakao" | "google" | "ghost";
  fullWidth?: boolean;
  height?: 52 | 56;
  children: ReactNode;
};

const variantStyles = {
  primary: "bg-plio-primary text-white font-bold",
  kakao: "bg-plio-kakao text-plio-kakao-text font-semibold",
  google: "border border-plio-border bg-white text-plio-midnight font-semibold",
  ghost: "bg-transparent text-plio-muted font-normal",
};

export function Button({
  variant = "primary",
  fullWidth = true,
  height = 52,
  className = "",
  disabled,
  children,
  ...props
}: ButtonProps) {
  const heightClass = height === 56 ? "h-[56px] rounded-[16px]" : "h-[52px] rounded-[14px]";

  return (
    <button
      type="button"
      disabled={disabled}
      className={`inline-flex items-center justify-center text-[15px] leading-none transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 ${heightClass} ${variantStyles[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
