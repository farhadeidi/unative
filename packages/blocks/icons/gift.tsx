import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const GiftBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20 12V18C20 20.21 18.21 22 16 22H8C5.79 22 4 20.21 4 18V12C4 11.45 4.45 11 5 11H6.97C7.52 11 7.97 11.45 7.97 12V15.14C7.97 15.88 8.38 16.56 9.03 16.91C9.32 17.07 9.64 17.15 9.97 17.15C10.35 17.15 10.73 17.04 11.06 16.82L12.01 16.2L12.89 16.79C13.5 17.2 14.28 17.25 14.93 16.9C15.59 16.55 16 15.88 16 15.13V12C16 11.45 16.45 11 17 11H19C19.55 11 20 11.45 20 12Z"
        fill="currentColor"
      />
      <Path
        d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z"
        fill="currentColor"
      />
      <Path
        d="M11.6388 5.00141H6.11881C5.77881 4.63141 5.78881 4.06141 6.14881 3.70141L7.56881 2.28141C7.93881 1.91141 8.54881 1.91141 8.91881 2.28141L11.6388 5.00141Z"
        fill="currentColor"
      />
      <Path
        d="M17.8716 5.00141H12.3516L15.0716 2.28141C15.4416 1.91141 16.0516 1.91141 16.4216 2.28141L17.8416 3.70141C18.2016 4.06141 18.2116 4.63141 17.8716 5.00141Z"
        fill="currentColor"
      />
      <Path
        d="M13.9714 11C14.5214 11 14.9714 11.45 14.9714 12V15.13C14.9714 15.93 14.0814 16.41 13.4214 15.96L12.5214 15.36C12.1914 15.14 11.7614 15.14 11.4214 15.36L10.4814 15.98C9.82141 16.42 8.94141 15.94 8.94141 15.15V12C8.94141 11.45 9.39141 11 9.94141 11H13.9714Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GiftBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.9707 18C3.9707 21 4.9707 22 7.9707 22H15.9707C18.9707 22 19.9707 21 19.9707 18V10H3.9707V13.84"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.6408 4.99994H6.12076C5.78076 4.62994 5.79076 4.05994 6.15076 3.69994L7.57076 2.27994C7.94076 1.90994 8.55076 1.90994 8.92076 2.27994L11.6408 4.99994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.8696 4.99994H12.3496L15.0696 2.27994C15.4396 1.90994 16.0496 1.90994 16.4196 2.27994L17.8396 3.69994C18.1996 4.05994 18.2096 4.62994 17.8696 4.99994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.93945 10V15.14C8.93945 15.94 9.81945 16.41 10.4895 15.98L11.4295 15.36C11.7695 15.14 12.1995 15.14 12.5295 15.36L13.4195 15.96C14.0795 16.4 14.9695 15.93 14.9695 15.13V10H8.93945Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GiftBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.9707 10V18C19.9707 21 18.9707 22 15.9707 22H7.9707C4.9707 22 3.9707 21 3.9707 18V10H19.9707Z"
        fill="currentColor"
      />
      <Path
        d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M11.6408 4.99994H6.12076C5.78076 4.62994 5.79076 4.05994 6.15076 3.69994L7.57076 2.27994C7.94076 1.90994 8.55076 1.90994 8.92076 2.27994L11.6408 4.99994Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M17.8696 4.99994H12.3496L15.0696 2.27994C15.4396 1.90994 16.0496 1.90994 16.4196 2.27994L17.8396 3.69994C18.1996 4.05994 18.2096 4.62994 17.8696 4.99994Z"
        fill="currentColor"
      />
      <Path
        opacity="0.6"
        d="M8.93945 10V15.14C8.93945 15.94 9.81945 16.41 10.4895 15.98L11.4295 15.36C11.7695 15.14 12.1995 15.14 12.5295 15.36L13.4195 15.96C14.0795 16.4 14.9695 15.93 14.9695 15.13V10H8.93945Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GiftLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.97 10H3.96997V18C3.96997 21 4.96997 22 7.96997 22H15.97C18.97 22 19.97 21 19.97 18V10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.64 4.99994H6.12003C5.78003 4.62994 5.79003 4.05994 6.15003 3.69994L7.57003 2.27994C7.94003 1.90994 8.55003 1.90994 8.92003 2.27994L11.64 4.99994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.87 4.99994H12.35L15.07 2.27994C15.44 1.90994 16.05 1.90994 16.42 2.27994L17.84 3.69994C18.2 4.05994 18.21 4.62994 17.87 4.99994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.93994 10V15.14C8.93994 15.94 9.81994 16.41 10.4899 15.98L11.4299 15.36C11.7699 15.14 12.1999 15.14 12.5299 15.36L13.4199 15.96C14.0799 16.4 14.9699 15.93 14.9699 15.13V10H8.93994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GiftOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.9707 22.75H7.9707C4.5507 22.75 3.2207 21.42 3.2207 18V10C3.2207 9.59 3.5607 9.25 3.9707 9.25H19.9707C20.3807 9.25 20.7207 9.59 20.7207 10V18C20.7207 21.42 19.3907 22.75 15.9707 22.75ZM4.7207 10.75V18C4.7207 20.58 5.3907 21.25 7.9707 21.25H15.9707C18.5507 21.25 19.2207 20.58 19.2207 18V10.75H4.7207Z"
        fill="currentColor"
      />
      <Path
        d="M19.5 10.75H4.5C2.75 10.75 1.75 9.75 1.75 8V7C1.75 5.25 2.75 4.25 4.5 4.25H19.5C21.2 4.25 22.25 5.3 22.25 7V8C22.25 9.7 21.2 10.75 19.5 10.75ZM4.5 5.75C3.59 5.75 3.25 6.09 3.25 7V8C3.25 8.91 3.59 9.25 4.5 9.25H19.5C20.38 9.25 20.75 8.88 20.75 8V7C20.75 6.12 20.38 5.75 19.5 5.75H4.5Z"
        fill="currentColor"
      />
      <Path
        d="M11.6391 5.74988H6.11912C5.90912 5.74988 5.70912 5.65988 5.56912 5.50988C4.95912 4.83988 4.97912 3.80988 5.61912 3.16988L7.03912 1.74988C7.69912 1.08988 8.78912 1.08988 9.44912 1.74988L12.1691 4.46988C12.3791 4.67988 12.4491 5.00988 12.3291 5.28988C12.2191 5.56988 11.9491 5.74988 11.6391 5.74988ZM6.66912 4.24988H9.83912L8.38912 2.80988C8.30912 2.72988 8.17912 2.72988 8.09912 2.80988L6.67912 4.22988C6.67912 4.23988 6.66912 4.23988 6.66912 4.24988Z"
        fill="currentColor"
      />
      <Path
        d="M17.8701 5.74988H12.3501C12.0501 5.74988 11.7701 5.56988 11.6601 5.28988C11.5401 5.00988 11.6101 4.68988 11.8201 4.46988L14.5401 1.74988C15.2001 1.08988 16.2901 1.08988 16.9501 1.74988L18.3701 3.16988C19.0101 3.80988 19.0401 4.83988 18.4201 5.50988C18.2801 5.65988 18.0801 5.74988 17.8701 5.74988ZM14.1701 4.24988H17.3401C17.3301 4.23988 17.3301 4.23988 17.3201 4.22988L15.9001 2.80988C15.8201 2.72988 15.6901 2.72988 15.6101 2.80988L14.1701 4.24988Z"
        fill="currentColor"
      />
      <Path
        d="M9.93945 16.9C9.65945 16.9 9.36945 16.83 9.10945 16.69C8.53945 16.38 8.18945 15.79 8.18945 15.15V10C8.18945 9.59 8.52945 9.25 8.93945 9.25H14.9795C15.3895 9.25 15.7295 9.59 15.7295 10V15.13C15.7295 15.78 15.3795 16.37 14.8095 16.67C14.2395 16.98 13.5495 16.94 13.0095 16.58L12.1195 15.98C12.0395 15.92 11.9295 15.92 11.8395 15.98L10.8995 16.6C10.6095 16.8 10.2695 16.9 9.93945 16.9ZM9.68945 10.75V15.14C9.68945 15.27 9.76945 15.33 9.81945 15.36C9.86945 15.39 9.96945 15.42 10.0795 15.35L11.0195 14.73C11.6095 14.34 12.3695 14.34 12.9495 14.73L13.8395 15.33C13.9495 15.4 14.0495 15.37 14.0995 15.34C14.1495 15.31 14.2295 15.25 14.2295 15.12V10.74H9.68945V10.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GiftTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.9707 10H3.9707V18C3.9707 21 4.9707 22 7.9707 22H15.9707C18.9707 22 19.9707 21 19.9707 18V10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.6408 4.99994H6.12076C5.78076 4.62994 5.79076 4.05994 6.15076 3.69994L7.57076 2.27994C7.94076 1.90994 8.55076 1.90994 8.92076 2.27994L11.6408 4.99994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17.8696 4.99994H12.3496L15.0696 2.27994C15.4396 1.90994 16.0496 1.90994 16.4196 2.27994L17.8396 3.69994C18.1996 4.05994 18.2096 4.62994 17.8696 4.99994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.93945 10V15.14C8.93945 15.94 9.81945 16.41 10.4895 15.98L11.4295 15.36C11.7695 15.14 12.1995 15.14 12.5295 15.36L13.4195 15.96C14.0795 16.4 14.9695 15.93 14.9695 15.13V10H8.93945Z"
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
  bold: GiftBold,
  broken: GiftBroken,
  bulk: GiftBulk,
  linear: GiftLinear,
  outline: GiftOutline,
  twotone: GiftTwotone,
};

export const GiftIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
