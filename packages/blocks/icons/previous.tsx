import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const PreviousBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.2409 7.21957V16.7896C20.2409 18.7496 18.1109 19.9796 16.4109 18.9996L12.2609 16.6096L8.11094 14.2096C6.41094 13.2296 6.41094 10.7796 8.11094 9.79957L12.2609 7.39957L16.4109 5.00957C18.1109 4.02957 20.2409 5.24957 20.2409 7.21957Z"
        fill="currentColor"
      />
      <Path
        d="M3.76172 18.9303C3.35172 18.9303 3.01172 18.5903 3.01172 18.1803V5.82031C3.01172 5.41031 3.35172 5.07031 3.76172 5.07031C4.17172 5.07031 4.51172 5.41031 4.51172 5.82031V18.1803C4.51172 18.5903 4.17172 18.9303 3.76172 18.9303Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PreviousBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.2707 7.39006L16.4207 5.00005C18.1207 4.02005 20.2507 5.24004 20.2507 7.21004V16.78C20.2507 18.74 18.1207 19.97 16.4207 18.99L12.2707 16.6001L8.1207 14.2001C6.4207 13.2201 6.4207 10.7701 8.1207 9.79006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.75977 18.18V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.75977 14.0001V5.82007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PreviousBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.2409 7.22005V16.7901C20.2409 18.7501 18.111 19.98 16.411 19L12.261 16.61L8.11094 14.21C6.41094 13.23 6.41094 10.78 8.11094 9.80004L12.261 7.40004L16.411 5.01006C18.111 4.03006 20.2409 5.25005 20.2409 7.22005Z"
        fill="currentColor"
      />
      <Path
        d="M3.75977 18.9298C3.34977 18.9298 3.00977 18.5898 3.00977 18.1798V5.81982C3.00977 5.40982 3.34977 5.06982 3.75977 5.06982C4.16977 5.06982 4.50977 5.40982 4.50977 5.81982V18.1798C4.50977 18.5898 4.16977 18.9298 3.75977 18.9298Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PreviousLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.24 7.22005V16.7901C20.24 18.7501 18.11 19.98 16.41 19L12.26 16.61L8.10996 14.21C6.40996 13.23 6.40996 10.78 8.10996 9.80004L12.26 7.40004L16.41 5.01006C18.11 4.03006 20.24 5.25005 20.24 7.22005Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.76001 18.1801V5.82007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PreviousOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.6896 20.0902C17.1196 20.0902 16.5596 19.9402 16.0396 19.6402L7.7496 14.8602C6.7196 14.2602 6.09961 13.1902 6.09961 12.0002C6.09961 10.8102 6.7196 9.74019 7.7496 9.14019L16.0396 4.36016C17.0696 3.76016 18.2996 3.76016 19.3396 4.36016C20.3796 4.96016 20.9896 6.02017 20.9896 7.22017V16.7902C20.9896 17.9802 20.3696 19.0502 19.3396 19.6502C18.8196 19.9402 18.2596 20.0902 17.6896 20.0902ZM17.6896 5.41017C17.3796 5.41017 17.0696 5.49016 16.7896 5.65016L8.4996 10.4302C7.9396 10.7602 7.59961 11.3402 7.59961 11.9902C7.59961 12.6402 7.9396 13.2202 8.4996 13.5502L16.7896 18.3302C17.3496 18.6602 18.0296 18.6602 18.5896 18.3302C19.1496 18.0002 19.4896 17.4202 19.4896 16.7702V7.20018C19.4896 6.55018 19.1496 5.97019 18.5896 5.64019C18.3096 5.50019 17.9996 5.41017 17.6896 5.41017Z"
        fill="currentColor"
      />
      <Path
        d="M3.75977 18.9298C3.34977 18.9298 3.00977 18.5898 3.00977 18.1798V5.81982C3.00977 5.40982 3.34977 5.06982 3.75977 5.06982C4.16977 5.06982 4.50977 5.40982 4.50977 5.81982V18.1798C4.50977 18.5898 4.16977 18.9298 3.75977 18.9298Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PreviousTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.2409 7.22005V16.7901C20.2409 18.7501 18.111 19.98 16.411 19L12.261 16.61L8.11094 14.21C6.41094 13.23 6.41094 10.78 8.11094 9.80004L12.261 7.40004L16.411 5.01006C18.111 4.03006 20.2409 5.25005 20.2409 7.22005Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M3.75977 18.1798V5.81982"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: PreviousBold,
  broken: PreviousBroken,
  bulk: PreviousBulk,
  linear: PreviousLinear,
  outline: PreviousOutline,
  twotone: PreviousTwotone,
};

export const PreviousIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
