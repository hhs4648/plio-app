import type { InputHTMLAttributes } from "react";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function TextField({ label, className = "", ...props }: TextFieldProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-[8px] block text-[14px] font-normal text-plio-midnight">
          {label}
        </label>
      )}
      <input
        className={`h-[52px] w-full rounded-[12px] border border-plio-border bg-white px-[16px] text-[14px] text-plio-midnight outline-none placeholder:text-plio-placeholder focus:border-plio-primary focus:ring-[3px] focus:ring-plio-primary/15 ${className}`}
        {...props}
      />
    </div>
  );
}
