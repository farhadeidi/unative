import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const SearchFavoriteBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.0002 1.98828C6.03023 1.98828 1.99023 6.02828 1.99023 10.9983C1.99023 15.9683 6.03023 20.0083 11.0002 20.0083C15.9702 20.0083 20.0102 15.9683 20.0102 10.9983C20.0102 6.02828 15.9702 1.98828 11.0002 1.98828ZM14.1802 11.5583C13.6202 13.3383 11.6702 14.3083 11.0002 14.3083C10.3102 14.3083 8.40023 13.3783 7.82023 11.5583C7.44023 10.3683 7.87023 8.81828 9.23023 8.38828C9.85023 8.18828 10.5102 8.30828 11.0002 8.67828C11.4802 8.30828 12.1502 8.18828 12.7802 8.38828C14.1302 8.82828 14.5602 10.3783 14.1802 11.5583Z"
        fill="currentColor"
      />
      <Path
        d="M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SearchFavoriteBroken = ({
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
        d="M2 11.5C2 6.25 6.25 2 11.5 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.0007 11.5C21.0007 16.75 16.7507 21 11.5007 21C7.7607 21 4.5207 18.84 2.9707 15.69"
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
        d="M14.4999 6.13008C14.1499 5.03008 14.5599 3.66008 15.7199 3.29008C16.3299 3.09008 17.0799 3.26008 17.5099 3.85008C17.9099 3.24008 18.6899 3.10008 19.2899 3.29008C20.4499 3.66008 20.8599 5.03008 20.5099 6.13008C19.9599 7.88008 18.0399 8.79008 17.5099 8.79008C16.9699 8.79008 15.0699 7.90008 14.4999 6.13008Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SearchFavoriteBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.0002 20.01C15.9763 20.01 20.0102 15.9761 20.0102 11C20.0102 6.0239 15.9763 1.98999 11.0002 1.98999C6.02415 1.98999 1.99023 6.0239 1.99023 11C1.99023 15.9761 6.02415 20.01 11.0002 20.01Z"
        fill="currentColor"
      />
      <Path
        d="M12.7699 8.2901C12.1399 8.0901 11.4699 8.2101 10.9899 8.5801C10.4999 8.2101 9.84993 8.0901 9.21993 8.2901C7.85993 8.7301 7.42993 10.2801 7.80993 11.4601C8.38993 13.2701 10.2999 14.2101 10.9899 14.2101C11.6599 14.2101 13.6099 13.2501 14.1699 11.4601C14.5599 10.2801 14.1299 8.7301 12.7699 8.2901Z"
        fill="currentColor"
      />
      <Path
        d="M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SearchFavoriteLinear = ({
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
        d="M20 11C20 15.97 15.97 20 11 20C6.03 20 2 15.97 2 11C2 6.03 6.03 2 11 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.4999 6.12996C13.1499 5.02996 13.5599 3.65996 14.7199 3.28996C15.3299 3.08996 16.0799 3.25996 16.5099 3.84996C16.9099 3.23996 17.6899 3.09996 18.2899 3.28996C19.4499 3.65996 19.8599 5.02996 19.5099 6.12996C18.9599 7.87996 17.0399 8.78996 16.5099 8.78996C15.9699 8.78996 14.0699 7.89996 13.4999 6.12996Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SearchFavoriteOutline = ({
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
        d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 10.59 19.59 10.25 20 10.25C20.41 10.25 20.75 10.59 20.75 11C20.75 16.38 16.38 20.75 11 20.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.4999 9.53994C15.5799 9.53994 13.4399 8.41994 12.7799 6.35994C12.3299 4.94994 12.8499 3.09994 14.4799 2.56994C15.1799 2.33994 15.9099 2.44994 16.4899 2.81994C17.0599 2.44994 17.8099 2.34994 18.5099 2.56994C20.1399 3.09994 20.6699 4.94994 20.2099 6.35994C19.5599 8.45994 17.3099 9.53994 16.4999 9.53994ZM14.2099 5.90994C14.6699 7.35994 16.2299 8.01994 16.5099 8.04994C16.8299 8.01994 18.3599 7.27994 18.7799 5.91994C19.0099 5.18994 18.7799 4.24994 18.0499 4.00994C17.7399 3.90994 17.3199 3.96994 17.1199 4.25994C16.9799 4.46994 16.7599 4.58994 16.5099 4.59994C16.2799 4.60994 16.0299 4.48994 15.8899 4.28994C15.6599 3.95994 15.2399 3.90994 14.9399 3.99994C14.2199 4.23994 13.9799 5.17994 14.2099 5.90994Z"
        fill="currentColor"
      />
      <Path
        d="M20.1601 22.79C20.0801 22.79 20.0001 22.78 19.9301 22.77C19.4601 22.71 18.6101 22.39 18.1301 20.96C17.8801 20.21 17.9701 19.46 18.3801 18.89C18.7901 18.32 19.4801 18 20.2701 18C21.2901 18 22.0901 18.39 22.4501 19.08C22.8101 19.77 22.7101 20.65 22.1401 21.5C21.4301 22.57 20.6601 22.79 20.1601 22.79ZM19.5601 20.49C19.7301 21.01 19.9701 21.27 20.1301 21.29C20.2901 21.31 20.5901 21.12 20.9001 20.67C21.1901 20.24 21.2101 19.93 21.1401 19.79C21.0701 19.65 20.7901 19.5 20.2701 19.5C19.9601 19.5 19.7301 19.6 19.6001 19.77C19.4801 19.94 19.4601 20.2 19.5601 20.49Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SearchFavoriteTwotone = ({
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
        d="M20 11C20 15.97 15.97 20 11 20C6.03 20 2 15.97 2 11C2 6.03 6.03 2 11 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M13.4999 6.13008C13.1499 5.03008 13.5599 3.66008 14.7199 3.29008C15.3299 3.09008 16.0799 3.26008 16.5099 3.85008C16.9099 3.24008 17.6899 3.10008 18.2899 3.29008C19.4499 3.66008 19.8599 5.03008 19.5099 6.13008C18.9599 7.88008 17.0399 8.79008 16.5099 8.79008C15.9699 8.79008 14.0699 7.90008 13.4999 6.13008Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M18.9304 20.6898C19.4604 22.2898 20.6704 22.4498 21.6004 21.0498C22.4504 19.7698 21.8904 18.7198 20.3504 18.7198C19.2104 18.7098 18.5704 19.5998 18.9304 20.6898Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SearchFavoriteBold,
  broken: SearchFavoriteBroken,
  bulk: SearchFavoriteBulk,
  linear: SearchFavoriteLinear,
  outline: SearchFavoriteOutline,
  twotone: SearchFavoriteTwotone,
};

export const SearchFavoriteIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default SearchFavoriteIcon;
