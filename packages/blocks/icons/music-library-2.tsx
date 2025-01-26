import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const MusicLibrary2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 4.75H16V3.26C16 2.43 15.32 1.75 14.49 1.75H9.51C8.68 1.75 8 2.43 8 3.26V4.75H7C5.9 4.75 5 5.65 5 6.75V6.88C5.32 6.79 5.65 6.75 6 6.75H18C18.35 6.75 18.68 6.79 19 6.88V6.75C19 5.65 18.1 4.75 17 4.75Z"
        fill="currentColor"
      />
      <Path
        d="M13.9294 16.9297C13.6094 16.9297 13.3594 17.1897 13.3594 17.4997C13.3594 17.8097 13.6194 18.0697 13.9294 18.0697C14.2394 18.0697 14.4994 17.8097 14.4994 17.4997C14.4994 17.1897 14.2394 16.9297 13.9294 16.9297Z"
        fill="currentColor"
      />
      <Path
        d="M9.07 17.8086C8.75 17.8086 8.5 18.0686 8.5 18.3786C8.5 18.6886 8.76 18.9486 9.07 18.9486C9.38 18.9486 9.64 18.6886 9.64 18.3786C9.64 18.0686 9.39 17.8086 9.07 17.8086Z"
        fill="currentColor"
      />
      <Path
        d="M19 8.38C18.68 8.29 18.35 8.25 18 8.25H6C5.65 8.25 5.32 8.29 5 8.38C3.28 8.83 2 10.4 2 12.25V18.25C2 20.45 3.8 22.25 6 22.25H18C20.2 22.25 22 20.45 22 18.25V12.25C22 10.4 20.72 8.83 19 8.38ZM16 13.28V17.5C16 18.64 15.07 19.57 13.93 19.57C12.79 19.57 11.86 18.64 11.86 17.5C11.86 16.36 12.79 15.43 13.93 15.43C14.13 15.43 14.32 15.47 14.5 15.52V14.26L11.15 15.17V18.38C11.15 18.39 11.15 18.4 11.14 18.41C11.13 19.54 10.2 20.46 9.07 20.46C7.93 20.46 7 19.53 7 18.38C7 17.23 7.93 16.31 9.07 16.31C9.27 16.31 9.46 16.35 9.65 16.4V14.6V13.05C9.65 12.19 10.19 11.49 11.01 11.27L13.66 10.54C14.51 10.31 15.05 10.53 15.35 10.76C15.65 10.99 16 11.44 16 12.33V13.28Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicLibrary2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13C2 10.35 3.15 8.85003 5 8.28003C5.6 8.09003 6.27 8 7 8H17C17.73 8 18.4 8.09003 19 8.28003C20.85 8.85003 22 10.35 22 13V17C22 20.5 20 22 17 22H7C4 22 2 20.5 2 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 7V8.28003C18.4 8.09003 17.73 8 17 8H7C6.27 8 5.6 8.09003 5 8.28003V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 3.51001V5H8V3.51001C8 2.68001 8.68001 2 9.51001 2H14.49C15.32 2 16 2.68001 16 3.51001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.07001 19.4501C9.79902 19.4501 10.39 18.8591 10.39 18.1301C10.39 17.4011 9.79902 16.8101 9.07001 16.8101C8.34099 16.8101 7.75 17.4011 7.75 18.1301C7.75 18.8591 8.34099 19.4501 9.07001 19.4501Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.2504 17.2501V12.0801C15.2504 10.9801 14.5604 10.8201 13.8604 11.0201L11.2104 11.7401C10.7304 11.8701 10.4004 12.2501 10.4004 12.8001V13.7201V14.3401V18.1301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.9294 18.5702C14.6584 18.5702 15.2494 17.9792 15.2494 17.2502C15.2494 16.5212 14.6584 15.9302 13.9294 15.9302C13.2004 15.9302 12.6094 16.5212 12.6094 17.2502C12.6094 17.9792 13.2004 18.5702 13.9294 18.5702Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4004 14.3502L15.2504 13.0303"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicLibrary2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19 7V8.13C18.68 8.04 18.35 8 18 8H6C5.65 8 5.32 8.04 5 8.13V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16 3.51001V5H8V3.51001C8 2.68001 8.68001 2 9.51001 2H14.49C15.32 2 16 2.68001 16 3.51001Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22 12V18C22 20.2 20.2 22 18 22H6C3.8 22 2 20.2 2 18V12C2 10.15 3.28 8.58 5 8.13C5.32 8.04 5.65 8 6 8H18C18.35 8 18.68 8.04 19 8.13C20.72 8.58 22 10.15 22 12Z"
        fill="currentColor"
      />
      <Path
        d="M15.35 10.5098C15.05 10.2798 14.51 10.0598 13.66 10.2898L11.01 11.0198C10.18 11.2398 9.65002 11.9398 9.65002 12.7998V14.3498V16.1498C9.47002 16.0998 9.27001 16.0598 9.07001 16.0598C7.93001 16.0598 7 16.9898 7 18.1298C7 19.2698 7.93001 20.1998 9.07001 20.1998C10.21 20.1998 11.13 19.2798 11.14 18.1498C11.14 18.1398 11.15 18.1298 11.15 18.1198V14.9098L14.5 13.9998V15.2598C14.32 15.2098 14.13 15.1698 13.93 15.1698C12.79 15.1698 11.86 16.0998 11.86 17.2398C11.86 18.3798 12.79 19.3098 13.93 19.3098C15.07 19.3098 16 18.3798 16 17.2398V13.0198V12.0698C16 11.1998 15.64 10.7398 15.35 10.5098ZM9.07001 18.7098C8.75001 18.7098 8.5 18.4498 8.5 18.1398C8.5 17.8298 8.76001 17.5698 9.07001 17.5698C9.38001 17.5698 9.64001 17.8298 9.64001 18.1398C9.64001 18.4498 9.39001 18.7098 9.07001 18.7098ZM13.93 17.8198C13.61 17.8198 13.36 17.5598 13.36 17.2498C13.36 16.9398 13.62 16.6798 13.93 16.6798C14.24 16.6798 14.5 16.9398 14.5 17.2498C14.5 17.5598 14.24 17.8198 13.93 17.8198Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicLibrary2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 13V17C22 20.5 20 22 17 22H7C4 22 2 20.5 2 17V13C2 10.35 3.15 8.85003 5 8.28003C5.6 8.09003 6.27 8 7 8H17C17.73 8 18.4 8.09003 19 8.28003C20.85 8.85003 22 10.35 22 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 7V8.28003C18.4 8.09003 17.73 8 17 8H7C6.27 8 5.6 8.09003 5 8.28003V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 3.51001V5H8V3.51001C8 2.68001 8.68001 2 9.51001 2H14.49C15.32 2 16 2.68001 16 3.51001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.07001 19.4501C9.79902 19.4501 10.39 18.8591 10.39 18.1301C10.39 17.4011 9.79902 16.8101 9.07001 16.8101C8.34099 16.8101 7.75 17.4011 7.75 18.1301C7.75 18.8591 8.34099 19.4501 9.07001 19.4501Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.2499 17.2501V12.0801C15.2499 10.9801 14.5599 10.8201 13.8599 11.0201L11.2099 11.7401C10.7299 11.8701 10.3999 12.2501 10.3999 12.8001V13.7201V14.3401V18.1301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.9299 18.5702C14.6589 18.5702 15.2499 17.9792 15.2499 17.2502C15.2499 16.5212 14.6589 15.9302 13.9299 15.9302C13.2009 15.9302 12.6099 16.5212 12.6099 17.2502C12.6099 17.9792 13.2009 18.5702 13.9299 18.5702Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.3999 14.3502L15.2499 13.0303"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicLibrary2Outline = ({
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
        d="M17 22.75H7C3.35 22.75 1.25 20.65 1.25 17V13C1.25 9.4 3.17003 8.06 4.78003 7.56C5.43003 7.35 6.18 7.25 7 7.25H17C17.82 7.25 18.57 7.36001 19.23 7.57001C20.83 8.06001 22.75 9.41 22.75 13V17C22.75 20.65 20.65 22.75 17 22.75ZM7 8.75C6.34 8.75 5.73998 8.83 5.22998 9C3.55998 9.51 2.75 10.82 2.75 13V17C2.75 19.86 4.14 21.25 7 21.25H17C19.86 21.25 21.25 19.86 21.25 17V13C21.25 10.82 20.44 9.51 18.78 9C18.26 8.83 17.66 8.75 17 8.75H7Z"
        fill="currentColor"
      />
      <Path
        d="M19 9.03003C18.92 9.03003 18.85 9.01999 18.77 8.98999C18.26 8.82999 17.66 8.73999 17 8.73999H7C6.34 8.73999 5.73998 8.81999 5.22998 8.98999C4.99998 9.05999 4.75 9.02 4.56 8.88C4.37 8.74001 4.25 8.51002 4.25 8.27002V7C4.25 5.48 5.48 4.25 7 4.25H17C18.52 4.25 19.75 5.48 19.75 7V8.28003C19.75 8.52003 19.64 8.74001 19.44 8.89001C19.31 8.98001 19.16 9.03003 19 9.03003ZM7 5.75C6.31 5.75 5.75 6.31 5.75 7V7.34003C6.14 7.28003 6.56 7.25 7 7.25H17C17.44 7.25 17.86 7.28003 18.25 7.34003V7C18.25 6.31 17.69 5.75 17 5.75H7Z"
        fill="currentColor"
      />
      <Path
        d="M16 5.75H8C7.59 5.75 7.25 5.41 7.25 5V3.51001C7.25 2.26001 8.26001 1.25 9.51001 1.25H14.49C15.74 1.25 16.75 2.26001 16.75 3.51001V5C16.75 5.41 16.41 5.75 16 5.75ZM8.75 4.25H15.25V3.51001C15.25 3.09001 14.91 2.75 14.49 2.75H9.51001C9.09001 2.75 8.75 3.09001 8.75 3.51001V4.25Z"
        fill="currentColor"
      />
      <Path
        d="M9.07001 20.2103C7.93001 20.2103 7 19.2803 7 18.1403C7 17.0003 7.93001 16.0703 9.07001 16.0703C10.21 16.0703 11.14 17.0003 11.14 18.1403C11.14 19.2803 10.22 20.2103 9.07001 20.2103ZM9.07001 17.5603C8.75001 17.5603 8.5 17.8203 8.5 18.1303C8.5 18.4403 8.76001 18.7003 9.07001 18.7003C9.38001 18.7003 9.64001 18.4403 9.64001 18.1303C9.64001 17.8203 9.39001 17.5603 9.07001 17.5603Z"
        fill="currentColor"
      />
      <Path
        d="M10.4004 18.8798C9.99039 18.8798 9.65039 18.5398 9.65039 18.1298V12.7998C9.65039 11.9398 10.1904 11.2398 11.0204 11.0098L13.6703 10.2898C14.5203 10.0598 15.0604 10.2798 15.3604 10.5098C15.6604 10.7398 16.0104 11.1898 16.0104 12.0698V17.2398C16.0104 17.6498 15.6704 17.9898 15.2604 17.9898C14.8504 17.9898 14.5104 17.6498 14.5104 17.2398V12.0698C14.5104 11.8198 14.4604 11.7198 14.4404 11.6998C14.4204 11.6898 14.3004 11.6698 14.0604 11.7298L11.4103 12.4498C11.1803 12.5098 11.1504 12.6598 11.1504 12.7898V18.1198C11.1504 18.5498 10.8104 18.8798 10.4004 18.8798Z"
        fill="currentColor"
      />
      <Path
        d="M13.9294 19.3197C12.7894 19.3197 11.8594 18.3897 11.8594 17.2497C11.8594 16.1097 12.7894 15.1797 13.9294 15.1797C15.0694 15.1797 15.9994 16.1097 15.9994 17.2497C15.9994 18.3897 15.0694 19.3197 13.9294 19.3197ZM13.9294 16.6797C13.6094 16.6797 13.3594 16.9397 13.3594 17.2497C13.3594 17.5597 13.6194 17.8197 13.9294 17.8197C14.2394 17.8197 14.4994 17.5597 14.4994 17.2497C14.4994 16.9397 14.2394 16.6797 13.9294 16.6797Z"
        fill="currentColor"
      />
      <Path
        d="M10.3991 15.0999C10.0691 15.0999 9.76906 14.8799 9.67906 14.5499C9.56906 14.1499 9.80909 13.7399 10.2091 13.6299L15.0591 12.3099C15.4591 12.1999 15.869 12.4399 15.979 12.8399C16.089 13.2399 15.8491 13.6499 15.4491 13.7599L10.599 15.0799C10.529 15.0899 10.4591 15.0999 10.3991 15.0999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicLibrary2Twotone = ({
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
        d="M22 13V17C22 20.5 20 22 17 22H7C4 22 2 20.5 2 17V13C2 10.35 3.15 8.85003 5 8.28003C5.6 8.09003 6.27 8 7 8H17C17.73 8 18.4 8.09003 19 8.28003C20.85 8.85003 22 10.35 22 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 7V8.28003C18.4 8.09003 17.73 8 17 8H7C6.27 8 5.6 8.09003 5 8.28003V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 3.51001V5H8V3.51001C8 2.68001 8.68001 2 9.51001 2H14.49C15.32 2 16 2.68001 16 3.51001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M9.07001 19.4501C9.79902 19.4501 10.39 18.8591 10.39 18.1301C10.39 17.4011 9.79902 16.8101 9.07001 16.8101C8.34099 16.8101 7.75 17.4011 7.75 18.1301C7.75 18.8591 8.34099 19.4501 9.07001 19.4501Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.2504 17.2501V12.0801C15.2504 10.9801 14.5604 10.8201 13.8604 11.0201L11.2104 11.7401C10.7304 11.8701 10.4004 12.2501 10.4004 12.8001V13.7201V14.3401V18.1301"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.9294 18.5702C14.6584 18.5702 15.2494 17.9792 15.2494 17.2502C15.2494 16.5212 14.6584 15.9302 13.9294 15.9302C13.2004 15.9302 12.6094 16.5212 12.6094 17.2502C12.6094 17.9792 13.2004 18.5702 13.9294 18.5702Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.4004 14.3502L15.2504 13.0303"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MusicLibrary2Bold,
  broken: MusicLibrary2Broken,
  bulk: MusicLibrary2Bulk,
  linear: MusicLibrary2Linear,
  outline: MusicLibrary2Outline,
  twotone: MusicLibrary2Twotone,
};

export const MusicLibrary2Icon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
