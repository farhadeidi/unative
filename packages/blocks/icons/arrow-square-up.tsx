import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const ArrowSquareUpBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.06 14C15.91 14.15 15.72 14.22 15.53 14.22C15.34 14.22 15.15 14.14 15 14L12 11L9 14C8.71 14.29 8.23 14.29 7.94 14C7.65 13.71 7.65 13.23 7.94 12.94L11.47 9.41C11.76 9.12 12.24 9.12 12.53 9.41L16.06 12.94C16.35 13.23 16.35 13.7 16.06 14Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArrowSquareUpBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13.04V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.4707 13.4599L12.0007 9.93994L15.5307 13.4599"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ArrowSquareUpBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <Path
        d="M15.5302 14.2101C15.3402 14.2101 15.1502 14.1401 15.0002 13.9901L12.0002 10.9901L9.00016 13.9901C8.71016 14.2801 8.23016 14.2801 7.94016 13.9901C7.65016 13.7001 7.65016 13.2201 7.94016 12.9301L11.4702 9.40012C11.7602 9.11012 12.2402 9.11012 12.5302 9.40012L16.0602 12.9301C16.3502 13.2201 16.3502 13.7001 16.0602 13.9901C15.9102 14.1401 15.7202 14.2101 15.5302 14.2101Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArrowSquareUpLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.46997 13.4599L12 9.93994L15.53 13.4599"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ArrowSquareUpOutline = ({
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
        d="M15.5302 14.2101C15.3402 14.2101 15.1502 14.1401 15.0002 13.9901L12.0002 10.9901L9.00016 13.9901C8.71016 14.2801 8.23016 14.2801 7.94016 13.9901C7.65016 13.7001 7.65016 13.2201 7.94016 12.9301L11.4702 9.40012C11.7602 9.11012 12.2402 9.11012 12.5302 9.40012L16.0602 12.9301C16.3502 13.2201 16.3502 13.7001 16.0602 13.9901C15.9102 14.1401 15.7202 14.2101 15.5302 14.2101Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ArrowSquareUpTwotone = ({
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.4707 13.4599L12.0007 9.93994L15.5307 13.4599"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ArrowSquareUpBold,
  broken: ArrowSquareUpBroken,
  bulk: ArrowSquareUpBulk,
  linear: ArrowSquareUpLinear,
  outline: ArrowSquareUpOutline,
  twotone: ArrowSquareUpTwotone,
};

export const ArrowSquareUpIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
