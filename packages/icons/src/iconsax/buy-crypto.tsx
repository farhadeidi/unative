import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const BuyCryptoBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0001 8.5C22.0001 11.76 19.6001 14.45 16.4801 14.92V14.86C16.1701 10.98 13.0201 7.83 9.11008 7.52H9.08008C9.55008 4.4 12.2401 2 15.5001 2C19.0901 2 22.0001 4.91 22.0001 8.5Z"
        fill="currentColor"
      />
      <Path
        d="M14.98 14.98C14.73 11.81 12.19 9.27 9.02 9.02C8.85 9.01 8.67 9 8.5 9C4.91 9 2 11.91 2 15.5C2 19.09 4.91 22 8.5 22C12.09 22 15 19.09 15 15.5C15 15.33 14.99 15.15 14.98 14.98ZM9.38 16.38L8.5 18L7.62 16.38L6 15.5L7.62 14.62L8.5 13L9.38 14.62L11 15.5L9.38 16.38Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BuyCryptoBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.26999 9.01999 9.01999C9.00999 8.84999 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.67999 20.76C3.05999 19.58 2 17.66 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.00999 9.01999 9.01999C12.19 9.26999 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5C15 19.09 12.09 22 8.5 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.62 14.62L8.5 13L9.38 14.62L11 15.5L9.38 16.38L8.5 18L7.62 16.38L6 15.5L7.62 14.62Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BuyCryptoBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.27 9.01999 9.02C9.00999 8.85 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.01 9.01999 9.02C12.19 9.27 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z"
        fill="currentColor"
      />
      <Path
        d="M7.62 14.62L8.5 13L9.38 14.62L11 15.5L9.38 16.38L8.5 18L7.62 16.38L6 15.5L7.62 14.62Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BuyCryptoLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.26999 9.01999 9.01999C9.00999 8.84999 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.00999 9.01999 9.01999C12.19 9.26999 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.62 14.62L8.5 13L9.38 14.62L11 15.5L9.38 16.38L8.5 18L7.62 16.38L6 15.5L7.62 14.62Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BuyCryptoOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.4998 15.75C15.3198 15.75 15.1198 15.74 14.9398 15.73C14.5698 15.71 14.2697 15.41 14.2397 15.04C14.0197 12.25 11.7498 9.98999 8.96976 9.76999C8.59976 9.73999 8.29975 9.44001 8.27975 9.07001C8.26975 8.89001 8.25977 8.69001 8.25977 8.51001C8.25977 4.51001 11.5098 1.26001 15.5098 1.26001C19.5098 1.26001 22.7598 4.51001 22.7598 8.51001C22.7598 12.51 19.4998 15.75 15.4998 15.75ZM9.74976 8.35999C12.7298 8.88999 15.1198 11.27 15.6398 14.25C18.7498 14.17 21.2498 11.63 21.2498 8.5C21.2498 5.33 18.6698 2.75 15.4998 2.75C12.3798 2.75 9.82976 5.24999 9.74976 8.35999Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 22.75C4.5 22.75 1.25 19.5 1.25 15.5C1.25 11.5 4.5 8.25 8.5 8.25C8.68 8.25 8.88 8.25999 9.06 8.26999C12.59 8.54999 15.45 11.41 15.72 14.92C15.73 15.12 15.74 15.32 15.74 15.5C15.75 19.5 12.5 22.75 8.5 22.75ZM8.5 9.75C5.33 9.75 2.75 12.33 2.75 15.5C2.75 18.67 5.33 21.25 8.5 21.25C11.67 21.25 14.25 18.67 14.25 15.5C14.25 15.34 14.24 15.18 14.23 15.02C14.01 12.25 11.74 9.98001 8.95999 9.76001C8.81999 9.76001 8.66 9.75 8.5 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 18.75C8.23 18.75 7.97 18.6 7.84 18.36L7.06 16.94L5.64001 16.16C5.40001 16.03 5.25 15.78 5.25 15.5C5.25 15.22 5.40001 14.97 5.64001 14.84L7.06 14.06L7.84 12.64C8.1 12.16 8.89 12.16 9.16 12.64L9.94 14.06L11.36 14.84C11.6 14.97 11.75 15.22 11.75 15.5C11.75 15.78 11.6 16.03 11.36 16.16L9.94 16.94L9.16 18.36C9.03 18.6 8.77 18.75 8.5 18.75ZM7.56 15.5L7.97 15.73C8.1 15.8 8.19999 15.9 8.26999 16.03L8.5 16.44L8.73001 16.03C8.80001 15.9 8.9 15.8 9.03 15.73L9.44 15.5L9.03 15.27C8.9 15.2 8.80001 15.1 8.73001 14.97L8.5 14.56L8.26999 14.97C8.19999 15.1 8.1 15.2 7.97 15.27L7.56 15.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BuyCryptoTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.26999 9.01999 9.01999C9.00999 8.84999 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.00999 9.01999 9.01999C12.19 9.26999 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.62 14.62L8.5 13L9.38 14.62L11 15.5L9.38 16.38L8.5 18L7.62 16.38L6 15.5L7.62 14.62Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BuyCryptoBold,
  broken: BuyCryptoBroken,
  bulk: BuyCryptoBulk,
  linear: BuyCryptoLinear,
  outline: BuyCryptoOutline,
  twotone: BuyCryptoTwotone,
};

export const BuyCryptoIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default BuyCryptoIcon;
