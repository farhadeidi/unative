import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const MilkBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 15.9983V18.9983C18 20.6483 16.65 21.9983 15 21.9983H9C7.35 21.9983 6 20.6483 6 18.9983V14.9883C6 14.4383 6.45 13.9883 7.01 13.9883L9.89 13.9983C10.58 13.9983 11.26 14.1483 11.89 14.4483C12.58 14.7683 13.31 14.9983 14.08 14.9983H17C17.55 14.9983 18 15.4483 18 15.9983Z"
        fill="currentColor"
      />
      <Path
        d="M17.41 9.41L15.29 7.29C15.1 7.1 15 6.85 15 6.59V4.91C15.58 4.71 16 4.15 16 3.5C16 2.67 15.33 2 14.5 2H9.5C8.67 2 8 2.67 8 3.5C8 4.15 8.42 4.71 9 4.91V6.59C9 6.85 8.9 7.1 8.71 7.29L6.59 9.41C6.27 9.73 6 10.38 6 10.83V11.48C6 12.03 6.44 12.48 6.99 12.48L9.9 12.5C10.88 12.5 11.87 12.74 12.75 13.2C13.17 13.42 13.65 13.5 14.12 13.5H17C17.55 13.5 18 13.05 18 12.5V10.83C18 10.38 17.73 9.73 17.41 9.41Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MilkBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6 13.98L9.89001 14C10.62 14 11.34 14.17 12 14.5C12.66 14.83 13.38 15 14.12 15H18V19C18 20.65 16.65 22 15 22H9C7.35 22 6 20.65 6 19V17.99"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 10.83V15H14.12C13.38 15 12.66 14.83 12 14.5C11.34 14.17 10.62 14 9.89001 14L6 13.98V10.83C6 10.37 6.26003 9.74 6.59003 9.41L8.71002 7.28999C8.89002 7.10999 9 6.85 9 6.59V5H15V6.59C15 6.85 15.11 7.10999 15.29 7.28999L17.41 9.41C17.74 9.74 18 10.37 18 10.83Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 16V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 5H9.5C8.67 5 8 4.32 8 3.5C8 2.68 8.67 2 9.5 2H14.5C15.33 2 16 2.68 16 3.5C16 4.32 15.33 5 14.5 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MilkBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 15V19C18 20.65 16.65 22 15 22H9C7.35 22 6 20.65 6 19V13.98L9.89001 14C10.62 14 11.34 14.17 12 14.5C12.66 14.83 13.38 15 14.12 15H18Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18 10.8299V14.9999H14.12C13.38 14.9999 12.66 14.8299 12 14.4999C11.34 14.1699 10.62 13.9999 9.89001 13.9999L6 13.9799V10.8299C6 10.3699 6.26003 9.73991 6.59003 9.40991L8.71002 7.28991C8.89002 7.10991 9 6.8499 9 6.5899V4.90991C9.16 4.96991 9.32 4.99991 9.5 4.99991H14.5C14.68 4.99991 14.84 4.96991 15 4.90991V6.5899C15 6.8499 15.11 7.10991 15.29 7.28991L17.41 9.40991C17.74 9.73991 18 10.3699 18 10.8299Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 2H9.5C8.67 2 8 2.67 8 3.5C8 4.15 8.42 4.71 9 4.91C9.16 4.97 9.32 5 9.5 5H14.5C14.68 5 14.84 4.97 15 4.91C15.58 4.71 16 4.15 16 3.5C16 2.67 15.33 2 14.5 2Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MilkLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 15V19C18 20.65 16.65 22 15 22H9C7.35 22 6 20.65 6 19V13.98L9.89001 14C10.62 14 11.34 14.17 12 14.5C12.66 14.83 13.38 15 14.12 15H18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 10.83V15H14.12C13.38 15 12.66 14.83 12 14.5C11.34 14.17 10.62 14 9.89001 14L6 13.98V10.83C6 10.37 6.26003 9.74 6.59003 9.41L8.71002 7.28999C8.89002 7.10999 9 6.85 9 6.59V5H15V6.59C15 6.85 15.11 7.10999 15.29 7.28999L17.41 9.41C17.74 9.74 18 10.37 18 10.83Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 16V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 14.98V13.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 5H9.5C8.67 5 8 4.32 8 3.5C8 2.68 8.67 2 9.5 2H14.5C15.33 2 16 2.68 16 3.5C16 4.32 15.33 5 14.5 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MilkOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15 22.75H9C6.93 22.75 5.25 21.07 5.25 19V13.98C5.25 13.78 5.32997 13.59 5.46997 13.45C5.60997 13.31 5.8 13.23 6 13.23L9.89001 13.25C10.73 13.25 11.57 13.45 12.33 13.83C12.89 14.11 13.49 14.25 14.12 14.25H18C18.41 14.25 18.75 14.59 18.75 15V19C18.75 21.07 17.07 22.75 15 22.75ZM6.75 14.73V19C6.75 20.24 7.76 21.25 9 21.25H15C16.24 21.25 17.25 20.24 17.25 19V15.75H14.12C13.26 15.75 12.43 15.56 11.66 15.17C11.1 14.89 10.5 14.75 9.89001 14.75L6.75 14.73Z"
        fill="currentColor"
      />
      <Path
        d="M18 15.75H14.12C13.26 15.75 12.43 15.56 11.66 15.17C11.1 14.89 10.5 14.75 9.89001 14.75L6 14.73C5.59 14.73 5.25 14.39 5.25 13.98V10.83C5.25 10.17 5.59 9.35 6.06 8.88L8.17999 6.75999C8.21999 6.71999 8.25 6.65 8.25 6.59V5C8.25 4.59 8.59 4.25 9 4.25H15C15.41 4.25 15.75 4.59 15.75 5V6.59C15.75 6.65 15.78 6.71999 15.82 6.75999L17.94 8.88C18.41 9.35 18.75 10.17 18.75 10.83V15C18.75 15.41 18.41 15.75 18 15.75ZM6.75 13.23L9.89001 13.25C10.73 13.25 11.57 13.45 12.33 13.83C12.89 14.11 13.49 14.25 14.12 14.25H17.25V10.83C17.25 10.57 17.07 10.13 16.88 9.94L14.76 7.82001C14.44 7.50001 14.25 7.05 14.25 6.59V5.75H9.75V6.59C9.75 7.05 9.55999 7.50001 9.23999 7.82001L7.12 9.94C6.93 10.13 6.75 10.57 6.75 10.83V13.23Z"
        fill="currentColor"
      />
      <Path
        d="M18 16.75C17.59 16.75 17.25 16.41 17.25 16V15C17.25 14.59 17.59 14.25 18 14.25C18.41 14.25 18.75 14.59 18.75 15V16C18.75 16.41 18.41 16.75 18 16.75Z"
        fill="currentColor"
      />
      <Path
        d="M6 15.73C5.59 15.73 5.25 15.39 5.25 14.98V13.98C5.25 13.57 5.59 13.23 6 13.23C6.41 13.23 6.75 13.57 6.75 13.98V14.98C6.75 15.39 6.41 15.73 6 15.73Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 5.75H9.5C8.26 5.75 7.25 4.74 7.25 3.5C7.25 2.26 8.26 1.25 9.5 1.25H14.5C15.74 1.25 16.75 2.26 16.75 3.5C16.75 4.74 15.74 5.75 14.5 5.75ZM9.5 2.75C9.09 2.75 8.75 3.09 8.75 3.5C8.75 3.91 9.09 4.25 9.5 4.25H14.5C14.91 4.25 15.25 3.91 15.25 3.5C15.25 3.09 14.91 2.75 14.5 2.75H9.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MilkTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 15V19C18 20.65 16.65 22 15 22H9C7.35 22 6 20.65 6 19V13.98L9.89001 14C10.62 14 11.34 14.17 12 14.5C12.66 14.83 13.38 15 14.12 15H18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M18 10.83V15H14.12C13.38 15 12.66 14.83 12 14.5C11.34 14.17 10.62 14 9.89001 14L6 13.98V10.83C6 10.37 6.26003 9.74 6.59003 9.41L8.71002 7.28999C8.89002 7.10999 9 6.85 9 6.59V5H15V6.59C15 6.85 15.11 7.10999 15.29 7.28999L17.41 9.41C17.74 9.74 18 10.37 18 10.83Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 16V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 14.98V13.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 5H9.5C8.67 5 8 4.32 8 3.5C8 2.68 8.67 2 9.5 2H14.5C15.33 2 16 2.68 16 3.5C16 4.32 15.33 5 14.5 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MilkBold,
  broken: MilkBroken,
  bulk: MilkBulk,
  linear: MilkLinear,
  outline: MilkOutline,
  twotone: MilkTwotone,
};

export const MilkIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
