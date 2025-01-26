import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const SearchFavorite1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.3005 21.9986C21.1205 21.9986 20.9405 21.9286 20.8105 21.7986L18.9505 19.9386C18.6805 19.6686 18.6805 19.2286 18.9505 18.9486C19.2205 18.6786 19.6605 18.6786 19.9405 18.9486L21.8005 20.8086C22.0705 21.0786 22.0705 21.5186 21.8005 21.7986C21.6605 21.9286 21.4805 21.9986 21.3005 21.9986Z"
        fill="currentColor"
      />
      <Path
        d="M11.5 2C6.26 2 2 6.26 2 11.5C2 16.74 6.26 21 11.5 21C16.74 21 21 16.74 21 11.5C21 6.26 16.74 2 11.5 2ZM14.68 12.06C14.12 13.84 12.17 14.81 11.5 14.81C10.81 14.81 8.9 13.88 8.32 12.06C7.94 10.87 8.37 9.32 9.73 8.89C10.35 8.69 11.01 8.81 11.5 9.18C11.98 8.81 12.65 8.69 13.28 8.89C14.63 9.33 15.06 10.88 14.68 12.06Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SearchFavorite1Broken = ({
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
        d="M2 11C2 6.03 6.03 2 11 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.9999 11C19.9999 15.97 15.9699 20 10.9999 20C7.45992 20 4.38992 17.95 2.91992 14.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.4999 6.13008C13.1499 5.03008 13.5599 3.66008 14.7199 3.29008C15.3299 3.09008 16.0799 3.26008 16.5099 3.85008C16.9099 3.24008 17.6899 3.10008 18.2899 3.29008C19.4499 3.66008 19.8599 5.03008 19.5099 6.13008C18.9599 7.88008 17.0399 8.79008 16.5099 8.79008C15.9699 8.79008 14.0699 7.90008 13.4999 6.13008Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.071 20.97C19.601 22.57 20.811 22.73 21.741 21.33C22.601 20.05 22.041 19 20.501 19C19.351 19 18.711 19.89 19.071 20.97Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SearchFavorite1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        fill="currentColor"
      />
      <Path
        d="M21.3005 22.0001C21.1205 22.0001 20.9405 21.9301 20.8105 21.8001L18.9505 19.9401C18.6805 19.6701 18.6805 19.2301 18.9505 18.9501C19.2205 18.6801 19.6605 18.6801 19.9405 18.9501L21.8005 20.8101C22.0705 21.0801 22.0705 21.5201 21.8005 21.8001C21.6605 21.9301 21.4805 22.0001 21.3005 22.0001Z"
        fill="currentColor"
      />
      <Path
        d="M13.2699 8.88995C12.6399 8.68995 11.9699 8.80995 11.4899 9.17995C10.9999 8.80995 10.3499 8.68995 9.71993 8.88995C8.35993 9.32995 7.92993 10.8799 8.30993 12.0599C8.88993 13.8699 10.7999 14.8099 11.4899 14.8099C12.1599 14.8099 14.1099 13.8499 14.6699 12.0599C15.0599 10.8799 14.6299 9.32995 13.2699 8.88995Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SearchFavorite1Linear = ({
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
        d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.4999 6.12996C14.1499 5.02996 14.5599 3.65996 15.7199 3.28996C16.3299 3.08996 17.0799 3.25996 17.5099 3.84996C17.9099 3.23996 18.6899 3.09996 19.2899 3.28996C20.4499 3.65996 20.8599 5.02996 20.5099 6.12996C19.9599 7.87996 18.0399 8.78996 17.5099 8.78996C16.9699 8.78996 15.0699 7.89996 14.4999 6.12996Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SearchFavorite1Outline = ({
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
        d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C11.91 1.25 12.25 1.59 12.25 2C12.25 2.41 11.91 2.75 11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 11.09 20.59 10.75 21 10.75C21.41 10.75 21.75 11.09 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
        fill="currentColor"
      />
      <Path
        d="M17.4999 9.53994C16.5799 9.53994 14.4399 8.41994 13.7799 6.35994C13.3299 4.94994 13.8499 3.09994 15.4799 2.56994C16.1799 2.33994 16.9099 2.44994 17.4899 2.81994C18.0599 2.44994 18.8099 2.34994 19.5099 2.56994C21.1399 3.09994 21.6699 4.94994 21.2099 6.35994C20.5599 8.45994 18.3099 9.53994 17.4999 9.53994ZM15.2099 5.90994C15.6699 7.35994 17.2299 8.01994 17.5099 8.04994C17.8299 8.01994 19.3599 7.27994 19.7799 5.91994C20.0099 5.18994 19.7799 4.24994 19.0499 4.00994C18.7399 3.90994 18.3199 3.96994 18.1199 4.25994C17.9799 4.46994 17.7599 4.58994 17.5099 4.59994C17.2899 4.60994 17.0299 4.48994 16.8899 4.28994C16.6599 3.95994 16.2399 3.90994 15.9399 3.99994C15.2199 4.23994 14.9799 5.17994 15.2099 5.90994Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SearchFavorite1Twotone = ({
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
        d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22 22L20 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M14.4999 6.13008C14.1499 5.03008 14.5599 3.66008 15.7199 3.29008C16.3299 3.09008 17.0799 3.26008 17.5099 3.85008C17.9099 3.24008 18.6899 3.10008 19.2899 3.29008C20.4499 3.66008 20.8599 5.03008 20.5099 6.13008C19.9599 7.88008 18.0399 8.79008 17.5099 8.79008C16.9699 8.79008 15.0699 7.90008 14.4999 6.13008Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SearchFavorite1Bold,
  broken: SearchFavorite1Broken,
  bulk: SearchFavorite1Bulk,
  linear: SearchFavorite1Linear,
  outline: SearchFavorite1Outline,
  twotone: SearchFavorite1Twotone,
};

export const SearchFavorite1Icon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
