import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const SliderHorizontalBold = ({
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
        d="M9 22H15C16.66 22 18 20.66 18 19V5C18 3.34 16.66 2 15 2H9C7.34 2 6 3.34 6 5V19C6 20.66 7.34 22 9 22Z"
        fill="currentColor"
      />
      <Path
        d="M4.5 5.92923V18.0692C4.5 18.3892 4.21 18.6192 3.9 18.5592C2.42 18.2892 2 17.4292 2 15.3292V8.66923C2 6.56923 2.42 5.70923 3.9 5.43923C4.21 5.37923 4.5 5.60923 4.5 5.92923Z"
        fill="currentColor"
      />
      <Path
        d="M22 8.66923V15.3292C22 17.4292 21.58 18.2892 20.1 18.5592C19.79 18.6192 19.5 18.3792 19.5 18.0692V5.92923C19.5 5.60923 19.79 5.37923 20.1 5.43923C21.58 5.70923 22 6.56923 22 8.66923Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SliderHorizontalBroken = ({
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
        d="M18 7V17C18 17.62 17.98 18.17 17.91 18.66C17.62 21.29 16.38 22 13 22H11C7.62 22 6.38 21.29 6.09 18.66C6.02 18.17 6 17.62 6 17V7C6 6.38 6.02 5.83 6.09 5.34C6.38 2.71 7.62 2 11 2H13C16.38 2 17.62 2.71 17.91 5.34C17.98 5.83 18 6.38 18 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 8.67008C2 6.00008 2.67 5.33008 5.33 5.33008H5.67C5.82 5.33008 5.95 5.33008 6.09 5.34008C6.02 5.83008 6 6.38008 6 7.00008V17.0001C6 17.6201 6.02 18.1701 6.09 18.6601C5.95 18.6701 5.82 18.6701 5.67 18.6701H5.33C2.67 18.6701 2 18.0001 2 15.3301V13.1301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.0002 8.67008V15.3301C22.0002 18.0001 21.3302 18.6701 18.6702 18.6701H18.3302C18.1802 18.6701 18.0502 18.6701 17.9102 18.6601C17.9802 18.1701 18.0002 17.6201 18.0002 17.0001V7.00008C18.0002 6.38008 17.9802 5.83008 17.9102 5.34008C18.0502 5.33008 18.1802 5.33008 18.3302 5.33008H18.6702C21.3302 5.33008 22.0002 6.00008 22.0002 8.67008Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SliderHorizontalBulk = ({
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
        d="M3.5 5.06006V18.9401C3.5 19.3501 3.16 19.6901 2.75 19.6901C2.34 19.6901 2 19.3501 2 18.9401V5.06006C2 4.65006 2.34 4.31006 2.75 4.31006C3.16 4.31006 3.5 4.65006 3.5 5.06006Z"
        fill="currentColor"
      />
      <Path
        d="M22 5.06006V18.9401C22 19.3501 21.66 19.6901 21.25 19.6901C20.84 19.6901 20.5 19.3501 20.5 18.9401V5.06006C20.5 4.65006 20.84 4.31006 21.25 4.31006C21.66 4.31006 22 4.65006 22 5.06006Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M7.59961 21.25H16.3996C18.0596 21.25 19.3996 19.91 19.3996 18.25V5.75C19.3996 4.09 18.0596 2.75 16.3996 2.75H7.59961C5.93961 2.75 4.59961 4.09 4.59961 5.75V18.25C4.59961 19.91 5.93961 21.25 7.59961 21.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SliderHorizontalLinear = ({
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
        d="M18 7V17C18 17.62 17.98 18.17 17.91 18.66C17.62 21.29 16.38 22 13 22H11C7.62 22 6.38 21.29 6.09 18.66C6.02 18.17 6 17.62 6 17V7C6 6.38 6.02 5.83 6.09 5.34C6.38 2.71 7.62 2 11 2H13C16.38 2 17.62 2.71 17.91 5.34C17.98 5.83 18 6.38 18 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 17.0001C6 17.6201 6.02 18.1701 6.09 18.6601C5.95 18.6701 5.82 18.6701 5.67 18.6701H5.33C2.67 18.6701 2 18.0001 2 15.3301V8.67008C2 6.00008 2.67 5.33008 5.33 5.33008H5.67C5.82 5.33008 5.95 5.33008 6.09 5.34008C6.02 5.83008 6 6.38008 6 7.00008V17.0001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 8.67008V15.3301C22 18.0001 21.33 18.6701 18.67 18.6701H18.33C18.18 18.6701 18.05 18.6701 17.91 18.6601C17.98 18.1701 18 17.6201 18 17.0001V7.00008C18 6.38008 17.98 5.83008 17.91 5.34008C18.05 5.33008 18.18 5.33008 18.33 5.33008H18.67C21.33 5.33008 22 6.00008 22 8.67008Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SliderHorizontalOutline = ({
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
        d="M14 22.25H10C6.7 22.25 4.71 21.59 4.34 18.24C4.28 17.79 4.25 17.25 4.25 16.5V7.5C4.25 6.75 4.28 6.2 4.35 5.73C4.71 2.41 6.7 1.75 10 1.75H14C17.3 1.75 19.29 2.41 19.66 5.76C19.72 6.21 19.75 6.75 19.75 7.5V16.5C19.75 17.25 19.72 17.8 19.65 18.27C19.29 21.59 17.3 22.25 14 22.25ZM10 3.25C6.69 3.25 6.06 3.92 5.83 5.92C5.78 6.34 5.75 6.82 5.75 7.5V16.5C5.75 17.18 5.78 17.66 5.83 18.05C6.05 20.08 6.69 20.75 10 20.75H14C17.31 20.75 17.94 20.08 18.17 18.08C18.23 17.66 18.25 17.18 18.25 16.5V7.5C18.25 6.82 18.22 6.34 18.17 5.95C17.95 3.92 17.31 3.25 14 3.25H10Z"
        fill="currentColor"
      />
      <Path
        d="M2 20.25C1.59 20.25 1.25 19.91 1.25 19.5V4.5C1.25 4.09 1.59 3.75 2 3.75C2.41 3.75 2.75 4.09 2.75 4.5V19.5C2.75 19.91 2.41 20.25 2 20.25Z"
        fill="currentColor"
      />
      <Path
        d="M22 19.75C21.59 19.75 21.25 19.41 21.25 19V4C21.25 3.59 21.59 3.25 22 3.25C22.41 3.25 22.75 3.59 22.75 4V19C22.75 19.41 22.41 19.75 22 19.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SliderHorizontalTwotone = ({
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
        d="M18 7V17C18 17.62 17.98 18.17 17.91 18.66C17.62 21.29 16.38 22 13 22H11C7.62 22 6.38 21.29 6.09 18.66C6.02 18.17 6 17.62 6 17V7C6 6.38 6.02 5.83 6.09 5.34C6.38 2.71 7.62 2 11 2H13C16.38 2 17.62 2.71 17.91 5.34C17.98 5.83 18 6.38 18 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6 17.0001C6 17.6201 6.02 18.1701 6.09 18.6601C5.95 18.6701 5.82 18.6701 5.67 18.6701H5.33C2.67 18.6701 2 18.0001 2 15.3301V8.67008C2 6.00008 2.67 5.33008 5.33 5.33008H5.67C5.82 5.33008 5.95 5.33008 6.09 5.34008C6.02 5.83008 6 6.38008 6 7.00008V17.0001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22.0002 8.67008V15.3301C22.0002 18.0001 21.3302 18.6701 18.6702 18.6701H18.3302C18.1802 18.6701 18.0502 18.6701 17.9102 18.6601C17.9802 18.1701 18.0002 17.6201 18.0002 17.0001V7.00008C18.0002 6.38008 17.9802 5.83008 17.9102 5.34008C18.0502 5.33008 18.1802 5.33008 18.3302 5.33008H18.6702C21.3302 5.33008 22.0002 6.00008 22.0002 8.67008Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SliderHorizontalBold,
  broken: SliderHorizontalBroken,
  bulk: SliderHorizontalBulk,
  linear: SliderHorizontalLinear,
  outline: SliderHorizontalOutline,
  twotone: SliderHorizontalTwotone,
};

export const SliderHorizontalIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default SliderHorizontalIcon;
