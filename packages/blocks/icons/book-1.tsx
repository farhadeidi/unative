import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const Book1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 4.84969V16.7397C22 17.7097 21.21 18.5997 20.24 18.7197L19.93 18.7597C18.29 18.9797 15.98 19.6597 14.12 20.4397C13.47 20.7097 12.75 20.2197 12.75 19.5097V5.59969C12.75 5.22969 12.96 4.88969 13.29 4.70969C15.12 3.71969 17.89 2.83969 19.77 2.67969H19.83C21.03 2.67969 22 3.64969 22 4.84969Z"
        fill="currentColor"
      />
      <Path
        d="M10.7083 4.70969C8.87828 3.71969 6.10828 2.83969 4.22828 2.67969H4.15828C2.95828 2.67969 1.98828 3.64969 1.98828 4.84969V16.7397C1.98828 17.7097 2.77828 18.5997 3.74828 18.7197L4.05828 18.7597C5.69828 18.9797 8.00828 19.6597 9.86828 20.4397C10.5183 20.7097 11.2383 20.2197 11.2383 19.5097V5.59969C11.2383 5.21969 11.0383 4.88969 10.7083 4.70969ZM4.99828 7.73969H7.24828C7.65828 7.73969 7.99828 8.07969 7.99828 8.48969C7.99828 8.90969 7.65828 9.23969 7.24828 9.23969H4.99828C4.58828 9.23969 4.24828 8.90969 4.24828 8.48969C4.24828 8.07969 4.58828 7.73969 4.99828 7.73969ZM7.99828 12.2397H4.99828C4.58828 12.2397 4.24828 11.9097 4.24828 11.4897C4.24828 11.0797 4.58828 10.7397 4.99828 10.7397H7.99828C8.40828 10.7397 8.74828 11.0797 8.74828 11.4897C8.74828 11.9097 8.40828 12.2397 7.99828 12.2397Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Book1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.5002 11V17C20.5002 17.14 20.5002 17.28 20.4902 17.42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 7H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 10.5H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Book1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.5 7V15H6.35C4.78 15 3.5 16.28 3.5 17.85V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7Z"
        fill="currentColor"
      />
      <Path
        d="M20.5 15V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15H20.5Z"
        fill="currentColor"
      />
      <Path
        d="M16 7.75H8C7.59 7.75 7.25 7.41 7.25 7C7.25 6.59 7.59 6.25 8 6.25H16C16.41 6.25 16.75 6.59 16.75 7C16.75 7.41 16.41 7.75 16 7.75Z"
        fill="currentColor"
      />
      <Path
        d="M13 11.25H8C7.59 11.25 7.25 10.91 7.25 10.5C7.25 10.09 7.59 9.75 8 9.75H13C13.41 9.75 13.75 10.09 13.75 10.5C13.75 10.91 13.41 11.25 13 11.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Book1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 16.7399V4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994V16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 5.48999V20.49"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.75 8.48999H5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 11.49H5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Book1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.08C11.7 22.08 11.4 22.01 11.15 21.87C9.28 20.85 5.99 19.77 3.93 19.5L3.64 19.46C2.33 19.3 1.25 18.07 1.25 16.74V4.66001C1.25 3.87001 1.56 3.15001 2.13 2.63001C2.7 2.11001 3.44 1.86001 4.22 1.93001C6.42 2.10001 9.74 3.20001 11.62 4.38001L11.86 4.52001C11.93 4.56001 12.08 4.56001 12.14 4.53001L12.3 4.43001C14.18 3.25001 17.5 2.13001 19.71 1.94001C19.73 1.94001 19.81 1.94001 19.83 1.94001C20.56 1.87001 21.31 2.13001 21.87 2.65001C22.44 3.17001 22.75 3.89001 22.75 4.68001V16.75C22.75 18.09 21.67 19.31 20.35 19.47L20.02 19.51C17.96 19.78 14.66 20.87 12.83 21.88C12.59 22.02 12.3 22.08 12 22.08ZM3.98 3.42001C3.66 3.42001 3.37 3.53001 3.14 3.74001C2.89 3.97001 2.75 4.30001 2.75 4.66001V16.74C2.75 17.33 3.26 17.9 3.83 17.98L4.13 18.02C6.38 18.32 9.83 19.45 11.83 20.54C11.92 20.58 12.05 20.59 12.1 20.57C14.1 19.46 17.57 18.32 19.83 18.02L20.17 17.98C20.74 17.91 21.25 17.33 21.25 16.74V4.67001C21.25 4.30001 21.11 3.98001 20.86 3.74001C20.6 3.51001 20.27 3.40001 19.9 3.42001C19.88 3.42001 19.8 3.42001 19.78 3.42001C17.87 3.59001 14.79 4.62001 13.11 5.67001L12.95 5.78001C12.4 6.12001 11.62 6.12001 11.09 5.79001L10.85 5.65001C9.14 4.60001 6.06 3.58001 4.1 3.42001C4.06 3.42001 4.02 3.42001 3.98 3.42001Z"
        fill="currentColor"
      />
      <Path
        d="M12 21.24C11.59 21.24 11.25 20.9 11.25 20.49V5.48999C11.25 5.07999 11.59 4.73999 12 4.73999C12.41 4.73999 12.75 5.07999 12.75 5.48999V20.49C12.75 20.91 12.41 21.24 12 21.24Z"
        fill="currentColor"
      />
      <Path
        d="M7.75 9.23999H5.5C5.09 9.23999 4.75 8.89999 4.75 8.48999C4.75 8.07999 5.09 7.73999 5.5 7.73999H7.75C8.16 7.73999 8.5 8.07999 8.5 8.48999C8.5 8.89999 8.16 9.23999 7.75 9.23999Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 12.24H5.5C5.09 12.24 4.75 11.9 4.75 11.49C4.75 11.08 5.09 10.74 5.5 10.74H8.5C8.91 10.74 9.25 11.08 9.25 11.49C9.25 11.9 8.91 12.24 8.5 12.24Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Book1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 16.7402V4.67019C22 3.47019 21.02 2.58019 19.83 2.68019H19.77C17.67 2.86019 14.48 3.93019 12.7 5.05019L12.53 5.16019C12.24 5.34019 11.76 5.34019 11.47 5.16019L11.22 5.01019C9.44 3.90019 6.26 2.84019 4.16 2.67019C2.97 2.57019 2 3.47019 2 4.66019V16.7402C2 17.7002 2.78 18.6002 3.74 18.7202L4.03 18.7602C6.2 19.0502 9.55 20.1502 11.47 21.2002L11.51 21.2202C11.78 21.3702 12.21 21.3702 12.47 21.2202C14.39 20.1602 17.75 19.0502 19.93 18.7602L20.26 18.7202C21.22 18.6002 22 17.7002 22 16.7402Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 5.49023V20.4902"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.75 8.49023H5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.5 11.4902H5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Book1Bold,
  broken: Book1Broken,
  bulk: Book1Bulk,
  linear: Book1Linear,
  outline: Book1Outline,
  twotone: Book1Twotone,
};

export const Book1Icon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
