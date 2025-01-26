import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const RulerPenBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.4707 2H14.4707C12.9779 2 11.7439 3.28581 11.5105 4.75204C11.467 5.02475 11.6946 5.25 11.9707 5.25H16.4707C16.8807 5.25 17.2207 5.59 17.2207 6C17.2207 6.41 16.8807 6.75 16.4707 6.75H11.9707C11.6946 6.75 11.4707 6.97386 11.4707 7.25V8.75C11.4707 9.02614 11.6946 9.25 11.9707 9.25H14.2807C14.6907 9.25 15.0307 9.59 15.0307 10C15.0307 10.41 14.6907 10.75 14.2807 10.75H11.9707C11.6946 10.75 11.4707 10.9739 11.4707 11.25V12.705C11.4707 12.9792 11.6915 13.2022 11.9657 13.2049L16.4707 13.25C16.8907 13.25 17.2207 13.59 17.2207 14.01C17.2107 14.42 16.8807 14.75 16.4707 14.75C16.4607 14.75 16.4607 14.75 16.4607 14.75L11.9757 14.7051C11.6976 14.7023 11.4707 14.9269 11.4707 15.205V16.75C11.4707 17.0261 11.6946 17.25 11.9707 17.25H15.3707C15.7907 17.25 16.1207 17.59 16.1207 18C16.1207 18.41 15.7907 18.75 15.3707 18.75H11.9707C11.6946 18.75 11.467 18.9753 11.5105 19.248C11.7439 20.7142 12.9779 22 14.4707 22H18.4707C20.1207 22 21.4707 20.66 21.4707 19V5C21.4707 3.34 20.1207 2 18.4707 2Z"
        fill="currentColor"
      />
      <Path
        d="M8.4393 4.95V5.75C8.4393 6.02614 8.21544 6.25 7.9393 6.25H3.0293C2.75315 6.25 2.5293 6.02614 2.5293 5.75V4.95C2.5293 3.33 3.8593 2 5.4893 2C7.1093 2 8.4393 3.33 8.4393 4.95Z"
        fill="currentColor"
      />
      <Path
        d="M2.5293 17.91C2.5293 18.36 2.7193 19.05 2.9593 19.43L3.7693 20.79C4.7193 22.37 6.2593 22.37 7.1993 20.79L8.0193 19.43C8.2493 19.05 8.4393 18.36 8.4393 17.91V8.25C8.4393 7.97386 8.21544 7.75 7.9393 7.75H3.0293C2.75315 7.75 2.5293 7.97386 2.5293 8.25V17.91Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RulerPenBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.4707 2C12.4707 2 11.4707 3 11.4707 5V19C11.4707 21 12.4707 22 14.4707 22H18.4707C20.4707 22 21.4707 21 21.4707 19V5C21.4707 3 20.4707 2 18.4707 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M11.4707 6H16.4707"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M11.4707 18H15.4707"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M11.4707 13.95L16.4707 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M11.4707 10H14.4707"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M2.5293 9.02V4.95C2.5293 3.33 3.8593 2 5.4893 2C7.1093 2 8.4393 3.33 8.4393 4.95V17.91C8.4393 18.36 8.2493 19.04 8.0193 19.43L7.1993 20.79C6.2593 22.36 4.7093 22.36 3.7693 20.79L2.9493 19.43C2.7193 19.04 2.5293 18.36 2.5293 17.91V13.95"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M8.4393 7H2.5293"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const RulerPenBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.4707 5V19C21.4707 20.66 20.1207 22 18.4707 22H14.4707C12.8107 22 11.4707 20.66 11.4707 19V5C11.4707 3.34 12.8107 2 14.4707 2H18.4707C20.1207 2 21.4707 3.34 21.4707 5Z"
        fill="currentColor"
      />
      <Path
        d="M17.2207 6C17.2207 6.41 16.8807 6.75 16.4707 6.75H11.4707V5.25H16.4707C16.8807 5.25 17.2207 5.59 17.2207 6Z"
        fill="currentColor"
      />
      <Path
        d="M16.1207 18C16.1207 18.41 15.7907 18.75 15.3707 18.75H11.4707V17.25H15.3707C15.7907 17.25 16.1207 17.59 16.1207 18Z"
        fill="currentColor"
      />
      <Path
        d="M17.2207 14.0102C17.2107 14.4202 16.8807 14.7502 16.4707 14.7502C16.4607 14.7502 16.4607 14.7502 16.4607 14.7502L11.4707 14.7002V13.2002L16.4707 13.2502C16.8907 13.2502 17.2207 13.5902 17.2207 14.0102Z"
        fill="currentColor"
      />
      <Path
        d="M15.0307 10C15.0307 10.41 14.6907 10.75 14.2807 10.75H11.4707V9.25H14.2807C14.6907 9.25 15.0307 9.59 15.0307 10Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M8.4393 4.95V17.91C8.4393 18.36 8.2493 19.05 8.0193 19.43L7.1993 20.79C6.2593 22.37 4.7193 22.37 3.7693 20.79L2.9593 19.43C2.7193 19.05 2.5293 18.36 2.5293 17.91V4.95C2.5293 3.33 3.8593 2 5.4893 2C7.1093 2 8.4393 3.33 8.4393 4.95Z"
        fill="currentColor"
      />
      <Path d="M8.4393 6.25H2.5293V7.75H8.4393V6.25Z" fill="currentColor" />
    </Svg>
  );
};

const RulerPenLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.47 19V5C21.47 3 20.47 2 18.47 2H14.47C12.47 2 11.47 3 11.47 5V19C11.47 21 12.47 22 14.47 22H18.47C20.47 22 21.47 21 21.47 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M11.47 6H16.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M11.47 18H15.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M11.47 13.95L16.47 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M11.47 10H14.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M5.49 2C3.86 2 2.53 3.33 2.53 4.95V17.91C2.53 18.36 2.72 19.04 2.95 19.43L3.77 20.79C4.71 22.36 6.26 22.36 7.2 20.79L8.02 19.43C8.25 19.04 8.44 18.36 8.44 17.91V4.95C8.44 3.33 7.11 2 5.49 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M8.44 7H2.53"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const RulerPenOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.4707 22.75H14.4707C12.0507 22.75 10.7207 21.42 10.7207 19V5C10.7207 2.58 12.0507 1.25 14.4707 1.25H18.4707C20.8907 1.25 22.2207 2.58 22.2207 5V19C22.2207 21.42 20.8807 22.75 18.4707 22.75ZM14.4707 2.75C12.8907 2.75 12.2207 3.42 12.2207 5V19C12.2207 20.58 12.8907 21.25 14.4707 21.25H18.4707C20.0507 21.25 20.7207 20.58 20.7207 19V5C20.7207 3.42 20.0507 2.75 18.4707 2.75H14.4707Z"
        fill="currentColor"
      />
      <Path
        d="M16.4707 6.75H11.4707C11.0607 6.75 10.7207 6.41 10.7207 6C10.7207 5.59 11.0607 5.25 11.4707 5.25H16.4707C16.8807 5.25 17.2207 5.59 17.2207 6C17.2207 6.41 16.8807 6.75 16.4707 6.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.4707 18.75H11.4707C11.0607 18.75 10.7207 18.41 10.7207 18C10.7207 17.59 11.0607 17.25 11.4707 17.25H15.4707C15.8807 17.25 16.2207 17.59 16.2207 18C16.2207 18.41 15.8807 18.75 15.4707 18.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.4709 14.7502C16.4609 14.7502 16.4609 14.7502 16.4709 14.7502L11.4609 14.7002C11.0509 14.7002 10.7109 14.3602 10.7209 13.9402C10.7209 13.5302 11.0609 13.2002 11.4709 13.2002C11.4709 13.2002 11.4709 13.2002 11.4809 13.2002L16.4809 13.2502C16.8909 13.2502 17.2309 13.5902 17.2209 14.0102C17.2109 14.4202 16.8809 14.7502 16.4709 14.7502Z"
        fill="currentColor"
      />
      <Path
        d="M14.4707 10.75H11.4707C11.0607 10.75 10.7207 10.41 10.7207 10C10.7207 9.59 11.0607 9.25 11.4707 9.25H14.4707C14.8807 9.25 15.2207 9.59 15.2207 10C15.2207 10.41 14.8807 10.75 14.4707 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M5.4893 22.72C4.5793 22.72 3.7193 22.16 3.1293 21.18L2.3093 19.82C2.0093 19.32 1.7793 18.5 1.7793 17.92V4.95C1.7793 2.91 3.4393 1.25 5.4793 1.25C7.5193 1.25 9.1793 2.91 9.1793 4.95V17.91C9.1793 18.49 8.9493 19.31 8.6493 19.81L7.8293 21.17C7.2593 22.16 6.3993 22.72 5.4893 22.72ZM5.4893 2.75C4.2793 2.75 3.2893 3.74 3.2893 4.95V17.91C3.2893 18.22 3.4393 18.77 3.5993 19.04L4.4193 20.4C4.7293 20.92 5.1193 21.21 5.4893 21.21C5.8593 21.21 6.2493 20.91 6.5593 20.4L7.3793 19.04C7.5393 18.77 7.6893 18.22 7.6893 17.91V4.95C7.6893 3.74 6.6993 2.75 5.4893 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.4393 7.75H2.5293C2.1193 7.75 1.7793 7.41 1.7793 7C1.7793 6.59 2.1193 6.25 2.5293 6.25H8.4393C8.8493 6.25 9.1893 6.59 9.1893 7C9.1893 7.41 8.8493 7.75 8.4393 7.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RulerPenTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.4707 19V5C21.4707 3 20.4707 2 18.4707 2H14.4707C12.4707 2 11.4707 3 11.4707 5V19C11.4707 21 12.4707 22 14.4707 22H18.4707C20.4707 22 21.4707 21 21.4707 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        opacity="0.4"
        d="M11.4707 6H16.4707"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        opacity="0.4"
        d="M11.4707 18H15.4707"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        opacity="0.4"
        d="M11.4707 13.9502L16.4707 14.0002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        opacity="0.4"
        d="M11.4707 10H14.4707"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M5.4893 2C3.8593 2 2.5293 3.33 2.5293 4.95V17.91C2.5293 18.36 2.7193 19.04 2.9493 19.43L3.7693 20.79C4.7093 22.36 6.2593 22.36 7.1993 20.79L8.0193 19.43C8.2493 19.04 8.4393 18.36 8.4393 17.91V4.95C8.4393 3.33 7.1093 2 5.4893 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        opacity="0.4"
        d="M8.4393 7H2.5293"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: RulerPenBold,
  broken: RulerPenBroken,
  bulk: RulerPenBulk,
  linear: RulerPenLinear,
  outline: RulerPenOutline,
  twotone: RulerPenTwotone,
};

export const RulerPenIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
