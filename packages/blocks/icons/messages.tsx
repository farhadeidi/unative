import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const MessagesBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9989 12.8595C21.9989 15.1495 20.8189 17.1795 18.9989 18.4595L17.6589 21.4095C17.3489 22.0795 16.4489 22.2095 15.9789 21.6395L14.4989 19.8595C12.6389 19.8595 10.9289 19.2295 9.62891 18.1795L10.2289 17.4695C14.8489 17.1195 18.4989 13.4595 18.4989 8.99953C18.4989 8.23953 18.3889 7.48953 18.1889 6.76953C20.4589 7.96953 21.9989 10.2495 21.9989 12.8595Z"
        fill="currentColor"
      />
      <Path
        d="M16.3 6.07C15.13 3.67 12.52 2 9.5 2C5.36 2 2 5.13 2 9C2 11.29 3.18 13.32 5 14.6L6.34 17.55C6.65 18.22 7.55 18.34 8.02 17.78L8.57 17.12L9.5 16C13.64 16 17 12.87 17 9C17 7.95 16.75 6.96 16.3 6.07ZM12 9.75H7C6.59 9.75 6.25 9.41 6.25 9C6.25 8.59 6.59 8.25 7 8.25H12C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessagesBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.5 2C12.52 2 15.13 3.67001 16.3 6.07001C16.75 6.96001 17 7.95 17 9C17 12.87 13.64 16 9.5 16L8.57001 17.12L8.02 17.78C7.55 18.34 6.65 18.22 6.34 17.55L5 14.6C3.18 13.32 2 11.29 2 9C2 6.73 3.15 4.72 4.95 3.44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.0003 12.86C22.0003 15.15 20.8203 17.1801 19.0003 18.4601L17.6603 21.41C17.3503 22.08 16.4503 22.2101 15.9803 21.6401L14.5003 19.86C12.0803 19.86 9.92031 18.7901 8.57031 17.1201L9.50031 16.0001C13.6403 16.0001 17.0003 12.8701 17.0003 9.00006C17.0003 7.95006 16.7503 6.96007 16.3003 6.07007C17.9303 6.44007 19.3403 7.31006 20.3603 8.50006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 9H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessagesBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 9C17 12.87 13.64 16 9.5 16L8.57001 17.12L8.02 17.78C7.55 18.34 6.65 18.22 6.34 17.55L5 14.6C3.18 13.32 2 11.29 2 9C2 5.13 5.36 2 9.5 2C12.52 2 15.13 3.67001 16.3 6.07001C16.75 6.96001 17 7.95 17 9Z"
        fill="currentColor"
      />
      <Path
        d="M22.0003 12.8598C22.0003 15.1498 20.8203 17.1798 19.0003 18.4598L17.6603 21.4098C17.3503 22.0798 16.4503 22.2098 15.9803 21.6398L14.5003 19.8598C12.0803 19.8598 9.92031 18.7898 8.57031 17.1198L9.50031 15.9998C13.6403 15.9998 17.0003 12.8698 17.0003 8.99982C17.0003 7.94982 16.7503 6.95982 16.3003 6.06982C19.5703 6.81982 22.0003 9.5798 22.0003 12.8598Z"
        fill="currentColor"
      />
      <Path
        d="M12 9.75H7C6.59 9.75 6.25 9.41 6.25 9C6.25 8.59 6.59 8.25 7 8.25H12C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessagesLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 9C17 12.87 13.64 16 9.5 16L8.57001 17.12L8.02 17.78C7.55 18.34 6.65 18.22 6.34 17.55L5 14.6C3.18 13.32 2 11.29 2 9C2 5.13 5.36 2 9.5 2C12.52 2 15.13 3.67001 16.3 6.07001C16.75 6.96001 17 7.95 17 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12.86C22 15.15 20.82 17.1801 19 18.4601L17.66 21.41C17.35 22.08 16.45 22.2101 15.98 21.6401L14.5 19.86C12.08 19.86 9.92001 18.7901 8.57001 17.1201L9.5 16.0001C13.64 16.0001 17 12.8701 17 9.00006C17 7.95006 16.75 6.96007 16.3 6.07007C19.57 6.82007 22 9.58005 22 12.86Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 9H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessagesOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.98999 22.78C9.38999 22.78 8.81999 22.48 8.42999 21.95L7.23001 20.35C7.23001 20.36 7.18 20.33 7.16 20.33H6.79001C3.37001 20.33 1.25 19.4 1.25 14.79V10.79C1.25 6.58001 3.82001 5.48001 5.98001 5.29001C6.22001 5.26001 6.50001 5.25 6.79001 5.25H13.19C16.81 5.25 18.73 7.17001 18.73 10.79V14.79C18.73 15.08 18.72 15.36 18.68 15.63C18.5 17.76 17.4 20.33 13.19 20.33H12.79L11.55 21.95C11.16 22.48 10.59 22.78 9.98999 22.78ZM6.79001 6.75C6.56001 6.75 6.34 6.76 6.13 6.78C3.81 6.98 2.75 8.25001 2.75 10.79V14.79C2.75 18.22 3.81001 18.83 6.79001 18.83H7.19C7.64 18.83 8.14999 19.08 8.42999 19.44L9.63 21.05C9.85001 21.35 10.13 21.35 10.35 21.05L11.55 19.45C11.84 19.06 12.3 18.83 12.79 18.83H13.19C15.73 18.83 17 17.76 17.19 15.48C17.22 15.24 17.23 15.02 17.23 14.79V10.79C17.23 8.00001 15.98 6.75 13.19 6.75H6.79001Z"
        fill="currentColor"
      />
      <Path
        d="M9.99023 14.1899C9.43023 14.1899 8.99023 13.7399 8.99023 13.1899C8.99023 12.6399 9.44023 12.1899 9.99023 12.1899C10.5402 12.1899 10.9902 12.6399 10.9902 13.1899C10.9902 13.7399 10.5502 14.1899 9.99023 14.1899Z"
        fill="currentColor"
      />
      <Path
        d="M13.1895 14.1899C12.6295 14.1899 12.1895 13.7399 12.1895 13.1899C12.1895 12.6399 12.6395 12.1899 13.1895 12.1899C13.7395 12.1899 14.1895 12.6399 14.1895 13.1899C14.1895 13.7399 13.7395 14.1899 13.1895 14.1899Z"
        fill="currentColor"
      />
      <Path
        d="M6.80078 14.1899C6.24078 14.1899 5.80078 13.7399 5.80078 13.1899C5.80078 12.6399 6.25078 12.1899 6.80078 12.1899C7.35078 12.1899 7.80078 12.6399 7.80078 13.1899C7.80078 13.7399 7.35078 14.1899 6.80078 14.1899Z"
        fill="currentColor"
      />
      <Path
        d="M17.9396 16.29C17.7396 16.29 17.5396 16.21 17.3996 16.06C17.2396 15.9 17.1697 15.67 17.1997 15.45C17.2297 15.24 17.2396 15.02 17.2396 14.79V10.79C17.2396 8.00001 15.9897 6.75 13.1997 6.75H6.79963C6.56963 6.75 6.34966 6.76 6.13966 6.78C5.91966 6.81 5.68964 6.72999 5.52964 6.57999C5.36964 6.41999 5.27963 6.20001 5.29963 5.98001C5.47963 3.82001 6.58963 1.25 10.7996 1.25H17.1997C20.8197 1.25 22.7396 3.17001 22.7396 6.79001V10.79C22.7396 15 20.1697 16.1 18.0097 16.29C17.9797 16.29 17.9596 16.29 17.9396 16.29ZM6.91966 5.25H13.1896C16.8096 5.25 18.7297 7.17001 18.7297 10.79V14.66C20.4297 14.24 21.2297 12.99 21.2297 10.79V6.79001C21.2297 4.00001 19.9796 2.75 17.1896 2.75H10.7897C8.58965 2.75 7.34966 3.55 6.91966 5.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessagesTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 9C17 12.87 13.64 16 9.5 16L8.57001 17.12L8.02 17.78C7.55 18.34 6.65 18.22 6.34 17.55L5 14.6C3.18 13.32 2 11.29 2 9C2 5.13 5.36 2 9.5 2C12.52 2 15.13 3.67001 16.3 6.07001C16.75 6.96001 17 7.95 17 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22.0003 12.8598C22.0003 15.1498 20.8203 17.1798 19.0003 18.4598L17.6603 21.4098C17.3503 22.0798 16.4503 22.2098 15.9803 21.6398L14.5003 19.8598C12.0803 19.8598 9.92031 18.7898 8.57031 17.1198L9.50031 15.9998C13.6403 15.9998 17.0003 12.8698 17.0003 8.99982C17.0003 7.94982 16.7503 6.95982 16.3003 6.06982C19.5703 6.81982 22.0003 9.5798 22.0003 12.8598Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7 9H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MessagesBold,
  broken: MessagesBroken,
  bulk: MessagesBulk,
  linear: MessagesLinear,
  outline: MessagesOutline,
  twotone: MessagesTwotone,
};

export const MessagesIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
