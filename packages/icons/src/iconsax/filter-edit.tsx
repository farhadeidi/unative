import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const FilterEditBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.9209 6.37C17.5909 6.29 17.2409 6.25 16.8809 6.25C14.2609 6.25 12.1309 8.38 12.1309 11C12.1309 11.89 12.3809 12.73 12.8209 13.45C13.1909 14.07 13.7009 14.6 14.3209 14.98C15.0609 15.47 15.9409 15.75 16.8809 15.75C18.6209 15.75 20.1309 14.82 20.9509 13.45C21.3909 12.73 21.6309 11.89 21.6309 11C21.6309 8.74 20.0509 6.84 17.9209 6.37ZM18.8309 10.57L16.4009 13C16.3109 13.09 16.1209 13.18 15.9909 13.2L15.0609 13.33C14.7209 13.38 14.4909 13.14 14.5409 12.81L14.6709 11.88C14.6909 11.75 14.7809 11.57 14.8709 11.47L16.9509 9.39L17.3009 9.04C17.7209 8.62 18.2109 8.42 18.8209 9.04C19.4309 9.66 19.2509 10.15 18.8309 10.57Z"
        fill="currentColor"
      />
      <Path
        d="M20.5799 4.02V4.98C20.5799 5.39 20.1099 5.64 19.7399 5.45C19.2799 5.21 18.7899 5.03 18.2699 4.91C17.8299 4.8 17.3599 4.75 16.8799 4.75C13.4299 4.75 10.6299 7.55 10.6299 11C10.6299 12.14 10.9399 13.26 11.5299 14.22C12.0299 15.06 12.7299 15.76 13.4899 16.23C13.6599 16.34 13.8399 16.44 14.0099 16.54C14.1799 16.63 14.2999 16.81 14.2999 17V19.07C14.2999 19.68 13.8999 20.49 13.3999 20.79L11.9999 21.7C10.6999 22.51 8.90992 21.6 8.90992 19.98V14.63C8.90992 13.92 8.50992 13.01 8.10992 12.51L4.31992 8.47C3.81992 7.96 3.41992 7.05 3.41992 6.45V4.12C3.41992 2.91 4.31992 2 5.40992 2H18.5899C19.6799 2 20.5799 2.91 20.5799 4.02Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterEditBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.33008 2H18.67C19.78 2 20.6901 2.90999 20.6901 4.01999V6.23999C20.6901 7.04999 20.1801 8.06 19.6801 8.56"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.4105 20.7899L12.0005 21.7C10.6905 22.51 8.87054 21.5999 8.87054 19.9799V14.6299C8.87054 13.9199 8.47055 13.0099 8.06055 12.5099L4.22052 8.46994C3.71052 7.95994 3.31055 7.05995 3.31055 6.44995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.0802 11.8899L13.5401 15.4299C13.4001 15.5699 13.2701 15.8299 13.2401 16.0199L13.0501 17.3699C12.9801 17.8599 13.3202 18.1999 13.8102 18.1299L15.1601 17.9399C15.3501 17.9099 15.6202 17.7799 15.7502 17.6399L19.2901 14.0999C19.9001 13.4899 20.1901 12.7799 19.2901 11.8799C18.4001 10.9899 17.6902 11.2799 17.0802 11.8899Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5801 12.3899C16.8801 13.4699 17.72 14.3099 18.8 14.6099"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FilterEditBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.58 4.01999V5.97C19.9 5.47 19.12 5.1 18.27 4.91C17.83 4.8 17.3599 4.75 16.8799 4.75C13.4299 4.75 10.6299 7.55 10.6299 11C10.6299 12.14 10.94 13.26 11.53 14.22C12.03 15.06 12.7299 15.76 13.4899 16.23C13.7499 16.4 14.0199 16.55 14.2999 16.68V19.07C14.2999 19.68 13.9 20.49 13.4 20.79L11.9999 21.7C10.6999 22.51 8.90991 21.6 8.90991 19.98V14.63C8.90991 13.92 8.50992 13.01 8.10992 12.51L4.31995 8.47C3.81995 7.96 3.41992 7.05001 3.41992 6.45001V4.12C3.41992 2.91 4.31991 2 5.40991 2H18.59C19.68 2 20.58 2.90999 20.58 4.01999Z"
        fill="currentColor"
      />
      <Path
        d="M17.9208 6.37C17.5908 6.29 17.2409 6.25 16.8809 6.25C14.2609 6.25 12.1309 8.38 12.1309 11C12.1309 11.89 12.3809 12.73 12.8209 13.45C13.1909 14.07 13.7009 14.6 14.3209 14.98C15.0609 15.47 15.9409 15.75 16.8809 15.75C18.6209 15.75 20.1309 14.82 20.9509 13.45C21.3909 12.73 21.6309 11.89 21.6309 11C21.6309 8.74 20.0508 6.84 17.9208 6.37ZM18.8309 10.57L16.4009 13C16.3109 13.09 16.1208 13.18 15.9908 13.2L15.0609 13.33C14.7209 13.38 14.4908 13.14 14.5408 12.81L14.6708 11.88C14.6908 11.75 14.7808 11.57 14.8708 11.47L16.9509 9.39001L17.3008 9.04001C17.7208 8.62001 18.2109 8.42001 18.8209 9.04001C19.4309 9.66001 19.2509 10.15 18.8309 10.57Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterEditLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.41 20.79L12.0001 21.7C10.6901 22.51 8.87006 21.6 8.87006 19.98V14.63C8.87006 13.92 8.47006 13.01 8.06006 12.51L4.22003 8.47C3.71003 7.96 3.31006 7.06001 3.31006 6.45001V4.13C3.31006 2.92 4.22008 2.01001 5.33008 2.01001H18.67C19.78 2.01001 20.6901 2.92 20.6901 4.03V6.25C20.6901 7.06 20.1801 8.07001 19.6801 8.57001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.0799 11.89L13.5399 15.43C13.3999 15.57 13.2699 15.83 13.2399 16.02L13.0499 17.37C12.9799 17.86 13.3199 18.2 13.8099 18.13L15.1599 17.94C15.3499 17.91 15.6199 17.78 15.7499 17.64L19.2899 14.1C19.8999 13.49 20.1899 12.78 19.2899 11.88C18.3999 10.99 17.6899 11.28 17.0799 11.89Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.58 12.39C16.88 13.47 17.7199 14.31 18.7999 14.61"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FilterEditOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.9308 22.75C10.4508 22.75 9.97082 22.63 9.53082 22.39C8.64082 21.89 8.11078 21 8.11078 19.99V14.64C8.11078 14.13 7.78076 13.38 7.47076 12.99L3.67078 9.00003C3.04078 8.37003 2.55078 7.27002 2.55078 6.46002V4.14005C2.55078 2.53005 3.7708 1.27002 5.3208 1.27002H18.6608C20.1908 1.27002 21.4308 2.51004 21.4308 4.04004V6.26004C21.4308 7.31004 20.8008 8.52002 20.2008 9.11002C19.9108 9.40002 19.4308 9.40002 19.1408 9.11002C18.8508 8.82002 18.8508 8.34002 19.1408 8.05002C19.5108 7.68002 19.9308 6.85004 19.9308 6.26004V4.04004C19.9308 3.34004 19.3608 2.77002 18.6608 2.77002H5.3208C4.6108 2.77002 4.05078 3.37005 4.05078 4.14005V6.46002C4.05078 6.83002 4.35078 7.56004 4.74078 7.95004L8.59082 12C9.10082 12.63 9.60077 13.69 9.60077 14.64V19.99C9.60077 20.65 10.0508 20.97 10.2508 21.08C10.6808 21.32 11.1908 21.31 11.5908 21.07L12.9908 20.17C13.3408 19.95 13.8008 20.05 14.0308 20.4C14.2508 20.75 14.1508 21.21 13.8108 21.44L12.4008 22.35C11.9508 22.61 11.4408 22.75 10.9308 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M13.6907 18.89C13.3107 18.89 12.9507 18.75 12.6907 18.49C12.3807 18.18 12.2407 17.73 12.3107 17.26L12.5007 15.91C12.5507 15.56 12.7607 15.15 13.0107 14.9L16.5506 11.36C17.0306 10.88 17.5007 10.63 18.0107 10.58C18.6307 10.52 19.2507 10.78 19.8307 11.36C20.4107 11.94 20.6706 12.55 20.6106 13.18C20.5606 13.68 20.3007 14.16 19.8307 14.64L16.2906 18.18C16.0406 18.43 15.6207 18.64 15.2707 18.69L13.9206 18.88C13.8406 18.89 13.7707 18.89 13.6907 18.89ZM18.1807 12.06C18.1707 12.06 18.1607 12.06 18.1507 12.06C18.0107 12.07 17.8206 12.19 17.6106 12.41L14.0707 15.95C14.0407 15.98 13.9907 16.08 13.9907 16.12L13.8107 17.37L15.0607 17.19C15.1007 17.18 15.2006 17.13 15.2306 17.1L18.7707 13.56C18.9807 13.35 19.1107 13.16 19.1207 13.02C19.1407 12.82 18.9407 12.58 18.7707 12.41C18.6107 12.25 18.3807 12.06 18.1807 12.06Z"
        fill="currentColor"
      />
      <Path
        d="M18.7897 15.36C18.7197 15.36 18.6498 15.35 18.5898 15.33C17.2698 14.96 16.2197 13.91 15.8497 12.59C15.7397 12.19 15.9697 11.78 16.3697 11.66C16.7697 11.55 17.1797 11.78 17.2897 12.18C17.5197 13 18.1697 13.65 18.9897 13.88C19.3897 13.99 19.6198 14.41 19.5098 14.81C19.4198 15.15 19.1197 15.36 18.7897 15.36Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterEditTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.4105 20.7898L12.0005 21.6998C10.6905 22.5098 8.87054 21.5998 8.87054 19.9798V14.6298C8.87054 13.9198 8.47055 13.0098 8.06055 12.5098L4.22052 8.46976C3.71052 7.95976 3.31055 7.05977 3.31055 6.44977V4.12976C3.31055 2.91976 4.22057 2.00977 5.33057 2.00977H18.6705C19.7805 2.00977 20.6906 2.91975 20.6906 4.02975V6.24976C20.6906 7.05976 20.1805 8.06976 19.6805 8.56976"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.0802 11.8899L13.5401 15.4299C13.4001 15.5699 13.2701 15.8299 13.2401 16.0199L13.0501 17.3699C12.9801 17.8599 13.3202 18.1999 13.8102 18.1299L15.1601 17.9399C15.3501 17.9099 15.6202 17.7799 15.7502 17.6399L19.2901 14.0999C19.9001 13.4899 20.1901 12.7799 19.2901 11.8799C18.4001 10.9899 17.6902 11.2799 17.0802 11.8899Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5801 12.3901C16.8801 13.4701 17.72 14.3101 18.8 14.6101"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: FilterEditBold,
  broken: FilterEditBroken,
  bulk: FilterEditBulk,
  linear: FilterEditLinear,
  outline: FilterEditOutline,
  twotone: FilterEditTwotone,
};

export const FilterEditIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default FilterEditIcon;
