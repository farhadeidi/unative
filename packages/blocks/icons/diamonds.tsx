import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const DiamondsBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.7704 9.79844L20.9704 7.99844L19.2104 4.03844C18.7404 2.99844 18.0004 2.14844 16.3004 2.14844H7.70044C6.00044 2.14844 5.26044 2.99844 4.79044 4.03844L3.03044 7.99844L2.23044 9.79844C1.77044 10.8484 2.02044 12.3884 2.79044 13.2384L9.64044 20.7784C10.9404 22.2084 13.0604 22.2084 14.3604 20.7784L21.2104 13.2384C21.9804 12.3884 22.2304 10.8484 21.7704 9.79844Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DiamondsBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.2105 13.2299C21.9805 12.3799 22.2304 10.8399 21.7604 9.7999L19.2004 4.0399C18.7404 2.9999 17.9904 2.1499 16.2904 2.1499H7.70044C6.00044 2.1499 5.25044 2.9999 4.79044 4.0399L2.23044 9.7999C1.77044 10.8399 2.02044 12.3899 2.79044 13.2299L9.65044 20.7699C10.9504 22.1899 13.0704 22.1899 14.3604 20.7699L18.3904 16.3299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 8H20.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DiamondsBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.2105 13.24L14.3604 20.78C13.0604 22.21 10.9404 22.21 9.64044 20.78L2.79044 13.24C2.02044 12.39 1.77044 10.85 2.23044 9.8L3.03044 8H20.9704L21.7705 9.8C22.2304 10.85 21.9805 12.39 21.2105 13.24Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.9693 7.9999H3.0293L4.78929 4.0399C5.25929 2.9999 5.99929 2.1499 7.6993 2.1499H16.2993C17.9993 2.1499 18.7393 2.9999 19.2093 4.0399L20.9693 7.9999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DiamondsLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.29 2.15002H7.69995C5.99995 2.15002 5.24995 3.00002 4.78995 4.04002L2.22995 9.80002C1.76995 10.84 2.01995 12.39 2.78995 13.23L9.64995 20.77C10.95 22.19 13.07 22.19 14.36 20.77L21.21 13.22C21.98 12.37 22.23 10.83 21.76 9.79002L19.2 4.03002C18.74 3.00002 17.99 2.15002 16.29 2.15002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 8H20.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DiamondsOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0008 22.6002C10.8908 22.6002 9.8608 22.1302 9.0908 21.2902L2.2308 13.7502C1.2608 12.6902 0.960795 10.8202 1.54079 9.51015L4.10081 3.75016C4.80081 2.18016 5.9708 1.41016 7.6908 1.41016H16.2808V2.16016V1.41016C18.0008 1.41016 19.1708 2.17016 19.8708 3.74016L22.4308 9.50016C23.0108 10.8102 22.7208 12.6802 21.7508 13.7402L14.9008 21.2902C14.1508 22.1302 13.1108 22.6002 12.0008 22.6002ZM16.2908 2.90016H7.7008C6.3908 2.90016 5.8608 3.48015 5.4808 4.35015L2.9208 10.1102C2.5808 10.8802 2.7808 12.1102 3.3408 12.7302L10.2008 20.2702C10.6808 20.8002 11.3208 21.0902 12.0008 21.0902C12.6808 21.0902 13.3208 20.8002 13.8008 20.2702L20.6508 12.7202C21.2208 12.0902 21.4208 10.8702 21.0708 10.1002L18.5108 4.34016C18.1308 3.48016 17.6008 2.90016 16.2908 2.90016Z"
        fill="currentColor"
      />
      <Path
        d="M3.5 8.74999C3.09 8.74999 2.75 8.40999 2.75 7.99999C2.75 7.58999 3.09 7.24999 3.5 7.24999L20.5 7.23999C20.91 7.23999 21.25 7.57999 21.25 7.98999C21.25 8.39999 20.91 8.73999 20.5 8.73999L3.5 8.74999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DiamondsTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.2904 2.1499H7.70044C6.00044 2.1499 5.25044 2.9999 4.79044 4.0399L2.23044 9.7999C1.77044 10.8399 2.02044 12.3899 2.79044 13.2299L9.65044 20.7699C10.9504 22.1899 13.0704 22.1899 14.3604 20.7699L21.2105 13.2199C21.9805 12.3699 22.2304 10.8299 21.7604 9.7899L19.2004 4.0299C18.7404 2.9999 17.9904 2.1499 16.2904 2.1499Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M3.5 8H20.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DiamondsBold,
  broken: DiamondsBroken,
  bulk: DiamondsBulk,
  linear: DiamondsLinear,
  outline: DiamondsOutline,
  twotone: DiamondsTwotone,
};

export const DiamondsIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
