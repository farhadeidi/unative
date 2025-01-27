import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const TextalignRightBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21 5.25H3C2.59 5.25 2.25 4.91 2.25 4.5C2.25 4.09 2.59 3.75 3 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z"
        fill="currentColor"
      />
      <Path
        d="M21.0013 10.25H11.5312C11.1213 10.25 10.7812 9.91 10.7812 9.5C10.7812 9.09 11.1213 8.75 11.5312 8.75H21.0013C21.4113 8.75 21.7513 9.09 21.7513 9.5C21.7513 9.91 21.4113 10.25 21.0013 10.25Z"
        fill="currentColor"
      />
      <Path
        d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z"
        fill="currentColor"
      />
      <Path
        d="M21.0013 20.25H11.5312C11.1213 20.25 10.7812 19.91 10.7812 19.5C10.7812 19.09 11.1213 18.75 11.5312 18.75H21.0013C21.4113 18.75 21.7513 19.09 21.7513 19.5C21.7513 19.91 21.4113 20.25 21.0013 20.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TextalignRightBroken = ({
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
        d="M11.5293 9.5H20.9993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 14.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.5293 19.5H20.9993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.95 4.5H3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.9995 4.5H18.0195"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TextalignRightBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21 5.25H3C2.59 5.25 2.25 4.91 2.25 4.5C2.25 4.09 2.59 3.75 3 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.9993 10.25H11.5293C11.1193 10.25 10.7793 9.91 10.7793 9.5C10.7793 9.09 11.1193 8.75 11.5293 8.75H20.9993C21.4093 8.75 21.7493 9.09 21.7493 9.5C21.7493 9.91 21.4093 10.25 20.9993 10.25Z"
        fill="currentColor"
      />
      <Path
        d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.9993 20.25H11.5293C11.1193 20.25 10.7793 19.91 10.7793 19.5C10.7793 19.09 11.1193 18.75 11.5293 18.75H20.9993C21.4093 18.75 21.7493 19.09 21.7493 19.5C21.7493 19.91 21.4093 20.25 20.9993 20.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TextalignRightLinear = ({
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
        d="M3 4.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.53 9.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 14.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.53 19.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TextalignRightOutline = ({
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
        d="M21 5.25H3C2.59 5.25 2.25 4.91 2.25 4.5C2.25 4.09 2.59 3.75 3 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z"
        fill="currentColor"
      />
      <Path
        d="M20.9993 10.25H11.5293C11.1193 10.25 10.7793 9.91 10.7793 9.5C10.7793 9.09 11.1193 8.75 11.5293 8.75H20.9993C21.4093 8.75 21.7493 9.09 21.7493 9.5C21.7493 9.91 21.4093 10.25 20.9993 10.25Z"
        fill="currentColor"
      />
      <Path
        d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z"
        fill="currentColor"
      />
      <Path
        d="M20.9993 20.25H11.5293C11.1193 20.25 10.7793 19.91 10.7793 19.5C10.7793 19.09 11.1193 18.75 11.5293 18.75H20.9993C21.4093 18.75 21.7493 19.09 21.7493 19.5C21.7493 19.91 21.4093 20.25 20.9993 20.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TextalignRightTwotone = ({
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
        d="M3 4.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.5293 9.5H20.9993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M3 14.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.5293 19.5H20.9993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TextalignRightBold,
  broken: TextalignRightBroken,
  bulk: TextalignRightBulk,
  linear: TextalignRightLinear,
  outline: TextalignRightOutline,
  twotone: TextalignRightTwotone,
};

export const TextalignRightIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
