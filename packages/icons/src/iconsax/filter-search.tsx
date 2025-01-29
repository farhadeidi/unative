import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const FilterSearchBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.7206 18.24L19.7806 17.3C20.2706 16.56 20.5606 15.67 20.5606 14.71C20.5606 12.11 18.4506 10 15.8506 10C13.2506 10 11.1406 12.11 11.1406 14.71C11.1406 17.31 13.2506 19.42 15.8506 19.42C16.8106 19.42 17.6906 19.13 18.4406 18.64L19.3806 19.58C19.5706 19.77 19.8106 19.86 20.0606 19.86C20.3106 19.86 20.5506 19.77 20.7406 19.58C21.0906 19.22 21.0906 18.62 20.7206 18.24Z"
        fill="currentColor"
      />
      <Path
        d="M19.5799 4.02V6.24C19.5799 7.05 19.0799 8.06 18.5799 8.57L18.3999 8.73C18.2599 8.86 18.0499 8.89 17.8699 8.83C17.6699 8.76 17.4699 8.71 17.2699 8.66C16.8299 8.55 16.3599 8.5 15.8799 8.5C12.4299 8.5 9.62992 11.3 9.62992 14.75C9.62992 15.89 9.93992 17.01 10.5299 17.97C11.0299 18.81 11.7299 19.51 12.4899 19.98C12.7199 20.13 12.8099 20.45 12.6099 20.63C12.5399 20.69 12.4699 20.74 12.3999 20.79L10.9999 21.7C9.69992 22.51 7.90992 21.6 7.90992 19.98V14.63C7.90992 13.92 7.50992 13.01 7.10992 12.51L3.31992 8.47C2.81992 7.96 2.41992 7.05 2.41992 6.45V4.12C2.41992 2.91 3.31992 2 4.40992 2H17.5899C18.6799 2 19.5799 2.91 19.5799 4.02Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterSearchBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.3206 19.0699C14.3206 19.6799 13.9205 20.4799 13.4105 20.7899L12.0005 21.7C10.6905 22.51 8.87054 21.5999 8.87054 19.9799V14.6299C8.87054 13.9199 8.47055 13.0099 8.06055 12.5099L4.22052 8.46994C3.71052 7.95994 3.31055 7.05995 3.31055 6.44995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.0692 16.5201C17.8365 16.5201 19.2692 15.0874 19.2692 13.3201C19.2692 11.5528 17.8365 10.1201 16.0692 10.1201C14.3018 10.1201 12.8691 11.5528 12.8691 13.3201C12.8691 15.0874 14.3018 16.5201 16.0692 16.5201Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.8691 17.1201L18.8691 16.1201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FilterSearchBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.7491 15.41L18.8992 14.56C19.3392 13.89 19.5991 13.1 19.5991 12.24C19.5991 9.89999 17.6991 8 15.3591 8C13.0191 8 11.1191 9.89999 11.1191 12.24C11.1191 14.58 13.0191 16.48 15.3591 16.48C16.2191 16.48 17.0191 16.22 17.6791 15.78L18.5292 16.63C18.6992 16.8 18.9192 16.88 19.1392 16.88C19.3592 16.88 19.5791 16.8 19.7491 16.63C20.0791 16.29 20.0791 15.74 19.7491 15.41Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M5.41016 2H18.5802C19.6802 2 20.5802 2.90999 20.5802 4.01999V6.23999C20.5802 7.04999 20.0802 8.06 19.5802 8.56L15.2902 12.4C14.6902 12.91 14.2902 13.92 14.2902 14.72V19.06C14.2902 19.67 13.8902 20.47 13.3902 20.78L11.9902 21.69C10.6902 22.5 8.90021 21.59 8.90021 19.97V14.62C8.90021 13.91 8.50016 13 8.10016 12.5L4.31018 8.45999C3.81018 7.94999 3.41016 7.05 3.41016 6.44V4.12C3.42016 2.91 4.32016 2 5.41016 2Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterSearchLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.3201 19.07C14.3201 19.68 13.92 20.48 13.41 20.79L12.0001 21.7C10.6901 22.51 8.87006 21.6 8.87006 19.98V14.63C8.87006 13.92 8.47006 13.01 8.06006 12.51L4.22003 8.47C3.71003 7.96 3.31006 7.06001 3.31006 6.45001V4.13C3.31006 2.92 4.22008 2.01001 5.33008 2.01001H18.67C19.78 2.01001 20.6901 2.92 20.6901 4.03V6.25C20.6901 7.06 20.1801 8.07001 19.6801 8.57001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.07 16.52C17.8373 16.52 19.27 15.0873 19.27 13.32C19.27 11.5527 17.8373 10.12 16.07 10.12C14.3027 10.12 12.87 11.5527 12.87 13.32C12.87 15.0873 14.3027 16.52 16.07 16.52Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.87 17.12L18.87 16.12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FilterSearchOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.9308 22.75C10.4508 22.75 9.97082 22.63 9.53082 22.39C8.64082 21.89 8.11078 21 8.11078 19.99V14.64C8.11078 14.13 7.78076 13.38 7.47076 12.99L3.67078 9.00003C3.04078 8.37003 2.55078 7.27002 2.55078 6.46002V4.14005C2.55078 2.53005 3.7708 1.27002 5.3208 1.27002H18.6608C20.1908 1.27002 21.4308 2.51004 21.4308 4.04004V6.26004C21.4308 7.31004 20.8008 8.52002 20.2008 9.11002C19.9108 9.40002 19.4308 9.40002 19.1408 9.11002C18.8508 8.82002 18.8508 8.34002 19.1408 8.05002C19.5108 7.68002 19.9308 6.85004 19.9308 6.26004V4.04004C19.9308 3.34004 19.3608 2.77002 18.6608 2.77002H5.3208C4.6108 2.77002 4.05078 3.37005 4.05078 4.14005V6.46002C4.05078 6.83002 4.35078 7.56004 4.74078 7.95004L8.59082 12C9.10082 12.63 9.60077 13.69 9.60077 14.64V19.99C9.60077 20.65 10.0508 20.97 10.2508 21.08C10.6808 21.32 11.1908 21.31 11.5908 21.07L12.9908 20.17C13.2808 20 13.5608 19.45 13.5608 19.08C13.5608 18.67 13.9008 18.33 14.3108 18.33C14.7208 18.33 15.0608 18.67 15.0608 19.08C15.0608 19.98 14.5008 21.01 13.7908 21.44L12.4008 22.34C11.9508 22.61 11.4408 22.75 10.9308 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.0711 17.2701C13.8911 17.2701 12.1211 15.5001 12.1211 13.3201C12.1211 11.1401 13.8911 9.37012 16.0711 9.37012C18.2511 9.37012 20.0211 11.1401 20.0211 13.3201C20.0211 15.5001 18.2511 17.2701 16.0711 17.2701ZM16.0711 10.8701C14.7211 10.8701 13.6211 11.9701 13.6211 13.3201C13.6211 14.6701 14.7211 15.7701 16.0711 15.7701C17.4211 15.7701 18.5211 14.6701 18.5211 13.3201C18.5211 11.9701 17.4211 10.8701 16.0711 10.8701Z"
        fill="currentColor"
      />
      <Path
        d="M19.8705 17.8701C19.6805 17.8701 19.4905 17.8001 19.3405 17.6501L18.3405 16.6501C18.0505 16.3601 18.0505 15.8801 18.3405 15.5901C18.6305 15.3001 19.1105 15.3001 19.4005 15.5901L20.4005 16.5901C20.6905 16.8801 20.6905 17.3601 20.4005 17.6501C20.2605 17.7901 20.0605 17.8701 19.8705 17.8701Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterSearchTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.3206 19.0698C14.3206 19.6798 13.9205 20.4798 13.4105 20.7898L12.0005 21.6998C10.6905 22.5098 8.87054 21.5998 8.87054 19.9798V14.6298C8.87054 13.9198 8.47055 13.0098 8.06055 12.5098L4.22052 8.46976C3.71052 7.95976 3.31055 7.05977 3.31055 6.44977V4.12976C3.31055 2.91976 4.22057 2.00977 5.33057 2.00977H18.6705C19.7805 2.00977 20.6906 2.91975 20.6906 4.02975V6.24976C20.6906 7.05976 20.1805 8.06976 19.6805 8.56976"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.0692 16.5201C17.8365 16.5201 19.2692 15.0874 19.2692 13.3201C19.2692 11.5528 17.8365 10.1201 16.0692 10.1201C14.3018 10.1201 12.8691 11.5528 12.8691 13.3201C12.8691 15.0874 14.3018 16.5201 16.0692 16.5201Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.8691 17.1201L18.8691 16.1201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: FilterSearchBold,
  broken: FilterSearchBroken,
  bulk: FilterSearchBulk,
  linear: FilterSearchLinear,
  outline: FilterSearchOutline,
  twotone: FilterSearchTwotone,
};

export const FilterSearchIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default FilterSearchIcon;
