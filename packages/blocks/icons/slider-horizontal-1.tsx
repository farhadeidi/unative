import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const SliderHorizontal1Bold = ({
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
        d="M3.5 5.05859V18.9386C3.5 19.3486 3.16 19.6886 2.75 19.6886C2.34 19.6886 2 19.3486 2 18.9386V5.05859C2 4.64859 2.34 4.30859 2.75 4.30859C3.16 4.30859 3.5 4.64859 3.5 5.05859Z"
        fill="currentColor"
      />
      <Path
        d="M22 5.05859V18.9386C22 19.3486 21.66 19.6886 21.25 19.6886C20.84 19.6886 20.5 19.3486 20.5 18.9386V5.05859C20.5 4.64859 20.84 4.30859 21.25 4.30859C21.66 4.30859 22 4.64859 22 5.05859Z"
        fill="currentColor"
      />
      <Path
        d="M8 21.25H16C17.66 21.25 19 19.91 19 18.25V5.75C19 4.09 17.66 2.75 16 2.75H8C6.34 2.75 5 4.09 5 5.75V18.25C5 19.91 6.34 21.25 8 21.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SliderHorizontal1Broken = ({
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
        d="M2 19.5V4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 19V4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 12.45V7.5C5 6.88 5.02 6.33 5.09 5.84C5.38 3.21 6.62 2.5 10 2.5H14C17.38 2.5 18.62 3.21 18.91 5.84C18.98 6.33 19 6.88 19 7.5V16.5C19 17.12 18.98 17.67 18.91 18.16C18.62 20.79 17.38 21.5 14 21.5H10C6.62 21.5 5.38 20.79 5.09 18.16C5.02 17.67 5 17.12 5 16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SliderHorizontal1Bulk = ({
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
        d="M15 2H9C7.34 2 6 3.34 6 5V19C6 20.66 7.34 22 9 22H15C16.66 22 18 20.66 18 19V5C18 3.34 16.66 2 15 2Z"
        fill="currentColor"
      />
      <Path
        d="M18.6705 5.33008H18.3305C18.2105 5.33008 18.1005 5.33008 17.9805 5.34008C17.9905 5.39008 18.0005 5.44008 18.0005 5.50008V7.00008V17.0001V18.5001C18.0005 18.5601 17.9905 18.6101 17.9805 18.6601C18.0905 18.6701 18.2005 18.6701 18.3305 18.6701H18.6705C21.3305 18.6701 22.0005 18.0001 22.0005 15.3301V8.67008C22.0005 6.00008 21.3305 5.33008 18.6705 5.33008Z"
        fill="currentColor"
      />
      <Path
        d="M6 18.5001V17.0001V7.00008V5.50008C6 5.44008 6.01 5.39008 6.02 5.34008C5.9 5.33008 5.79 5.33008 5.67 5.33008H5.33C2.67 5.33008 2 6.00008 2 8.67008V15.3301C2 18.0001 2.67 18.6701 5.33 18.6701H5.67C5.79 18.6701 5.9 18.6701 6.02 18.6601C6.01 18.6101 6 18.5601 6 18.5001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SliderHorizontal1Linear = ({
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
        d="M5 16.5V7.5C5 6.88 5.02 6.33 5.09 5.84C5.38 3.21 6.62 2.5 10 2.5H14C17.38 2.5 18.62 3.21 18.91 5.84C18.98 6.33 19 6.88 19 7.5V16.5C19 17.12 18.98 17.67 18.91 18.16C18.62 20.79 17.38 21.5 14 21.5H10C6.62 21.5 5.38 20.79 5.09 18.16C5.02 17.67 5 17.12 5 16.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 19.5V4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 19V4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SliderHorizontal1Outline = ({
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
        d="M13 22.75H11C7.7 22.75 5.71 22.09 5.34 18.74C5.28 18.29 5.25 17.75 5.25 17V7C5.25 6.25 5.28 5.71 5.35 5.23C5.71 1.91 7.7 1.25 11 1.25H13C16.3 1.25 18.29 1.91 18.66 5.26C18.72 5.71 18.75 6.25 18.75 7V17C18.75 17.75 18.72 18.29 18.65 18.77C18.29 22.09 16.3 22.75 13 22.75ZM11 2.75C7.69 2.75 7.06 3.42 6.84 5.42C6.78 5.85 6.75 6.32 6.75 7V17C6.75 17.68 6.78 18.15 6.83 18.55C7.05 20.58 7.69 21.25 11 21.25H13C16.31 21.25 16.94 20.58 17.16 18.58C17.22 18.16 17.25 17.68 17.25 17V7C17.25 6.33 17.22 5.85 17.17 5.45C16.95 3.42 16.31 2.75 13 2.75H11Z"
        fill="currentColor"
      />
      <Path
        d="M5.67 19.4201H5.33C2.24 19.4201 1.25 18.4301 1.25 15.3301V8.67008C1.25 5.57008 2.24 4.58008 5.33 4.58008H5.67C5.84 4.58008 5.98 4.58008 6.14 4.59008C6.35 4.60008 6.54 4.70008 6.67 4.87008C6.8 5.04008 6.86 5.24008 6.83 5.45008C6.78 5.85008 6.75 6.32008 6.75 7.00008V17.0001C6.75 17.6801 6.78 18.1501 6.83 18.5501C6.86 18.7601 6.8 18.9701 6.67 19.1301C6.54 19.2901 6.35 19.3901 6.14 19.4101C5.98 19.4201 5.84 19.4201 5.67 19.4201ZM5.27 6.08008C3.08 6.09008 2.75 6.44008 2.75 8.67008V15.3301C2.75 17.5601 3.08 17.9101 5.27 17.9201C5.26 17.6501 5.25 17.3501 5.25 17.0001V7.00008C5.25 6.65008 5.26 6.35008 5.27 6.08008Z"
        fill="currentColor"
      />
      <Path
        d="M18.6697 19.4201H18.3297C18.1597 19.4201 18.0197 19.4201 17.8597 19.4101C17.6497 19.4001 17.4597 19.3001 17.3297 19.1301C17.1997 18.9701 17.1397 18.7601 17.1697 18.5501C17.2297 18.1501 17.2497 17.6701 17.2497 17.0001V7.00008C17.2497 6.33008 17.2197 5.85008 17.1697 5.45008C17.1397 5.24008 17.1997 5.03008 17.3297 4.87008C17.4597 4.71008 17.6497 4.61008 17.8597 4.59008C18.0197 4.58008 18.1597 4.58008 18.3297 4.58008H18.6697C21.7597 4.58008 22.7497 5.57008 22.7497 8.67008V15.3301C22.7497 18.4301 21.7597 19.4201 18.6697 19.4201ZM18.7297 6.08008C18.7397 6.35008 18.7497 6.65008 18.7497 7.00008V17.0001C18.7497 17.3501 18.7397 17.6501 18.7297 17.9201C20.9197 17.9101 21.2497 17.5601 21.2497 15.3301V8.67008C21.2497 6.44008 20.9197 6.09008 18.7297 6.08008Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SliderHorizontal1Twotone = ({
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
        d="M5 16.5V7.5C5 6.88 5.02 6.33 5.09 5.84C5.38 3.21 6.62 2.5 10 2.5H14C17.38 2.5 18.62 3.21 18.91 5.84C18.98 6.33 19 6.88 19 7.5V16.5C19 17.12 18.98 17.67 18.91 18.16C18.62 20.79 17.38 21.5 14 21.5H10C6.62 21.5 5.38 20.79 5.09 18.16C5.02 17.67 5 17.12 5 16.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2 19.5V4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22 19V4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SliderHorizontal1Bold,
  broken: SliderHorizontal1Broken,
  bulk: SliderHorizontal1Bulk,
  linear: SliderHorizontal1Linear,
  outline: SliderHorizontal1Outline,
  twotone: SliderHorizontal1Twotone,
};

export const SliderHorizontal1Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
