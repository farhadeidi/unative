import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ForbiddenBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.02 2.88C16.54 2.4 15.58 2 14.9 2H9.1C8.42 2 7.46 2.4 6.98 2.88L2.88 6.98C2.4 7.46 2 8.42 2 9.1V14.9C2 15.58 2.4 16.54 2.88 17.02L4.41 18.55L18.55 4.41L17.02 2.88Z"
        fill="currentColor"
      />
      <Path
        d="M21.1207 6.97875L19.6107 5.46875L5.4707 19.6088L6.9807 21.1188C7.4607 21.5988 8.4207 21.9988 9.1007 21.9988H14.9007C15.5807 21.9988 16.5407 21.5988 17.0207 21.1188L21.1207 17.0188C21.6007 16.5388 22.0007 15.5788 22.0007 14.8988V9.09875C22.0007 8.41875 21.6007 7.45875 21.1207 6.97875Z"
        fill="currentColor"
      />
      <Path
        d="M2.49094 20.4708C2.20094 20.7608 2.20094 21.2408 2.49094 21.5308C2.64094 21.6808 2.83094 21.7508 3.02094 21.7508C3.21094 21.7508 3.40094 21.6808 3.55094 21.5308L5.47094 19.6108L4.41094 18.5508L2.49094 20.4708Z"
        fill="currentColor"
      />
      <Path
        d="M21.5308 3.55094C21.8208 3.26094 21.8208 2.78094 21.5308 2.49094C21.2408 2.20094 20.7608 2.20094 20.4708 2.49094L18.5508 4.41094L19.6108 5.47094L21.5308 3.55094Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ForbiddenBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.93945 19.0799L19.0795 4.93994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 13.02V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42001 22 9.10001 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.10001C22 8.42001 21.6 7.46001 21.12 6.98001L17.02 2.88C16.54 2.4 15.58 2 14.9 2H9.10001C8.42001 2 7.46 2.4 6.98 2.88L2.88 6.98001C2.4 7.46001 2 8.42001 2 9.10001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ForbiddenBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.9 2H9.10001C8.42001 2 7.46 2.4 6.98 2.88L2.88 6.98001C2.4 7.46001 2 8.42001 2 9.10001V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42001 22 9.10001 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.10001C22 8.42001 21.6 7.46001 21.12 6.98001L17.02 2.88C16.54 2.4 15.58 2 14.9 2Z"
        fill="currentColor"
      />
      <Path
        d="M3.02094 21.75C2.83094 21.75 2.64094 21.68 2.49094 21.53C2.20094 21.24 2.20094 20.76 2.49094 20.47L20.4709 2.48996C20.7609 2.19996 21.2409 2.19996 21.5309 2.48996C21.8209 2.77996 21.8209 3.25996 21.5309 3.54996L3.55094 21.53C3.41094 21.68 3.22094 21.75 3.02094 21.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ForbiddenLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.9 22.75H9.10001C8.21001 22.75 7.07 22.28 6.45 21.65L2.35001 17.55C1.72001 16.92 1.25 15.78 1.25 14.9V9.10001C1.25 8.21001 1.72001 7.07001 2.35001 6.45001L6.45 2.35001C7.08 1.72001 8.22001 1.25 9.10001 1.25H14.9C15.79 1.25 16.93 1.72001 17.55 2.35001L21.65 6.45001C22.28 7.08001 22.75 8.22001 22.75 9.10001V14.9C22.75 15.79 22.28 16.93 21.65 17.55L17.55 21.65C16.92 22.28 15.79 22.75 14.9 22.75ZM9.10001 2.75C8.61001 2.75 7.84999 3.06 7.50999 3.41L3.41 7.51001C3.07 7.86001 2.75 8.61001 2.75 9.10001V14.9C2.75 15.39 3.06 16.15 3.41 16.49L7.50999 20.59C7.85999 20.93 8.61001 21.25 9.10001 21.25H14.9C15.39 21.25 16.15 20.94 16.49 20.59L20.59 16.49C20.93 16.14 21.25 15.39 21.25 14.9V9.10001C21.25 8.61001 20.94 7.85001 20.59 7.51001L16.49 3.41C16.14 3.07 15.39 2.75 14.9 2.75H9.10001Z"
        fill="currentColor"
      />
      <Path
        d="M4.93891 19.8299C4.74891 19.8299 4.55891 19.7599 4.40891 19.6099C4.11891 19.3199 4.11891 18.8399 4.40891 18.5499L18.5489 4.40988C18.8389 4.11988 19.3189 4.11988 19.6089 4.40988C19.8989 4.69988 19.8989 5.17988 19.6089 5.46988L5.4689 19.6099C5.3189 19.7599 5.1289 19.8299 4.93891 19.8299Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ForbiddenOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.9 22.75H9.10001C8.21001 22.75 7.07 22.28 6.45 21.65L2.35001 17.55C1.72001 16.92 1.25 15.78 1.25 14.9V9.10001C1.25 8.21001 1.72001 7.07001 2.35001 6.45001L6.45 2.35001C7.08 1.72001 8.22001 1.25 9.10001 1.25H14.9C15.79 1.25 16.93 1.72001 17.55 2.35001L21.65 6.45001C22.28 7.08001 22.75 8.22001 22.75 9.10001V14.9C22.75 15.79 22.28 16.93 21.65 17.55L17.55 21.65C16.92 22.28 15.79 22.75 14.9 22.75ZM9.10001 2.75C8.61001 2.75 7.84999 3.06 7.50999 3.41L3.41 7.51001C3.07 7.86001 2.75 8.61001 2.75 9.10001V14.9C2.75 15.39 3.06 16.15 3.41 16.49L7.50999 20.59C7.85999 20.93 8.61001 21.25 9.10001 21.25H14.9C15.39 21.25 16.15 20.94 16.49 20.59L20.59 16.49C20.93 16.14 21.25 15.39 21.25 14.9V9.10001C21.25 8.61001 20.94 7.85001 20.59 7.51001L16.49 3.41C16.14 3.07 15.39 2.75 14.9 2.75H9.10001Z"
        fill="currentColor"
      />
      <Path
        d="M4.93891 19.8299C4.74891 19.8299 4.55891 19.7599 4.40891 19.6099C4.11891 19.3199 4.11891 18.8399 4.40891 18.5499L18.5489 4.40988C18.8389 4.11988 19.3189 4.11988 19.6089 4.40988C19.8989 4.69988 19.8989 5.17988 19.6089 5.46988L5.4689 19.6099C5.3189 19.7599 5.1289 19.8299 4.93891 19.8299Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ForbiddenTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.9 2H9.10001C8.42001 2 7.46 2.4 6.98 2.88L2.88 6.98001C2.4 7.46001 2 8.42001 2 9.10001V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42001 22 9.10001 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.10001C22 8.42001 21.6 7.46001 21.12 6.98001L17.02 2.88C16.54 2.4 15.58 2 14.9 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M4.93945 19.0799L19.0795 4.93994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ForbiddenBold,
  broken: ForbiddenBroken,
  bulk: ForbiddenBulk,
  linear: ForbiddenLinear,
  outline: ForbiddenOutline,
  twotone: ForbiddenTwotone,
};

export const ForbiddenIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ForbiddenIcon;
