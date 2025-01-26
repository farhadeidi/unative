import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const HeartRemoveBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.6904 13.9184C20.6804 13.9184 20.6804 13.9084 20.6804 13.9084V13.8984C19.8004 12.9784 18.5704 12.3984 17.2004 12.3984C14.5504 12.3984 12.4004 14.5484 12.4004 17.1984C12.4004 18.4284 12.8704 19.5484 13.6304 20.3984C14.5104 21.3784 15.7804 21.9984 17.2004 21.9984C19.8504 21.9984 22.0004 19.8484 22.0004 17.1984C22.0004 15.9284 21.5004 14.7784 20.6904 13.9184ZM19.0104 19.0684C18.8704 19.2084 18.6704 19.2884 18.4804 19.2884C18.2904 19.2884 18.1004 19.2084 17.9504 19.0684L17.2104 18.3284L16.4504 19.0984C16.3004 19.2384 16.1104 19.3184 15.9204 19.3184C15.8204 19.3184 15.7304 19.2984 15.6404 19.2584C15.5504 19.2284 15.4604 19.1684 15.3904 19.0984C15.0904 18.7984 15.0904 18.3284 15.3904 18.0384L16.1504 17.2684L15.4204 16.5284C15.1204 16.2384 15.1204 15.7584 15.4204 15.4684C15.7104 15.1784 16.1804 15.1784 16.4804 15.4684L17.2104 16.2084L17.9204 15.4984C18.2204 15.2084 18.6904 15.2084 18.9804 15.4984C19.1504 15.6684 19.2204 15.8884 19.1904 16.1084C19.1804 16.2784 19.1104 16.4384 18.9804 16.5584L18.2704 17.2684L19.0104 18.0084C19.3104 18.2984 19.3104 18.7684 19.0104 19.0684Z"
        fill="currentColor"
      />
      <Path
        d="M22 8.73062C22 9.92062 21.81 11.0206 21.48 12.0406C21.42 12.2506 21.17 12.3106 20.99 12.1806C19.9 11.3706 18.57 10.9406 17.2 10.9406C13.73 10.9406 10.9 13.7706 10.9 17.2406C10.9 18.3206 11.18 19.3806 11.71 20.3206C11.87 20.6006 11.68 20.9606 11.38 20.8506C8.97 20.0306 4.1 17.0406 2.52 12.0406C2.19 11.0206 2 9.92062 2 8.73062C2 5.64062 4.49 3.14063 7.56 3.14063C9.37 3.14063 10.99 4.02062 12 5.37062C13.01 4.02062 14.63 3.14063 16.44 3.14063C19.51 3.14062 22 5.64062 22 8.73062Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartRemoveBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0004 17.2C22.0004 19.85 19.8504 22 17.2004 22C15.7804 22 14.5104 21.38 13.6304 20.4C12.8704 19.55 12.4004 18.43 12.4004 17.2C12.4004 14.55 14.5504 12.4 17.2004 12.4C18.5704 12.4 19.8104 12.98 20.6904 13.91C20.6804 13.91 20.6804 13.91 20.6904 13.92C21.5004 14.78 22.0004 15.93 22.0004 17.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.4792 18.54L15.9492 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.45 16.03L15.9199 18.57"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.56 3.09998C9.37 3.09998 10.99 3.98002 12 5.33002C13.01 3.98002 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.6 22 8.69C22 10.66 21.49 12.4 20.69 13.91C19.81 12.98 18.57 12.4 17.2 12.4C14.55 12.4 12.4 14.55 12.4 17.2C12.4 18.43 12.87 19.55 13.63 20.4C13.26 20.57 12.92 20.71 12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 7.14 2.62 5.73998 3.63 4.72998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HeartRemoveBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 8.69009C22 9.88009 21.81 10.9801 21.48 12.0001C21.27 12.6701 21 13.3101 20.68 13.9001C19.8 12.9701 18.57 12.4001 17.2 12.4001C14.55 12.4001 12.4 14.5501 12.4 17.2001C12.4 18.4301 12.87 19.5501 13.63 20.4001C13.26 20.5701 12.92 20.7101 12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.97001 19.9901 4.10002 17.0001 2.52002 12.0001C2.19002 10.9801 2 9.88009 2 8.69009C2 5.60009 4.49 3.1001 7.56 3.1001C9.37 3.1001 10.99 3.98008 12 5.33008C13.01 3.98008 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.60009 22 8.69009Z"
        fill="currentColor"
      />
      <Path
        d="M20.6904 13.9199C20.6804 13.9199 20.6804 13.9099 20.6804 13.9099V13.8999C19.8004 12.9799 18.5704 12.3999 17.2004 12.3999C14.5504 12.3999 12.4004 14.5499 12.4004 17.1999C12.4004 18.4299 12.8704 19.5499 13.6304 20.3999C14.5104 21.3799 15.7804 21.9999 17.2004 21.9999C19.8504 21.9999 22.0004 19.8499 22.0004 17.1999C22.0004 15.9299 21.5004 14.7799 20.6904 13.9199ZM19.0104 19.0699C18.8704 19.2099 18.6703 19.2899 18.4803 19.2899C18.2903 19.2899 18.1004 19.2099 17.9504 19.0699L17.2104 18.3299L16.4504 19.0999C16.3004 19.2399 16.1103 19.3199 15.9203 19.3199C15.8203 19.3199 15.7304 19.2999 15.6404 19.2599C15.5504 19.2299 15.4604 19.1699 15.3904 19.0999C15.0904 18.7999 15.0904 18.3299 15.3904 18.0399L16.1504 17.2699L15.4203 16.5299C15.1203 16.2399 15.1203 15.7599 15.4203 15.4699C15.7103 15.1799 16.1803 15.1799 16.4803 15.4699L17.2104 16.2099L17.9203 15.4999C18.2203 15.2099 18.6903 15.2099 18.9803 15.4999C19.1503 15.6699 19.2204 15.8899 19.1904 16.1099C19.1804 16.2799 19.1103 16.4399 18.9803 16.5599L18.2704 17.2699L19.0104 18.0099C19.3104 18.2999 19.3104 18.7699 19.0104 19.0699Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartRemoveLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 17.2C22 19.85 19.85 22 17.2 22C15.78 22 14.51 21.38 13.63 20.4C12.87 19.55 12.4 18.43 12.4 17.2C12.4 14.55 14.55 12.4 17.2 12.4C18.57 12.4 19.81 12.98 20.69 13.91C20.68 13.91 20.68 13.91 20.69 13.92C21.5 14.78 22 15.93 22 17.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.48 18.54L15.95 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.45 16.03L15.92 18.57"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 8.69C22 10.66 21.49 12.4 20.69 13.91C19.81 12.98 18.57 12.4 17.2 12.4C14.55 12.4 12.4 14.55 12.4 17.2C12.4 18.43 12.87 19.55 13.63 20.4C13.26 20.57 12.92 20.71 12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.09998 7.56 3.09998C9.37 3.09998 10.99 3.98002 12 5.33002C13.01 3.98002 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.6 22 8.69Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HeartRemoveOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.2004 22.7499C15.6304 22.7499 14.1304 22.0799 13.0704 20.8999C12.1504 19.8699 11.6504 18.5599 11.6504 17.1999C11.6504 14.1399 14.1404 11.6499 17.2004 11.6499C18.7404 11.6499 20.1704 12.2699 21.2404 13.3899C21.2704 13.4199 21.3004 13.4599 21.3204 13.4899C22.2604 14.5499 22.7504 15.8399 22.7504 17.1899C22.7504 20.2599 20.2604 22.7499 17.2004 22.7499ZM17.2004 13.1499C14.9704 13.1499 13.1504 14.9699 13.1504 17.1999C13.1504 18.1899 13.5204 19.1499 14.1904 19.8999C14.9604 20.7599 16.0604 21.2499 17.2004 21.2499C19.4304 21.2499 21.2504 19.4299 21.2504 17.1999C21.2504 16.1699 20.8604 15.1899 20.1404 14.4299C20.1204 14.4099 20.1004 14.3799 20.0804 14.3599C19.3104 13.5799 18.2904 13.1499 17.2004 13.1499Z"
        fill="currentColor"
      />
      <Path
        d="M18.4789 19.2899C18.2889 19.2899 18.0989 19.22 17.9489 19.07L15.4089 16.53C15.1189 16.24 15.1189 15.7599 15.4089 15.4699C15.6989 15.1799 16.1789 15.1799 16.4689 15.4699L19.0089 18.01C19.2989 18.3 19.2989 18.78 19.0089 19.07C18.8689 19.21 18.6689 19.2899 18.4789 19.2899Z"
        fill="currentColor"
      />
      <Path
        d="M15.9193 19.32C15.7293 19.32 15.5394 19.2499 15.3894 19.0999C15.0994 18.8099 15.0994 18.3299 15.3894 18.0399L17.9294 15.5C18.2194 15.21 18.6994 15.21 18.9894 15.5C19.2794 15.79 19.2794 16.27 18.9894 16.56L16.4494 19.0999C16.2994 19.2399 16.1093 19.32 15.9193 19.32Z"
        fill="currentColor"
      />
      <Path
        d="M12 21.6501C11.69 21.6501 11.38 21.6101 11.13 21.5201C8.57 20.6501 1.25 16.4101 1.25 8.69012C1.25 5.19012 4.08 2.3501 7.56 2.3501C9.23 2.3501 10.83 3.02012 12 4.19012C13.17 3.02012 14.78 2.3501 16.44 2.3501C19.92 2.3501 22.75 5.19012 22.75 8.69012C22.75 10.6401 22.28 12.5101 21.35 14.2601C21.24 14.4701 21.03 14.6201 20.79 14.6501C20.55 14.6801 20.31 14.6001 20.14 14.4201C19.36 13.6001 18.31 13.1401 17.19 13.1401C14.96 13.1401 13.14 14.9601 13.14 17.1901C13.14 18.1801 13.51 19.1401 14.18 19.8901C14.34 20.0701 14.4 20.3101 14.35 20.5401C14.3 20.7701 14.14 20.9701 13.93 21.0701C13.53 21.2501 13.17 21.4001 12.84 21.5101C12.61 21.6101 12.31 21.6501 12 21.6501ZM7.56 3.8501C4.91 3.8501 2.75 6.02012 2.75 8.69012C2.75 15.5301 9.31999 19.3101 11.62 20.1001C11.8 20.1701 12.19 20.1601 12.37 20.1001C12.4 20.0901 12.43 20.0801 12.46 20.0701C11.94 19.2101 11.65 18.2201 11.65 17.2001C11.65 14.1401 14.14 11.6501 17.2 11.6501C18.38 11.6501 19.5 12.0201 20.44 12.6901C20.98 11.4101 21.25 10.0701 21.25 8.69012C21.25 6.02012 19.09 3.8501 16.44 3.8501C14.94 3.8501 13.5 4.57015 12.6 5.78015C12.32 6.16015 11.68 6.16015 11.4 5.78015C10.5 4.57015 9.06 3.8501 7.56 3.8501Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartRemoveTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0004 17.1999C22.0004 19.8499 19.8504 21.9999 17.2004 21.9999C15.7804 21.9999 14.5104 21.3799 13.6304 20.3999C12.8704 19.5499 12.4004 18.4299 12.4004 17.1999C12.4004 14.5499 14.5504 12.3999 17.2004 12.3999C18.5704 12.3999 19.8104 12.9799 20.6904 13.9099C20.6804 13.9099 20.6804 13.9099 20.6904 13.9199C21.5004 14.7799 22.0004 15.9299 22.0004 17.1999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.4792 18.54L15.9492 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.45 16.0303L15.9199 18.5703"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22 8.69012C22 10.6601 21.49 12.4001 20.69 13.9101C19.81 12.9801 18.57 12.4001 17.2 12.4001C14.55 12.4001 12.4 14.5501 12.4 17.2001C12.4 18.4301 12.87 19.5501 13.63 20.4001C13.26 20.5701 12.92 20.7101 12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.69012C2 5.60012 4.49 3.1001 7.56 3.1001C9.37 3.1001 10.99 3.98014 12 5.33014C13.01 3.98014 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.60012 22 8.69012Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: HeartRemoveBold,
  broken: HeartRemoveBroken,
  bulk: HeartRemoveBulk,
  linear: HeartRemoveLinear,
  outline: HeartRemoveOutline,
  twotone: HeartRemoveTwotone,
};

export const HeartRemoveIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
