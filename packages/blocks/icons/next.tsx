import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const NextBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.76172 7.21957V16.7896C3.76172 18.7496 5.89172 19.9796 7.59172 18.9996L11.7417 16.6096L15.8917 14.2096C17.5917 13.2296 17.5917 10.7796 15.8917 9.79957L11.7417 7.39957L7.59172 5.00957C5.89172 4.02957 3.76172 5.24957 3.76172 7.21957Z"
        fill="currentColor"
      />
      <Path
        d="M20.2383 18.9303C19.8283 18.9303 19.4883 18.5903 19.4883 18.1803V5.82031C19.4883 5.41031 19.8283 5.07031 20.2383 5.07031C20.6483 5.07031 20.9883 5.41031 20.9883 5.82031V18.1803C20.9883 18.5903 20.6583 18.9303 20.2383 18.9303Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const NextBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.73 7.39006L7.57999 5.00005C5.87999 4.02005 3.75 5.24004 3.75 7.21004V16.78C3.75 18.74 5.87999 19.97 7.57999 18.99L11.73 16.6001L15.88 14.2001C17.58 13.2201 17.58 10.7701 15.88 9.79006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.2402 18.18V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.2402 14.0001V5.82007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const NextBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.75977 7.22005V16.7901C3.75977 18.7501 5.88975 19.98 7.58975 19L11.7397 16.61L15.8898 14.21C17.5898 13.23 17.5898 10.78 15.8898 9.80004L11.7397 7.40004L7.58975 5.01006C5.88975 4.03006 3.75977 5.25005 3.75977 7.22005Z"
        fill="currentColor"
      />
      <Path
        d="M20.2402 18.9298C19.8302 18.9298 19.4902 18.5898 19.4902 18.1798V5.81982C19.4902 5.40982 19.8302 5.06982 20.2402 5.06982C20.6502 5.06982 20.9902 5.40982 20.9902 5.81982V18.1798C20.9902 18.5898 20.6602 18.9298 20.2402 18.9298Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const NextLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.76001 7.22005V16.7901C3.76001 18.7501 5.89 19.98 7.59 19L11.74 16.61L15.89 14.21C17.59 13.23 17.59 10.78 15.89 9.80004L11.74 7.40004L7.59 5.01006C5.89 4.03006 3.76001 5.25005 3.76001 7.22005Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.24 18.1801V5.82007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const NextOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.30975 20.0899C5.73975 20.0899 5.17976 19.9399 4.65976 19.6399C3.61976 19.0399 3.00977 17.9799 3.00977 16.7799V7.20989C3.00977 6.01989 3.62976 4.9499 4.65976 4.3499C5.69976 3.7499 6.92975 3.7499 7.95975 4.3499L16.2498 9.1299C17.2798 9.7299 17.8997 10.7999 17.8997 11.9899C17.8997 13.1799 17.2798 14.2499 16.2498 14.8499L7.95975 19.6299C7.43975 19.9399 6.87975 20.0899 6.30975 20.0899ZM6.30975 5.4099C5.99975 5.4099 5.68976 5.48989 5.40976 5.64989C4.84976 5.97989 4.50977 6.55989 4.50977 7.20989V16.7799C4.50977 17.4299 4.84976 18.0099 5.40976 18.3399C5.96976 18.6599 6.64975 18.6699 7.20975 18.3399L15.4998 13.5599C16.0598 13.2299 16.3997 12.6499 16.3997 11.9999C16.3997 11.3499 16.0598 10.7699 15.4998 10.4399L7.20975 5.6599C6.92975 5.4999 6.61975 5.4099 6.30975 5.4099Z"
        fill="currentColor"
      />
      <Path
        d="M20.2402 18.9303C19.8302 18.9303 19.4902 18.5903 19.4902 18.1803V5.82031C19.4902 5.41031 19.8302 5.07031 20.2402 5.07031C20.6502 5.07031 20.9902 5.41031 20.9902 5.82031V18.1803C20.9902 18.5903 20.6602 18.9303 20.2402 18.9303Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const NextTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.75977 7.22005V16.7901C3.75977 18.7501 5.88975 19.98 7.58975 19L11.7397 16.61L15.8898 14.21C17.5898 13.23 17.5898 10.78 15.8898 9.80004L11.7397 7.40004L7.58975 5.01006C5.88975 4.03006 3.75977 5.25005 3.75977 7.22005Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M20.2402 18.1798V5.81982"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: NextBold,
  broken: NextBroken,
  bulk: NextBulk,
  linear: NextLinear,
  outline: NextOutline,
  twotone: NextTwotone,
};

export const NextIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
