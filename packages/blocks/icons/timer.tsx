import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const TimerBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.3895 15.67L13.3495 12H10.6395L6.59949 15.67C5.46949 16.69 5.09949 18.26 5.64949 19.68C6.19949 21.09 7.53949 22 9.04949 22H14.9395C16.4595 22 17.7895 21.09 18.3395 19.68C18.8895 18.26 18.5195 16.69 17.3895 15.67ZM13.8195 18.14H10.1795C9.79949 18.14 9.49949 17.83 9.49949 17.46C9.49949 17.09 9.80949 16.78 10.1795 16.78H13.8195C14.1995 16.78 14.4995 17.09 14.4995 17.46C14.4995 17.83 14.1895 18.14 13.8195 18.14Z"
        fill="currentColor"
      />
      <Path
        d="M18.3506 4.32C17.8006 2.91 16.4606 2 14.9506 2H9.05065C7.54065 2 6.20065 2.91 5.65065 4.32C5.11065 5.74 5.48065 7.31 6.61065 8.33L10.6506 12H13.3606L17.4006 8.33C18.5206 7.31 18.8906 5.74 18.3506 4.32ZM13.8206 7.23H10.1806C9.80065 7.23 9.50065 6.92 9.50065 6.55C9.50065 6.18 9.81065 5.87 10.1806 5.87H13.8206C14.2006 5.87 14.5006 6.18 14.5006 6.55C14.5006 6.92 14.1906 7.23 13.8206 7.23Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TimerBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.60906 9.83L17.2591 16.78C19.2891 18.62 18.9991 22 15.2391 22H8.75906C4.99906 22 4.70906 18.62 6.73906 16.78L17.2591 7.22C19.2891 5.38 18.9991 2 15.2391 2H8.75906C4.99906 2 4.70906 5.38 6.73906 7.22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TimerBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.3495 19.68C17.7995 21.09 16.4595 22 14.9495 22H9.04949C7.52949 22 6.19949 21.09 5.64949 19.68C5.09949 18.26 5.47949 16.69 6.59949 15.67L10.6495 12H13.3595L17.3995 15.67C18.5195 16.69 18.8895 18.26 18.3495 19.68Z"
        fill="currentColor"
      />
      <Path
        d="M13.82 18.14H10.18C9.8 18.14 9.5 17.83 9.5 17.46C9.5 17.08 9.81 16.78 10.18 16.78H13.82C14.2 16.78 14.5 17.09 14.5 17.46C14.5 17.83 14.19 18.14 13.82 18.14Z"
        fill="currentColor"
      />
      <Path
        d="M18.3506 4.32C17.8006 2.91 16.4606 2 14.9506 2H9.05065C7.54065 2 6.20065 2.91 5.65065 4.32C5.11065 5.74 5.48065 7.31 6.61065 8.33L10.6506 12H13.3606L17.4006 8.33C18.5206 7.31 18.8906 5.74 18.3506 4.32ZM13.8206 7.23H10.1806C9.80065 7.23 9.50065 6.92 9.50065 6.55C9.50065 6.18 9.81065 5.87 10.1806 5.87H13.8206C14.2006 5.87 14.5006 6.18 14.5006 6.55C14.5006 6.92 14.1906 7.23 13.8206 7.23Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TimerLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.24 2H8.76004C5.00004 2 4.71004 5.38 6.74004 7.22L17.26 16.78C19.29 18.62 19 22 15.24 22H8.76004C5.00004 22 4.71004 18.62 6.74004 16.78L17.26 7.22C19.29 5.38 19 2 15.24 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TimerOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.2398 22.75H8.75982C6.86982 22.75 5.48982 21.96 4.95982 20.6C4.40982 19.18 4.91982 17.42 6.23982 16.23L10.8798 12L6.23982 7.77C4.91982 6.58 4.40982 4.82 4.95982 3.4C5.48982 2.03 6.86982 1.25 8.75982 1.25H15.2398C17.1298 1.25 18.5098 2.04 19.0398 3.4C19.5898 4.82 19.0798 6.58 17.7598 7.77L13.1198 12L17.7698 16.23C19.0798 17.42 19.5998 19.18 19.0498 20.6C18.5098 21.96 17.1298 22.75 15.2398 22.75ZM11.9998 13.01L7.24982 17.33C6.40982 18.1 6.03982 19.22 6.35982 20.05C6.65982 20.82 7.50982 21.25 8.75982 21.25H15.2398C16.4898 21.25 17.3398 20.83 17.6398 20.05C17.9598 19.22 17.5998 18.1 16.7498 17.33L11.9998 13.01ZM8.75982 2.75C7.50982 2.75 6.65982 3.17 6.35982 3.95C6.03982 4.78 6.39982 5.9 7.24982 6.67L11.9998 10.99L16.7498 6.67C17.5898 5.9 17.9598 4.78 17.6398 3.95C17.3398 3.18 16.4898 2.75 15.2398 2.75H8.75982Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TimerTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.24 2H8.76004C5.00004 2 4.71004 5.38 6.74004 7.22L17.26 16.78C19.29 18.62 19 22 15.24 22H8.76004C5.00004 22 4.71004 18.62 6.74004 16.78L17.26 7.22C19.29 5.38 19 2 15.24 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TimerBold,
  broken: TimerBroken,
  bulk: TimerBulk,
  linear: TimerLinear,
  outline: TimerOutline,
  twotone: TimerTwotone,
};

export const TimerIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
