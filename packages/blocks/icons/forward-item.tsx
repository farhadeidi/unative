import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const ForwardItemBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.2505 5.77V9C21.2505 11.1146 20.5427 11.899 18.6312 12.0068C18.3555 12.0223 18.1305 11.7961 18.1305 11.52V10.38C18.1305 7.26 16.7405 5.87 13.6205 5.87H12.4805C12.2043 5.87 11.9781 5.64494 11.9937 5.36924C12.1014 3.45773 12.8859 2.75 15.0005 2.75H18.2305C20.5205 2.75 21.2505 3.48 21.2505 5.77Z"
        fill="currentColor"
      />
      <Path
        d="M16.6291 10.3811V13.6211C16.6291 15.9011 15.8991 16.6311 13.6191 16.6311H10.3791C8.09914 16.6311 7.36914 15.9011 7.36914 13.6211V10.3811C7.36914 8.10109 8.09914 7.37109 10.3791 7.37109H13.6191C15.8991 7.37109 16.6291 8.10109 16.6291 10.3811Z"
        fill="currentColor"
      />
      <Path
        d="M11.52 18.1305C11.7961 18.1305 12.0223 18.3555 12.0068 18.6312C11.899 20.5427 11.1146 21.2505 9 21.2505H5.77C3.48 21.2505 2.75 20.5205 2.75 18.2305V15.0005C2.75 12.8859 3.45773 12.1014 5.36924 11.9937C5.64494 11.9781 5.87 12.2043 5.87 12.4805V13.6205C5.87 16.7405 7.26 18.1305 10.38 18.1305H11.52Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ForwardItemBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.72937 14.9699C6.64937 14.5699 6.60938 14.1199 6.60938 13.6099V10.3799C6.60938 7.68988 7.68938 6.60986 10.3794 6.60986H13.6094C16.2994 6.60986 17.3794 7.68988 17.3794 10.3799V13.6099C17.3794 16.2999 16.2994 17.3799 13.6094 17.3799H10.3794"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.0005 5.76999V9C22.0005 11.69 20.9205 12.77 18.2305 12.77H17.3805V10.39C17.3805 7.70001 16.3005 6.62 13.6105 6.62H11.2305V5.76999C11.2305 3.07999 12.3105 2 15.0005 2H18.2305C20.9205 2 22.0005 3.07999 22.0005 5.76999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.77 17.38V18.23C12.77 20.92 11.69 22 9 22H5.77C3.08 22 2 20.92 2 18.23V15C2 12.31 3.08 11.23 5.77 11.23H6.62"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ForwardItemBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.2505 5.77V9C21.2505 11.29 20.5205 12.02 18.2305 12.02H18.1305V10.38C18.1305 7.26 16.7405 5.87 13.6205 5.87H11.9805V5.77C11.9805 3.48 12.7105 2.75 15.0005 2.75H18.2305C20.5205 2.75 21.2505 3.48 21.2505 5.77Z"
        fill="currentColor"
      />
      <Path
        d="M16.6291 10.3801V13.6201C16.6291 15.9001 15.8991 16.6301 13.6191 16.6301H10.3791C8.09914 16.6301 7.36914 15.9001 7.36914 13.6201V10.3801C7.36914 8.10013 8.09914 7.37012 10.3791 7.37012H13.6191C15.8991 7.37012 16.6291 8.10013 16.6291 10.3801Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M12.02 18.13V18.23C12.02 20.52 11.29 21.25 9 21.25H5.77C3.48 21.25 2.75 20.52 2.75 18.23V15C2.75 12.71 3.48 11.98 5.77 11.98H5.87V13.62C5.87 16.74 7.26 18.13 10.38 18.13H12.02Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ForwardItemLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.38 10.3799V13.6099C17.38 16.2999 16.3 17.3799 13.61 17.3799H10.38C7.69 17.3799 6.61 16.2999 6.61 13.6099V10.3799C6.61 7.68988 7.69 6.60986 10.38 6.60986H13.61C16.31 6.61986 17.38 7.68988 17.38 10.3799Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 5.76999V9C22 11.69 20.92 12.77 18.23 12.77H17.38V10.39C17.38 7.70001 16.3 6.62 13.61 6.62H11.23V5.76999C11.23 3.07999 12.31 2 15 2H18.23C20.92 2 22 3.07999 22 5.76999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 18.23V15C2 12.31 3.08 11.23 5.77 11.23H6.62V13.61C6.62 16.3 7.7 17.38 10.39 17.38H12.77V18.23C12.77 20.92 11.69 22 9 22H5.77C3.08 22 2 20.92 2 18.23Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ForwardItemOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.6211 18.1299H10.3911C7.26109 18.1299 5.87109 16.7399 5.87109 13.6099V10.3799C5.87109 7.24988 7.26109 5.85986 10.3911 5.85986H13.6211C16.7511 5.85986 18.1411 7.24988 18.1411 10.3799V13.6099C18.1311 16.7399 16.7411 18.1299 13.6211 18.1299ZM10.3811 7.36987C8.0911 7.36987 7.3611 8.09989 7.3611 10.3899V13.6199C7.3611 15.9099 8.0911 16.6399 10.3811 16.6399H13.6111C15.9011 16.6399 16.6311 15.9099 16.6311 13.6199V10.3899C16.6311 8.09989 15.9011 7.36987 13.6111 7.36987H10.3811Z"
        fill="currentColor"
      />
      <Path
        d="M18.2305 13.52H17.3805C16.9705 13.52 16.6305 13.18 16.6305 12.77V10.39C16.6305 8.10001 15.9005 7.37 13.6105 7.37H11.2305C10.8205 7.37 10.4805 7.02999 10.4805 6.62V5.76999C10.4805 2.63999 11.8705 1.25 15.0005 1.25H18.2305C21.3605 1.25 22.7505 2.63999 22.7505 5.76999V9C22.7505 12.13 21.3605 13.52 18.2305 13.52ZM18.1305 12.02H18.2305C20.5205 12.02 21.2505 11.29 21.2505 9V5.76999C21.2505 3.47999 20.5205 2.75 18.2305 2.75H15.0005C12.7105 2.75 11.9805 3.47999 11.9805 5.76999V5.87H13.6105C16.7405 5.87 18.1305 7.26001 18.1305 10.39V12.02Z"
        fill="currentColor"
      />
      <Path
        d="M9 22.75H5.77C2.64 22.75 1.25 21.36 1.25 18.23V15C1.25 11.87 2.64 10.48 5.77 10.48H6.62C7.03 10.48 7.37 10.82 7.37 11.23V13.61C7.37 15.9 8.1 16.63 10.39 16.63H12.77C13.18 16.63 13.52 16.97 13.52 17.38V18.23C13.52 21.36 12.13 22.75 9 22.75ZM5.77 11.98C3.48 11.98 2.75 12.71 2.75 15V18.23C2.75 20.52 3.48 21.25 5.77 21.25H9C11.29 21.25 12.02 20.52 12.02 18.23V18.13H10.39C7.26 18.13 5.87 16.74 5.87 13.61V11.98H5.77Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ForwardItemTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.3794 10.3799V13.6099C17.3794 16.2999 16.2994 17.3799 13.6094 17.3799H10.3794C7.68938 17.3799 6.60938 16.2999 6.60938 13.6099V10.3799C6.60938 7.68988 7.68938 6.60986 10.3794 6.60986H13.6094C16.3094 6.61986 17.3794 7.68988 17.3794 10.3799Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22.0005 5.76999V9C22.0005 11.69 20.9205 12.77 18.2305 12.77H17.3805V10.39C17.3805 7.70001 16.3005 6.62 13.6105 6.62H11.2305V5.76999C11.2305 3.07999 12.3105 2 15.0005 2H18.2305C20.9205 2 22.0005 3.07999 22.0005 5.76999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2 18.23V15C2 12.31 3.08 11.23 5.77 11.23H6.62V13.61C6.62 16.3 7.7 17.38 10.39 17.38H12.77V18.23C12.77 20.92 11.69 22 9 22H5.77C3.08 22 2 20.92 2 18.23Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ForwardItemBold,
  broken: ForwardItemBroken,
  bulk: ForwardItemBulk,
  linear: ForwardItemLinear,
  outline: ForwardItemOutline,
  twotone: ForwardItemTwotone,
};

export const ForwardItemIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
