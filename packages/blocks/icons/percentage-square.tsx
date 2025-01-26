import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const PercentageSquareBold = ({
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM7.75 9.14C7.75 8.33 8.41 7.66 9.23 7.66C10.04 7.66 10.71 8.32 10.71 9.14C10.71 9.95 10.05 10.62 9.23 10.62C8.41 10.61 7.75 9.95 7.75 9.14ZM8.82 16.02C8.63 16.02 8.44 15.95 8.29 15.8C8 15.51 8 15.04 8.29 14.74L14.84 8.19C15.13 7.9 15.61 7.9 15.9 8.19C16.19 8.48 16.19 8.96 15.9 9.25L9.35 15.8C9.2 15.95 9.01 16.02 8.82 16.02ZM15.77 16.34C14.96 16.34 14.29 15.68 14.29 14.86C14.29 14.05 14.95 13.38 15.77 13.38C16.58 13.38 17.25 14.04 17.25 14.86C17.25 15.68 16.59 16.34 15.77 16.34Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PercentageSquareBroken = ({
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
        d="M2 13.05V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.32031 15.27L14.8603 8.72998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.73001 10.3699C9.40932 10.3699 9.95999 9.81923 9.95999 9.13992C9.95999 8.46061 9.40932 7.90991 8.73001 7.90991C8.0507 7.90991 7.5 8.46061 7.5 9.13992C7.5 9.81923 8.0507 10.3699 8.73001 10.3699Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.269 16.0899C15.9484 16.0899 16.4991 15.5392 16.4991 14.8599C16.4991 14.1806 15.9484 13.6299 15.269 13.6299C14.5897 13.6299 14.0391 14.1806 14.0391 14.8599C14.0391 15.5392 14.5897 16.0899 15.269 16.0899Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PercentageSquareBulk = ({
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
        opacity="0.4"
        d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
        fill="currentColor"
      />
      <Path
        d="M8.81976 16.0201C8.62976 16.0201 8.43977 15.9501 8.28977 15.8001C7.99977 15.5101 7.99977 15.0301 8.28977 14.7401L14.8398 8.19016C15.1298 7.90016 15.6098 7.90016 15.8998 8.19016C16.1898 8.48016 16.1898 8.96015 15.8998 9.25015L9.34976 15.8001C9.19976 15.9501 9.00976 16.0201 8.81976 16.0201Z"
        fill="currentColor"
      />
      <Path
        d="M9.23001 7.66016C8.42001 7.66016 7.75 8.32017 7.75 9.14017C7.75 9.95017 8.41001 10.6201 9.23001 10.6201C10.04 10.6201 10.71 9.96017 10.71 9.14017C10.7 8.32017 10.04 7.66016 9.23001 7.66016Z"
        fill="currentColor"
      />
      <Path
        d="M15.769 13.3901C14.959 13.3901 14.2891 14.0501 14.2891 14.8701C14.2891 15.6801 14.949 16.3501 15.769 16.3501C16.579 16.3501 17.2491 15.6901 17.2491 14.8701C17.2491 14.0501 16.589 13.3901 15.769 13.3901Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PercentageSquareLinear = ({
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
        d="M9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.57007 15.27L15.11 8.72998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.98001 10.3699C9.65932 10.3699 10.21 9.81923 10.21 9.13992C10.21 8.46061 9.65932 7.90991 8.98001 7.90991C8.3007 7.90991 7.75 8.46061 7.75 9.13992C7.75 9.81923 8.3007 10.3699 8.98001 10.3699Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.52 16.0899C16.1993 16.0899 16.75 15.5392 16.75 14.8599C16.75 14.1806 16.1993 13.6299 15.52 13.6299C14.8407 13.6299 14.29 14.1806 14.29 14.8599C14.29 15.5392 14.8407 16.0899 15.52 16.0899Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PercentageSquareOutline = ({
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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
      <Path
        d="M8.56976 16.0201C8.37976 16.0201 8.18977 15.9501 8.03977 15.8001C7.74977 15.5101 7.74977 15.0301 8.03977 14.7401L14.5898 8.19016C14.8798 7.90016 15.3598 7.90016 15.6498 8.19016C15.9398 8.48016 15.9398 8.96015 15.6498 9.25015L9.09976 15.8001C8.94976 15.9501 8.75976 16.0201 8.56976 16.0201Z"
        fill="currentColor"
      />
      <Path
        d="M8.98001 11.1099C7.89001 11.1099 7 10.2199 7 9.12991C7 8.03991 7.89001 7.1499 8.98001 7.1499C10.07 7.1499 10.96 8.03991 10.96 9.12991C10.96 10.2199 10.07 11.1099 8.98001 11.1099ZM8.98001 8.65991C8.72001 8.65991 8.5 8.86992 8.5 9.13992C8.5 9.40992 8.71001 9.6199 8.98001 9.6199C9.25001 9.6199 9.45999 9.40992 9.45999 9.13992C9.45999 8.86992 9.24001 8.65991 8.98001 8.65991Z"
        fill="currentColor"
      />
      <Path
        d="M15.519 16.8399C14.429 16.8399 13.5391 15.9499 13.5391 14.8599C13.5391 13.7699 14.429 12.8799 15.519 12.8799C16.609 12.8799 17.4991 13.7699 17.4991 14.8599C17.4991 15.9499 16.609 16.8399 15.519 16.8399ZM15.519 14.3899C15.259 14.3899 15.0391 14.5999 15.0391 14.8699C15.0391 15.1399 15.249 15.3499 15.519 15.3499C15.789 15.3499 15.9991 15.1399 15.9991 14.8699C15.9991 14.5999 15.789 14.3899 15.519 14.3899Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PercentageSquareTwotone = ({
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
        d="M9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.32031 15.27L14.8603 8.72998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.73001 10.3701C9.40932 10.3701 9.95999 9.81948 9.95999 9.14017C9.95999 8.46086 9.40932 7.91016 8.73001 7.91016C8.0507 7.91016 7.5 8.46086 7.5 9.14017C7.5 9.81948 8.0507 10.3701 8.73001 10.3701Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.269 16.0899C15.9484 16.0899 16.4991 15.5392 16.4991 14.8599C16.4991 14.1806 15.9484 13.6299 15.269 13.6299C14.5897 13.6299 14.0391 14.1806 14.0391 14.8599C14.0391 15.5392 14.5897 16.0899 15.269 16.0899Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: PercentageSquareBold,
  broken: PercentageSquareBroken,
  bulk: PercentageSquareBulk,
  linear: PercentageSquareLinear,
  outline: PercentageSquareOutline,
  twotone: PercentageSquareTwotone,
};

export const PercentageSquareIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
