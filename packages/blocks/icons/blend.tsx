import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const BlendBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9707 12C21.9707 15.31 19.2807 18 15.9707 18C15.2262 18 14.51 17.8643 13.8518 17.6141C13.5331 17.4929 13.4737 17.0851 13.6955 16.8262C14.8375 15.4938 15.4707 13.786 15.4707 12C15.4707 10.2082 14.8319 8.49432 13.6986 7.17467C13.4759 6.91543 13.5349 6.50621 13.8544 6.38494C14.5118 6.13537 15.2272 6 15.9707 6C19.2807 6 21.9707 8.69 21.9707 12Z"
        fill="currentColor"
      />
      <Path
        d="M13.9707 12C13.9707 13.77 13.2007 15.37 11.9707 16.46C10.9107 17.42 9.5107 18 7.9707 18C4.6607 18 1.9707 15.31 1.9707 12C1.9707 8.69 4.6607 6 7.9707 6C9.5107 6 10.9107 6.58 11.9707 7.54C13.2007 8.63 13.9707 10.23 13.9707 12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BlendBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9707 12C21.9707 15.31 19.2807 18 15.9707 18C14.4307 18 13.0307 17.42 11.9707 16.46C13.2007 15.37 13.9707 13.77 13.9707 12C13.9707 10.23 13.2007 8.63 11.9707 7.54C13.0307 6.58 14.4307 6 15.9707 6C19.2807 6 21.9707 8.69 21.9707 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.4407 15.92C2.5307 14.87 1.9707 13.5 1.9707 12C1.9707 8.69 4.6607 6 7.9707 6C9.5107 6 10.9107 6.58 11.9707 7.54C13.2007 8.63 13.9707 10.23 13.9707 12C13.9707 13.77 13.2007 15.37 11.9707 16.46C10.9107 17.42 9.5107 18 7.9707 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BlendBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9707 12C21.9707 15.31 19.2807 18 15.9707 18C14.4307 18 13.0307 17.42 11.9707 16.46C13.2007 15.37 13.9707 13.77 13.9707 12C13.9707 10.23 13.2007 8.63 11.9707 7.54C13.0307 6.58 14.4307 6 15.9707 6C19.2807 6 21.9707 8.69 21.9707 12Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M13.9707 12C13.9707 13.77 13.2007 15.37 11.9707 16.46C10.9107 17.42 9.5107 18 7.9707 18C4.6607 18 1.9707 15.31 1.9707 12C1.9707 8.69 4.6607 6 7.9707 6C9.5107 6 10.9107 6.58 11.9707 7.54C13.2007 8.63 13.9707 10.23 13.9707 12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BlendLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.97 12C21.97 15.31 19.28 18 15.97 18C14.43 18 13.03 17.42 11.97 16.46C13.2 15.37 13.97 13.77 13.97 12C13.97 10.23 13.2 8.63 11.97 7.54C13.03 6.58 14.43 6 15.97 6C19.28 6 21.97 8.69 21.97 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.97 12C13.97 13.77 13.2 15.37 11.97 16.46C10.91 17.42 9.51 18 7.97 18C4.66 18 1.97 15.31 1.97 12C1.97 8.69 4.66 6 7.97 6C9.51 6 10.91 6.58 11.97 7.54C13.2 8.63 13.97 10.23 13.97 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BlendOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.9707 18.75C14.3007 18.75 12.7007 18.13 11.4707 17.02C11.3107 16.88 11.2207 16.67 11.2207 16.46C11.2207 16.25 11.3107 16.04 11.4707 15.9C12.5807 14.92 13.2207 13.5 13.2207 12C13.2207 10.5 12.5807 9.08 11.4707 8.1C11.3107 7.96 11.2207 7.76 11.2207 7.54C11.2207 7.33 11.3107 7.12 11.4707 6.98C12.7107 5.86 14.3007 5.25 15.9707 5.25C19.6907 5.25 22.7207 8.28 22.7207 12C22.7207 15.72 19.7007 18.75 15.9707 18.75ZM13.1007 16.39C13.9507 16.95 14.9407 17.25 15.9807 17.25C18.8707 17.25 21.2307 14.89 21.2307 12C21.2307 9.11 18.8707 6.75 15.9807 6.75C14.9507 6.75 13.9507 7.05 13.1007 7.61C14.1407 8.82 14.7307 10.37 14.7307 12C14.7307 13.63 14.1407 15.18 13.1007 16.39Z"
        fill="currentColor"
      />
      <Path
        d="M7.9707 18.75C4.2507 18.75 1.2207 15.72 1.2207 12C1.2207 8.28 4.2507 5.25 7.9707 5.25C9.6407 5.25 11.2407 5.87 12.4707 6.98C13.8907 8.24 14.7207 10.07 14.7207 12C14.7207 13.93 13.9007 15.75 12.4707 17.02C11.2407 18.13 9.6407 18.75 7.9707 18.75ZM7.9707 6.75C5.0807 6.75 2.7207 9.11 2.7207 12C2.7207 14.89 5.0807 17.25 7.9707 17.25C9.2707 17.25 10.5107 16.77 11.4707 15.9C12.5907 14.91 13.2207 13.49 13.2207 12C13.2207 10.51 12.5807 9.08 11.4707 8.1C10.5107 7.23 9.2707 6.75 7.9707 6.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BlendTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9707 12C21.9707 15.31 19.2807 18 15.9707 18C14.4307 18 13.0307 17.42 11.9707 16.46C13.2007 15.37 13.9707 13.77 13.9707 12C13.9707 10.23 13.2007 8.63 11.9707 7.54C13.0307 6.58 14.4307 6 15.9707 6C19.2807 6 21.9707 8.69 21.9707 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.9707 12C13.9707 13.77 13.2007 15.37 11.9707 16.46C10.9107 17.42 9.5107 18 7.9707 18C4.6607 18 1.9707 15.31 1.9707 12C1.9707 8.69 4.6607 6 7.9707 6C9.5107 6 10.9107 6.58 11.9707 7.54C13.2007 8.63 13.9707 10.23 13.9707 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BlendBold,
  broken: BlendBroken,
  bulk: BlendBulk,
  linear: BlendLinear,
  outline: BlendOutline,
  twotone: BlendTwotone,
};

export const BlendIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
