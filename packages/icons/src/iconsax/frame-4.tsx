import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const Frame4Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.02 4.62109H6.98C5.39 4.62109 4.75 5.22109 4.75 6.74109V18.6211H10.25V6.74109C10.24 5.22109 9.6 4.62109 8.02 4.62109Z"
        fill="currentColor"
      />
      <Path
        d="M16.52 9.62109H15.48C13.89 9.62109 13.25 10.2311 13.25 11.7411V18.6211H18.75V11.7411C18.75 10.2311 18.1 9.62109 16.52 9.62109Z"
        fill="currentColor"
      />
      <Path
        d="M2.75 17.8789H21.25C21.66 17.8789 22 18.2189 22 18.6289C22 19.0389 21.66 19.3789 21.25 19.3789H2.75C2.34 19.3789 2 19.0389 2 18.6189C2 18.1989 2.34 17.8789 2.75 17.8789Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Frame4Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.27 22C9.86 22 10.5 21.4 10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.73 2C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.49 22 9.92 22 8.51V3.98C22 2.57 21.36 2 19.77 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Frame4Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0005 13.9001V16.1901C22.0005 19.8301 19.8305 22.0001 16.1905 22.0001H7.81055C5.26055 22.0001 3.42055 20.9301 2.56055 19.0301L2.67055 18.9501L7.59055 15.6501C8.39055 15.1101 9.52055 15.1701 10.2305 15.7901L10.5705 16.0701C11.3505 16.7401 12.6105 16.7401 13.3905 16.0701L17.5505 12.5001C18.3305 11.8301 19.5905 11.8301 20.3705 12.5001L22.0005 13.9001Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.97 8H18.03C16.76 8 16 7.24 16 5.97V3.03C16 2.63 16.08 2.29 16.22 2C16.21 2 16.2 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03L2.67 18.95L7.59 15.65C8.39 15.11 9.52 15.17 10.23 15.79L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9V7.81C22 7.8 22 7.79 22 7.78C21.71 7.92 21.37 8 20.97 8Z"
        fill="currentColor"
      />
      <Path
        d="M8.99914 10.3801C10.3136 10.3801 11.3791 9.31456 11.3791 8.00012C11.3791 6.68568 10.3136 5.62012 8.99914 5.62012C7.6847 5.62012 6.61914 6.68568 6.61914 8.00012C6.61914 9.31456 7.6847 10.3801 8.99914 10.3801Z"
        fill="currentColor"
      />
      <Path
        d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.19 4.31C21.07 4.43 20.91 4.49 20.75 4.49C20.59 4.49 20.43 4.43 20.31 4.31L20.13 4.13V6.37C20.13 6.72 19.85 7 19.5 7C19.15 7 18.87 6.72 18.87 6.37V4.13L18.69 4.31C18.45 4.55 18.05 4.55 17.81 4.31C17.57 4.07 17.57 3.67 17.81 3.43L19.06 2.18C19.11 2.13 19.18 2.09 19.25 2.06C19.27 2.05 19.29 2.05 19.31 2.04C19.36 2.02 19.41 2.01 19.47 2.01C19.49 2.01 19.51 2.01 19.53 2.01C19.6 2.01 19.66 2.02 19.73 2.05C19.74 2.05 19.74 2.05 19.75 2.05C19.82 2.08 19.88 2.12 19.93 2.17C19.94 2.18 19.94 2.18 19.95 2.18L21.2 3.43C21.44 3.67 21.44 4.07 21.19 4.31Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Frame4Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.25 9.05005C11.03 9.70005 12.97 9.70005 14.75 9.05005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Frame4Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0004 22.7599C10.9104 22.7599 9.83039 22.4399 8.98039 21.8099L4.68039 18.5999C3.54039 17.7499 2.65039 15.9799 2.65039 14.5599V7.11994C2.65039 5.57994 3.78039 3.93994 5.23039 3.39994L10.2204 1.52994C11.2104 1.15994 12.7704 1.15994 13.7604 1.52994L18.7604 3.39994C20.2104 3.93994 21.3404 5.57994 21.3404 7.11994V14.5499C21.3404 15.9699 20.4504 17.7399 19.3104 18.5899L15.0104 21.7999C14.1704 22.4399 13.0904 22.7599 12.0004 22.7599ZM10.7504 2.93994L5.76039 4.80994C4.90039 5.12994 4.15039 6.20994 4.15039 7.12994V14.5599C4.15039 15.5099 4.82039 16.8399 5.57039 17.3999L9.87039 20.6099C11.0204 21.4699 12.9704 21.4699 14.1204 20.6099L18.4204 17.3999C19.1804 16.8299 19.8404 15.4999 19.8404 14.5599V7.11994C19.8404 6.20994 19.0904 5.12994 18.2304 4.79994L13.2404 2.92994C12.5804 2.68994 11.4204 2.68994 10.7504 2.93994Z"
        fill="currentColor"
      />
      <Path
        d="M12 13.25C10.48 13.25 9.25 12.02 9.25 10.5C9.25 8.98 10.48 7.75 12 7.75C13.52 7.75 14.75 8.98 14.75 10.5C14.75 12.02 13.52 13.25 12 13.25ZM12 9.25C11.31 9.25 10.75 9.81 10.75 10.5C10.75 11.19 11.31 11.75 12 11.75C12.69 11.75 13.25 11.19 13.25 10.5C13.25 9.81 12.69 9.25 12 9.25Z"
        fill="currentColor"
      />
      <Path
        d="M12 16.25C11.59 16.25 11.25 15.91 11.25 15.5V12.5C11.25 12.09 11.59 11.75 12 11.75C12.41 11.75 12.75 12.09 12.75 12.5V15.5C12.75 15.91 12.41 16.25 12 16.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Frame4Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.25 9.0498C11.03 9.6998 12.97 9.6998 14.75 9.0498"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Frame4Bold,
  broken: Frame4Broken,
  bulk: Frame4Bulk,
  linear: Frame4Linear,
  outline: Frame4Outline,
  twotone: Frame4Twotone,
};

export const Frame4Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default Frame4Icon;
