import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ShieldSearchBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.4491 6.94063V9.45062C19.4491 10.1606 18.7291 10.6206 18.0591 10.3706C17.2191 10.0606 16.2891 9.94062 15.3091 10.0406C12.9291 10.3006 10.4891 12.5906 10.0891 14.9606C9.75906 16.9306 10.3891 18.7706 11.5991 20.0706C12.1491 20.6706 11.7791 21.6406 10.9691 21.7306C10.2791 21.8106 9.59906 21.7906 9.21906 21.5106L3.71906 17.4006C3.06906 16.9106 2.53906 15.8506 2.53906 15.0306V6.94063C2.53906 5.81063 3.39906 4.57063 4.44906 4.17063L9.94906 2.11062C10.5191 1.90063 11.4591 1.90063 12.0291 2.11062L17.5291 4.17063C18.5891 4.57063 19.4491 5.81063 19.4491 6.94063Z"
        fill="currentColor"
      />
      <Path
        d="M16 11.5117C13.52 11.5117 11.5 13.5317 11.5 16.0117C11.5 18.4917 13.52 20.5117 16 20.5117C18.48 20.5117 20.5 18.4917 20.5 16.0117C20.5 13.5217 18.48 11.5117 16 11.5117Z"
        fill="currentColor"
      />
      <Path
        d="M21 22.0009C20.73 22.0009 20.48 21.8909 20.29 21.7109C20.25 21.6609 20.2 21.6109 20.17 21.5509C20.13 21.5009 20.1 21.4409 20.08 21.3809C20.05 21.3209 20.03 21.2609 20.02 21.2009C20.01 21.1309 20 21.0709 20 21.0009C20 20.8709 20.03 20.7409 20.08 20.6209C20.13 20.4909 20.2 20.3909 20.29 20.2909C20.52 20.0609 20.87 19.9509 21.19 20.0209C21.26 20.0309 21.32 20.0509 21.38 20.0809C21.44 20.1009 21.5 20.1309 21.55 20.1709C21.61 20.2009 21.66 20.2509 21.71 20.2909C21.8 20.3909 21.87 20.4909 21.92 20.6209C21.97 20.7409 22 20.8709 22 21.0009C22 21.2609 21.89 21.5209 21.71 21.7109C21.66 21.7509 21.61 21.7909 21.55 21.8309C21.5 21.8709 21.44 21.9009 21.38 21.9209C21.32 21.9509 21.26 21.9709 21.19 21.9809C21.13 21.9909 21.06 22.0009 21 22.0009Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShieldSearchBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.41016 11.02V14.56C3.41016 15.74 4.19016 17.29 5.14016 18L9.44016 21.21C10.1402 21.74 11.0702 22 12.0002 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.5902 10.5501V7.12006C20.5902 5.89006 19.6502 4.53006 18.5002 4.10006L13.5102 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 16C20 18.21 18.21 20 16 20C13.79 20 12 18.21 12 16C12 15.27 12.19 14.59 12.53 14.01C13.22 12.81 14.51 12.01 15.99 12.01C16.6 12.01 17.17 12.15 17.69 12.39"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.9955 21H21.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShieldSearchBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.96078 2.10989L4.46078 4.16989C3.41078 4.56989 2.55078 5.80989 2.55078 6.93989V15.0399C2.55078 15.8499 3.08078 16.9199 3.73078 17.3999L9.23078 21.5099C10.2008 22.2399 11.7908 22.2399 12.7608 21.5099L18.2608 17.3999C18.9108 16.9099 19.4408 15.8499 19.4408 15.0399V6.93989C19.4408 5.81989 18.5808 4.56988 17.5308 4.17988L12.0308 2.11989C11.4708 1.89989 10.5308 1.89989 9.96078 2.10989Z"
        fill="currentColor"
      />
      <Path
        d="M16 11.51C13.52 11.51 11.5 13.53 11.5 16.01C11.5 18.49 13.52 20.51 16 20.51C18.48 20.51 20.5 18.49 20.5 16.01C20.5 13.52 18.48 11.51 16 11.51Z"
        fill="currentColor"
      />
      <Path
        d="M21 21.9999C20.73 21.9999 20.48 21.8899 20.29 21.7099C20.25 21.6599 20.2 21.6099 20.17 21.5499C20.13 21.4999 20.1 21.4399 20.08 21.3799C20.05 21.3199 20.03 21.2599 20.02 21.1999C20.01 21.1299 20 21.0699 20 20.9999C20 20.8699 20.03 20.7399 20.08 20.6199C20.13 20.4899 20.2 20.3899 20.29 20.2899C20.52 20.0599 20.87 19.9499 21.19 20.0199C21.26 20.0299 21.32 20.0499 21.38 20.0799C21.44 20.0999 21.5 20.1299 21.55 20.1699C21.61 20.1999 21.66 20.2499 21.71 20.2899C21.8 20.3899 21.87 20.4899 21.92 20.6199C21.97 20.7399 22 20.8699 22 20.9999C22 21.2599 21.89 21.5199 21.71 21.7099C21.66 21.7499 21.61 21.7899 21.55 21.8299C21.5 21.8699 21.44 21.8999 21.38 21.9199C21.32 21.9499 21.26 21.9699 21.19 21.9799C21.13 21.9899 21.06 21.9999 21 21.9999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShieldSearchLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.59 10.5501V7.12006C20.59 5.89006 19.65 4.53006 18.5 4.10006L13.51 2.23006C12.68 1.92006 11.32 1.92006 10.49 2.23006L5.49997 4.11006C4.34997 4.54006 3.40997 5.90006 3.40997 7.12006V14.5501C3.40997 15.7301 4.18997 17.2801 5.13997 17.9901L9.43997 21.2001C10.14 21.7401 11.07 22.0001 12 22.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.9955 21H21.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShieldSearchOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0004 22.7499C10.8704 22.7499 9.79039 22.4199 8.98039 21.8099L4.68039 18.5999C3.54039 17.7499 2.65039 15.9799 2.65039 14.5599V7.11994C2.65039 5.57994 3.78039 3.93994 5.23039 3.39994L10.2204 1.52994C11.2104 1.15994 12.7704 1.15994 13.7604 1.52994L18.7604 3.39994C20.2104 3.93994 21.3404 5.57994 21.3404 7.11994V10.5499C21.3404 10.9599 21.0004 11.2999 20.5904 11.2999C20.1804 11.2999 19.8404 10.9599 19.8404 10.5499V7.11994C19.8404 6.20994 19.0904 5.12994 18.2304 4.79994L13.2404 2.92994C12.5804 2.67994 11.4104 2.67994 10.7504 2.92994L5.76039 4.80994C4.90039 5.12994 4.15039 6.20994 4.15039 7.12994V14.5599C4.15039 15.5099 4.82039 16.8399 5.57039 17.3999L9.87039 20.6099C10.4204 21.0199 11.1904 21.2499 11.9904 21.2499C12.4004 21.2499 12.7404 21.5899 12.7404 21.9999C12.7404 22.4099 12.4104 22.7499 12.0004 22.7499Z"
        fill="currentColor"
      />
      <Path
        d="M16 20.75C13.38 20.75 11.25 18.62 11.25 16C11.25 13.38 13.38 11.25 16 11.25C18.62 11.25 20.75 13.38 20.75 16C20.75 18.62 18.62 20.75 16 20.75ZM16 12.76C14.21 12.76 12.75 14.22 12.75 16.01C12.75 17.8 14.21 19.26 16 19.26C17.79 19.26 19.25 17.8 19.25 16.01C19.25 14.22 17.79 12.76 16 12.76Z"
        fill="currentColor"
      />
      <Path
        d="M21 22C20.93 22 20.87 21.9899 20.8 21.9799C20.74 21.9699 20.68 21.95 20.62 21.92C20.56 21.9 20.5 21.87 20.44 21.83C20.39 21.79 20.34 21.7499 20.29 21.7099C20.11 21.5199 20 21.26 20 21C20 20.87 20.03 20.74 20.08 20.62C20.13 20.5 20.2 20.39 20.29 20.29C20.66 19.92 21.34 19.92 21.71 20.29C21.8 20.39 21.87 20.5 21.92 20.62C21.97 20.74 22 20.87 22 21C22 21.26 21.89 21.5199 21.71 21.7099C21.52 21.8899 21.26 22 21 22Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShieldSearchTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.5902 10.5501V7.12006C20.5902 5.89006 19.6502 4.53006 18.5002 4.10006L13.5102 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L9.44016 21.2001C10.1402 21.7401 11.0702 22.0001 12.0002 22.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M20.9955 21H21.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ShieldSearchBold,
  broken: ShieldSearchBroken,
  bulk: ShieldSearchBulk,
  linear: ShieldSearchLinear,
  outline: ShieldSearchOutline,
  twotone: ShieldSearchTwotone,
};

export const ShieldSearchIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ShieldSearchIcon;
