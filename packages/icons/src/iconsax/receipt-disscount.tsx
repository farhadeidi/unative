import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ReceiptDisscountBold = ({
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
        d="M15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.96 4.96 21.59 6.73 19.69L6.74 19.68C7.56 18.81 8.81 18.88 9.52 19.83L10.53 21.18C11.34 22.25 12.65 22.25 13.46 21.18L14.47 19.83C15.19 18.87 16.44 18.8 17.26 19.68C19.04 21.58 20.49 20.95 20.49 18.29V7.04C20.5 3.01 19.56 2 15.78 2ZM9 7C9.55 7 10 7.45 10 8C10 8.55 9.56 9 9 9C8.44 9 8 8.55 8 8C8 7.45 8.44 7 9 7ZM15 14C14.44 14 14 13.55 14 13C14 12.45 14.45 12 15 12C15.55 12 16 12.45 16 13C16 13.55 15.56 14 15 14ZM15.9 7.59L9.17 14.32C9.02 14.47 8.83 14.54 8.64 14.54C8.45 14.54 8.26 14.47 8.11 14.32C7.82 14.03 7.82 13.55 8.11 13.26L14.84 6.53C15.13 6.24 15.61 6.24 15.9 6.53C16.19 6.82 16.19 7.3 15.9 7.59Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptDisscountBroken = ({
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
        d="M20.5 7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.96 4.96 21.59 6.73 19.69L6.74 19.68C7.56 18.81 8.81 18.88 9.52 19.83L10.53 21.18C11.34 22.25 12.65 22.25 13.46 21.18L14.47 19.83C15.19 18.87 16.44 18.8 17.26 19.68C19.04 21.58 20.49 20.95 20.49 18.29V11.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.63086 13.8001L15.3609 7.07007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 13L15 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9945 13H15.0035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.99451 7.5H9.00349"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ReceiptDisscountBulk = ({
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
        d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z"
        fill="currentColor"
      />
      <Path
        d="M15 14C14.44 14 14 13.55 14 13C14 12.45 14.45 12 15 12C15.55 12 16 12.45 16 13C16 13.55 15.56 14 15 14Z"
        fill="currentColor"
      />
      <Path
        d="M9 9C8.44 9 8 8.55 8 8C8 7.45 8.45 7 9 7C9.55 7 10 7.45 10 8C10 8.55 9.56 9 9 9Z"
        fill="currentColor"
      />
      <Path
        d="M8.63031 14.5498C8.44031 14.5498 8.25031 14.4798 8.10031 14.3298C7.81031 14.0398 7.81031 13.5598 8.10031 13.2698L14.8303 6.53977C15.1203 6.24977 15.6003 6.24977 15.8903 6.53977C16.1803 6.82977 16.1803 7.30977 15.8903 7.59977L9.16031 14.3298C9.02031 14.4798 8.82031 14.5498 8.63031 14.5498Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptDisscountLinear = ({
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
        d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 13L15 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9945 13H15.0035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.99451 7.5H9.00349"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ReceiptDisscountOutline = ({
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
        d="M12 22.75C11.21 22.75 10.46 22.35 9.94 21.64L8.93 20.29C8.72 20.01 8.44 19.85 8.14 19.83C7.84 19.81 7.54 19.95 7.3 20.2L6.73 19.7L7.28 20.21C5.83 21.75 4.73 21.63 4.2 21.42C3.66 21.21 2.75 20.52 2.75 18.3V7.04C2.75 2.6 4.03 1.25 8.22 1.25H15.77C19.96 1.25 21.24 2.6 21.24 7.04V18.3C21.24 20.51 20.33 21.2 19.79 21.42C19.26 21.63 18.16 21.75 16.71 20.21C16.47 19.95 16.16 19.82 15.86 19.84C15.56 19.86 15.27 20.02 15.06 20.3L14.05 21.65C13.54 22.35 12.79 22.75 12 22.75ZM8.08 18.33C8.12 18.33 8.17 18.33 8.21 18.33C8.95 18.37 9.65 18.76 10.12 19.39L11.14 20.74C11.63 21.39 12.38 21.39 12.87 20.74L13.88 19.39C14.35 18.76 15.05 18.37 15.8 18.33C16.55 18.29 17.28 18.6 17.82 19.18C18.58 19.99 19.07 20.09 19.25 20.02C19.49 19.92 19.75 19.34 19.75 18.3V7.04C19.75 3.43 19.12 2.75 15.78 2.75H8.22C4.88 2.75 4.25 3.43 4.25 7.04V18.3C4.25 19.35 4.51 19.93 4.75 20.02C4.93 20.09 5.42 19.99 6.18 19.18C6.7 18.63 7.38 18.33 8.08 18.33Z"
        fill="currentColor"
      />
      <Path
        d="M15 14C14.44 14 14 13.55 14 13C14 12.45 14.45 12 15 12C15.55 12 16 12.45 16 13C16 13.55 15.56 14 15 14Z"
        fill="currentColor"
      />
      <Path
        d="M9 9C8.44 9 8 8.55 8 8C8 7.45 8.45 7 9 7C9.55 7 10 7.45 10 8C10 8.55 9.56 9 9 9Z"
        fill="currentColor"
      />
      <Path
        d="M8.63031 14.5498C8.44031 14.5498 8.25031 14.4798 8.10031 14.3298C7.81031 14.0398 7.81031 13.5598 8.10031 13.2698L14.8303 6.53977C15.1203 6.24977 15.6003 6.24977 15.8903 6.53977C16.1803 6.82977 16.1803 7.30977 15.8903 7.59977L9.16031 14.3298C9.02031 14.4798 8.83031 14.5498 8.63031 14.5498Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiptDisscountTwotone = ({
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
        d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9 13L15 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M14.9945 13H15.0035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.99451 7.5H9.00349"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ReceiptDisscountBold,
  broken: ReceiptDisscountBroken,
  bulk: ReceiptDisscountBulk,
  linear: ReceiptDisscountLinear,
  outline: ReceiptDisscountOutline,
  twotone: ReceiptDisscountTwotone,
};

export const ReceiptDisscountIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ReceiptDisscountIcon;
