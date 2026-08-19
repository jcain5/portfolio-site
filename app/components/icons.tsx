interface IconProps {
  className?: string;
}

const base = "w-5 h-5";

export function IconIdentity({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9.5" cy="8" r="3.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 12.5 21 6M18.25 9.25 21 6l-2.75-2.75M3.5 19.5c0-3.31 2.69-5.5 6-5.5s6 2.19 6 5.5" />
    </svg>
  );
}

export function IconServer({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="6.5" rx="1.25" />
      <rect x="3.5" y="13.5" width="17" height="6.5" rx="1.25" />
      <path strokeLinecap="round" d="M7 7.25h.01M7 16.75h.01" />
    </svg>
  );
}

export function IconNetwork({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="4.5" r="1.75" />
      <circle cx="5" cy="18.5" r="1.75" />
      <circle cx="19" cy="18.5" r="1.75" />
      <path strokeLinecap="round" d="M12 6.25v4M12 10.25 5 16.75M12 10.25l7 6.5" />
    </svg>
  );
}

export function IconLayers({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinejoin="round" d="m12 3.5 8 4.25L12 12 4 7.75 12 3.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 12 8 4.25L20 12M4 16.25l8 4.25 8-4.25" />
    </svg>
  );
}

export function IconDocument({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinejoin="round" d="M6.5 3.5h7l4 4v13h-11v-17Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 3.5v4h4M9 12.5h6M9 16h6" />
    </svg>
  );
}

export function IconOperations({ className = base }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" d="M12 3.5v2.25M12 18.25v2.25M20.5 12h-2.25M5.75 12H3.5M17.66 6.34l-1.6 1.6M7.94 16.06l-1.6 1.6M17.66 17.66l-1.6-1.6M7.94 7.94l-1.6-1.6" />
    </svg>
  );
}
