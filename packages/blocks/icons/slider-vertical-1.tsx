import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const SliderVertical1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.9405 3.5H5.06055C4.65055 3.5 4.31055 3.16 4.31055 2.75C4.31055 2.34 4.65055 2 5.06055 2H18.9405C19.3505 2 19.6905 2.34 19.6905 2.75C19.6905 3.16 19.3505 3.5 18.9405 3.5Z"
        fill="currentColor"
      />
      <Path
        d="M18.9405 22H5.06055C4.65055 22 4.31055 21.66 4.31055 21.25C4.31055 20.84 4.65055 20.5 5.06055 20.5H18.9405C19.3505 20.5 19.6905 20.84 19.6905 21.25C19.6905 21.66 19.3505 22 18.9405 22Z"
        fill="currentColor"
      />
      <Path
        d="M2.75 8V16C2.75 17.66 4.09 19 5.75 19H18.25C19.91 19 21.25 17.66 21.25 16V8C21.25 6.34 19.91 5 18.25 5H5.75C4.09 5 2.75 6.34 2.75 8Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SliderVertical1Broken = ({
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
        d="M17 18H7C6.38 18 5.83 17.98 5.34 17.91C2.71 17.62 2 16.38 2 13V11C2 7.62 2.71 6.38 5.34 6.09C5.83 6.02 6.38 6 7 6H17C17.62 6 18.17 6.02 18.66 6.09C21.29 6.38 22 7.62 22 11V13C22 16.38 21.29 17.62 18.66 17.91C18.17 17.98 17.62 18 17 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.3301 2C18.0001 2 18.6701 2.67 18.6701 5.33V5.67C18.6701 5.82 18.6701 5.95 18.6601 6.09C18.1701 6.02 17.6201 6 17.0001 6H7.00008C6.38008 6 5.83008 6.02 5.34008 6.09C5.33008 5.95 5.33008 5.82 5.33008 5.67V5.33C5.33008 2.67 6.00008 2 8.67008 2H10.8701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.3301 21.9999H8.67008C6.00008 21.9999 5.33008 21.3299 5.33008 18.6699V18.3299C5.33008 18.1799 5.33008 18.0499 5.34008 17.9099C5.83008 17.9799 6.38008 17.9999 7.00008 17.9999H17.0001C17.6201 17.9999 18.1701 17.9799 18.6601 17.9099C18.6701 18.0499 18.6701 18.1799 18.6701 18.3299V18.6699C18.6701 21.3299 18.0001 21.9999 15.3301 21.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SliderVertical1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9V15C2 16.66 3.34 18 5 18H19C20.66 18 22 16.66 22 15V9C22 7.34 20.66 6 19 6H5C3.34 6 2 7.34 2 9Z"
        fill="currentColor"
      />
      <Path
        d="M5.33008 5.33V5.67C5.33008 5.79 5.33008 5.9 5.34008 6.02C5.39008 6.01 5.44008 6 5.50008 6H7.00008H17.0001H18.5001C18.5601 6 18.6101 6.01 18.6601 6.02C18.6701 5.91 18.6701 5.8 18.6701 5.67V5.33C18.6701 2.67 18.0001 2 15.3301 2H8.67008C6.00008 2 5.33008 2.67 5.33008 5.33Z"
        fill="currentColor"
      />
      <Path
        d="M18.5001 18H17.0001H7.00008H5.50008C5.44008 18 5.39008 17.99 5.34008 17.98C5.33008 18.09 5.33008 18.2 5.33008 18.33V18.67C5.33008 21.33 6.00008 22 8.67008 22H15.3301C18.0001 22 18.6701 21.33 18.6701 18.67V18.33C18.6701 18.21 18.6701 18.1 18.6601 17.98C18.6101 17.99 18.5601 18 18.5001 18Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SliderVertical1Linear = ({
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
        d="M7.5 5H16.5C17.12 5 17.67 5.02 18.16 5.09C20.79 5.38 21.5 6.62 21.5 10V14C21.5 17.38 20.79 18.62 18.16 18.91C17.67 18.98 17.12 19 16.5 19H7.5C6.88 19 6.33 18.98 5.84 18.91C3.21 18.62 2.5 17.38 2.5 14V10C2.5 6.62 3.21 5.38 5.84 5.09C6.33 5.02 6.88 5 7.5 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.5 2H19.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 22H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SliderVertical1Outline = ({
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
        d="M17 18.75H7C6.25 18.75 5.7 18.72 5.23 18.65C1.91 18.29 1.25 16.3 1.25 13V11C1.25 7.7 1.91 5.71 5.26 5.34C5.7 5.28 6.25 5.25 7 5.25H17C17.75 5.25 18.3 5.28 18.77 5.35C22.1 5.72 22.75 7.7 22.75 11V13C22.75 16.3 22.09 18.29 18.74 18.66C18.3 18.72 17.75 18.75 17 18.75ZM7 6.75C6.32 6.75 5.84 6.78 5.45 6.83C3.42 7.06 2.75 7.69 2.75 11V13C2.75 16.31 3.42 16.94 5.42 17.17C5.84 17.23 6.32 17.25 7 17.25H17C17.68 17.25 18.16 17.22 18.55 17.17C20.58 16.95 21.25 16.31 21.25 13V11C21.25 7.69 20.58 7.06 18.58 6.83C18.16 6.77 17.68 6.75 17 6.75H7Z"
        fill="currentColor"
      />
      <Path
        d="M15.3301 22.7502H8.67008C5.57008 22.7502 4.58008 21.7602 4.58008 18.6702V18.3302C4.58008 18.1602 4.58008 18.0102 4.59008 17.8602C4.60008 17.6502 4.70008 17.4602 4.87008 17.3302C5.03008 17.2002 5.24008 17.1402 5.45008 17.1702C5.85008 17.2302 6.33008 17.2502 7.00008 17.2502H17.0001C17.6801 17.2502 18.1601 17.2202 18.5501 17.1702C18.7601 17.1402 18.9701 17.2002 19.1301 17.3302C19.2901 17.4602 19.3901 17.6502 19.4101 17.8602C19.4201 18.0202 19.4201 18.1602 19.4201 18.3302V18.6702C19.4201 21.7602 18.4301 22.7502 15.3301 22.7502ZM6.08008 18.7302C6.09008 20.9202 6.44008 21.2502 8.67008 21.2502H15.3301C17.5601 21.2502 17.9101 20.9202 17.9201 18.7302C17.6501 18.7402 17.3501 18.7502 17.0001 18.7502H7.00008C6.65008 18.7502 6.35008 18.7402 6.08008 18.7302Z"
        fill="currentColor"
      />
      <Path
        d="M18.6601 6.84C18.6201 6.84 18.5901 6.84 18.5501 6.83C18.1501 6.77 17.6701 6.75 17.0001 6.75H7.00008C6.32008 6.75 5.84008 6.78 5.45008 6.83C5.24008 6.86 5.03008 6.8 4.87008 6.67C4.71008 6.54 4.61008 6.35 4.59008 6.14C4.58008 5.98 4.58008 5.84 4.58008 5.67V5.33C4.58008 2.24 5.57008 1.25 8.67008 1.25H15.3301C18.4301 1.25 19.4201 2.24 19.4201 5.33V5.67C19.4201 5.84 19.4201 5.99 19.4101 6.14C19.4001 6.35 19.3001 6.54 19.1301 6.67C19.0001 6.78 18.8301 6.84 18.6601 6.84ZM7.00008 5.25H17.0001C17.3501 5.25 17.6501 5.26 17.9201 5.27C17.9101 3.08 17.5601 2.75 15.3301 2.75H8.67008C6.44008 2.75 6.09008 3.08 6.08008 5.27C6.35008 5.26 6.65008 5.25 7.00008 5.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SliderVertical1Twotone = ({
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
        d="M7.5 5H16.5C17.12 5 17.67 5.02 18.16 5.09C20.79 5.38 21.5 6.62 21.5 10V14C21.5 17.38 20.79 18.62 18.16 18.91C17.67 18.98 17.12 19 16.5 19H7.5C6.88 19 6.33 18.98 5.84 18.91C3.21 18.62 2.5 17.38 2.5 14V10C2.5 6.62 3.21 5.38 5.84 5.09C6.33 5.02 6.88 5 7.5 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M4.5 2H19.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5 22H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SliderVertical1Bold,
  broken: SliderVertical1Broken,
  bulk: SliderVertical1Bulk,
  linear: SliderVertical1Linear,
  outline: SliderVertical1Outline,
  twotone: SliderVertical1Twotone,
};

export const SliderVertical1Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
