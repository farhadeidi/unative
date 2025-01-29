import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const DirectUpBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.0192 21.2916L13.5392 19.5516C12.5692 19.0716 11.4392 19.0716 10.4692 19.5516L6.98918 21.2916C3.99918 22.7816 0.84918 19.5716 2.40918 16.6216L3.22918 15.0816C3.33918 14.8716 3.51918 14.7016 3.73918 14.6016L16.3792 8.90164C16.8992 8.67164 17.5092 8.88164 17.7692 9.38164L21.5792 16.6216C23.1392 19.5716 19.9992 22.7816 17.0192 21.2916Z"
        fill="currentColor"
      />
      <Path
        d="M15.6004 7.68953L7.32045 11.4195C6.39045 11.8395 5.45045 10.8395 5.93045 9.93953L8.97045 4.16953C10.2604 1.71953 13.7604 1.71953 15.0504 4.16953L16.1204 6.20953C16.4004 6.75953 16.1604 7.43953 15.6004 7.68953Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectUpBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.06931 16.3C1.61931 19.05 4.54931 22.04 7.32931 20.65L10.5693 19.03C11.4693 18.58 12.5293 18.58 13.4293 19.03L16.6693 20.65C19.4493 22.04 22.3693 19.05 20.9293 16.3L14.8293 4.71C13.6293 2.43 10.3693 2.43 9.16931 4.71L5.49931 11.68"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectUpBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.0192 21.2902L13.5392 19.5502C12.5692 19.0702 11.4392 19.0702 10.4692 19.5502L6.98918 21.2902C3.99918 22.7802 0.84918 19.5702 2.40918 16.6202L3.22918 15.0802C3.33918 14.8702 3.51918 14.7002 3.73918 14.6002L16.3792 8.90017C16.8992 8.67017 17.5092 8.88017 17.7692 9.38017L21.5792 16.6202C23.1392 19.5702 19.9992 22.7802 17.0192 21.2902Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15.6004 7.69002L7.32045 11.42C6.39045 11.84 5.45045 10.84 5.93045 9.94002L8.97045 4.17002C10.2604 1.72002 13.7604 1.72002 15.0504 4.17002L16.1204 6.21002C16.4004 6.76002 16.1604 7.44002 15.6004 7.69002Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectUpLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.17005 4.71L3.07005 16.3C1.62005 19.05 4.55005 22.04 7.33005 20.65L10.57 19.03C11.47 18.58 12.53 18.58 13.43 19.03L16.67 20.65C19.45 22.04 22.37 19.05 20.93 16.3L14.83 4.71C13.63 2.43 10.37 2.43 9.17005 4.71Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectUpOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.1198 21.75C17.5198 21.75 16.9098 21.61 16.3298 21.32L13.0898 19.7C12.4098 19.36 11.5898 19.36 10.8998 19.7L7.65985 21.32C6.09985 22.1 4.29985 21.8 3.07985 20.55C1.85985 19.3 1.58985 17.5 2.40985 15.95L8.50985 4.36C9.18985 3.06 10.5298 2.25 11.9998 2.25C13.4698 2.25 14.8098 3.06 15.4898 4.36L21.5898 15.95C22.3998 17.5 22.1398 19.3 20.9198 20.55C20.1498 21.34 19.1498 21.75 18.1198 21.75ZM11.9998 17.94C12.6098 17.94 13.2098 18.08 13.7598 18.35L16.9998 19.97C18.1698 20.56 19.2398 20.11 19.8398 19.49C20.4398 18.87 20.8698 17.8 20.2598 16.64L14.1598 5.05C13.7298 4.24 12.9198 3.75 11.9998 3.75C11.0798 3.75 10.2698 4.24 9.83985 5.06L3.73985 16.65C3.12985 17.81 3.54985 18.89 4.15985 19.5C4.76985 20.11 5.82985 20.56 6.99985 19.98L10.2398 18.36C10.7898 18.08 11.3898 17.94 11.9998 17.94Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectUpTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.16931 4.71L3.06931 16.3C1.61931 19.05 4.54931 22.04 7.32931 20.65L10.5693 19.03C11.4693 18.58 12.5293 18.58 13.4293 19.03L16.6693 20.65C19.4493 22.04 22.3693 19.05 20.9293 16.3L14.8293 4.71C13.6293 2.43 10.3693 2.43 9.16931 4.71Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DirectUpBold,
  broken: DirectUpBroken,
  bulk: DirectUpBulk,
  linear: DirectUpLinear,
  outline: DirectUpOutline,
  twotone: DirectUpTwotone,
};

export const DirectUpIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default DirectUpIcon;
