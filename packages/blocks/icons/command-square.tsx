import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const CommandSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.6 16.2C9.6 17.19 8.79 18 7.8 18C6.81 18 6 17.19 6 16.2C6 15.21 6.81 14.4 7.8 14.4H8.6C9.15 14.4 9.6 14.85 9.6 15.4V16.2ZM9.6 8.6C9.6 9.15 9.15 9.6 8.6 9.6H7.8C6.81 9.6 6 8.79 6 7.8C6 6.81 6.81 6 7.8 6C8.79 6 9.6 6.81 9.6 7.8V8.6ZM14.15 13.25C14.15 13.74 13.75 14.15 13.25 14.15H10.74C10.25 14.15 9.84 13.75 9.84 13.25V10.74C9.84 10.25 10.24 9.84 10.74 9.84H13.25C13.74 9.84 14.15 10.24 14.15 10.74V13.25ZM16.2 18C15.21 18 14.4 17.19 14.4 16.2V15.4C14.4 14.85 14.85 14.4 15.4 14.4H16.2C17.19 14.4 18 15.21 18 16.2C18 17.19 17.19 18 16.2 18ZM16.2 9.6H15.4C14.85 9.6 14.4 9.15 14.4 8.6V7.8C14.4 6.81 15.21 6 16.2 6C17.19 6 18 6.81 18 7.8C18 8.79 17.19 9.6 16.2 9.6Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CommandSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13.02V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.3997 9.6001H9.59961V14.4001H14.3997V9.6001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.79999 17.9999C8.78999 17.9999 9.59998 17.1899 9.59998 16.1999V14.3999H7.79999C6.80999 14.3999 6 15.2099 6 16.1999C6 17.1899 6.80999 17.9999 7.79999 17.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.79999 9.60001H9.59998V7.79999C9.59998 6.80999 8.78999 6 7.79999 6C6.80999 6 6 6.80999 6 7.79999C6 8.78999 6.80999 9.60001 7.79999 9.60001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.4004 9.60001H16.2004C17.1904 9.60001 18.0004 8.78999 18.0004 7.79999C18.0004 6.80999 17.1904 6 16.2004 6C15.2104 6 14.4004 6.80999 14.4004 7.79999V9.60001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.2004 17.9999C17.1904 17.9999 18.0004 17.1899 18.0004 16.1999C18.0004 15.2099 17.1904 14.3999 16.2004 14.3999H14.4004V16.1999C14.4004 17.1899 15.2104 17.9999 16.2004 17.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CommandSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
        fill="currentColor"
      />
      <Path
        d="M10.7496 14.1498H13.2596C13.7496 14.1498 14.1596 13.7498 14.1596 13.2498V10.7398C14.1596 10.2498 13.7596 9.83984 13.2596 9.83984H10.7496C10.2596 9.83984 9.84961 10.2398 9.84961 10.7398V13.2498C9.84961 13.7498 10.2496 14.1498 10.7496 14.1498Z"
        fill="currentColor"
      />
      <Path
        d="M7.79999 17.9999C8.78999 17.9999 9.59998 17.1899 9.59998 16.1999V15.3999C9.59998 14.8499 9.14998 14.3999 8.59998 14.3999H7.79999C6.80999 14.3999 6 15.2099 6 16.1999C6 17.1899 6.80999 17.9999 7.79999 17.9999Z"
        fill="currentColor"
      />
      <Path
        d="M7.79999 9.60001H8.59998C9.14998 9.60001 9.59998 9.15001 9.59998 8.60001V7.79999C9.59998 6.80999 8.78999 6 7.79999 6C6.80999 6 6 6.80999 6 7.79999C6 8.78999 6.80999 9.60001 7.79999 9.60001Z"
        fill="currentColor"
      />
      <Path
        d="M15.4004 9.60001H16.2004C17.1904 9.60001 18.0004 8.78999 18.0004 7.79999C18.0004 6.80999 17.1904 6 16.2004 6C15.2104 6 14.4004 6.80999 14.4004 7.79999V8.60001C14.4004 9.15001 14.8504 9.60001 15.4004 9.60001Z"
        fill="currentColor"
      />
      <Path
        d="M16.2004 17.9999C17.1904 17.9999 18.0004 17.1899 18.0004 16.1999C18.0004 15.2099 17.1904 14.3999 16.2004 14.3999H15.4004C14.8504 14.3999 14.4004 14.8499 14.4004 15.3999V16.1999C14.4004 17.1899 15.2104 17.9999 16.2004 17.9999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CommandSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.4 9.6001H9.59998V14.4001H14.4V9.6001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.79999 17.9999C8.78999 17.9999 9.59998 17.1899 9.59998 16.1999V14.3999H7.79999C6.80999 14.3999 6 15.2099 6 16.1999C6 17.1899 6.80999 17.9999 7.79999 17.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.79999 9.60001H9.59998V7.79999C9.59998 6.80999 8.78999 6 7.79999 6C6.80999 6 6 6.80999 6 7.79999C6 8.78999 6.80999 9.60001 7.79999 9.60001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.4 9.60001H16.2C17.19 9.60001 18 8.78999 18 7.79999C18 6.80999 17.19 6 16.2 6C15.21 6 14.4 6.80999 14.4 7.79999V9.60001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.2 17.9999C17.19 17.9999 18 17.1899 18 16.1999C18 15.2099 17.19 14.3999 16.2 14.3999H14.4V16.1999C14.4 17.1899 15.21 17.9999 16.2 17.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CommandSquareOutline = ({
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
        d="M14.3997 15.1501H9.59961C9.18961 15.1501 8.84961 14.8101 8.84961 14.4001V9.6001C8.84961 9.1901 9.18961 8.8501 9.59961 8.8501H14.3997C14.8097 8.8501 15.1497 9.1901 15.1497 9.6001V14.4001C15.1497 14.8101 14.8097 15.1501 14.3997 15.1501ZM10.3496 13.6501H13.6497V10.3501H10.3496V13.6501Z"
        fill="currentColor"
      />
      <Path
        d="M7.79999 18.7499C6.38999 18.7499 5.25 17.6099 5.25 16.1999C5.25 14.7899 6.38999 13.6499 7.79999 13.6499H9.59998C10.01 13.6499 10.35 13.9899 10.35 14.3999V16.1999C10.35 17.6099 9.20999 18.7499 7.79999 18.7499ZM7.79999 15.1499C7.21999 15.1499 6.75 15.6199 6.75 16.1999C6.75 16.7799 7.21999 17.2499 7.79999 17.2499C8.37999 17.2499 8.84998 16.7799 8.84998 16.1999V15.1499H7.79999Z"
        fill="currentColor"
      />
      <Path
        d="M9.59998 10.35H7.79999C6.38999 10.35 5.25 9.20999 5.25 7.79999C5.25 6.38999 6.38999 5.25 7.79999 5.25C9.20999 5.25 10.35 6.38999 10.35 7.79999V9.60001C10.35 10.01 10.01 10.35 9.59998 10.35ZM7.79999 6.75C7.21999 6.75 6.75 7.21999 6.75 7.79999C6.75 8.37999 7.21999 8.85001 7.79999 8.85001H8.84998V7.79999C8.84998 7.21999 8.37999 6.75 7.79999 6.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.2004 10.35H14.4004C13.9904 10.35 13.6504 10.01 13.6504 9.60001V7.79999C13.6504 6.38999 14.7904 5.25 16.2004 5.25C17.6104 5.25 18.7504 6.38999 18.7504 7.79999C18.7504 9.20999 17.6104 10.35 16.2004 10.35ZM15.1504 8.85001H16.2004C16.7804 8.85001 17.2504 8.37999 17.2504 7.79999C17.2504 7.21999 16.7804 6.75 16.2004 6.75C15.6204 6.75 15.1504 7.21999 15.1504 7.79999V8.85001Z"
        fill="currentColor"
      />
      <Path
        d="M16.2004 18.7499C14.7904 18.7499 13.6504 17.6099 13.6504 16.1999V14.3999C13.6504 13.9899 13.9904 13.6499 14.4004 13.6499H16.2004C17.6104 13.6499 18.7504 14.7899 18.7504 16.1999C18.7504 17.6099 17.6104 18.7499 16.2004 18.7499ZM15.1504 15.1499V16.1999C15.1504 16.7799 15.6204 17.2499 16.2004 17.2499C16.7804 17.2499 17.2504 16.7799 17.2504 16.1999C17.2504 15.6199 16.7804 15.1499 16.2004 15.1499H15.1504Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CommandSquareTwotone = ({
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
      <G opacity="0.4">
        <Path
          d="M14.3997 9.6001H9.59961V14.4001H14.3997V9.6001Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.79999 17.9999C8.78999 17.9999 9.59998 17.1899 9.59998 16.1999V14.3999H7.79999C6.80999 14.3999 6 15.2099 6 16.1999C6 17.1899 6.80999 17.9999 7.79999 17.9999Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.79999 9.60001H9.59998V7.79999C9.59998 6.80999 8.78999 6 7.79999 6C6.80999 6 6 6.80999 6 7.79999C6 8.78999 6.80999 9.60001 7.79999 9.60001Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.4004 9.60001H16.2004C17.1904 9.60001 18.0004 8.78999 18.0004 7.79999C18.0004 6.80999 17.1904 6 16.2004 6C15.2104 6 14.4004 6.80999 14.4004 7.79999V9.60001Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.2004 17.9999C17.1904 17.9999 18.0004 17.1899 18.0004 16.1999C18.0004 15.2099 17.1904 14.3999 16.2004 14.3999H14.4004V16.1999C14.4004 17.1899 15.2104 17.9999 16.2004 17.9999Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: CommandSquareBold,
  broken: CommandSquareBroken,
  bulk: CommandSquareBulk,
  linear: CommandSquareLinear,
  outline: CommandSquareOutline,
  twotone: CommandSquareTwotone,
};

export const CommandSquareIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
