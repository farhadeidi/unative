import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const HomeWifiBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.8593 8.36985L13.9293 2.82985C12.8593 1.96985 11.1293 1.96985 10.0693 2.81985L3.13929 8.36985C2.35929 8.98985 1.85929 10.2998 2.02929 11.2798L3.35929 19.2398C3.59929 20.6598 4.95929 21.8098 6.39929 21.8098H17.5993C19.0293 21.8098 20.3993 20.6498 20.6393 19.2398L21.9693 11.2798C22.1293 10.2998 21.6293 8.98985 20.8593 8.36985ZM12.7093 17.1999C12.5093 17.3998 12.2593 17.4998 11.9993 17.4998C11.7393 17.4998 11.4893 17.3998 11.2893 17.2098C10.8993 16.8198 10.8993 16.1898 11.2893 15.7998C11.6793 15.4098 12.3193 15.4098 12.7093 15.7998C13.0993 16.1798 13.0993 16.8098 12.7093 17.1999ZM14.6593 14.8998C14.5093 15.0498 14.3193 15.1298 14.1193 15.1298C13.9293 15.1298 13.7493 15.0598 13.5993 14.9198C12.6293 13.9898 11.3693 13.9898 10.3893 14.9198C10.0893 15.2098 9.61929 15.1998 9.32929 14.8998C9.03929 14.5998 9.04929 14.1298 9.34929 13.8398C10.8993 12.3498 13.0693 12.3498 14.6293 13.8398C14.9393 14.1198 14.9493 14.5998 14.6593 14.8998ZM16.7793 12.7798C16.6293 12.9298 16.4393 13.0098 16.2393 13.0098C16.0493 13.0098 15.8593 12.9398 15.7193 12.7998C15.2493 12.3398 14.7193 11.9698 14.1593 11.6998C12.7593 11.0298 11.2293 11.0298 9.83929 11.6998C9.27929 11.9698 8.75929 12.3398 8.27929 12.7998C7.98929 13.0898 7.50929 13.0898 7.21929 12.7898C6.92929 12.4898 6.93929 12.0198 7.22929 11.7298C7.81929 11.1498 8.47929 10.6898 9.18929 10.3498C10.9993 9.47985 12.9993 9.47985 14.7993 10.3498C15.5093 10.6898 16.1693 11.1498 16.7593 11.7298C17.0593 12.0098 17.0693 12.4898 16.7793 12.7798Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HomeWifiBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.02929 11.2799C1.85929 10.2999 2.3593 8.98989 3.1393 8.36989L10.0693 2.81984C11.1293 1.96984 12.8593 1.96985 13.9293 2.82985L20.8593 8.36989C21.6293 8.98989 22.1293 10.2999 21.9693 11.2799L20.6393 19.2399C20.3993 20.6499 19.0293 21.81 17.5993 21.81H6.39928C4.95928 21.81 3.59927 20.6599 3.35927 19.2399L2.71929 15.3799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.88086 14.3802C11.1509 13.1702 12.8508 13.1702 14.1208 14.3802"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.75 11.45C8.4 11.68 8.07 11.95 7.75 12.26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.24 12.26C15.7 11.73 15.1 11.32 14.48 11.02C13.68 10.64 12.84 10.45 12 10.45"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9955 16.5H12.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HomeWifiBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.0693 2.82009L3.1393 8.37008C2.3593 8.99008 1.85929 10.3001 2.02929 11.2801L3.35927 19.2401C3.59927 20.6601 4.95928 21.8101 6.39928 21.8101H17.5993C19.0293 21.8101 20.3993 20.6501 20.6393 19.2401L21.9693 11.2801C22.1293 10.3001 21.6293 8.99008 20.8593 8.37008L13.9293 2.8301C12.8593 1.9701 11.1293 1.97009 10.0693 2.82009Z"
        fill="currentColor"
      />
      <Path
        d="M14.1205 15.1301C13.9305 15.1301 13.7505 15.0601 13.6005 14.9201C12.6305 13.9901 11.3706 13.9901 10.3906 14.9201C10.0906 15.2101 9.62052 15.2002 9.33052 14.9002C9.04052 14.6002 9.05054 14.1302 9.35054 13.8402C10.9005 12.3502 13.0705 12.3502 14.6305 13.8402C14.9305 14.1302 14.9405 14.6002 14.6505 14.9002C14.5205 15.0502 14.3205 15.1301 14.1205 15.1301Z"
        fill="currentColor"
      />
      <Path
        d="M16.2404 13.01C16.0504 13.01 15.8604 12.94 15.7204 12.8C15.2504 12.34 14.7204 11.97 14.1604 11.7C12.7604 11.03 11.2304 11.03 9.84037 11.7C9.28037 11.97 8.76037 12.34 8.28037 12.8C7.99037 13.09 7.51037 13.09 7.22037 12.79C6.93037 12.49 6.94038 12.02 7.23038 11.73C7.82038 11.15 8.48037 10.69 9.19037 10.35C11.0004 9.48001 13.0004 9.48001 14.8004 10.35C15.5104 10.69 16.1704 11.15 16.7604 11.73C17.0604 12.02 17.0604 12.49 16.7704 12.79C16.6304 12.93 16.4404 13.01 16.2404 13.01Z"
        fill="currentColor"
      />
      <Path
        d="M12.0005 17.5001C11.7405 17.5001 11.4905 17.4001 11.2905 17.2101C10.9005 16.8201 10.9005 16.1901 11.2905 15.8001C11.6805 15.4101 12.3205 15.4101 12.7105 15.8001C13.1005 16.1901 13.1005 16.8201 12.7105 17.2101C12.5105 17.4001 12.2605 17.5001 12.0005 17.5001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HomeWifiLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.07 2.81997L3.14004 8.37002C2.36004 8.99002 1.86002 10.3 2.03002 11.28L3.36001 19.24C3.60001 20.66 4.96002 21.8101 6.40002 21.8101H17.6C19.03 21.8101 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99002 20.86 8.37002L13.93 2.82998C12.86 1.96998 11.13 1.96997 10.07 2.81997Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.88 14.38C11.15 13.17 12.85 13.17 14.12 14.38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.24 12.2601C15.7 11.7301 15.1 11.3201 14.48 11.0201C12.89 10.2601 11.11 10.2601 9.51001 11.0201C8.89001 11.3201 8.3 11.7301 7.75 12.2601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9955 17H12.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HomeWifiOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.5998 22.5599H6.39983C4.57983 22.5599 2.91983 21.1598 2.61983 19.3598L1.28984 11.3999C1.07984 10.1599 1.67985 8.56987 2.66985 7.77987L9.59984 2.22982C10.9398 1.14982 13.0498 1.15983 14.3998 2.23983L21.3298 7.77987C22.3098 8.56987 22.9098 10.1599 22.7098 11.3999L21.3798 19.3598C21.0798 21.1298 19.3898 22.5599 17.5998 22.5599ZM11.9898 2.93978C11.4598 2.93978 10.9298 3.09987 10.5398 3.40987L3.60982 8.9598C3.03982 9.4198 2.64982 10.4399 2.76982 11.1599L4.09984 19.1198C4.27984 20.1698 5.32983 21.0599 6.39983 21.0599H17.5998C18.6698 21.0599 19.7198 20.1698 19.8998 19.1098L21.2298 11.1499C21.3498 10.4299 20.9499 9.39979 20.3899 8.94979L13.4598 3.40987C13.0598 3.09987 12.5298 2.93978 11.9898 2.93978Z"
        fill="currentColor"
      />
      <Path
        d="M14.1205 15.13C13.9305 15.13 13.7505 15.06 13.6005 14.92C12.6305 13.99 11.3706 13.99 10.3906 14.92C10.0906 15.21 9.62052 15.2 9.33052 14.9C9.04052 14.6 9.05054 14.1299 9.35054 13.8399C10.9005 12.3499 13.0705 12.3499 14.6305 13.8399C14.9305 14.1299 14.9405 14.6 14.6505 14.9C14.5205 15.05 14.3205 15.13 14.1205 15.13Z"
        fill="currentColor"
      />
      <Path
        d="M16.2404 13.01C16.0504 13.01 15.8604 12.9401 15.7204 12.8001C15.2504 12.3401 14.7204 11.97 14.1604 11.7C12.7604 11.03 11.2304 11.03 9.84037 11.7C9.28037 11.97 8.76037 12.3401 8.28037 12.8001C7.99037 13.0901 7.51037 13.0901 7.22037 12.7901C6.93037 12.4901 6.94038 12.02 7.23038 11.73C7.82038 11.15 8.48037 10.69 9.19037 10.35C11.0004 9.48001 13.0004 9.48001 14.8004 10.35C15.5104 10.69 16.1704 11.15 16.7604 11.73C17.0604 12.02 17.0604 12.4901 16.7704 12.7901C16.6304 12.9301 16.4404 13.01 16.2404 13.01Z"
        fill="currentColor"
      />
      <Path
        d="M12.0005 17.5C11.7405 17.5 11.4905 17.4 11.2905 17.21C10.9005 16.82 10.9005 16.1901 11.2905 15.8001C11.6805 15.4101 12.3205 15.4101 12.7105 15.8001C13.1005 16.1901 13.1005 16.82 12.7105 17.21C12.5105 17.4 12.2605 17.5 12.0005 17.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HomeWifiTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.0693 2.81984L3.1393 8.36989C2.3593 8.98989 1.85929 10.2999 2.02929 11.2799L3.35927 19.2399C3.59927 20.6599 4.95928 21.81 6.39928 21.81H17.5993C19.0293 21.81 20.3993 20.6499 20.6393 19.2399L21.9693 11.2799C22.1293 10.2999 21.6293 8.98989 20.8593 8.36989L13.9293 2.82985C12.8593 1.96985 11.1293 1.96984 10.0693 2.81984Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.88086 14.3802C11.1509 13.1702 12.8508 13.1702 14.1208 14.3802"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M16.24 12.2602C15.7 11.7302 15.1 11.3202 14.48 11.0202C12.89 10.2602 11.11 10.2602 9.51001 11.0202C8.89001 11.3202 8.3 11.7302 7.75 12.2602"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.9955 16.5H12.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: HomeWifiBold,
  broken: HomeWifiBroken,
  bulk: HomeWifiBulk,
  linear: HomeWifiLinear,
  outline: HomeWifiOutline,
  twotone: HomeWifiTwotone,
};

export const HomeWifiIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default HomeWifiIcon;
