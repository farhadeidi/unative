import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const LampOnBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.2107 6.36148C18.1707 4.26148 16.1607 2.71148 13.8307 2.20148C11.3907 1.66148 8.8907 2.24148 6.9807 3.78148C5.0607 5.31148 3.9707 7.60148 3.9707 10.0515C3.9707 12.6415 5.5207 15.3515 7.8607 16.9215V17.7515C7.8507 18.0315 7.8407 18.4615 8.1807 18.8115C8.5307 19.1715 9.0507 19.2115 9.4607 19.2115H14.5907C15.1307 19.2115 15.5407 19.0615 15.8207 18.7815C16.2007 18.3915 16.1907 17.8915 16.1807 17.6215V16.9215C19.2807 14.8315 21.2307 10.4215 19.2107 6.36148Z"
        fill="currentColor"
      />
      <Path
        d="M15.2592 21.9984C15.1992 21.9984 15.1292 21.9884 15.0692 21.9684C13.0592 21.3984 10.9492 21.3984 8.93918 21.9684C8.56918 22.0684 8.17918 21.8584 8.07918 21.4884C7.96918 21.1184 8.18918 20.7284 8.55918 20.6284C10.8192 19.9884 13.1992 19.9884 15.4592 20.6284C15.8292 20.7384 16.0492 21.1184 15.9392 21.4884C15.8392 21.7984 15.5592 21.9984 15.2592 21.9984Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LampOnBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.0694 6.27018C21.1594 10.4702 18.9594 14.9302 15.7294 16.8802V18.0402C15.7294 18.3302 15.8394 19.0002 14.7694 19.0002H9.25938C8.15938 19.0002 8.29938 18.5702 8.29938 18.0402V16.8802C5.99938 15.4902 4.10938 12.7802 4.10938 9.90018C4.10938 4.95018 8.65938 1.07018 13.7994 2.19018C14.5494 2.36018 15.2794 2.63018 15.9394 3.00018"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LampOnBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.2107 6.36001C18.1707 4.26001 16.1607 2.71001 13.8307 2.20001C11.3907 1.66001 8.8907 2.24001 6.9807 3.78001C5.0607 5.31001 3.9707 7.60001 3.9707 10.05C3.9707 12.64 5.5207 15.35 7.8607 16.92V17.75C7.8507 18.03 7.8407 18.46 8.1807 18.81C8.5307 19.17 9.0507 19.21 9.4607 19.21H14.5907C15.1307 19.21 15.5407 19.06 15.8207 18.78C16.2007 18.39 16.1907 17.89 16.1807 17.62V16.92C19.2807 14.83 21.2307 10.42 19.2107 6.36001Z"
        fill="currentColor"
      />
      <Path
        d="M15.2592 21.9999C15.1992 21.9999 15.1292 21.9899 15.0692 21.9699C13.0592 21.3999 10.9492 21.3999 8.93918 21.9699C8.56918 22.0699 8.17918 21.8599 8.07918 21.4899C7.96918 21.1199 8.18918 20.7299 8.55918 20.6299C10.8192 19.9899 13.1992 19.9899 15.4592 20.6299C15.8292 20.7399 16.0492 21.1199 15.9392 21.4899C15.8392 21.7999 15.5592 21.9999 15.2592 21.9999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LampOnLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.30011 18.0399V16.8799C6.00011 15.4899 4.11011 12.7799 4.11011 9.89993C4.11011 4.94993 8.66011 1.06993 13.8001 2.18993C16.0601 2.68993 18.0401 4.18993 19.0701 6.25993C21.1601 10.4599 18.9601 14.9199 15.7301 16.8699V18.0299C15.7301 18.3199 15.8401 18.9899 14.7701 18.9899H9.26011C8.16011 18.9999 8.30011 18.5699 8.30011 18.0399Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LampOnOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.7701 19.7498H9.26012C8.82012 19.7498 8.26012 19.6998 7.89012 19.3198C7.53012 18.9498 7.54012 18.4898 7.55012 18.1798V17.2898C5.03012 15.6098 3.37012 12.6898 3.37012 9.9098C3.37012 7.2798 4.55012 4.8198 6.60012 3.1698C8.65012 1.5198 11.3401 0.899803 13.9701 1.4798C16.4701 2.0298 18.6301 3.6998 19.7501 5.9498C21.9201 10.3198 19.8301 15.0498 16.4901 17.2998V18.0498C16.5001 18.3398 16.5101 18.8698 16.1001 19.2898C15.7901 19.5898 15.3501 19.7498 14.7701 19.7498ZM9.04012 18.2398C9.09012 18.2398 9.16012 18.2498 9.25012 18.2498H14.7701C14.8701 18.2498 14.9401 18.2398 14.9801 18.2298C14.9801 18.1998 14.9801 18.1598 14.9801 18.1298V16.8698C14.9801 16.6098 15.1201 16.3598 15.3401 16.2298C18.3001 14.4398 20.2601 10.3498 18.3901 6.5998C17.4701 4.7498 15.6901 3.3798 13.6301 2.9298C11.4501 2.4498 9.22012 2.9598 7.52012 4.3298C5.82012 5.6998 4.85012 7.7298 4.85012 9.9098C4.85012 12.6898 6.77012 15.0898 8.67012 16.2398C8.90012 16.3798 9.03012 16.6198 9.03012 16.8798V18.2298C9.04012 18.2298 9.04012 18.2298 9.04012 18.2398Z"
        fill="currentColor"
      />
      <Path
        d="M15.5003 22.7499C15.4303 22.7499 15.3603 22.7399 15.2903 22.7199C13.1303 22.0999 10.8603 22.0999 8.70025 22.7199C8.30025 22.8299 7.89025 22.5999 7.77025 22.1999C7.65025 21.7999 7.89025 21.3899 8.29025 21.2699C10.7103 20.5799 13.2803 20.5799 15.7003 21.2699C16.1003 21.3799 16.3303 21.7999 16.2203 22.1999C16.1303 22.5399 15.8303 22.7499 15.5003 22.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LampOnTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.30035 18.0402V16.8802C6.00035 15.4902 4.11035 12.7802 4.11035 9.90018C4.11035 4.95018 8.66035 1.07018 13.8004 2.19018C16.0604 2.69018 18.0404 4.19018 19.0704 6.26018C21.1604 10.4602 18.9604 14.9202 15.7304 16.8702V18.0302C15.7304 18.3202 15.8404 18.9902 14.7704 18.9902H9.26035C8.16035 19.0002 8.30035 18.5702 8.30035 18.0402Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.5 22.0002C10.79 21.3502 13.21 21.3502 15.5 22.0002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: LampOnBold,
  broken: LampOnBroken,
  bulk: LampOnBulk,
  linear: LampOnLinear,
  outline: LampOnOutline,
  twotone: LampOnTwotone,
};

export const LampOnIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
