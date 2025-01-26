import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const LinkBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.5 14.75H10C9.59 14.75 9.25 14.41 9.25 14C9.25 13.59 9.59 13.25 10 13.25H12.5C15.12 13.25 17.25 11.12 17.25 8.5C17.25 5.88 15.12 3.75 12.5 3.75H7.5C4.88 3.75 2.75 5.88 2.75 8.5C2.75 9.6 3.14 10.67 3.84 11.52C4.1 11.84 4.06 12.31 3.74 12.58C3.42 12.84 2.95 12.8 2.68 12.48C1.76 11.36 1.25 9.95 1.25 8.5C1.25 5.05 4.05 2.25 7.5 2.25H12.5C15.95 2.25 18.75 5.05 18.75 8.5C18.75 11.95 15.95 14.75 12.5 14.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.5 21.75H11.5C8.05 21.75 5.25 18.95 5.25 15.5C5.25 12.05 8.05 9.25 11.5 9.25H14C14.41 9.25 14.75 9.59 14.75 10C14.75 10.41 14.41 10.75 14 10.75H11.5C8.88 10.75 6.75 12.88 6.75 15.5C6.75 18.12 8.88 20.25 11.5 20.25H16.5C19.12 20.25 21.25 18.12 21.25 15.5C21.25 14.4 20.86 13.33 20.16 12.48C19.9 12.16 19.94 11.69 20.26 11.42C20.58 11.15 21.05 11.2 21.32 11.52C22.25 12.64 22.76 14.05 22.76 15.5C22.75 18.95 19.95 21.75 16.5 21.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LinkBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.27 12C2.48 11.05 2 9.83 2 8.5C2 5.48 4.47 3 7.5 3H12.5C15.52 3 18 5.48 18 8.5C18 11.52 15.53 14 12.5 14H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.98 21H11.5C8.48 21 6 18.52 6 15.5C6 12.48 8.47 10 11.5 10H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.73 12C21.52 12.95 22 14.17 22 15.5C22 18.52 19.53 21 16.5 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LinkBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.5002 14.75H10.0002C9.59024 14.75 9.25024 14.41 9.25024 14C9.25024 13.59 9.59024 13.25 10.0002 13.25H12.5002C15.1202 13.25 17.2502 11.12 17.2502 8.5C17.2502 5.88 15.1202 3.75 12.5002 3.75H7.50024C4.88024 3.75 2.75024 5.88 2.75024 8.5C2.75024 9.6 3.14023 10.67 3.84023 11.52C4.10023 11.84 4.06023 12.31 3.74023 12.58C3.42023 12.84 2.95024 12.8 2.68024 12.48C1.75024 11.36 1.24023 9.95 1.24023 8.5C1.24023 5.05 4.04023 2.25 7.49023 2.25H12.4902C15.9402 2.25 18.7402 5.05 18.7402 8.5C18.7402 11.95 15.9502 14.75 12.5002 14.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.5 21.75H11.5C8.05 21.75 5.25 18.95 5.25 15.5C5.25 12.05 8.05 9.25 11.5 9.25H14C14.41 9.25 14.75 9.59 14.75 10C14.75 10.41 14.41 10.75 14 10.75H11.5C8.88 10.75 6.75 12.88 6.75 15.5C6.75 18.12 8.88 20.25 11.5 20.25H16.5C19.12 20.25 21.25 18.12 21.25 15.5C21.25 14.4 20.86 13.33 20.16 12.48C19.9 12.16 19.94 11.69 20.26 11.42C20.58 11.15 21.05 11.2 21.32 11.52C22.25 12.64 22.76 14.05 22.76 15.5C22.75 18.95 19.95 21.75 16.5 21.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LinkLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.27 12C2.48 11.05 2 9.83 2 8.5C2 5.48 4.47 3 7.5 3H12.5C15.52 3 18 5.48 18 8.5C18 11.52 15.53 14 12.5 14H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.73 12C21.52 12.95 22 14.17 22 15.5C22 18.52 19.53 21 16.5 21H11.5C8.48 21 6 18.52 6 15.5C6 12.48 8.47 10 11.5 10H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LinkOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.75 18.5C4.17 18.5 1.25 15.58 1.25 12C1.25 8.42 4.17 5.5 7.75 5.5C8.16 5.5 8.5 5.84 8.5 6.25C8.5 6.66 8.16 7 7.75 7C4.99 7 2.75 9.24 2.75 12C2.75 14.76 4.99 17 7.75 17C10.51 17 12.75 14.76 12.75 12C12.75 11.59 13.09 11.25 13.5 11.25C13.91 11.25 14.25 11.59 14.25 12C14.25 15.58 11.33 18.5 7.75 18.5Z"
        fill="currentColor"
      />
      <Path
        d="M16 18.75C15.59 18.75 15.25 18.41 15.25 18C15.25 17.59 15.59 17.25 16 17.25C18.89 17.25 21.25 14.89 21.25 12C21.25 9.11 18.89 6.75 16 6.75C13.11 6.75 10.75 9.11 10.75 12C10.75 12.41 10.41 12.75 10 12.75C9.59 12.75 9.25 12.41 9.25 12C9.25 8.28 12.28 5.25 16 5.25C19.72 5.25 22.75 8.28 22.75 12C22.75 15.72 19.72 18.75 16 18.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LinkTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.27 12C2.48 11.05 2 9.83 2 8.5C2 5.48 4.47 3 7.5 3H12.5C15.52 3 18 5.48 18 8.5C18 11.52 15.53 14 12.5 14H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M20.73 12C21.52 12.95 22 14.17 22 15.5C22 18.52 19.53 21 16.5 21H11.5C8.48 21 6 18.52 6 15.5C6 12.48 8.47 10 11.5 10H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: LinkBold,
  broken: LinkBroken,
  bulk: LinkBulk,
  linear: LinkLinear,
  outline: LinkOutline,
  twotone: LinkTwotone,
};

export const LinkIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
