import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const TransactionMinusBold = ({
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
        d="M15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.96 4.96 21.59 6.73 19.69L6.74 19.68C7.56 18.81 8.81 18.88 9.52 19.83L10.53 21.18C11.34 22.25 12.65 22.25 13.46 21.18L14.47 19.83C15.19 18.87 16.44 18.8 17.26 19.68C19.04 21.58 20.49 20.95 20.49 18.29V7.04C20.5 3.01 19.56 2 15.78 2ZM14.75 10.75H9.25C8.84 10.75 8.5 10.41 8.5 10C8.5 9.59 8.84 9.25 9.25 9.25H14.75C15.16 9.25 15.5 9.59 15.5 10C15.5 10.41 15.16 10.75 14.75 10.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TransactionMinusBroken = ({
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
        d="M14.1602 10H14.7502"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.25 10H11.65"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.50023 11V18.3C3.50023 20.96 4.96022 21.59 6.73022 19.69L6.74023 19.68C7.56023 18.81 8.81023 18.88 9.52023 19.83L10.5302 21.18C11.3402 22.25 12.6502 22.25 13.4602 21.18L14.4702 19.83C15.1902 18.87 16.4402 18.8 17.2602 19.68C19.0402 21.58 20.4902 20.95 20.4902 18.29V7.04C20.4902 3.01 19.5502 2 15.7702 2H8.21024C4.43024 2 3.49023 3.01 3.49023 7.04"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TransactionMinusBulk = ({
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
        d="M6.73022 19.7C7.55022 18.82 8.80023 18.89 9.52023 19.85L10.5302 21.2C11.3402 22.27 12.6502 22.27 13.4602 21.2L14.4702 19.85C15.1902 18.89 16.4402 18.82 17.2602 19.7C19.0402 21.6 20.4902 20.97 20.4902 18.31V7.04C20.4902 3.01 19.5502 2 15.7702 2H8.21024C4.43024 2 3.49023 3.01 3.49023 7.04V18.3C3.50023 20.97 4.96022 21.59 6.73022 19.7Z"
        fill="currentColor"
      />
      <Path
        d="M14.75 10.75H9.25C8.84 10.75 8.5 10.41 8.5 10C8.5 9.59 8.84 9.25 9.25 9.25H14.75C15.16 9.25 15.5 9.59 15.5 10C15.5 10.41 15.16 10.75 14.75 10.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TransactionMinusLinear = ({
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
        d="M6.72827 19.7C7.54827 18.82 8.79828 18.89 9.51828 19.85L10.5283 21.2C11.3383 22.27 12.6483 22.27 13.4583 21.2L14.4683 19.85C15.1883 18.89 16.4383 18.82 17.2583 19.7C19.0383 21.6 20.4883 20.97 20.4883 18.31V7.04C20.4883 3.01 19.5483 2 15.7683 2H8.20828C4.42828 2 3.48828 3.01 3.48828 7.04V18.3C3.49828 20.97 4.95827 21.59 6.72827 19.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.25 10H14.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TransactionMinusOutline = ({
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
        d="M11.9995 22.75C11.2195 22.75 10.4595 22.35 9.93953 21.65L8.92952 20.3C8.71952 20.02 8.43953 19.86 8.13953 19.84C7.83953 19.83 7.53953 19.96 7.29953 20.21L6.74953 19.7L7.29953 20.21C5.85953 21.75 4.74953 21.63 4.21953 21.42C3.67953 21.21 2.76953 20.52 2.76953 18.3V7.04C2.76953 2.6 4.04953 1.25 8.23953 1.25H15.7995C19.9895 1.25 21.2695 2.6 21.2695 7.04V18.3C21.2695 20.51 20.3595 21.2 19.8195 21.42C19.2895 21.63 18.1895 21.75 16.7395 20.21C16.4995 19.95 16.1995 19.82 15.8895 19.84C15.5895 19.86 15.2995 20.02 15.0895 20.3L14.0795 21.65C13.5395 22.35 12.7795 22.75 11.9995 22.75ZM8.07953 18.33C8.11953 18.33 8.16953 18.33 8.20953 18.33C8.94953 18.37 9.64952 18.76 10.1195 19.39L11.1295 20.74C11.6195 21.39 12.3695 21.39 12.8595 20.74L13.8695 19.39C14.3495 18.76 15.0395 18.37 15.7895 18.33C16.5395 18.29 17.2695 18.6 17.8095 19.18C18.5695 19.99 19.0595 20.09 19.2395 20.02C19.4795 19.92 19.7395 19.34 19.7395 18.3V7.04C19.7395 3.43 19.1095 2.75 15.7695 2.75H8.20953C4.86953 2.75 4.23953 3.43 4.23953 7.04V18.3C4.23953 19.35 4.49953 19.93 4.73953 20.02C4.90953 20.09 5.40953 19.99 6.16953 19.18C6.71953 18.63 7.38953 18.33 8.07953 18.33Z"
        fill="currentColor"
      />
      <Path
        d="M14.75 10.75H9.25C8.84 10.75 8.5 10.41 8.5 10C8.5 9.59 8.84 9.25 9.25 9.25H14.75C15.16 9.25 15.5 9.59 15.5 10C15.5 10.41 15.16 10.75 14.75 10.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TransactionMinusTwotone = ({
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
        d="M6.73022 19.7C7.55022 18.82 8.80023 18.89 9.52023 19.85L10.5302 21.2C11.3402 22.27 12.6502 22.27 13.4602 21.2L14.4702 19.85C15.1902 18.89 16.4402 18.82 17.2602 19.7C19.0402 21.6 20.4902 20.97 20.4902 18.31V7.04C20.4902 3.01 19.5502 2 15.7702 2H8.21024C4.43024 2 3.49023 3.01 3.49023 7.04V18.3C3.50023 20.97 4.96022 21.59 6.73022 19.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.25 10H14.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TransactionMinusBold,
  broken: TransactionMinusBroken,
  bulk: TransactionMinusBulk,
  linear: TransactionMinusLinear,
  outline: TransactionMinusOutline,
  twotone: TransactionMinusTwotone,
};

export const TransactionMinusIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
