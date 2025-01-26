import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const FlashCircle1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9707 2C6.4507 2 1.9707 6.48 1.9707 12C1.9707 17.52 6.4507 22 11.9707 22C17.4907 22 21.9707 17.52 21.9707 12C21.9707 6.48 17.5007 2 11.9707 2ZM15.7207 12.35L12.0007 16.58L11.5607 17.08C10.9507 17.77 10.4507 17.59 10.4507 16.66V12.7H8.7507C7.9807 12.7 7.7707 12.23 8.2807 11.65L12.0007 7.42L12.4407 6.92C13.0507 6.23 13.5507 6.41 13.5507 7.34V11.3H15.2507C16.0207 11.3 16.2307 11.77 15.7207 12.35Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FlashCircle1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.68055 12.7201H10.4205V16.7701C10.4205 17.3701 11.1605 17.6501 11.5605 17.2001L15.8205 12.3601C16.1905 11.9401 15.8905 11.2801 15.3305 11.2801H13.5905V7.23008C13.5905 6.63008 12.8505 6.35008 12.4505 6.80008L8.19055 11.6401C7.82055 12.0601 8.12055 12.7201 8.68055 12.7201Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FlashCircle1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <Path
        d="M8.67938 11.9098L10.3294 12.3198L9.37939 16.1598C9.15939 17.0598 9.59937 17.3599 10.3594 16.8299L15.5394 13.2398C16.1694 12.7998 16.0794 12.2898 15.3294 12.0998L13.6794 11.6898L14.6294 7.84981C14.8494 6.94981 14.4094 6.64983 13.6494 7.17983L8.46939 10.7699C7.83939 11.2099 7.92938 11.7198 8.67938 11.9098Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FlashCircle1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.67999 11.9101L10.33 12.32L9.38 16.1601C9.16 17.0601 9.59998 17.36 10.36 16.83L15.54 13.2401C16.17 12.8001 16.08 12.2901 15.33 12.1001L13.68 11.6901L14.63 7.85006C14.85 6.95006 14.41 6.65007 13.65 7.18007L8.47 10.7701C7.84 11.2101 7.92999 11.7201 8.67999 11.9101Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FlashCircle1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.0693 18.1701C10.8993 18.1701 10.7393 18.1401 10.5693 18.0801C10.0193 17.8701 9.65934 17.3601 9.65934 16.7701V13.4701H8.67934C8.11934 13.4701 7.62934 13.1501 7.39934 12.6501C7.16934 12.1401 7.25934 11.5701 7.62934 11.1501L11.8893 6.31012C12.2793 5.87012 12.8793 5.72012 13.4293 5.93012C13.9793 6.14012 14.3393 6.65012 14.3393 7.24012V10.5401H15.3293C15.8893 10.5401 16.3793 10.8601 16.6093 11.3601C16.8393 11.8701 16.7493 12.4401 16.3793 12.8601L12.1193 17.7001C11.8393 18.0001 11.4593 18.1701 11.0693 18.1701ZM8.89934 11.9701H10.4093C10.8193 11.9701 11.1593 12.3101 11.1593 12.7201V16.5001L15.0993 12.0301H13.5893C13.1793 12.0301 12.8393 11.6901 12.8393 11.2801V7.50012L8.89934 11.9701Z"
        fill="currentColor"
      />
      <Path
        d="M11.9707 22.75C6.0507 22.75 1.2207 17.93 1.2207 12C1.2207 6.07 6.0507 1.25 11.9707 1.25C17.8907 1.25 22.7207 6.07 22.7207 12C22.7207 17.93 17.9007 22.75 11.9707 22.75ZM11.9707 2.75C6.8707 2.75 2.7207 6.9 2.7207 12C2.7207 17.1 6.8707 21.25 11.9707 21.25C17.0707 21.25 21.2207 17.1 21.2207 12C21.2207 6.9 17.0707 2.75 11.9707 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FlashCircle1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        opacity="0.34"
        d="M8.68055 12.7201H10.4205V16.7701C10.4205 17.3701 11.1605 17.6501 11.5605 17.2001L15.8205 12.3601C16.1905 11.9401 15.8905 11.2801 15.3305 11.2801H13.5905V7.23008C13.5905 6.63008 12.8505 6.35008 12.4505 6.80008L8.19055 11.6401C7.82055 12.0601 8.12055 12.7201 8.68055 12.7201Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: FlashCircle1Bold,
  broken: FlashCircle1Broken,
  bulk: FlashCircle1Bulk,
  linear: FlashCircle1Linear,
  outline: FlashCircle1Outline,
  twotone: FlashCircle1Twotone,
};

export const FlashCircle1Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
