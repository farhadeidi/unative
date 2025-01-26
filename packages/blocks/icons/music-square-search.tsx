import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const MusicSquareSearchBold = ({
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
        d="M22.79 21.76L22.07 21.04C22.44 20.48 22.66 19.8 22.66 19.08C22.66 17.1 21.06 15.5 19.08 15.5C17.1 15.5 15.5 17.1 15.5 19.08C15.5 21.06 17.1 22.66 19.08 22.66C19.81 22.66 20.48 22.44 21.04 22.07L21.76 22.79C21.9 22.93 22.09 23 22.27 23C22.46 23 22.64 22.93 22.78 22.79C23.07 22.5 23.07 22.04 22.79 21.76Z"
        fill="currentColor"
      />
      <Path
        d="M12.2283 12.0703C11.8183 12.0703 11.4883 12.4003 11.4883 12.8103C11.4883 13.2203 11.8183 13.5503 12.2283 13.5503C12.6383 13.5503 12.9683 13.2203 12.9683 12.8103C12.9683 12.4003 12.6383 12.0703 12.2283 12.0703Z"
        fill="currentColor"
      />
      <Path
        d="M6.75953 13.0586C6.34953 13.0586 6.01953 13.3886 6.01953 13.7986C6.01953 14.2086 6.34953 14.5386 6.75953 14.5386C7.16953 14.5386 7.49953 14.2086 7.49953 13.7986C7.49953 13.3886 7.16953 13.0586 6.75953 13.0586Z"
        fill="currentColor"
      />
      <Path
        d="M16.19 2H7.81C7.53 2 7.26 2.01 7 2.05C3.85 2.34 2 4.45 2 7.81V16.19C2 19.55 3.85 21.66 7 21.95C7.26 21.99 7.53 22 7.81 22H13.5C13.89 22 14.14 21.56 13.99 21.2C13.7 20.51 13.5 19.71 13.5 19C13.5 15.97 15.97 13.5 19 13.5C19.76 13.5 20.5 13.65 21.18 13.95C21.55 14.11 22 13.86 22 13.46V7.81C22 4.17 19.83 2 16.19 2ZM14.48 8.05V12.81C14.48 12.82 14.47 12.83 14.47 12.85C14.45 14.07 13.46 15.06 12.23 15.06C10.99 15.06 9.99 14.05 9.99 12.82C9.99 11.58 11 10.58 12.23 10.58C12.49 10.58 12.74 10.63 12.98 10.72V9.03L9.01 10.11V13.81C9.01 13.82 9 13.83 9 13.84C8.98 15.06 7.99 16.04 6.76 16.04C5.52 16.04 4.52 15.03 4.52 13.8C4.52 12.57 5.53 11.56 6.76 11.56C7.02 11.56 7.27 11.61 7.5 11.7V9.54V7.79C7.5 6.86 8.08 6.11 8.97 5.87L11.95 5.05C12.88 4.8 13.45 5.05 13.77 5.29C14.23 5.64 14.46 6.21 14.46 6.97V8.05H14.48Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicSquareSearchBroken = ({
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
        d="M2 8.65002C2 3.90002 3.89999 2 8.64999 2H14.35C19.1 2 21 3.90002 21 8.65002V12.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.35 21H8.64999C3.89999 21 2 19.1 2 14.35V12.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.71953 14.42C7.52034 14.42 8.16953 13.7708 8.16953 12.97C8.16953 12.1692 7.52034 11.52 6.71953 11.52C5.91872 11.52 5.26953 12.1692 5.26953 12.97C5.26953 13.7708 5.91872 14.42 6.71953 14.42Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.4797 12V6.34001C13.4797 5.13001 12.7197 4.96997 11.9597 5.17997L9.0697 5.96995C8.5497 6.10995 8.17969 6.52999 8.17969 7.12999V8.14V8.81999V12.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0301 13.4501C12.8309 13.4501 13.4801 12.8009 13.4801 12.0001C13.4801 11.1992 12.8309 10.55 12.0301 10.55C11.2293 10.55 10.5801 11.1992 10.5801 12.0001C10.5801 12.8009 11.2293 13.4501 12.0301 13.4501Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.16992 8.8299L13.4799 7.37988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.9402 21.2799C19.7075 21.2799 21.1402 19.8472 21.1402 18.0799C21.1402 16.3126 19.7075 14.8799 17.9402 14.8799C16.1729 14.8799 14.7402 16.3126 14.7402 18.0799C14.7402 19.8472 16.1729 21.2799 17.9402 21.2799Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.7402 21.8799L20.7402 20.8799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicSquareSearchBulk = ({
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
        d="M22.79 21.76L22.07 21.04C22.44 20.48 22.66 19.8 22.66 19.08C22.66 17.1 21.06 15.5 19.08 15.5C17.1 15.5 15.5 17.1 15.5 19.08C15.5 21.06 17.1 22.66 19.08 22.66C19.81 22.66 20.48 22.44 21.04 22.07L21.76 22.79C21.9 22.93 22.09 23 22.27 23C22.46 23 22.64 22.93 22.78 22.79C23.07 22.5 23.07 22.04 22.79 21.76Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
        fill="currentColor"
      />
      <Path
        d="M13.7793 5.29976C13.4593 5.04976 12.8793 4.80977 11.9593 5.05977L8.97929 5.87977C8.08929 6.10977 7.50929 6.85976 7.50929 7.79976V9.54976V11.7098C7.27929 11.6298 7.0293 11.5698 6.7693 11.5698C5.5293 11.5698 4.5293 12.5798 4.5293 13.8098C4.5293 15.0398 5.5393 16.0498 6.7693 16.0498C7.9893 16.0498 8.98929 15.0597 9.00929 13.8497C9.00929 13.8397 9.0193 13.8298 9.0193 13.8198V10.1198L12.9893 9.03975V10.7197C12.7593 10.6397 12.5093 10.5798 12.2393 10.5798C10.9993 10.5798 9.9993 11.5898 9.9993 12.8198C9.9993 14.0598 11.0093 15.0598 12.2393 15.0598C13.4593 15.0598 14.4593 14.0697 14.4793 12.8497C14.4793 12.8397 14.4893 12.8298 14.4893 12.8098V8.04976V6.97975C14.4793 6.21975 14.2393 5.64976 13.7793 5.29976ZM6.75929 14.5498C6.34929 14.5498 6.0193 14.2198 6.0193 13.8098C6.0193 13.3998 6.34929 13.0698 6.75929 13.0698C7.16929 13.0698 7.4993 13.3998 7.4993 13.8098C7.4993 14.2198 7.16929 14.5498 6.75929 14.5498ZM12.2293 13.5498C11.8193 13.5498 11.4893 13.2198 11.4893 12.8098C11.4893 12.3998 11.8193 12.0698 12.2293 12.0698C12.6393 12.0698 12.9693 12.3998 12.9693 12.8098C12.9693 13.2198 12.6393 13.5498 12.2293 13.5498Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicSquareSearchLinear = ({
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
        d="M12.35 21H8.64999C3.89999 21 2 19.1 2 14.35V8.65002C2 3.90002 3.89999 2 8.64999 2H14.35C19.1 2 21 3.90002 21 8.65002V12.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.72002 14.42C7.52083 14.42 8.17001 13.7708 8.17001 12.97C8.17001 12.1692 7.52083 11.52 6.72002 11.52C5.9192 11.52 5.27002 12.1692 5.27002 12.97C5.27002 13.7708 5.9192 14.42 6.72002 14.42Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.4801 12V6.34001C13.4801 5.13001 12.7201 4.96997 11.9601 5.17997L9.07007 5.96995C8.55007 6.10995 8.18005 6.52999 8.18005 7.12999V8.14V8.81999V12.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0301 13.4501C12.8309 13.4501 13.4801 12.8009 13.4801 12.0001C13.4801 11.1992 12.8309 10.55 12.0301 10.55C11.2293 10.55 10.5801 11.1992 10.5801 12.0001C10.5801 12.8009 11.2293 13.4501 12.0301 13.4501Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.17004 8.8299L13.48 7.37988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.94 21.2799C19.7073 21.2799 21.14 19.8472 21.14 18.0799C21.14 16.3126 19.7073 14.8799 17.94 14.8799C16.1727 14.8799 14.74 16.3126 14.74 18.0799C14.74 19.8472 16.1727 21.2799 17.94 21.2799Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.74 21.8799L20.74 20.8799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicSquareSearchOutline = ({
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
        d="M12.35 21.75H8.64999C3.45999 21.75 1.25 19.54 1.25 14.35V8.65002C1.25 3.46002 3.45999 1.25 8.64999 1.25H14.35C19.54 1.25 21.75 3.46002 21.75 8.65002V12.35C21.75 12.76 21.41 13.1 21 13.1C20.59 13.1 20.25 12.76 20.25 12.35V8.65002C20.25 4.29002 18.71 2.75 14.35 2.75H8.64999C4.28999 2.75 2.75 4.29002 2.75 8.65002V14.35C2.75 18.71 4.28999 20.25 8.64999 20.25H12.35C12.76 20.25 13.1 20.59 13.1 21C13.1 21.41 12.76 21.75 12.35 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M6.71953 15.17C5.50953 15.17 4.51953 14.18 4.51953 12.97C4.51953 11.76 5.50953 10.77 6.71953 10.77C7.92953 10.77 8.91953 11.76 8.91953 12.97C8.91953 14.18 7.92953 15.17 6.71953 15.17ZM6.71953 12.27C6.33953 12.27 6.01953 12.58 6.01953 12.97C6.01953 13.35 6.32953 13.67 6.71953 13.67C7.10953 13.67 7.41953 13.36 7.41953 12.97C7.41953 12.58 7.10953 12.27 6.71953 12.27Z"
        fill="currentColor"
      />
      <Path
        d="M8.16992 13.7199C7.75992 13.7199 7.41992 13.3799 7.41992 12.9699V7.13993C7.41992 6.22993 7.98992 5.48992 8.85992 5.24992L11.7599 4.45994C12.6599 4.20994 13.2299 4.44992 13.5399 4.68992C13.8499 4.92992 14.2299 5.40994 14.2299 6.33994V11.9999C14.2299 12.4099 13.8899 12.7499 13.4799 12.7499C13.0699 12.7499 12.7299 12.4099 12.7299 11.9999V6.33994C12.7299 6.01994 12.6599 5.89992 12.6299 5.87992C12.5999 5.85992 12.4599 5.81994 12.1499 5.89994L9.25992 6.68992C8.95992 6.76992 8.91992 6.97992 8.91992 7.12992V12.9599C8.91992 13.3799 8.57992 13.7199 8.16992 13.7199Z"
        fill="currentColor"
      />
      <Path
        d="M12.0301 14.1998C10.8201 14.1998 9.83008 13.2098 9.83008 11.9998C9.83008 10.7898 10.8201 9.7998 12.0301 9.7998C13.2401 9.7998 14.2301 10.7898 14.2301 11.9998C14.2301 13.2198 13.2401 14.1998 12.0301 14.1998ZM12.0301 11.3098C11.6501 11.3098 11.3301 11.6198 11.3301 12.0098C11.3301 12.3898 11.6401 12.7098 12.0301 12.7098C12.4201 12.7098 12.7301 12.3998 12.7301 12.0098C12.7301 11.6198 12.4101 11.3098 12.0301 11.3098Z"
        fill="currentColor"
      />
      <Path
        d="M8.17055 9.58008C7.84055 9.58008 7.54055 9.36009 7.45055 9.03009C7.34055 8.63009 7.58054 8.22005 7.98054 8.11005L13.2905 6.66003C13.6905 6.56003 14.1006 6.79006 14.2106 7.19006C14.3206 7.59006 14.0805 8.00005 13.6805 8.11005L8.37054 9.56006C8.30054 9.57006 8.23055 9.58008 8.17055 9.58008Z"
        fill="currentColor"
      />
      <Path
        d="M17.9402 22.0299C15.7602 22.0299 13.9902 20.2599 13.9902 18.0799C13.9902 15.8999 15.7602 14.1299 17.9402 14.1299C20.1202 14.1299 21.8902 15.8999 21.8902 18.0799C21.8902 20.2599 20.1202 22.0299 17.9402 22.0299ZM17.9402 15.6299C16.5902 15.6299 15.4902 16.7299 15.4902 18.0799C15.4902 19.4299 16.5902 20.5299 17.9402 20.5299C19.2902 20.5299 20.3902 19.4299 20.3902 18.0799C20.3902 16.7299 19.2902 15.6299 17.9402 15.6299Z"
        fill="currentColor"
      />
      <Path
        d="M21.7397 22.6299C21.5497 22.6299 21.3597 22.5598 21.2097 22.4098L20.2097 21.4098C19.9197 21.1198 19.9197 20.6398 20.2097 20.3498C20.4997 20.0598 20.9797 20.0598 21.2697 20.3498L22.2697 21.3498C22.5597 21.6398 22.5597 22.1198 22.2697 22.4098C22.1197 22.5498 21.9297 22.6299 21.7397 22.6299Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicSquareSearchTwotone = ({
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
        d="M12.35 21H8.64999C3.89999 21 2 19.1 2 14.35V8.65002C2 3.90002 3.89999 2 8.64999 2H14.35C19.1 2 21 3.90002 21 8.65002V12.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M6.71953 14.42C7.52034 14.42 8.16953 13.7708 8.16953 12.97C8.16953 12.1692 7.52034 11.52 6.71953 11.52C5.91872 11.52 5.26953 12.1692 5.26953 12.97C5.26953 13.7708 5.91872 14.42 6.71953 14.42Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.4797 12V6.34001C13.4797 5.13001 12.7197 4.96997 11.9597 5.17997L9.0697 5.96995C8.5497 6.10995 8.17969 6.52999 8.17969 7.12999V8.14V8.81999V12.97"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.0301 13.4498C12.8309 13.4498 13.4801 12.8006 13.4801 11.9998C13.4801 11.199 12.8309 10.5498 12.0301 10.5498C11.2293 10.5498 10.5801 11.199 10.5801 11.9998C10.5801 12.8006 11.2293 13.4498 12.0301 13.4498Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.16992 8.8299L13.4799 7.37988"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M17.9402 21.2799C19.7075 21.2799 21.1402 19.8472 21.1402 18.0799C21.1402 16.3126 19.7075 14.8799 17.9402 14.8799C16.1729 14.8799 14.7402 16.3126 14.7402 18.0799C14.7402 19.8472 16.1729 21.2799 17.9402 21.2799Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.7402 21.8799L20.7402 20.8799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MusicSquareSearchBold,
  broken: MusicSquareSearchBroken,
  bulk: MusicSquareSearchBulk,
  linear: MusicSquareSearchLinear,
  outline: MusicSquareSearchOutline,
  twotone: MusicSquareSearchTwotone,
};

export const MusicSquareSearchIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
