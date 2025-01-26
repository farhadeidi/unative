import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Crown1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0003 5.70951V15.2895C22.0003 18.0495 19.7603 20.2895 17.0003 20.2895H7.00031C6.54031 20.2895 6.10031 20.2295 5.67031 20.1095C5.05031 19.9395 4.85031 19.1495 5.31031 18.6895L15.9403 8.05951C16.1603 7.83951 16.4903 7.78951 16.8003 7.84951C17.1203 7.90951 17.4703 7.81951 17.7203 7.57951L20.2903 4.99951C21.2303 4.05951 22.0003 4.36951 22.0003 5.70951Z"
        fill="currentColor"
      />
      <Path
        d="M14.64 7.35953L4.17 17.8295C3.69 18.3095 2.89 18.1895 2.57 17.5895C2.2 16.9095 2 16.1195 2 15.2895V5.70953C2 4.36953 2.77 4.05953 3.71 4.99953L6.29 7.58953C6.68 7.96953 7.32 7.96953 7.71 7.58953L11.29 3.99953C11.68 3.60953 12.32 3.60953 12.71 3.99953L14.65 5.93953C15.03 6.32953 15.03 6.96953 14.64 7.35953Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Crown1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 10.99V5.71002C2 4.38002 2.77 4.06002 3.71 5.00002L6.3 7.59002C6.69 7.98002 7.33 7.98002 7.71 7.59002L11.29 4.00002C11.68 3.61002 12.32 3.61002 12.7 4.00002L16.29 7.59002C16.68 7.98002 17.32 7.98002 17.7 7.59002L20.29 5.00002C21.23 4.06002 22 4.38002 22 5.71002V15.3C22 18.3 20 20.3 17 20.3H7C4.24 20.3 2 18.06 2 15.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Crown1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0003 5.71V15.29C22.0003 18.05 19.7603 20.29 17.0003 20.29H7.00031C6.54031 20.29 6.10031 20.23 5.67031 20.11C5.05031 19.94 4.85031 19.15 5.31031 18.69L15.9403 8.06C16.1603 7.84 16.4903 7.79 16.8003 7.85C17.1203 7.91 17.4703 7.82 17.7203 7.58L20.2903 5C21.2303 4.06 22.0003 4.37 22.0003 5.71Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M14.64 7.36002L4.17 17.83C3.69 18.31 2.89 18.19 2.57 17.59C2.2 16.91 2 16.12 2 15.29V5.71002C2 4.37002 2.77 4.06002 3.71 5.00002L6.29 7.59002C6.68 7.97002 7.32 7.97002 7.71 7.59002L11.29 4.00002C11.68 3.61002 12.32 3.61002 12.71 4.00002L14.65 5.94002C15.03 6.33002 15.03 6.97002 14.64 7.36002Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Crown1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.7 18.98H7.30002C6.88002 18.98 6.41002 18.65 6.27002 18.25L2.13002 6.66999C1.54002 5.00999 2.23002 4.49999 3.65002 5.51999L7.55002 8.30999C8.20002 8.75999 8.94002 8.52999 9.22002 7.79999L10.98 3.10999C11.54 1.60999 12.47 1.60999 13.03 3.10999L14.79 7.79999C15.07 8.52999 15.81 8.75999 16.45 8.30999L20.11 5.69999C21.67 4.57999 22.42 5.14999 21.78 6.95999L17.74 18.27C17.59 18.65 17.12 18.98 16.7 18.98Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.5 22H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.5 14H14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Crown1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.7004 19.73H7.30042C6.56042 19.73 5.81042 19.2 5.56042 18.51L1.42042 6.91998C0.910423 5.45998 1.28042 4.78998 1.68042 4.48998C2.08042 4.18998 2.83042 4.00998 4.09042 4.90998L7.99042 7.69998C8.11042 7.76998 8.22042 7.79998 8.30042 7.77998C8.39042 7.74998 8.46042 7.66998 8.51042 7.52998L10.2704 2.83998C10.8004 1.43998 11.5804 1.22998 12.0004 1.22998C12.4204 1.22998 13.2004 1.43998 13.7304 2.83998L15.4904 7.52998C15.5404 7.65998 15.6104 7.74998 15.7004 7.77998C15.7904 7.80998 15.9004 7.77998 16.0104 7.68998L19.6704 5.07998C21.0104 4.11998 21.7904 4.30998 22.2204 4.61998C22.6404 4.93998 23.0304 5.64998 22.4804 7.19998L18.4404 18.51C18.1904 19.2 17.4404 19.73 16.7004 19.73ZM2.68042 5.80998C2.70042 5.94998 2.74042 6.14998 2.84042 6.40998L6.98042 18C7.02042 18.1 7.20042 18.23 7.30042 18.23H16.7004C16.8104 18.23 16.9904 18.1 17.0204 18L21.0604 6.69998C21.2004 6.31998 21.2404 6.05998 21.2504 5.90998C21.1004 5.95998 20.8704 6.06998 20.5404 6.30998L16.8804 8.91998C16.3804 9.26998 15.7904 9.37998 15.2604 9.21998C14.7304 9.05998 14.3004 8.63998 14.0804 8.06998L12.3204 3.37998C12.1904 3.02998 12.0704 2.85998 12.0004 2.77998C11.9304 2.85998 11.8104 3.02998 11.6804 3.36998L9.92042 8.05998C9.71042 8.62998 9.28042 9.04998 8.74042 9.20998C8.21042 9.36998 7.61042 9.25998 7.12042 8.90998L3.22042 6.11998C2.99042 5.95998 2.81042 5.85998 2.68042 5.80998Z"
        fill="currentColor"
      />
      <Path
        d="M17.5 22.75H6.5C6.09 22.75 5.75 22.41 5.75 22C5.75 21.59 6.09 21.25 6.5 21.25H17.5C17.91 21.25 18.25 21.59 18.25 22C18.25 22.41 17.91 22.75 17.5 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 14.75H9.5C9.09 14.75 8.75 14.41 8.75 14C8.75 13.59 9.09 13.25 9.5 13.25H14.5C14.91 13.25 15.25 13.59 15.25 14C15.25 14.41 14.91 14.75 14.5 14.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Crown1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.6992 18.9799H7.29922C6.87922 18.9799 6.40922 18.6499 6.26922 18.2499L2.12922 6.66986C1.53922 5.00986 2.22922 4.49986 3.64922 5.51986L7.54922 8.30986C8.19922 8.75986 8.93922 8.52986 9.21922 7.79986L10.9792 3.10986C11.5392 1.60986 12.4692 1.60986 13.0292 3.10986L14.7892 7.79986C15.0692 8.52986 15.8092 8.75986 16.4492 8.30986L20.1092 5.69986C21.6692 4.57986 22.4192 5.14986 21.7792 6.95986L17.7392 18.2699C17.5892 18.6499 17.1192 18.9799 16.6992 18.9799Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M6.5 22H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M9.5 14H14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Crown1Bold,
  broken: Crown1Broken,
  bulk: Crown1Bulk,
  linear: Crown1Linear,
  outline: Crown1Outline,
  twotone: Crown1Twotone,
};

export const Crown1Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
