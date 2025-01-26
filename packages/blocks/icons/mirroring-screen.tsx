import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const MirroringScreenBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 3H7C4.24 3 2 5.24 2 8V9V16C2 18.76 4.24 21 7 21H16H17C19.76 21 22 18.76 22 16V8C22 5.24 19.76 3 17 3ZM10.49 16.81C10.46 16.81 10.43 16.82 10.39 16.82C10.02 16.82 9.7 16.54 9.65 16.17C9.52 15.15 8.78 14.41 7.76 14.28C7.35 14.23 7.06 13.85 7.11 13.44C7.16 13.03 7.54 12.74 7.95 12.79C9.64 13.01 10.92 14.29 11.14 15.98C11.19 16.38 10.9 16.76 10.49 16.81ZM13.54 16.3C13.51 16.3 13.48 16.31 13.44 16.31C13.07 16.31 12.75 16.03 12.7 15.66C12.39 13.28 10.66 11.54 8.27 11.23C7.86 11.18 7.57 10.8 7.62 10.39C7.67 9.98 8.05 9.69 8.46 9.74C11.54 10.14 13.79 12.38 14.19 15.47C14.24 15.87 13.95 16.24 13.54 16.3ZM16.24 15.43C16.21 15.43 16.18 15.44 16.14 15.44C15.77 15.44 15.45 15.16 15.4 14.79C14.97 11.41 12.51 8.95 9.13 8.52C8.72 8.47 8.43 8.09 8.48 7.68C8.53 7.27 8.91 6.98 9.32 7.03C13.39 7.55 16.36 10.52 16.89 14.6C16.94 15.01 16.65 15.38 16.24 15.43Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MirroringScreenBroken = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M22 12.45V15.9999C22 18.9999 20 20.9999 17 20.9999H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9V8C2 5 4 3 7 3H17C20 3 22 5 22 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.69141 11.71C8.31141 12.3 11.7014 15.7 12.3014 20.32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.62109 15.0701C6.01109 15.5001 8.5011 18.0001 8.9411 21.3901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.98047 18.8599C3.67047 19.0799 4.92047 20.3199 5.14047 22.0199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MirroringScreenBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9V8C2 5.24 4.24 3 7 3H17C19.76 3 22 5.24 22 8V16C22 18.76 19.76 21 17 21H16H7C4.24 21 2 18.76 2 16V9Z"
        fill="currentColor"
      />
      <Path
        d="M16.1383 15.44C15.7683 15.44 15.4483 15.16 15.3983 14.79C14.9683 11.41 12.5083 8.95003 9.12827 8.52003C8.71827 8.47003 8.42826 8.09001 8.47826 7.68001C8.52826 7.27001 8.90827 6.98002 9.31827 7.03002C13.3883 7.55002 16.3583 10.52 16.8883 14.6C16.9383 15.01 16.6483 15.39 16.2383 15.44C16.2083 15.44 16.1783 15.44 16.1383 15.44Z"
        fill="currentColor"
      />
      <Path
        d="M13.4389 16.3C13.0689 16.3 12.7489 16.02 12.6989 15.65C12.3889 13.27 10.6589 11.53 8.2689 11.22C7.8589 11.17 7.56889 10.79 7.61889 10.38C7.66889 9.96998 8.0489 9.67997 8.4589 9.72997C11.5389 10.13 13.7889 12.37 14.1889 15.46C14.2389 15.87 13.9489 16.25 13.5389 16.3C13.5089 16.3 13.4689 16.3 13.4389 16.3Z"
        fill="currentColor"
      />
      <Path
        d="M10.3891 16.81C10.0191 16.81 9.69911 16.53 9.64911 16.16C9.51911 15.14 8.77911 14.4 7.75912 14.27C7.34912 14.22 7.05912 13.84 7.10912 13.43C7.15912 13.02 7.53912 12.73 7.94912 12.78C9.63912 13 10.9191 14.28 11.1391 15.97C11.1891 16.38 10.8991 16.76 10.4891 16.81C10.4591 16.81 10.4191 16.81 10.3891 16.81Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MirroringScreenLinear = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M2 9V8C2 5 4 3 7 3H17C20 3 22 5 22 8V16C22 19 20 21 17 21H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.68994 11.71C8.30994 12.3 11.6999 15.7 12.2999 20.32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.62 15.0699C6.01 15.4999 8.5 18 8.94 21.39"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.97998 18.86C3.66998 19.08 4.91998 20.32 5.13998 22.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MirroringScreenOutline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M17 21.75H16C15.59 21.75 15.25 21.41 15.25 21C15.25 20.59 15.59 20.25 16 20.25H17C19.58 20.25 21.25 18.58 21.25 16V8C21.25 5.42 19.58 3.75 17 3.75H7C4.42 3.75 2.75 5.42 2.75 8V9C2.75 9.41 2.41 9.75 2 9.75C1.59 9.75 1.25 9.41 1.25 9V8C1.25 4.56 3.56 2.25 7 2.25H17C20.44 2.25 22.75 4.56 22.75 8V16C22.75 19.44 20.44 21.75 17 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.2902 21.06C11.9202 21.06 11.6002 20.78 11.5502 20.41C11.0002 16.13 7.88017 13 3.59017 12.45C3.18017 12.4 2.89018 12.0199 2.94018 11.6099C2.99018 11.1999 3.37017 10.91 3.78017 10.96C8.76017 11.6 12.4002 15.23 13.0302 20.21C13.0802 20.62 12.7902 20.9999 12.3802 21.0499C12.3602 21.0599 12.3202 21.06 12.2902 21.06Z"
        fill="currentColor"
      />
      <Path
        d="M8.92986 22.1301C8.55986 22.1301 8.23987 21.8501 8.18987 21.4801C7.79987 18.4301 5.56987 16.2 2.51987 15.81C2.10987 15.76 1.81986 15.3801 1.86986 14.9701C1.91986 14.5601 2.29987 14.2701 2.70987 14.3201C6.45987 14.8001 9.18987 17.5401 9.66987 21.2801C9.71987 21.6901 9.42987 22.07 9.01987 22.12C8.98987 22.13 8.95986 22.1301 8.92986 22.1301Z"
        fill="currentColor"
      />
      <Path
        d="M5.13022 22.7699C4.76022 22.7699 4.44022 22.4899 4.39022 22.1199C4.22022 20.7699 3.23022 19.7799 1.88022 19.6099C1.47022 19.5599 1.18021 19.1799 1.23021 18.7699C1.28021 18.3599 1.66023 18.0699 2.07023 18.1199C4.09023 18.3799 5.62022 19.9099 5.88022 21.9299C5.93022 22.3399 5.64021 22.7199 5.23021 22.7699C5.20021 22.7699 5.17022 22.7699 5.13022 22.7699Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MirroringScreenTwotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M2 9V8C2 5 4 3 7 3H17C20 3 22 5 22 8V16C22 19 20 21 17 21H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M3.69043 11.71C8.31043 12.3 11.7004 15.7 12.3004 20.32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2.62012 15.0698C6.01012 15.4998 8.50012 17.9998 8.94012 21.3898"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M1.98047 18.8599C3.67047 19.0799 4.92047 20.3199 5.14047 22.0199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MirroringScreenBold,
  broken: MirroringScreenBroken,
  bulk: MirroringScreenBulk,
  linear: MirroringScreenLinear,
  outline: MirroringScreenOutline,
  twotone: MirroringScreenTwotone,
};

export const MirroringScreenIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
