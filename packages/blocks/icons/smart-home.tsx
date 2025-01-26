import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const SmartHomeBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.8593 8.56126L13.9293 3.02126C12.8593 2.16126 11.1293 2.16126 10.0693 3.01126L3.13929 8.56126C2.35929 9.18126 1.85929 10.4913 2.02929 11.4713L3.35929 19.4313C3.59929 20.8513 4.95929 22.0013 6.39929 22.0013H17.5993C19.0293 22.0013 20.3993 20.8413 20.6393 19.4313L21.9693 11.4713C22.1293 10.4913 21.6293 9.18126 20.8593 8.56126ZM9.37929 17.3813C8.81929 17.3813 8.37929 16.9313 8.37929 16.3813C8.37929 15.8313 8.82929 15.3813 9.37929 15.3813C9.92929 15.3813 10.3793 15.8313 10.3793 16.3813C10.3793 16.9313 9.92929 17.3813 9.37929 17.3813ZM12.3893 17.1213C12.3793 17.1213 12.3793 17.1213 12.3693 17.1213C11.9593 17.1213 11.6293 16.7913 11.6193 16.3913C11.5893 15.0413 10.6993 14.1513 9.34929 14.1213C8.93929 14.1113 8.60929 13.7713 8.61929 13.3513C8.62929 12.9413 8.95929 12.6213 9.36929 12.6213C9.37929 12.6213 9.37929 12.6213 9.38929 12.6213C11.5393 12.6713 13.0793 14.2013 13.1193 16.3513C13.1293 16.7713 12.8093 17.1213 12.3893 17.1213ZM15.3793 17.1213C14.9593 17.1213 14.6293 16.7913 14.6193 16.3813C14.6093 15.7213 14.4993 15.0913 14.2993 14.5013C13.7893 13.0413 12.6993 11.9613 11.2393 11.4413C10.6493 11.2313 10.0193 11.1213 9.35929 11.1213C8.94929 11.1213 8.60929 10.7813 8.61929 10.3613C8.61929 9.95126 8.95929 9.62126 9.36929 9.62126H9.37929C10.2093 9.63126 10.9993 9.77126 11.7393 10.0313C13.6293 10.7013 15.0393 12.1113 15.7093 14.0013C15.9693 14.7413 16.1093 15.5413 16.1193 16.3613C16.1293 16.7813 15.7993 17.1213 15.3793 17.1213Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SmartHomeBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9693 11.2799C22.1293 10.2999 21.6293 8.98989 20.8593 8.36989L13.9293 2.82985C12.8593 1.96985 11.1293 1.96984 10.0693 2.81984L3.1393 8.36989C2.3593 8.98989 1.85929 10.2999 2.02929 11.2799L2.30929 12.9599"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.4004 21.8101H17.6004C19.0304 21.8101 20.4004 20.65 20.6404 19.24L21.2704 15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 19C3.76 19.04 4.96 20.24 5 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 16C2.52 16.01 3.02 16.0701 3.5 16.1801"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99945 22.0001C7.98945 21.2401 7.85946 20.5301 7.62946 19.8801C7.35946 19.1201 6.95945 18.4501 6.43945 17.8901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.9955 22H2.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SmartHomeBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.0693 3.01003L3.1393 8.56002C2.3593 9.18002 1.85929 10.49 2.02929 11.47L3.35927 19.43C3.59927 20.85 4.95928 22 6.39928 22H17.5993C19.0293 22 20.3993 20.84 20.6393 19.43L21.9693 11.47C22.1293 10.49 21.6293 9.18002 20.8593 8.56002L13.9293 3.02004C12.8593 2.16004 11.1293 2.16003 10.0693 3.01003Z"
        fill="currentColor"
      />
      <Path
        d="M12.3713 17.1201C11.9613 17.1201 11.6313 16.7901 11.6213 16.3901C11.5913 15.0401 10.7013 14.1501 9.35133 14.1201C8.94133 14.1101 8.61132 13.7701 8.62132 13.3501C8.63132 12.9401 8.96132 12.6201 9.37132 12.6201C9.38132 12.6201 9.38133 12.6201 9.39133 12.6201C11.5413 12.6701 13.0813 14.2001 13.1213 16.3501C13.1313 16.7601 12.8013 17.1101 12.3913 17.1201C12.3913 17.1201 12.3813 17.1201 12.3713 17.1201Z"
        fill="currentColor"
      />
      <Path
        d="M15.3713 17.1201C14.9613 17.1201 14.6213 16.7901 14.6213 16.3801C14.6113 15.7201 14.5013 15.0901 14.3013 14.5001C13.7913 13.0401 12.7013 11.9601 11.2413 11.4401C10.6513 11.2301 10.0213 11.1201 9.3613 11.1201C8.9513 11.1201 8.61131 10.7801 8.62131 10.3601C8.62131 9.95011 8.96131 9.62012 9.37131 9.62012H9.38132C10.2113 9.63012 11.0013 9.77015 11.7413 10.0302C13.6313 10.7002 15.0413 12.1101 15.7113 14.0001C15.9713 14.7401 16.1113 15.5401 16.1213 16.3601C16.1313 16.7801 15.8013 17.1201 15.3713 17.1201C15.3813 17.1201 15.3813 17.1201 15.3713 17.1201Z"
        fill="currentColor"
      />
      <Path
        d="M9.38086 17.3801C8.82086 17.3801 8.38086 16.9301 8.38086 16.3801C8.38086 15.8301 8.83086 15.3801 9.38086 15.3801C9.93086 15.3801 10.3809 15.8301 10.3809 16.3801C10.3809 16.9301 9.93086 17.3801 9.38086 17.3801Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SmartHomeLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.4 21.8101H17.6C19.03 21.8101 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99002 20.86 8.37002L13.93 2.82998C12.86 1.96998 11.13 1.96997 10.07 2.81997L3.14004 8.37002C2.36004 8.99002 1.86002 10.3 2.03002 11.28L2.31002 12.96"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 19C3.76 19.04 4.96 20.24 5 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 22C7.99 21.24 7.86 20.53 7.63 19.88C7.04 18.21 5.78 16.96 4.12 16.37C3.47 16.14 2.76 16.01 2 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.9955 22H2.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SmartHomeOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.5998 22.5599H11.3998C10.9898 22.5599 10.6498 22.2199 10.6498 21.8099C10.6498 21.3999 10.9898 21.0599 11.3998 21.0599H17.5998C18.6698 21.0599 19.7198 20.1698 19.8998 19.1098L21.2298 11.1499C21.3498 10.4299 20.9499 9.39979 20.3899 8.94979L13.4598 3.40987C12.6598 2.76987 11.3298 2.76986 10.5398 3.39986L3.60982 8.94979C3.03982 9.40979 2.64982 10.4299 2.76982 11.1499L3.04982 12.8398C3.11982 13.2498 2.83983 13.6398 2.42983 13.6998C2.01983 13.7798 1.63984 13.4898 1.56984 13.0798L1.28984 11.3999C1.07984 10.1599 1.67985 8.56987 2.66985 7.77987L9.59984 2.22982C10.9398 1.14982 13.0498 1.15983 14.3998 2.23983L21.3298 7.77987C22.3098 8.56987 22.9098 10.1599 22.7098 11.3999L21.3798 19.3598C21.0798 21.1298 19.3898 22.5599 17.5998 22.5599Z"
        fill="currentColor"
      />
      <Path
        d="M5.00022 22.75C4.59022 22.75 4.26022 22.42 4.25022 22.02C4.22022 20.67 3.33023 19.78 1.98023 19.75C1.57023 19.74 1.24022 19.4 1.25022 18.98C1.26022 18.57 1.59022 18.25 2.00022 18.25C2.01022 18.25 2.01021 18.25 2.02021 18.25C4.17021 18.3 5.71022 19.83 5.75022 21.98C5.76022 22.39 5.43021 22.74 5.02021 22.75C5.01021 22.75 5.01022 22.75 5.00022 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.00022 22.75C7.59022 22.75 7.25022 22.42 7.25022 22.01C7.24021 21.35 7.13021 20.72 6.93021 20.13C6.42021 18.67 5.33021 17.5899 3.87021 17.0699C3.28021 16.8599 2.65021 16.75 1.99021 16.75C1.58021 16.75 1.24022 16.41 1.25022 15.99C1.25022 15.58 1.59022 15.25 2.00022 15.25H2.01022C2.84022 15.26 3.63021 15.4 4.37021 15.66C6.26021 16.33 7.67021 17.74 8.34021 19.63C8.60021 20.37 8.74021 21.17 8.75022 21.99C8.75022 22.41 8.42022 22.75 8.00022 22.75C8.01022 22.75 8.00022 22.75 8.00022 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M2 23C1.44 23 1 22.55 1 22C1 21.45 1.45 21 2 21C2.55 21 3 21.45 3 22C3 22.55 2.56 23 2 23Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SmartHomeTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.3993 21.81H17.5993C19.0293 21.81 20.3993 20.6499 20.6393 19.2399L21.9693 11.2799C22.1293 10.2999 21.6293 8.98989 20.8593 8.36989L13.9293 2.82985C12.8593 1.96985 11.1293 1.96984 10.0693 2.81984L3.1393 8.36989C2.3593 8.98989 1.85929 10.2999 2.02929 11.2799L2.30929 12.9599"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2 19C3.76 19.04 4.96 20.24 5 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8 22C7.99 21.24 7.86 20.53 7.63 19.88C7.04 18.21 5.78 16.96 4.12 16.37C3.47 16.14 2.76 16.01 2 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M1.9955 22H2.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SmartHomeBold,
  broken: SmartHomeBroken,
  bulk: SmartHomeBulk,
  linear: SmartHomeLinear,
  outline: SmartHomeOutline,
  twotone: SmartHomeTwotone,
};

export const SmartHomeIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
