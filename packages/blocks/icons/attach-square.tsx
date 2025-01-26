import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const AttachSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.37 14.35L14.15 16.57C13.61 17.11 12.91 17.37 12.21 17.37C11.51 17.37 10.8 17.1 10.27 16.57C9.75 16.05 9.46 15.36 9.46 14.63C9.46 13.9 9.75 13.2 10.27 12.69L11.68 11.28C11.97 10.99 12.45 10.99 12.74 11.28C13.03 11.57 13.03 12.05 12.74 12.34L11.33 13.75C11.09 13.99 10.96 14.3 10.96 14.63C10.96 14.96 11.09 15.28 11.33 15.51C11.82 16 12.61 16 13.1 15.51L15.32 13.29C16.59 12.02 16.59 9.96 15.32 8.69C14.05 7.42 11.99 7.42 10.72 8.69L8.3 11.11C7.79 11.62 7.51 12.29 7.51 13C7.51 13.71 7.79 14.39 8.3 14.89C8.59 15.18 8.59 15.66 8.3 15.95C8.01 16.24 7.53 16.24 7.24 15.95C6.44 15.18 6 14.13 6 13.01C6 11.89 6.43 10.84 7.22 10.05L9.64 7.63C11.49 5.78 14.51 5.78 16.36 7.63C18.22 9.48 18.22 12.5 16.37 14.35Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AttachSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.2009 11.8L10.7908 13.21C10.0108 13.99 10.0108 15.26 10.7908 16.04C11.5708 16.82 12.8408 16.82 13.6208 16.04L15.8409 13.82C17.4009 12.26 17.4009 9.72999 15.8409 8.15999C14.2809 6.59999 11.7508 6.59999 10.1808 8.15999L7.76086 10.58C6.42086 11.92 6.42086 14.09 7.76086 15.43"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const AttachSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.1998 17.3799C11.4998 17.3799 10.7898 17.1099 10.2598 16.5799C9.73977 16.0599 9.44977 15.3699 9.44977 14.6399C9.44977 13.9099 9.73977 13.2099 10.2598 12.6999L11.6697 11.2899C11.9597 10.9999 12.4397 10.9999 12.7297 11.2899C13.0197 11.5799 13.0197 12.0599 12.7297 12.3499L11.3198 13.7599C11.0798 13.9999 10.9498 14.3099 10.9498 14.6399C10.9498 14.9699 11.0798 15.2899 11.3198 15.5199C11.8098 16.0099 12.5998 16.0099 13.0898 15.5199L15.3098 13.2999C16.5798 12.0299 16.5798 9.96994 15.3098 8.69994C14.0398 7.42994 11.9798 7.42994 10.7098 8.69994L8.28973 11.1199C7.77973 11.6299 7.49976 12.2999 7.49976 13.0099C7.49976 13.7199 7.77973 14.3999 8.28973 14.8999C8.57973 15.1899 8.57973 15.6699 8.28973 15.9599C7.99973 16.2499 7.51974 16.2499 7.22974 15.9599C6.43974 15.1699 6.00977 14.1199 6.00977 12.9999C6.00977 11.8799 6.43974 10.8299 7.22974 10.0399L9.64978 7.61992C11.4998 5.76992 14.5198 5.76992 16.3698 7.61992C18.2198 9.46992 18.2198 12.4899 16.3698 14.3399L14.1498 16.5599C13.6098 17.1099 12.9098 17.3799 12.1998 17.3799Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AttachSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.1999 11.8L10.7899 13.21C10.0099 13.99 10.0099 15.26 10.7899 16.04C11.5699 16.82 12.8399 16.82 13.6199 16.04L15.8399 13.82C17.3999 12.26 17.3999 9.72999 15.8399 8.15999C14.2799 6.59999 11.7499 6.59999 10.1799 8.15999L7.75988 10.58C6.41988 11.92 6.41988 14.09 7.75988 15.43"
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

const AttachSquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.1998 17.3799C11.4998 17.3799 10.7898 17.1099 10.2598 16.5799C9.73977 16.0599 9.44977 15.3699 9.44977 14.6399C9.44977 13.9099 9.73977 13.2099 10.2598 12.6999L11.6697 11.2899C11.9597 10.9999 12.4397 10.9999 12.7297 11.2899C13.0197 11.5799 13.0197 12.0599 12.7297 12.3499L11.3198 13.7599C11.0798 13.9999 10.9498 14.3099 10.9498 14.6399C10.9498 14.9699 11.0798 15.2899 11.3198 15.5199C11.8098 16.0099 12.5998 16.0099 13.0898 15.5199L15.3098 13.2999C16.5798 12.0299 16.5798 9.96994 15.3098 8.69994C14.0398 7.42994 11.9798 7.42994 10.7098 8.69994L8.28973 11.1199C7.77973 11.6299 7.49976 12.2999 7.49976 13.0099C7.49976 13.7199 7.77973 14.3999 8.28973 14.8999C8.57973 15.1899 8.57973 15.6699 8.28973 15.9599C7.99973 16.2499 7.51974 16.2499 7.22974 15.9599C6.43974 15.1699 6.00977 14.1199 6.00977 12.9999C6.00977 11.8799 6.43974 10.8299 7.22974 10.0399L9.64978 7.61992C11.4998 5.76992 14.5198 5.76992 16.3698 7.61992C18.2198 9.46992 18.2198 12.4899 16.3698 14.3399L14.1498 16.5599C13.6098 17.1099 12.9098 17.3799 12.1998 17.3799Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AttachSquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.2009 11.8002L10.7908 13.2102C10.0108 13.9902 10.0108 15.2602 10.7908 16.0402C11.5708 16.8202 12.8408 16.8202 13.6208 16.0402L15.8409 13.8202C17.4009 12.2602 17.4009 9.73023 15.8409 8.16023C14.2809 6.60023 11.7508 6.60023 10.1808 8.16023L7.76086 10.5802C6.42086 11.9202 6.42086 14.0902 7.76086 15.4302"
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

const variants: IconVariants = {
  bold: AttachSquareBold,
  broken: AttachSquareBroken,
  bulk: AttachSquareBulk,
  linear: AttachSquareLinear,
  outline: AttachSquareOutline,
  twotone: AttachSquareTwotone,
};

export const AttachSquareIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
