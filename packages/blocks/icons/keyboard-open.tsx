import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const KeyboardOpenBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 22.75H7C6.59 22.75 6.25 22.41 6.25 22C6.25 21.59 6.59 21.25 7 21.25H17C17.41 21.25 17.75 21.59 17.75 22C17.75 22.41 17.41 22.75 17 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M18 2H6C3.79 2 2 3.79 2 6V15C2 17.21 3.79 19 6 19H18C20.21 19 22 17.21 22 15V6C22 3.79 20.21 2 18 2ZM9.99 7.32C10.55 7.32 11 7.77 11 8.32C11 8.87 10.55 9.32 10 9.32C9.45 9.32 9 8.87 9 8.32C9 7.77 9.44 7.32 9.99 7.32ZM6.84 7.32C7.4 7.32 7.85 7.77 7.85 8.32C7.85 8.87 7.4 9.32 6.85 9.32C6.3 9.32 5.85 8.87 5.85 8.32C5.85 7.77 6.28 7.32 6.84 7.32ZM17.26 14.86H6.76C6.34 14.86 6 14.52 6 14.11C6 13.7 6.33 13.36 6.74 13.36H17.27C17.68 13.36 18.02 13.7 18.02 14.11C18.02 14.52 17.68 14.86 17.26 14.86ZM17.26 9.07H13.58C13.17 9.07 12.83 8.73 12.83 8.32C12.83 7.91 13.17 7.57 13.58 7.57H17.26C17.67 7.57 18.01 7.91 18.01 8.32C18.01 8.73 17.68 9.07 17.26 9.07Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const KeyboardOpenBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 7.26001C2 3.70001 2.75 2.40003 5.52 2.09003C6.04 2.02003 6.61 2 7.27 2H16.74C17.39 2 17.97 2.02003 18.49 2.09003C21.26 2.40003 22.01 3.70001 22.01 7.26001V13.58C22.01 17.14 21.26 18.44 18.49 18.75C17.97 18.82 17.4 18.84 16.74 18.84H7.27C6.62 18.84 6.04 18.82 5.52 18.75C2.75 18.44 2 17.14 2 13.58V11.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.5801 8.32007H17.2601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.74023 14.1099H6.76022H17.2702"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 22H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.19373 8.30005H7.20271"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4945 8.30005H10.5035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const KeyboardOpenBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 22.75H7C6.59 22.75 6.25 22.41 6.25 22C6.25 21.59 6.59 21.25 7 21.25H17C17.41 21.25 17.75 21.59 17.75 22C17.75 22.41 17.41 22.75 17 22.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18 19H6C3.79 19 2 17.21 2 15V6C2 3.79 3.79 2 6 2H18C20.21 2 22 3.79 22 6V15C22 17.21 20.21 19 18 19Z"
        fill="currentColor"
      />
      <Path
        d="M17.2601 9.07007H13.5801C13.1701 9.07007 12.8301 8.73007 12.8301 8.32007C12.8301 7.91007 13.1701 7.57007 13.5801 7.57007H17.2601C17.6701 7.57007 18.0101 7.91007 18.0101 8.32007C18.0101 8.73007 17.6801 9.07007 17.2601 9.07007Z"
        fill="currentColor"
      />
      <Path
        d="M10 9.32007C9.45 9.32007 9 8.87007 9 8.32007C9 7.77007 9.44 7.32007 10 7.32007C10.55 7.32007 11 7.77007 11 8.32007C11 8.87007 10.56 9.32007 10 9.32007Z"
        fill="currentColor"
      />
      <Path
        d="M6.84961 9.32007C6.29961 9.32007 5.84961 8.87007 5.84961 8.32007C5.84961 7.77007 6.28961 7.32007 6.84961 7.32007H6.8596C7.4096 7.32007 7.8596 7.77007 7.8596 8.32007C7.8596 8.87007 7.39961 9.32007 6.84961 9.32007Z"
        fill="currentColor"
      />
      <Path
        d="M17.2602 14.8599H6.75023C6.34023 14.8599 5.99023 14.5199 5.99023 14.1099C5.99023 13.6999 6.32022 13.3599 6.73022 13.3599H17.2602C17.6702 13.3599 18.0102 13.6999 18.0102 14.1099C18.0102 14.5199 17.6802 14.8599 17.2602 14.8599Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const KeyboardOpenLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.25998 2H16.73C17.38 2 17.96 2.02003 18.48 2.09003C21.25 2.40003 22 3.70001 22 7.26001V13.58C22 17.14 21.25 18.44 18.48 18.75C17.96 18.82 17.39 18.84 16.73 18.84H7.25998C6.60998 18.84 6.02998 18.82 5.50998 18.75C2.73998 18.44 1.98999 17.14 1.98999 13.58V7.26001C1.98999 3.70001 2.73998 2.40003 5.50998 2.09003C6.02998 2.02003 6.60998 2 7.25998 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.58 8.32007H17.2599"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.73999 14.11H6.75998H17.27"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 22H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.1947 8.30005H7.20368"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4945 8.30005H10.5035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const KeyboardOpenOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.7398 19.59H7.26978C6.47978 19.59 5.90977 19.56 5.41977 19.49C1.94977 19.11 1.25977 17.03 1.25977 13.58V7.26001C1.25977 3.81001 1.93977 1.72998 5.43977 1.34998C5.91977 1.27998 6.48978 1.25 7.26978 1.25H16.7398C17.5198 1.25 18.0898 1.27998 18.5898 1.34998C22.0698 1.72998 22.7498 3.81001 22.7498 7.26001V13.58C22.7498 17.03 22.0698 19.11 18.5698 19.49C18.0998 19.56 17.5298 19.59 16.7398 19.59ZM7.25977 2.75C6.54977 2.75 6.03977 2.78003 5.61977 2.84003C3.45977 3.08003 2.74977 3.75002 2.74977 7.27002V13.59C2.74977 17.1 3.45978 17.78 5.59978 18.01C6.03978 18.07 6.54978 18.1 7.26978 18.1H16.7398C17.4598 18.1 17.9598 18.07 18.3798 18.01C20.5398 17.77 21.2498 17.1 21.2498 13.58V7.26001C21.2498 3.75001 20.5398 3.07003 18.3998 2.84003C17.9498 2.78003 17.4498 2.75 16.7298 2.75H7.25977Z"
        fill="currentColor"
      />
      <Path
        d="M17.2601 9.07007H13.5801C13.1701 9.07007 12.8301 8.73007 12.8301 8.32007C12.8301 7.91007 13.1701 7.57007 13.5801 7.57007H17.2601C17.6701 7.57007 18.0101 7.91007 18.0101 8.32007C18.0101 8.73007 17.6801 9.07007 17.2601 9.07007Z"
        fill="currentColor"
      />
      <Path
        d="M10 9.32007C9.45 9.32007 9 8.87007 9 8.32007C9 7.77007 9.44 7.32007 10 7.32007C10.55 7.32007 11 7.77007 11 8.32007C11 8.87007 10.56 9.32007 10 9.32007Z"
        fill="currentColor"
      />
      <Path
        d="M6.84961 9.32007C6.29961 9.32007 5.84961 8.87007 5.84961 8.32007C5.84961 7.77007 6.28961 7.32007 6.84961 7.32007H6.8596C7.4096 7.32007 7.8596 7.77007 7.8596 8.32007C7.8596 8.87007 7.39961 9.32007 6.84961 9.32007Z"
        fill="currentColor"
      />
      <Path
        d="M17.2602 14.8599H6.75023C6.34023 14.8599 5.99023 14.5199 5.99023 14.1099C5.99023 13.6999 6.32022 13.3599 6.73022 13.3599H17.2602C17.6702 13.3599 18.0102 13.6999 18.0102 14.1099C18.0102 14.5199 17.6802 14.8599 17.2602 14.8599Z"
        fill="currentColor"
      />
      <Path
        d="M17 22.75H7C6.59 22.75 6.25 22.41 6.25 22C6.25 21.59 6.59 21.25 7 21.25H17C17.41 21.25 17.75 21.59 17.75 22C17.75 22.41 17.41 22.75 17 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const KeyboardOpenTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.26022 2H16.7302C17.3802 2 17.9602 2.02003 18.4802 2.09003C21.2502 2.40003 22.0002 3.70001 22.0002 7.26001V13.58C22.0002 17.14 21.2502 18.44 18.4802 18.75C17.9602 18.82 17.3902 18.84 16.7302 18.84H7.26022C6.61022 18.84 6.03022 18.82 5.51022 18.75C2.74022 18.44 1.99023 17.14 1.99023 13.58V7.26001C1.99023 3.70001 2.74022 2.40003 5.51022 2.09003C6.03022 2.02003 6.61022 2 7.26022 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M13.5801 8.31982H17.2601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.74023 14.1099H6.76022H17.2702"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7 22H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.1947 8.2998H7.20368"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10.4945 8.2998H10.5035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: KeyboardOpenBold,
  broken: KeyboardOpenBroken,
  bulk: KeyboardOpenBulk,
  linear: KeyboardOpenLinear,
  outline: KeyboardOpenOutline,
  twotone: KeyboardOpenTwotone,
};

export const KeyboardOpenIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
