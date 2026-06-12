export function SearchBar({
  placeholder,
  className = "",
}: {
  placeholder: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-[44px] items-center rounded-[12px] bg-white px-[16px] text-[14px] text-plio-placeholder ${className}`}
    >
      🔍 {placeholder}
    </div>
  );
}
