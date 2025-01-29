import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const MusicnoteBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.7188 6.27879V7.44879C21.7188 8.42879 21.3288 9.26879 20.6388 9.75879C20.2087 10.0788 19.6787 10.2288 19.1287 10.2288C18.7887 10.2288 18.4488 10.1788 18.0988 10.0588L12.7188 8.26879V17.9988C12.7188 20.6188 10.5887 22.7488 7.96875 22.7488C5.34875 22.7488 3.21875 20.6188 3.21875 17.9988C3.21875 15.3788 5.34875 13.2488 7.96875 13.2488C9.22875 13.2488 10.3688 13.7488 11.2188 14.5488V3.99879C11.2188 3.02879 11.6188 2.18879 12.3088 1.68879C12.9987 1.19879 13.9187 1.08879 14.8387 1.38879L19.2588 2.86879C20.6188 3.31879 21.7188 4.84879 21.7188 6.27879Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicnoteBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.1107 16.98C4.0207 17.3 3.9707 17.65 3.9707 18C3.9707 20.21 5.7607 22 7.9707 22C10.1807 22 11.9707 20.21 11.9707 18C11.9707 15.79 10.1807 14 7.9707 14C7.6207 14 7.2707 14.05 6.9507 14.13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9707 18V4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.6105 2.11L19.0305 3.58C20.1005 3.94 20.9805 5.15 20.9805 6.28V7.45C20.9805 8.98 19.8005 9.83 18.3505 9.35L13.9305 7.88C12.8605 7.52 11.9805 6.31 11.9805 5.18V4C11.9705 2.48 13.1605 1.62 14.6105 2.11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicnoteBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.2605 2.8702L14.8405 1.4002C13.9205 1.0902 12.9905 1.2002 12.3105 1.7002C11.6205 2.2002 11.2305 3.0402 11.2305 4.0102V7.7802L18.1105 10.0702C18.4505 10.1902 18.8005 10.2402 19.1305 10.2402C19.6905 10.2402 20.2105 10.0802 20.6405 9.7702C21.3305 9.2702 21.7205 8.4302 21.7205 7.4602V6.2802C21.7205 4.8502 20.6205 3.3202 19.2605 2.8702Z"
        fill="currentColor"
      />
      <Path
        d="M12.7207 8.27002V18C12.7207 20.62 10.5907 22.75 7.9707 22.75C5.3507 22.75 3.2207 20.62 3.2207 18C3.2207 15.38 5.3507 13.25 7.9707 13.25C9.2307 13.25 10.3707 13.75 11.2207 14.55V7.77002L12.7207 8.27002Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicnoteLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.96997 22C10.1791 22 11.97 20.2091 11.97 18C11.97 15.7909 10.1791 14 7.96997 14C5.76083 14 3.96997 15.7909 3.96997 18C3.96997 20.2091 5.76083 22 7.96997 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.97 18V4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.61 2.11L19.03 3.58C20.1 3.94 20.98 5.15 20.98 6.28V7.45C20.98 8.98 19.8 9.83 18.35 9.35L13.93 7.88C12.86 7.52 11.98 6.31 11.98 5.18V4C11.97 2.48 13.16 1.62 14.61 2.11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicnoteOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.9707 22.75C5.3507 22.75 3.2207 20.62 3.2207 18C3.2207 15.38 5.3507 13.25 7.9707 13.25C10.5907 13.25 12.7207 15.38 12.7207 18C12.7207 20.62 10.5907 22.75 7.9707 22.75ZM7.9707 14.75C6.1807 14.75 4.7207 16.21 4.7207 18C4.7207 19.79 6.1807 21.25 7.9707 21.25C9.7607 21.25 11.2207 19.79 11.2207 18C11.2207 16.21 9.7707 14.75 7.9707 14.75Z"
        fill="currentColor"
      />
      <Path
        d="M11.9707 18.75C11.5607 18.75 11.2207 18.41 11.2207 18V4C11.2207 3.59 11.5607 3.25 11.9707 3.25C12.3807 3.25 12.7207 3.59 12.7207 4V18C12.7207 18.41 12.3907 18.75 11.9707 18.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.1305 10.2299C18.8005 10.2299 18.4505 10.1699 18.1105 10.0599L13.6905 8.58994C12.3105 8.12994 11.2305 6.62994 11.2305 5.17994V3.99994C11.2305 3.02994 11.6305 2.18994 12.3105 1.68994C13.0005 1.18994 13.9205 1.08994 14.8405 1.38994L19.2605 2.85994C20.6405 3.31994 21.7205 4.81994 21.7205 6.26994V7.43994C21.7205 8.40994 21.3205 9.24994 20.6405 9.74994C20.2105 10.0799 19.6805 10.2299 19.1305 10.2299ZM13.8205 2.71994C13.5805 2.71994 13.3605 2.77994 13.1905 2.90994C12.8905 3.11994 12.7305 3.50994 12.7305 3.99994V5.16994C12.7305 5.96994 13.4005 6.89994 14.1605 7.15994L18.5805 8.62994C19.0405 8.78994 19.4705 8.74994 19.7605 8.53994C20.0605 8.32994 20.2205 7.93994 20.2205 7.44994V6.27994C20.2205 5.47994 19.5505 4.54994 18.7905 4.28994L14.3705 2.81994C14.1805 2.74994 13.9905 2.71994 13.8205 2.71994Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicnoteTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.9707 22C10.1798 22 11.9707 20.2091 11.9707 18C11.9707 15.7909 10.1798 14 7.9707 14C5.76156 14 3.9707 15.7909 3.9707 18C3.9707 20.2091 5.76156 22 7.9707 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.9707 18V4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.6105 2.11L19.0305 3.58C20.1005 3.94 20.9805 5.15 20.9805 6.28V7.45C20.9805 8.98 19.8005 9.83 18.3505 9.35L13.9305 7.88C12.8605 7.52 11.9805 6.31 11.9805 5.18V4C11.9705 2.48 13.1605 1.62 14.6105 2.11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MusicnoteBold,
  broken: MusicnoteBroken,
  bulk: MusicnoteBulk,
  linear: MusicnoteLinear,
  outline: MusicnoteOutline,
  twotone: MusicnoteTwotone,
};

export const MusicnoteIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default MusicnoteIcon;
