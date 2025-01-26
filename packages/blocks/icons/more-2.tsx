import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const More2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        opacity="0.97"
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.31 16.31C7.59 16.31 7 15.72 7 15C7 14.28 7.59 13.69 8.31 13.69C9.03 13.69 9.62 14.28 9.62 15C9.62 15.72 9.03 16.31 8.31 16.31ZM12 10.31C11.28 10.31 10.69 9.72 10.69 9C10.69 8.28 11.28 7.69 12 7.69C12.72 7.69 13.31 8.28 13.31 9C13.31 9.72 12.72 10.31 12 10.31ZM15.69 16.31C14.97 16.31 14.38 15.72 14.38 15C14.38 14.28 14.97 13.69 15.69 13.69C16.41 13.69 17 14.28 17 15C17 15.72 16.41 16.31 15.69 16.31Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const More2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.83984 7.16C9.83984 8.35 10.8098 9.32 11.9998 9.32C13.1898 9.32 14.1598 8.35 14.1598 7.16C14.1598 5.97 13.1898 5 11.9998 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.79086 18.9999C7.98086 18.9999 8.95086 18.0299 8.95086 16.8399C8.95086 15.6499 7.98086 14.6799 6.79086 14.6799C5.60086 14.6799 4.63086 15.6499 4.63086 16.8399C4.63086 18.0299 5.59086 18.9999 6.79086 18.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.2108 18.9999C18.4008 18.9999 19.3708 18.0299 19.3708 16.8399C19.3708 15.6499 18.4008 14.6799 17.2108 14.6799C16.0208 14.6799 15.0508 15.6499 15.0508 16.8399C15.0508 18.0299 16.0208 18.9999 17.2108 18.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const More2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <Path
        opacity="0.97"
        d="M11.9995 10.3099C12.7229 10.3099 13.3095 9.72343 13.3095 8.99994C13.3095 8.27645 12.7229 7.68994 11.9995 7.68994C11.276 7.68994 10.6895 8.27645 10.6895 8.99994C10.6895 9.72343 11.276 10.3099 11.9995 10.3099Z"
        fill="currentColor"
      />
      <Path
        opacity="0.97"
        d="M8.31 13.6899C7.59 13.6899 7 14.2799 7 14.9999C7 15.7199 7.59 16.3099 8.31 16.3099C9.03 16.3099 9.62 15.7199 9.62 14.9999C9.62 14.2799 9.03 13.6899 8.31 13.6899Z"
        fill="currentColor"
      />
      <Path
        opacity="0.97"
        d="M15.6909 13.6899C14.9709 13.6899 14.3809 14.2799 14.3809 14.9999C14.3809 15.7199 14.9709 16.3099 15.6909 16.3099C16.4109 16.3099 17.0009 15.7199 17.0009 14.9999C17.0009 14.2799 16.4109 13.6899 15.6909 13.6899Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const More2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0001 9.32C13.1901 9.32 14.1601 8.35 14.1601 7.16C14.1601 5.97 13.1901 5 12.0001 5C10.8101 5 9.84009 5.97 9.84009 7.16C9.84009 8.35 10.8101 9.32 12.0001 9.32Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.78988 18.9999C7.97988 18.9999 8.94988 18.0299 8.94988 16.8399C8.94988 15.6499 7.97988 14.6799 6.78988 14.6799C5.59988 14.6799 4.62988 15.6499 4.62988 16.8399C4.62988 18.0299 5.58988 18.9999 6.78988 18.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.21 18.9999C18.4 18.9999 19.37 18.0299 19.37 16.8399C19.37 15.6499 18.4 14.6799 17.21 14.6799C16.02 14.6799 15.05 15.6499 15.05 16.8399C15.05 18.0299 16.02 18.9999 17.21 18.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const More2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9998 10.07C10.3998 10.07 9.08984 8.76 9.08984 7.16C9.08984 5.56 10.3998 4.25 11.9998 4.25C13.5998 4.25 14.9098 5.56 14.9098 7.16C14.9098 8.76 13.5998 10.07 11.9998 10.07ZM11.9998 5.75C11.2198 5.75 10.5898 6.38 10.5898 7.16C10.5898 7.94 11.2198 8.57 11.9998 8.57C12.7798 8.57 13.4098 7.94 13.4098 7.16C13.4098 6.38 12.7798 5.75 11.9998 5.75Z"
        fill="currentColor"
      />
      <Path
        d="M6.78988 19.7502C5.18988 19.7502 3.87988 18.4402 3.87988 16.8402C3.87988 15.2402 5.18988 13.9302 6.78988 13.9302C8.38988 13.9302 9.69988 15.2402 9.69988 16.8402C9.69988 18.4402 8.38988 19.7502 6.78988 19.7502ZM6.78988 15.4302C6.00988 15.4302 5.37988 16.0602 5.37988 16.8402C5.37988 17.6202 6.00988 18.2502 6.78988 18.2502C7.56988 18.2502 8.19988 17.6202 8.19988 16.8402C8.19988 16.0602 7.55988 15.4302 6.78988 15.4302Z"
        fill="currentColor"
      />
      <Path
        d="M17.2098 19.7502C15.6098 19.7502 14.2998 18.4402 14.2998 16.8402C14.2998 15.2402 15.6098 13.9302 17.2098 13.9302C18.8098 13.9302 20.1198 15.2402 20.1198 16.8402C20.1198 18.4402 18.8198 19.7502 17.2098 19.7502ZM17.2098 15.4302C16.4298 15.4302 15.7998 16.0602 15.7998 16.8402C15.7998 17.6202 16.4298 18.2502 17.2098 18.2502C17.9898 18.2502 18.6198 17.6202 18.6198 16.8402C18.6198 16.0602 17.9898 15.4302 17.2098 15.4302Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const More2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9998 9.32C13.1898 9.32 14.1598 8.35 14.1598 7.16C14.1598 5.97 13.1898 5 11.9998 5C10.8098 5 9.83984 5.97 9.83984 7.16C9.83984 8.35 10.8098 9.32 11.9998 9.32Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.78988 19.0002C7.97988 19.0002 8.94988 18.0302 8.94988 16.8402C8.94988 15.6502 7.97988 14.6802 6.78988 14.6802C5.59988 14.6802 4.62988 15.6502 4.62988 16.8402C4.62988 18.0302 5.58988 19.0002 6.78988 19.0002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.2098 19.0002C18.3998 19.0002 19.3698 18.0302 19.3698 16.8402C19.3698 15.6502 18.3998 14.6802 17.2098 14.6802C16.0198 14.6802 15.0498 15.6502 15.0498 16.8402C15.0498 18.0302 16.0198 19.0002 17.2098 19.0002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: More2Bold,
  broken: More2Broken,
  bulk: More2Bulk,
  linear: More2Linear,
  outline: More2Outline,
  twotone: More2Twotone,
};

export const More2Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
