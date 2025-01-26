import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const PercentageCircleBold = ({
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8.73 7.66C9.54 7.66 10.21 8.32 10.21 9.14C10.21 9.95 9.55 10.62 8.73 10.62C7.92 10.62 7.25 9.96 7.25 9.14C7.25 8.32 7.91 7.66 8.73 7.66ZM8.85 15.8C8.7 15.95 8.51 16.02 8.32 16.02C8.13 16.02 7.94 15.95 7.79 15.8C7.5 15.51 7.5 15.03 7.79 14.74L14.34 8.19C14.63 7.9 15.11 7.9 15.4 8.19C15.69 8.48 15.69 8.96 15.4 9.25L8.85 15.8ZM15.27 16.34C14.46 16.34 13.79 15.68 13.79 14.86C13.79 14.05 14.45 13.38 15.27 13.38C16.08 13.38 16.75 14.04 16.75 14.86C16.75 15.68 16.09 16.34 15.27 16.34Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PercentageCircleBroken = ({
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
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.30001 7.97 2.85001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PercentageCircleBulk = ({
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <Path
        d="M8.31976 16.0201C8.12976 16.0201 7.93977 15.9501 7.78977 15.8001C7.49977 15.5101 7.49977 15.0301 7.78977 14.7401L14.3398 8.19016C14.6298 7.90016 15.1098 7.90016 15.3998 8.19016C15.6898 8.48016 15.6898 8.96015 15.3998 9.25015L8.84976 15.8001C8.69976 15.9501 8.50976 16.0201 8.31976 16.0201Z"
        fill="currentColor"
      />
      <Path
        d="M8.73001 7.66016C7.92001 7.66016 7.25 8.32017 7.25 9.14017C7.25 9.95017 7.91001 10.6201 8.73001 10.6201C9.54001 10.6201 10.21 9.96017 10.21 9.14017C10.2 8.32017 9.54001 7.66016 8.73001 7.66016Z"
        fill="currentColor"
      />
      <Path
        d="M15.269 13.3901C14.459 13.3901 13.7891 14.0501 13.7891 14.8701C13.7891 15.6801 14.449 16.3501 15.269 16.3501C16.079 16.3501 16.7491 15.6901 16.7491 14.8701C16.7491 14.0501 16.089 13.3901 15.269 13.3901Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PercentageCircleLinear = ({
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
      <Path
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PercentageCircleOutline = ({
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
      <Path
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PercentageCircleTwotone = ({
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
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: PercentageCircleBold,
  broken: PercentageCircleBroken,
  bulk: PercentageCircleBulk,
  linear: PercentageCircleLinear,
  outline: PercentageCircleOutline,
  twotone: PercentageCircleTwotone,
};

export const PercentageCircleIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
