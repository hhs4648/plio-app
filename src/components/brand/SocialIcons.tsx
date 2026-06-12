export function KakaoIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 4C7.03 4 3 7.13 3 11c0 2.55 1.67 4.79 4.18 6.05-.18.67-.66 2.43-.75 2.8-.12.5.18.49.38.36.16-.1 2.42-1.64 3.4-2.3.58.08 1.18.12 1.79.12 4.97 0 9-3.13 9-7s-4.03-7-9-7Z"
        fill="#3C1E1E"
      />
    </svg>
  );
}

export function GoogleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21.6 12.23c0-.82-.07-1.42-.22-2.05H12v3.72h5.52a4.78 4.78 0 0 1-2.07 3.13v2.6h3.35c1.96-1.8 3.2-4.46 3.2-7.4Z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.7 0 4.96-.89 6.61-2.42l-3.35-2.6c-.93.62-2.12.99-3.26.99-2.51 0-4.63-1.69-5.39-3.97H3.2v2.68A10 10 0 0 0 12 22Z"
        fill="#34A853"
      />
      <path
        d="M6.61 13.99a6.04 6.04 0 0 1 0-3.98V7.33H3.2a10 10 0 0 0 0 8.94l3.41-2.28Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.47 0 2.78.5 3.81 1.48l2.85-2.85A9.86 9.86 0 0 0 12 2 10 10 0 0 0 3.2 7.33l3.41 2.28c.76-2.28 2.88-3.97 5.39-3.97Z"
        fill="#EA4335"
      />
    </svg>
  );
}
