import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const MouseCircleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.9597 17.8385L19.3297 18.3885C18.8797 18.5385 18.5197 18.8885 18.3697 19.3485L17.8197 20.9785C17.3497 22.3885 15.3697 22.3585 14.9297 20.9485L13.0797 14.9985C12.7197 13.8185 13.8097 12.7185 14.9797 13.0885L20.9397 14.9385C22.3397 15.3785 22.3597 17.3685 20.9597 17.8385Z"
        fill="currentColor"
      />
      <Path
        d="M20.9994 11.4994C20.9994 11.9294 20.9694 12.3594 20.9194 12.7794C20.8794 13.0794 20.5694 13.2594 20.2794 13.1694L15.4294 11.6594C14.3494 11.3294 13.1994 11.6094 12.3994 12.3994C11.5994 13.1994 11.3094 14.3694 11.6494 15.4494L13.1494 20.2794C13.2394 20.5694 13.0494 20.8794 12.7494 20.9194C12.3294 20.9694 11.9194 20.9994 11.4994 20.9994C6.15942 20.9994 1.85942 16.6094 1.99942 11.2294C2.13942 6.26942 6.26942 2.13942 11.2294 1.99942C16.6094 1.85942 20.9994 6.15942 20.9994 11.4994Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MouseCircleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.9597 17.84L19.3297 18.39C18.8797 18.54 18.5197 18.89 18.3697 19.35L17.8197 20.98C17.3497 22.39 15.3697 22.36 14.9297 20.95L13.0797 15C12.7197 13.82 13.8097 12.72 14.9797 13.09L20.9397 14.94C22.3397 15.38 22.3597 17.37 20.9597 17.84Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.98 6.03003C2.74 7.70003 2 9.76003 2 12C2 17.52 6.48 22 12 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9998 12C21.9998 6.48 17.5198 2 11.9998 2C10.4798 2 9.04977 2.34 7.75977 2.94"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MouseCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.9597 17.84L19.3297 18.39C18.8797 18.54 18.5197 18.89 18.3697 19.35L17.8197 20.98C17.3497 22.39 15.3697 22.36 14.9297 20.95L13.0797 15C12.7197 13.82 13.8097 12.72 14.9797 13.09L20.9397 14.94C22.3397 15.38 22.3597 17.37 20.9597 17.84Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MouseCircleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.96 17.84L19.33 18.39C18.88 18.54 18.52 18.89 18.37 19.35L17.82 20.98C17.35 22.39 15.37 22.36 14.93 20.95L13.08 15C12.72 13.82 13.8101 12.72 14.9801 13.09L20.94 14.94C22.34 15.38 22.36 17.37 20.96 17.84Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MouseCircleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.3692 22.77C16.3592 22.77 16.3592 22.77 16.3492 22.77C15.3392 22.76 14.4992 22.14 14.1992 21.17L12.3492 15.22C12.0992 14.4 12.3092 13.52 12.9192 12.93C13.5192 12.34 14.3892 12.12 15.1892 12.37L21.1492 14.22C22.1092 14.52 22.7392 15.36 22.7492 16.37C22.7592 17.37 22.1492 18.22 21.1892 18.54L19.5592 19.09C19.3292 19.17 19.1492 19.34 19.0792 19.57L18.5192 21.21C18.2092 22.16 17.3692 22.77 16.3692 22.77ZM14.5092 13.77C14.2392 13.77 14.0592 13.92 13.9792 13.99C13.7692 14.2 13.6992 14.49 13.7892 14.78L15.6392 20.73C15.7992 21.24 16.2392 21.26 16.3792 21.27C16.5192 21.27 16.9492 21.23 17.1092 20.74L17.6692 19.1C17.8892 18.43 18.4292 17.9 19.0992 17.67L20.7292 17.12C21.2292 16.96 21.2592 16.52 21.2592 16.39C21.2592 16.26 21.2192 15.82 20.7192 15.66L14.7592 13.81C14.6592 13.78 14.5792 13.77 14.5092 13.77Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 12.41 22.41 12.75 22 12.75C21.59 12.75 21.25 12.41 21.25 12C21.25 6.9 17.1 2.75 12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C12.41 21.25 12.75 21.59 12.75 22C12.75 22.41 12.41 22.75 12 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MouseCircleTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.9597 17.84L19.3297 18.39C18.8797 18.54 18.5197 18.89 18.3697 19.35L17.8197 20.98C17.3497 22.39 15.3697 22.36 14.9297 20.95L13.0797 15C12.7197 13.82 13.8097 12.72 14.9797 13.09L20.9397 14.94C22.3397 15.38 22.3597 17.37 20.9597 17.84Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MouseCircleBold,
  broken: MouseCircleBroken,
  bulk: MouseCircleBulk,
  linear: MouseCircleLinear,
  outline: MouseCircleOutline,
  twotone: MouseCircleTwotone,
};

export const MouseCircleIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default MouseCircleIcon;
