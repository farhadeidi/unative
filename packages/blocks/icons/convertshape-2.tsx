import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const Convertshape2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
        fill="currentColor"
      />
      <Path
        d="M17.5 11C19.9853 11 22 8.98528 22 6.5C22 4.01472 19.9853 2 17.5 2C15.0147 2 13 4.01472 13 6.5C13 8.98528 15.0147 11 17.5 11Z"
        fill="currentColor"
      />
      <Path
        d="M14.7795 21.9995C14.5095 21.9995 14.2595 21.8495 14.1295 21.6195C13.9995 21.3795 13.9995 21.0995 14.1395 20.8595L15.1095 19.2395C15.3195 18.8795 15.7795 18.7695 16.1395 18.9795C16.4995 19.1895 16.6095 19.6495 16.3995 20.0095L16.2195 20.3095C18.6895 19.6695 20.5095 17.4295 20.5095 14.7695C20.5095 14.3595 20.8495 14.0195 21.2595 14.0195C21.6695 14.0195 21.9995 14.3595 21.9995 14.7795C21.9995 18.7595 18.7595 21.9995 14.7795 21.9995Z"
        fill="currentColor"
      />
      <Path
        d="M2.75 9.97C2.34 9.97 2 9.64 2 9.22C2 5.24 5.24 2 9.22 2C9.5 2 9.74 2.15 9.88 2.38C10.01 2.62 10.01 2.9 9.87 3.14L8.9 4.75C8.68 5.11 8.22 5.23 7.87 5.01C7.51 4.8 7.4 4.34 7.61 3.98L7.79 3.68C5.33 4.32 3.5 6.56 3.5 9.22C3.5 9.64 3.16 9.97 2.75 9.97Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Convertshape2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5 11C19.9853 11 22 8.98528 22 6.5C22 4.01472 19.9853 2 17.5 2C15.0147 2 13 4.01472 13 6.5C13 8.98528 15.0147 11 17.5 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Convertshape2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M17.5 11C19.9853 11 22 8.98528 22 6.5C22 4.01472 19.9853 2 17.5 2C15.0147 2 13 4.01472 13 6.5C13 8.98528 15.0147 11 17.5 11Z"
        fill="currentColor"
      />
      <Path
        d="M14.7795 22C14.5095 22 14.2595 21.85 14.1295 21.62C13.9995 21.38 13.9995 21.1 14.1395 20.86L15.1095 19.24C15.3195 18.88 15.7795 18.77 16.1395 18.98C16.4995 19.19 16.6095 19.65 16.3995 20.01L16.2195 20.31C18.6895 19.67 20.5095 17.43 20.5095 14.77C20.5095 14.36 20.8495 14.02 21.2595 14.02C21.6695 14.02 21.9995 14.36 21.9995 14.78C21.9995 18.76 18.7595 22 14.7795 22Z"
        fill="currentColor"
      />
      <Path
        d="M2.75 9.97C2.34 9.97 2 9.64 2 9.22C2 5.24 5.24 2 9.22 2C9.5 2 9.74 2.15 9.88 2.38C10.01 2.62 10.01 2.9 9.87 3.14L8.9 4.75C8.68 5.11 8.22 5.23 7.87 5.01C7.51 4.8 7.4 4.34 7.61 3.98L7.79 3.68C5.33 4.32 3.5 6.56 3.5 9.22C3.5 9.64 3.16 9.97 2.75 9.97Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Convertshape2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5 11C19.9853 11 22 8.98528 22 6.5C22 4.01472 19.9853 2 17.5 2C15.0147 2 13 4.01472 13 6.5C13 8.98528 15.0147 11 17.5 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Convertshape2Outline = ({
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
        d="M7.85 22.75H5.15C2.49 22.75 1.25 21.51 1.25 18.85V16.15C1.25 13.49 2.49 12.25 5.15 12.25H7.85C10.51 12.25 11.75 13.49 11.75 16.15V18.85C11.75 21.51 10.51 22.75 7.85 22.75ZM5.15 13.75C3.31 13.75 2.75 14.31 2.75 16.15V18.85C2.75 20.69 3.31 21.25 5.15 21.25H7.85C9.69 21.25 10.25 20.69 10.25 18.85V16.15C10.25 14.31 9.69 13.75 7.85 13.75H5.15Z"
        fill="currentColor"
      />
      <Path
        d="M15.0002 22.75C14.7302 22.75 14.4802 22.6 14.3502 22.37C14.2202 22.14 14.2202 21.85 14.3602 21.62L15.4102 19.87C15.6202 19.51 16.0802 19.4 16.4402 19.61C16.8002 19.82 16.9102 20.28 16.7002 20.64L16.4302 21.09C19.1902 20.44 21.2602 17.96 21.2602 15C21.2602 14.59 21.6002 14.25 22.0102 14.25C22.4202 14.25 22.7602 14.59 22.7602 15C22.7502 19.27 19.2702 22.75 15.0002 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9C1.25 4.73 4.73 1.25 9 1.25C9.27 1.25 9.52 1.4 9.65 1.63C9.78 1.86 9.78 2.15 9.64 2.38L8.59 4.14C8.38 4.49 7.92 4.61 7.56 4.39C7.21 4.18 7.09 3.72 7.31 3.36L7.58 2.91C4.81 3.56 2.75 6.04 2.75 9C2.75 9.41 2.41 9.75 2 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M17.5 11.75C14.61 11.75 12.25 9.39 12.25 6.5C12.25 3.61 14.61 1.25 17.5 1.25C20.39 1.25 22.75 3.61 22.75 6.5C22.75 9.39 20.39 11.75 17.5 11.75ZM17.5 2.75C15.43 2.75 13.75 4.43 13.75 6.5C13.75 8.57 15.43 10.25 17.5 10.25C19.57 10.25 21.25 8.57 21.25 6.5C21.25 4.43 19.57 2.75 17.5 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Convertshape2Twotone = ({
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
        d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5 11C19.9853 11 22 8.98528 22 6.5C22 4.01472 19.9853 2 17.5 2C15.0147 2 13 4.01472 13 6.5C13 8.98528 15.0147 11 17.5 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Convertshape2Bold,
  broken: Convertshape2Broken,
  bulk: Convertshape2Bulk,
  linear: Convertshape2Linear,
  outline: Convertshape2Outline,
  twotone: Convertshape2Twotone,
};

export const Convertshape2Icon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
