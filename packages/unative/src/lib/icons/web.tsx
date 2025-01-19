import React from "react";

import { cn } from "../utils";

export type IconProps = React.HtmlHTMLAttributes<HTMLOrSVGElement> & {
  size?: number;
};

export const SystemIcon = ({ size = 16, className, ...props }: IconProps) => {
  return (
    <svg
      suppressHydrationWarning
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-foreground", className)}
      {...props}
    >
      <circle cx={19} cy={6} r={3} />
      <path d="M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </svg>
  );
};

export const SunIcon = ({ size = 16, className, ...props }: IconProps) => {
  return (
    <svg
      suppressHydrationWarning
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-foreground", className)}
      {...props}
    >
      <circle cx={12} cy={12} r={4} />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
};

export const MoonIcon = ({ size = 16, className, ...props }: IconProps) => {
  return (
    <svg
      suppressHydrationWarning
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-foreground", className)}
      {...props}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
};

export const CheckIcon = ({ size = 16, className, ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-foreground", className)}
      {...props}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};
