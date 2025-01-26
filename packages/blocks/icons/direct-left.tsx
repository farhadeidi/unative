import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const DirectLeftBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.2916 17.0218L19.5516 13.5418C19.0716 12.5718 19.0716 11.4418 19.5516 10.4718L21.2916 6.99178C22.7816 4.00178 19.5716 0.861782 16.6216 2.42178L15.0816 3.24178C14.8716 3.35178 14.7016 3.53178 14.6016 3.75178L8.90164 16.3918C8.67164 16.9118 8.88164 17.5218 9.38164 17.7818L16.6216 21.5918C19.5716 23.1518 22.7816 20.0018 21.2916 17.0218Z"
        fill="currentColor"
      />
      <Path
        d="M7.68953 15.6004L11.4195 7.32045C11.8395 6.39045 10.8395 5.45045 9.93953 5.93045L4.16953 8.96045C1.71953 10.2504 1.71953 13.7504 4.16953 15.0404L6.20953 16.1104C6.75953 16.4004 7.42953 16.1704 7.68953 15.6004Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectLeftBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.3 3.07005C19.05 1.62005 22.04 4.55005 20.65 7.33005L19.03 10.57C18.58 11.47 18.58 12.53 19.03 13.43L20.65 16.67C22.04 19.45 19.05 22.37 16.3 20.93L4.71 14.83C2.43 13.63 2.43 10.37 4.71 9.17005L11.68 5.50005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectLeftBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.2897 17.0198L19.5497 13.5398C19.0697 12.5698 19.0697 11.4398 19.5497 10.4698L21.2897 6.98983C22.7797 3.99983 19.5697 0.859829 16.6197 2.41983L15.0797 3.23983C14.8697 3.34983 14.6997 3.52983 14.5997 3.74983L8.89969 16.3898C8.66969 16.9098 8.87969 17.5198 9.37969 17.7798L16.6197 21.5898C19.5697 23.1498 22.7797 19.9998 21.2897 17.0198Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M7.68953 15.6L11.4195 7.31996C11.8395 6.38996 10.8395 5.44996 9.93953 5.92996L4.16953 8.95996C1.71953 10.25 1.71953 13.75 4.16953 15.04L6.20953 16.11C6.75953 16.4 7.42953 16.17 7.68953 15.6Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectLeftLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.71 9.17005L16.3 3.07005C19.05 1.62005 22.04 4.55005 20.65 7.33005L19.03 10.57C18.58 11.47 18.58 12.53 19.03 13.43L20.65 16.67C22.04 19.45 19.05 22.37 16.3 20.93L4.71 14.83C2.43 13.63 2.43 10.37 4.71 9.17005Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectLeftOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.81 22.0599C17.18 22.0599 16.55 21.9099 15.95 21.5899L4.36 15.4899C3.06 14.8099 2.25 13.4699 2.25 11.9999C2.25 10.5299 3.06 9.18988 4.36 8.50988L15.95 2.40988C17.5 1.59988 19.3 1.85988 20.55 3.07988C21.8 4.29988 22.1 6.09988 21.32 7.65988L19.7 10.8999C19.36 11.5799 19.36 12.3999 19.7 13.0899L21.32 16.3299C22.1 17.8899 21.8 19.6899 20.55 20.9099C19.78 21.6699 18.81 22.0599 17.81 22.0599ZM17.8 3.43988C17.44 3.43988 17.05 3.52988 16.65 3.73988L5.06 9.83988C4.24 10.2699 3.75 11.0799 3.75 11.9999C3.75 12.9199 4.24 13.7299 5.06 14.1599L16.65 20.2599C17.81 20.8699 18.89 20.4499 19.5 19.8399C20.12 19.2399 20.56 18.1699 19.98 16.9999L18.36 13.7599C17.81 12.6499 17.81 11.3399 18.36 10.2299L19.98 6.98988C20.57 5.81988 20.12 4.74988 19.5 4.14988C19.1 3.75988 18.5 3.43988 17.8 3.43988Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectLeftTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.71 9.1698L16.3 3.0698C19.05 1.6198 22.04 4.5498 20.65 7.3298L19.03 10.5698C18.58 11.4698 18.58 12.5298 19.03 13.4298L20.65 16.6698C22.04 19.4498 19.05 22.3698 16.3 20.9298L4.71 14.8298C2.43 13.6298 2.43 10.3698 4.71 9.1698Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DirectLeftBold,
  broken: DirectLeftBroken,
  bulk: DirectLeftBulk,
  linear: DirectLeftLinear,
  outline: DirectLeftOutline,
  twotone: DirectLeftTwotone,
};

export const DirectLeftIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
