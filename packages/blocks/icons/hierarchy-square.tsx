import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const HierarchySquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.85 16.45C9.85 17.58 8.93 18.5 7.8 18.5C6.67 18.5 5.75 17.58 5.75 16.45C5.75 15.58 6.29 14.85 7.05 14.55V10.26C6.21 9.95 5.6 9.15 5.6 8.2C5.6 6.99 6.59 6 7.8 6C9.01 6 10 6.99 10 8.2C10 9.15 9.39 9.95 8.55 10.26V14.55C9.31 14.85 9.85 15.59 9.85 16.45ZM16.75 18.5C15.62 18.5 14.7 17.58 14.7 16.45C14.7 15.58 15.24 14.85 16 14.55V8.75C16 8.61 15.89 8.5 15.75 8.5H14.62L14.83 8.67C15.15 8.94 15.19 9.41 14.93 9.73C14.78 9.91 14.56 10 14.35 10C14.18 10 14.01 9.94 13.87 9.83L12.07 8.33C11.9 8.18 11.8 7.97 11.8 7.75C11.8 7.53 11.9 7.32 12.07 7.17L13.87 5.67C14.19 5.41 14.66 5.45 14.93 5.77C15.2 6.09 15.15 6.56 14.83 6.83L14.62 7H15.75C16.71 7 17.5 7.79 17.5 8.75V14.55C18.26 14.85 18.8 15.59 18.8 16.45C18.8 17.58 17.88 18.5 16.75 18.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HierarchySquareBroken = ({
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
        d="M2 13.02V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.4508 14.4V8.5C16.4508 7.95 16.0008 7.5 15.4508 7.5H12.5508"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.05 6L12.25 7.5L14.05 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.55078 10.2V14.3999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.70001 9.89999C8.77697 9.89999 9.65002 9.02697 9.65002 7.95001C9.65002 6.87306 8.77697 6 7.70001 6C6.62306 6 5.75 6.87306 5.75 7.95001C5.75 9.02697 6.62306 9.89999 7.70001 9.89999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.54999 17.9999C8.5441 17.9999 9.34998 17.194 9.34998 16.1999C9.34998 15.2058 8.5441 14.3999 7.54999 14.3999C6.55588 14.3999 5.75 15.2058 5.75 16.1999C5.75 17.194 6.55588 17.9999 7.54999 17.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.4504 17.9999C17.4445 17.9999 18.2504 17.194 18.2504 16.1999C18.2504 15.2058 17.4445 14.3999 16.4504 14.3999C15.4563 14.3999 14.6504 15.2058 14.6504 16.1999C14.6504 17.194 15.4563 17.9999 16.4504 17.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HierarchySquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.54962 14.55V10.26C9.38962 9.95001 9.99963 9.15001 9.99963 8.20001C9.99963 6.99001 9.00962 6 7.79962 6C6.58962 6 5.59961 6.99001 5.59961 8.20001C5.59961 9.15001 6.20962 9.95001 7.04962 10.26V14.55C6.28962 14.85 5.74963 15.59 5.74963 16.45C5.74963 17.58 6.66962 18.5 7.79962 18.5C8.92962 18.5 9.84961 17.58 9.84961 16.45C9.84961 15.59 9.30962 14.85 8.54962 14.55Z"
        fill="currentColor"
      />
      <Path
        d="M17.4988 14.5502V8.75017C17.4988 7.79017 16.7088 7.00017 15.7488 7.00017H14.6188L14.8289 6.83016C15.1489 6.56016 15.1888 6.09016 14.9288 5.77016C14.6588 5.45016 14.1888 5.41019 13.8688 5.67019L12.0688 7.17019C11.8988 7.31019 11.7988 7.52017 11.7988 7.75017C11.7988 7.98017 11.8988 8.18016 12.0688 8.33016L13.8688 9.83016C14.0088 9.95016 14.1788 10.0002 14.3488 10.0002C14.5588 10.0002 14.7788 9.91018 14.9288 9.73018C15.1988 9.41018 15.1489 8.94019 14.8289 8.67019L14.6188 8.50017H15.7488C15.8888 8.50017 15.9988 8.61017 15.9988 8.75017V14.5502C15.2388 14.8502 14.6989 15.5902 14.6989 16.4502C14.6989 17.5802 15.6188 18.5002 16.7488 18.5002C17.8788 18.5002 18.7988 17.5802 18.7988 16.4502C18.7988 15.5902 18.2588 14.8502 17.4988 14.5502Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HierarchySquareLinear = ({
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
        d="M16.4501 14.4V8.5C16.4501 7.95 16.0001 7.5 15.4501 7.5H12.55"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.05 6L12.25 7.5L14.05 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.55005 10.2V14.3999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.70001 9.89999C8.77697 9.89999 9.65002 9.02697 9.65002 7.95001C9.65002 6.87306 8.77697 6 7.70001 6C6.62306 6 5.75 6.87306 5.75 7.95001C5.75 9.02697 6.62306 9.89999 7.70001 9.89999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.54999 17.9999C8.5441 17.9999 9.34998 17.194 9.34998 16.1999C9.34998 15.2058 8.5441 14.3999 7.54999 14.3999C6.55588 14.3999 5.75 15.2058 5.75 16.1999C5.75 17.194 6.55588 17.9999 7.54999 17.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.45 17.9999C17.4441 17.9999 18.25 17.194 18.25 16.1999C18.25 15.2058 17.4441 14.3999 16.45 14.3999C15.4559 14.3999 14.65 15.2058 14.65 16.1999C14.65 17.194 15.4559 17.9999 16.45 17.9999Z"
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

const HierarchySquareOutline = ({
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
        d="M16.4508 15.15C16.0408 15.15 15.7008 14.81 15.7008 14.4V8.5C15.7008 8.36 15.5908 8.25 15.4508 8.25H12.5508C12.1408 8.25 11.8008 7.91 11.8008 7.5C11.8008 7.09 12.1408 6.75 12.5508 6.75H15.4508C16.4108 6.75 17.2008 7.54 17.2008 8.5V14.4C17.2008 14.81 16.8608 15.15 16.4508 15.15Z"
        fill="currentColor"
      />
      <Path
        d="M14.05 9.75017C13.88 9.75017 13.71 9.69016 13.57 9.58016L11.77 8.08016C11.6 7.94016 11.5 7.73017 11.5 7.50017C11.5 7.27017 11.6 7.07019 11.77 6.92019L13.57 5.42019C13.89 5.16019 14.36 5.20016 14.63 5.52016C14.9 5.84016 14.85 6.31016 14.53 6.58016L13.42 7.50017L14.53 8.42019C14.85 8.69019 14.89 9.16018 14.63 9.48018C14.48 9.66018 14.26 9.75017 14.05 9.75017Z"
        fill="currentColor"
      />
      <Path
        d="M7.55078 15.1502C7.14078 15.1502 6.80078 14.8102 6.80078 14.4002V10.2002C6.80078 9.7902 7.14078 9.4502 7.55078 9.4502C7.96078 9.4502 8.30078 9.7902 8.30078 10.2002V14.4002C8.30078 14.8102 7.96078 15.1502 7.55078 15.1502Z"
        fill="currentColor"
      />
      <Path
        d="M7.70001 10.65C6.21001 10.65 5 9.44001 5 7.95001C5 6.46001 6.21001 5.25 7.70001 5.25C9.19001 5.25 10.4 6.46001 10.4 7.95001C10.4 9.44001 9.19001 10.65 7.70001 10.65ZM7.70001 6.75C7.04001 6.75 6.5 7.29001 6.5 7.95001C6.5 8.61001 7.04001 9.14999 7.70001 9.14999C8.36001 9.14999 8.90002 8.61001 8.90002 7.95001C8.90002 7.29001 8.36001 6.75 7.70001 6.75Z"
        fill="currentColor"
      />
      <Path
        d="M7.54999 18.7499C6.13999 18.7499 5 17.6099 5 16.1999C5 14.7899 6.13999 13.6499 7.54999 13.6499C8.95999 13.6499 10.1 14.7899 10.1 16.1999C10.1 17.6099 8.95999 18.7499 7.54999 18.7499ZM7.54999 15.1499C6.96999 15.1499 6.5 15.6199 6.5 16.1999C6.5 16.7799 6.96999 17.2499 7.54999 17.2499C8.12999 17.2499 8.59998 16.7799 8.59998 16.1999C8.59998 15.6199 8.12999 15.1499 7.54999 15.1499Z"
        fill="currentColor"
      />
      <Path
        d="M16.4504 18.7499C15.0404 18.7499 13.9004 17.6099 13.9004 16.1999C13.9004 14.7899 15.0404 13.6499 16.4504 13.6499C17.8604 13.6499 19.0004 14.7899 19.0004 16.1999C19.0004 17.6099 17.8604 18.7499 16.4504 18.7499ZM16.4504 15.1499C15.8704 15.1499 15.4004 15.6199 15.4004 16.1999C15.4004 16.7799 15.8704 17.2499 16.4504 17.2499C17.0304 17.2499 17.5004 16.7799 17.5004 16.1999C17.5004 15.6199 17.0304 15.1499 16.4504 15.1499Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HierarchySquareTwotone = ({
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
          d="M16.4508 14.4V8.5C16.4508 7.95 16.0008 7.5 15.4508 7.5H12.5508"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.05 6L12.25 7.5L14.05 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.55078 10.2002V14.4002"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.70001 9.89999C8.77697 9.89999 9.65002 9.02697 9.65002 7.95001C9.65002 6.87306 8.77697 6 7.70001 6C6.62306 6 5.75 6.87306 5.75 7.95001C5.75 9.02697 6.62306 9.89999 7.70001 9.89999Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.54999 17.9999C8.5441 17.9999 9.34998 17.194 9.34998 16.1999C9.34998 15.2058 8.5441 14.3999 7.54999 14.3999C6.55588 14.3999 5.75 15.2058 5.75 16.1999C5.75 17.194 6.55588 17.9999 7.54999 17.9999Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.4504 17.9999C17.4445 17.9999 18.2504 17.194 18.2504 16.1999C18.2504 15.2058 17.4445 14.3999 16.4504 14.3999C15.4563 14.3999 14.6504 15.2058 14.6504 16.1999C14.6504 17.194 15.4563 17.9999 16.4504 17.9999Z"
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
  bold: HierarchySquareBold,
  broken: HierarchySquareBroken,
  bulk: HierarchySquareBulk,
  linear: HierarchySquareLinear,
  outline: HierarchySquareOutline,
  twotone: HierarchySquareTwotone,
};

export const HierarchySquareIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
