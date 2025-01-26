import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const ArchiveTickBold = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M16.8203 1.91016H7.18031C5.06031 1.91016 3.32031 3.65016 3.32031 5.77016V19.8602C3.32031 21.6602 4.61031 22.4202 6.19031 21.5502L11.0703 18.8402C11.5903 18.5502 12.4303 18.5502 12.9403 18.8402L17.8203 21.5502C19.4003 22.4302 20.6903 21.6702 20.6903 19.8602V5.77016C20.6803 3.65016 18.9503 1.91016 16.8203 1.91016ZM15.6203 9.03016L11.6203 13.0302C11.4703 13.1802 11.2803 13.2502 11.0903 13.2502C10.9003 13.2502 10.7103 13.1802 10.5603 13.0302L9.06031 11.5302C8.77031 11.2402 8.77031 10.7602 9.06031 10.4702C9.35031 10.1802 9.83031 10.1802 10.1203 10.4702L11.0903 11.4402L14.5603 7.97016C14.8503 7.68016 15.3303 7.68016 15.6203 7.97016C15.9103 8.26016 15.9103 8.74016 15.6203 9.03016Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArchiveTickBroken = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M3.32031 10.02V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6903 3.74 18.9503 2 16.8303 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.58984 11L11.0898 12.5L15.0898 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ArchiveTickBulk = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        opacity="0.4"
        d="M16.8203 1.91016H7.18031C5.06031 1.91016 3.32031 3.65016 3.32031 5.77016V19.8602C3.32031 21.6602 4.61031 22.4202 6.19031 21.5502L11.0703 18.8402C11.5903 18.5502 12.4303 18.5502 12.9403 18.8402L17.8203 21.5502C19.4003 22.4302 20.6903 21.6702 20.6903 19.8602V5.77016C20.6803 3.65016 18.9503 1.91016 16.8203 1.91016Z"
        fill="currentColor"
      />
      <Path
        d="M11.0893 13.2499C10.8993 13.2499 10.7093 13.1799 10.5593 13.0299L9.0593 11.5299C8.7693 11.2399 8.7693 10.7599 9.0593 10.4699C9.3493 10.1799 9.8293 10.1799 10.1193 10.4699L11.0893 11.4399L14.5593 7.96994C14.8493 7.67994 15.3293 7.67994 15.6193 7.96994C15.9093 8.25994 15.9093 8.73994 15.6193 9.02994L11.6193 13.0299C11.4693 13.1799 11.2793 13.2499 11.0893 13.2499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArchiveTickLinear = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.58997 11L11.09 12.5L15.09 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ArchiveTickOutline = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M4.92957 22.75C4.50957 22.75 4.11957 22.65 3.76957 22.45C2.99957 22 2.55957 21.09 2.55957 19.96V5.86C2.55957 3.32 4.62957 1.25 7.16957 1.25H16.8196C19.3596 1.25 21.4296 3.32 21.4296 5.86V19.95C21.4296 21.08 20.9896 21.99 20.2196 22.44C19.4496 22.89 18.4396 22.84 17.4496 22.29L12.5696 19.58C12.2796 19.42 11.7096 19.42 11.4196 19.58L6.53957 22.29C5.99957 22.59 5.44957 22.75 4.92957 22.75ZM7.17957 2.75C5.46957 2.75 4.06957 4.15 4.06957 5.86V19.95C4.06957 20.54 4.23957 20.98 4.53957 21.15C4.83957 21.32 5.30957 21.27 5.81957 20.98L10.6996 18.27C11.4396 17.86 12.5596 17.86 13.2996 18.27L18.1796 20.98C18.6896 21.27 19.1596 21.33 19.4596 21.15C19.7596 20.97 19.9296 20.53 19.9296 19.95V5.86C19.9296 4.15 18.5296 2.75 16.8196 2.75H7.17957Z"
        fill="currentColor"
      />
      <Path
        d="M11.0903 13.2499C10.9003 13.2499 10.7103 13.1799 10.5603 13.0299L9.06027 11.5299C8.77027 11.2399 8.77027 10.7599 9.06027 10.4699C9.35027 10.1799 9.83027 10.1799 10.1203 10.4699L11.0903 11.4399L14.5603 7.96994C14.8503 7.67994 15.3303 7.67994 15.6203 7.96994C15.9103 8.25994 15.9103 8.73994 15.6203 9.02994L11.6203 13.0299C11.4703 13.1799 11.2803 13.2499 11.0903 13.2499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArchiveTickTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.58984 11L11.0898 12.5L15.0898 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ArchiveTickBold,
  broken: ArchiveTickBroken,
  bulk: ArchiveTickBulk,
  linear: ArchiveTickLinear,
  outline: ArchiveTickOutline,
  twotone: ArchiveTickTwotone,
};

export const ArchiveTickIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
