import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const TagCrossBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.9997 3.75H10.2797C8.86969 3.75 7.52969 4.34 6.57969 5.39L3.04969 9.27C1.63969 10.82 1.63969 13.18 3.04969 14.73L6.57969 18.61C7.52969 19.65 8.86969 20.25 10.2797 20.25H16.9997C19.7597 20.25 21.9997 18.01 21.9997 15.25V8.75C21.9997 5.99 19.7597 3.75 16.9997 3.75ZM16.5297 13.94C16.8197 14.23 16.8197 14.71 16.5297 15C16.3797 15.15 16.1897 15.22 15.9997 15.22C15.8097 15.22 15.6197 15.15 15.4697 15L13.5297 13.06L11.5897 15C11.4397 15.15 11.2497 15.22 11.0597 15.22C10.8697 15.22 10.6797 15.15 10.5297 15C10.2397 14.71 10.2397 14.23 10.5297 13.94L12.4697 12L10.5297 10.06C10.2397 9.77 10.2397 9.29 10.5297 9C10.8197 8.71 11.2997 8.71 11.5897 9L13.5297 10.94L15.4697 9C15.7597 8.71 16.2397 8.71 16.5297 9C16.8197 9.29 16.8197 9.77 16.5297 10.06L14.5897 12L16.5297 13.94Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TagCrossBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.9197 3.75H10.2797C8.86969 3.75 7.52969 4.34 6.57969 5.39L3.04969 9.27C1.63969 10.82 1.63969 13.18 3.04969 14.73L6.57969 18.61C7.52969 19.65 8.86969 20.25 10.2797 20.25H16.9997C19.7597 20.25 21.9997 18.01 21.9997 15.25V8.75C21.9997 5.99 19.7597 3.75 16.9997 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.0005 14.47L11.0605 9.53003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M15.2109 10.32L16.0009 9.53003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M11.0605 14.4699L13.3405 12.1799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const TagCrossBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.2797 20.25H16.9997C19.7597 20.25 21.9997 18.01 21.9997 15.25V8.75C21.9997 5.99 19.7597 3.75 16.9997 3.75H10.2797C8.86969 3.75 7.52969 4.34 6.57969 5.39L3.04969 9.27C1.63969 10.82 1.63969 13.18 3.04969 14.73L6.57969 18.61C7.52969 19.66 8.86969 20.25 10.2797 20.25Z"
        fill="currentColor"
      />
      <Path
        d="M14.59 12L16.53 10.06C16.82 9.76997 16.82 9.28997 16.53 8.99997C16.24 8.70997 15.76 8.70997 15.47 8.99997L13.53 10.94L11.59 8.99997C11.3 8.70997 10.82 8.70997 10.53 8.99997C10.24 9.28997 10.24 9.76997 10.53 10.06L12.47 12L10.53 13.94C10.24 14.23 10.24 14.71 10.53 15C10.68 15.15 10.87 15.22 11.06 15.22C11.25 15.22 11.44 15.15 11.59 15L13.53 13.06L15.47 15C15.62 15.15 15.81 15.22 16 15.22C16.19 15.22 16.38 15.15 16.53 15C16.82 14.71 16.82 14.23 16.53 13.94L14.59 12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TagCrossLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.2801 20.25H17.0001C19.7601 20.25 22.0001 18.01 22.0001 15.25V8.75C22.0001 5.99 19.7601 3.75 17.0001 3.75H10.2801C8.87005 3.75 7.53005 4.34 6.58005 5.39L3.05005 9.27C1.64005 10.82 1.64005 13.18 3.05005 14.73L6.58005 18.61C7.53005 19.66 8.87005 20.25 10.2801 20.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.0001 14.47L11.0601 9.53003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M11.0601 14.47L16.0001 9.53003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const TagCrossOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.0002 21H10.2802C8.66023 21 7.11023 20.31 6.03023 19.12L2.50023 15.24C0.820234 13.4 0.820234 10.62 2.50023 8.77L6.03023 4.89C7.11023 3.69 8.66023 3 10.2802 3H17.0002C20.1702 3 22.7502 5.58 22.7502 8.75V15.25C22.7502 18.42 20.1702 21 17.0002 21ZM10.2802 4.5C9.09023 4.5 7.94023 5.01 7.14023 5.89L3.60023 9.78C2.45023 11.05 2.45023 12.96 3.60023 14.23L7.13023 18.11C7.93023 18.99 9.08024 19.5 10.2702 19.5H17.0002C19.3402 19.5 21.2502 17.59 21.2502 15.25V8.75C21.2502 6.41 19.3402 4.5 17.0002 4.5H10.2802Z"
        fill="currentColor"
      />
      <Path
        d="M16 15.22C15.81 15.22 15.62 15.15 15.47 15L10.53 10.05C10.24 9.75996 10.24 9.27996 10.53 8.98996C10.82 8.69996 11.3 8.69996 11.59 8.98996L16.53 13.94C16.82 14.23 16.82 14.71 16.53 15C16.38 15.15 16.19 15.22 16 15.22Z"
        fill="currentColor"
      />
      <Path
        d="M11.06 15.22C10.87 15.22 10.68 15.15 10.53 15C10.24 14.71 10.24 14.23 10.53 13.94L15.47 8.99997C15.76 8.70997 16.24 8.70997 16.53 8.99997C16.82 9.28997 16.82 9.76997 16.53 10.06L11.59 15C11.44 15.15 11.25 15.22 11.06 15.22Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TagCrossTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.2797 20.25H16.9997C19.7597 20.25 21.9997 18.01 21.9997 15.25V8.75C21.9997 5.99 19.7597 3.75 16.9997 3.75H10.2797C8.86969 3.75 7.52969 4.34 6.57969 5.39L3.04969 9.27C1.63969 10.82 1.63969 13.18 3.04969 14.73L6.57969 18.61C7.52969 19.66 8.86969 20.25 10.2797 20.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M16.0005 14.4703L11.0605 9.53027"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <Path
          d="M11.0605 14.4703L16.0005 9.53027"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TagCrossBold,
  broken: TagCrossBroken,
  bulk: TagCrossBulk,
  linear: TagCrossLinear,
  outline: TagCrossOutline,
  twotone: TagCrossTwotone,
};

export const TagCrossIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default TagCrossIcon;
