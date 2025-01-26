import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const SignpostBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.3398 14.13L16.1598 12.38C15.8498 12.14 15.4598 12 15.0598 12H12.7498V9H17.2198C18.1898 9 18.9698 8.22 18.9698 7.25V3.75C18.9698 2.78 18.1898 2 17.2198 2H8.95984C8.56984 2 8.17984 2.14 7.86984 2.38L5.67984 4.13C4.80984 4.83 4.80984 6.17 5.67984 6.87L7.86984 8.62C8.17984 8.86 8.56984 9 8.95984 9H11.2498V12H6.79984C5.82984 12 5.04984 12.78 5.04984 13.75V17.25C5.04984 18.22 5.82984 19 6.79984 19H11.2498V21.25H8.99984C8.58984 21.25 8.24984 21.59 8.24984 22C8.24984 22.41 8.58984 22.75 8.99984 22.75H14.9998C15.4098 22.75 15.7498 22.41 15.7498 22C15.7498 21.59 15.4098 21.25 14.9998 21.25H12.7498V19H15.0598C15.4598 19 15.8498 18.86 16.1598 18.62L18.3398 16.87C19.2198 16.17 19.2198 14.83 18.3398 14.13Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SignpostBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.0296 2H8.95956C8.55956 2 8.17953 2.14 7.86953 2.38L5.67953 4.13C4.79953 4.83 4.79953 6.15999 5.67953 6.85999L7.86953 8.60999C8.17953 8.85999 8.56956 8.98999 8.95956 8.98999H17.2195C18.1895 8.98999 18.9695 8.20999 18.9695 7.23999V3.73999C18.9695 2.76999 18.1895 1.98999 17.2195 1.98999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.80078 12H15.0608C15.4608 12 15.8408 12.14 16.1508 12.38L18.3408 14.13C19.2208 14.83 19.2208 16.16 18.3408 16.86L16.1508 18.61C15.8408 18.86 15.4508 18.99 15.0608 18.99H6.80078C5.83078 18.99 5.05078 18.21 5.05078 17.24V13.74C5.05078 12.78 5.83078 12 6.80078 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 12V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22V19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SignpostBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.9698 3.75V7.25C18.9698 8.22 18.1898 9 17.2198 9H8.95987C8.56987 9 8.17985 8.85999 7.86985 8.62L5.67984 6.87C4.80984 6.17 4.80984 4.83 5.67984 4.13L7.86985 2.38C8.17985 2.14 8.56987 2 8.95987 2H17.2198C18.1898 2 18.9698 2.78 18.9698 3.75Z"
        fill="currentColor"
      />
      <Path
        d="M18.3408 16.87L16.1608 18.62C15.8508 18.86 15.4608 19 15.0608 19H6.80078C5.83078 19 5.05078 18.22 5.05078 17.25V13.75C5.05078 12.78 5.83078 12 6.80078 12H15.0608C15.4608 12 15.8508 12.14 16.1608 12.38L18.3408 14.13C19.2208 14.83 19.2208 16.17 18.3408 16.87Z"
        fill="currentColor"
      />
      <Path opacity="0.4" d="M12.75 9H11.25V12H12.75V9Z" fill="currentColor" />
      <Path
        opacity="0.4"
        d="M15.75 22C15.75 22.41 15.41 22.75 15 22.75H9C8.59 22.75 8.25 22.41 8.25 22C8.25 21.59 8.59 21.25 9 21.25H11.25V19H12.75V21.25H15C15.41 21.25 15.75 21.59 15.75 22Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SignpostLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.22 2H8.96005C8.56005 2 8.18002 2.14 7.87002 2.38L5.68002 4.13C4.80002 4.83 4.80002 6.15999 5.68002 6.85999L7.87002 8.60999C8.18002 8.85999 8.57005 8.98999 8.96005 8.98999H17.22C18.19 8.98999 18.97 8.20999 18.97 7.23999V3.73999C18.97 2.77999 18.19 2 17.22 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.79999 12H15.06C15.46 12 15.84 12.14 16.15 12.38L18.34 14.13C19.22 14.83 19.22 16.16 18.34 16.86L16.15 18.61C15.84 18.86 15.45 18.99 15.06 18.99H6.79999C5.82999 18.99 5.04999 18.21 5.04999 17.24V13.74C5.04999 12.78 5.82999 12 6.79999 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 12V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22V19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SignpostOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.2195 9.75H8.95953C8.39953 9.75 7.83954 9.56001 7.39954 9.20001L5.20953 7.45001C4.60953 6.97001 4.26953 6.26 4.26953 5.5C4.26953 4.74 4.60953 4.01999 5.20953 3.54999L7.39954 1.79999C7.83954 1.44999 8.39953 1.25 8.95953 1.25H17.2195C18.5995 1.25 19.7195 2.37 19.7195 3.75V7.25C19.7195 8.63 18.5995 9.75 17.2195 9.75ZM8.95953 2.75C8.72953 2.75 8.50954 2.83 8.33954 2.97L6.14954 4.72C5.90954 4.91 5.76953 5.2 5.76953 5.5C5.76953 5.8 5.90954 6.09 6.14954 6.28L8.33954 8.03C8.51954 8.17 8.73953 8.25 8.95953 8.25H17.2195C17.7695 8.25 18.2195 7.8 18.2195 7.25V3.75C18.2195 3.2 17.7695 2.75 17.2195 2.75H8.95953Z"
        fill="currentColor"
      />
      <Path
        d="M15.0608 19.75H6.80078C5.42078 19.75 4.30078 18.63 4.30078 17.25V13.75C4.30078 12.37 5.42078 11.25 6.80078 11.25H15.0608C15.6308 11.25 16.1808 11.44 16.6208 11.8L18.8108 13.55C19.4108 14.03 19.7508 14.74 19.7508 15.5C19.7508 16.26 19.4108 16.98 18.8108 17.45L16.6208 19.2C16.1808 19.56 15.6308 19.75 15.0608 19.75ZM6.80078 12.75C6.25078 12.75 5.80078 13.2 5.80078 13.75V17.25C5.80078 17.8 6.25078 18.25 6.80078 18.25H15.0608C15.2908 18.25 15.5108 18.17 15.6808 18.03L17.8708 16.28C18.1108 16.09 18.2508 15.8 18.2508 15.5C18.2508 15.2 18.1108 14.91 17.8708 14.72L15.6808 12.97C15.5008 12.83 15.2808 12.75 15.0608 12.75H6.80078Z"
        fill="currentColor"
      />
      <Path
        d="M12 12.75C11.59 12.75 11.25 12.41 11.25 12V9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9V12C12.75 12.41 12.41 12.75 12 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V19C11.25 18.59 11.59 18.25 12 18.25C12.41 18.25 12.75 18.59 12.75 19V22C12.75 22.41 12.41 22.75 12 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C8.59 22.75 8.25 22.41 8.25 22C8.25 21.59 8.59 21.25 9 21.25H15C15.41 21.25 15.75 21.59 15.75 22C15.75 22.41 15.41 22.75 15 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SignpostTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.2195 2H8.95956C8.55956 2 8.17953 2.14 7.86953 2.38L5.67953 4.13C4.79953 4.83 4.79953 6.15999 5.67953 6.85999L7.86953 8.60999C8.17953 8.85999 8.56956 8.98999 8.95956 8.98999H17.2195C18.1895 8.98999 18.9695 8.20999 18.9695 7.23999V3.73999C18.9695 2.77999 18.1895 2 17.2195 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.80078 12H15.0608C15.4608 12 15.8408 12.14 16.1508 12.38L18.3408 14.13C19.2208 14.83 19.2208 16.16 18.3408 16.86L16.1508 18.61C15.8408 18.86 15.4508 18.99 15.0608 18.99H6.80078C5.83078 18.99 5.05078 18.21 5.05078 17.24V13.74C5.05078 12.78 5.83078 12 6.80078 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 12V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          opacity="0.4"
          d="M12 22V19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          opacity="0.4"
          d="M9 22H15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SignpostBold,
  broken: SignpostBroken,
  bulk: SignpostBulk,
  linear: SignpostLinear,
  outline: SignpostOutline,
  twotone: SignpostTwotone,
};

export const SignpostIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
