import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const MessageQuestionBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 2.42969H7C4 2.42969 2 4.42969 2 7.42969V13.4297C2 16.4297 4 18.4297 7 18.4297V20.5597C7 21.3597 7.89 21.8397 8.55 21.3897L13 18.4297H17C20 18.4297 22 16.4297 22 13.4297V7.42969C22 4.42969 20 2.42969 17 2.42969ZM12 14.5997C11.58 14.5997 11.25 14.2597 11.25 13.8497C11.25 13.4397 11.58 13.0997 12 13.0997C12.42 13.0997 12.75 13.4397 12.75 13.8497C12.75 14.2597 12.42 14.5997 12 14.5997ZM13.26 10.4497C12.87 10.7097 12.75 10.8797 12.75 11.1597V11.3697C12.75 11.7797 12.41 12.1197 12 12.1197C11.59 12.1197 11.25 11.7797 11.25 11.3697V11.1597C11.25 9.99969 12.1 9.42969 12.42 9.20969C12.79 8.95969 12.91 8.78969 12.91 8.52969C12.91 8.02969 12.5 7.61969 12 7.61969C11.5 7.61969 11.09 8.02969 11.09 8.52969C11.09 8.93969 10.75 9.27969 10.34 9.27969C9.93 9.27969 9.59 8.93969 9.59 8.52969C9.59 7.19969 10.67 6.11969 12 6.11969C13.33 6.11969 14.41 7.19969 14.41 8.52969C14.41 9.66969 13.57 10.2397 13.26 10.4497Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageQuestionBroken = ({
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
        d="M2 11.5599V13.43C2 16.43 4 18.43 7 18.43H11L15.45 21.39C16.11 21.83 17 21.36 17 20.56V18.43C20 18.43 22 16.43 22 13.43V7.42993C22 4.42993 20 2.42993 17 2.42993H7C4 2.42993 2 4.42993 2 7.42993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9998 11.36V11.15C11.9998 10.47 12.4198 10.11 12.8398 9.82001C13.2498 9.54001 13.6598 9.18002 13.6598 8.52002C13.6598 7.60002 12.9198 6.85999 11.9998 6.85999C11.0798 6.85999 10.3398 7.60002 10.3398 8.52002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9955 13.75H12.0045"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessageQuestionBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 18.4299H13L8.54999 21.39C7.88999 21.83 7 21.3599 7 20.5599V18.4299C4 18.4299 2 16.4299 2 13.4299V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993V13.4299C22 16.4299 20 18.4299 17 18.4299Z"
        fill="currentColor"
      />
      <Path
        d="M11.9998 12.1099C11.5898 12.1099 11.2498 11.7699 11.2498 11.3599V11.1499C11.2498 9.9899 12.0998 9.41989 12.4198 9.19989C12.7898 8.94989 12.9098 8.7799 12.9098 8.5199C12.9098 8.0199 12.4998 7.60986 11.9998 7.60986C11.4998 7.60986 11.0898 8.0199 11.0898 8.5199C11.0898 8.9299 10.7498 9.2699 10.3398 9.2699C9.92984 9.2699 9.58984 8.9299 9.58984 8.5199C9.58984 7.1899 10.6698 6.10986 11.9998 6.10986C13.3298 6.10986 14.4098 7.1899 14.4098 8.5199C14.4098 9.6599 13.5698 10.2299 13.2598 10.4399C12.8698 10.6999 12.7498 10.8699 12.7498 11.1499V11.3599C12.7498 11.7799 12.4098 12.1099 11.9998 12.1099Z"
        fill="currentColor"
      />
      <Path
        d="M12 14.6001C11.58 14.6001 11.25 14.2601 11.25 13.8501C11.25 13.4401 11.59 13.1001 12 13.1001C12.41 13.1001 12.75 13.4401 12.75 13.8501C12.75 14.2601 12.42 14.6001 12 14.6001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageQuestionLinear = ({
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
        d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0001 11.36V11.15C12.0001 10.47 12.4201 10.11 12.8401 9.82001C13.2501 9.54001 13.66 9.18002 13.66 8.52002C13.66 7.60002 12.9201 6.85999 12.0001 6.85999C11.0801 6.85999 10.3401 7.60002 10.3401 8.52002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9955 13.75H12.0045"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessageQuestionOutline = ({
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
        d="M8 22.3199C7.72 22.3199 7.42998 22.2499 7.16998 22.1099C6.59998 21.8099 6.25 21.2099 6.25 20.5699V19.15C3.23 18.84 1.25 16.6199 1.25 13.4399V7.43994C1.25 3.99994 3.56 1.68994 7 1.68994H17C20.44 1.68994 22.75 3.99994 22.75 7.43994V13.4399C22.75 16.8799 20.44 19.1899 17 19.1899H13.23L8.96997 22.03C8.67997 22.22 8.34 22.3199 8 22.3199ZM7 3.17993C4.42 3.17993 2.75 4.84993 2.75 7.42993V13.43C2.75 16.01 4.42 17.68 7 17.68C7.41 17.68 7.75 18.02 7.75 18.43V20.56C7.75 20.69 7.83 20.75 7.88 20.78C7.93001 20.81 8.03001 20.84 8.14001 20.77L12.59 17.81C12.71 17.73 12.86 17.68 13.01 17.68H17.01C19.59 17.68 21.26 16.01 21.26 13.43V7.42993C21.26 4.84993 19.59 3.17993 17.01 3.17993H7Z"
        fill="currentColor"
      />
      <Path
        d="M11.9998 12.1099C11.5898 12.1099 11.2498 11.7699 11.2498 11.3599V11.1499C11.2498 9.9899 12.0998 9.41989 12.4198 9.19989C12.7898 8.94989 12.9098 8.7799 12.9098 8.5199C12.9098 8.0199 12.4998 7.60986 11.9998 7.60986C11.4998 7.60986 11.0898 8.0199 11.0898 8.5199C11.0898 8.9299 10.7498 9.2699 10.3398 9.2699C9.92984 9.2699 9.58984 8.9299 9.58984 8.5199C9.58984 7.1899 10.6698 6.10986 11.9998 6.10986C13.3298 6.10986 14.4098 7.1899 14.4098 8.5199C14.4098 9.6599 13.5698 10.2299 13.2598 10.4399C12.8698 10.6999 12.7498 10.8699 12.7498 11.1499V11.3599C12.7498 11.7799 12.4098 12.1099 11.9998 12.1099Z"
        fill="currentColor"
      />
      <Path
        d="M12 14.6001C11.58 14.6001 11.25 14.2601 11.25 13.8501C11.25 13.4401 11.59 13.1001 12 13.1001C12.41 13.1001 12.75 13.4401 12.75 13.8501C12.75 14.2601 12.42 14.6001 12 14.6001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageQuestionTwotone = ({
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
        d="M17 18.4302H13L8.54999 21.3902C7.88999 21.8302 7 21.3602 7 20.5602V18.4302C4 18.4302 2 16.4302 2 13.4302V7.43018C2 4.43018 4 2.43018 7 2.43018H17C20 2.43018 22 4.43018 22 7.43018V13.4302C22 16.4302 20 18.4302 17 18.4302Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.9998 11.3599V11.1499C11.9998 10.4699 12.4198 10.1099 12.8398 9.81989C13.2498 9.53989 13.6598 9.1799 13.6598 8.5199C13.6598 7.5999 12.9198 6.85986 11.9998 6.85986C11.0798 6.85986 10.3398 7.5999 10.3398 8.5199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.9955 13.75H12.0045"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MessageQuestionBold,
  broken: MessageQuestionBroken,
  bulk: MessageQuestionBulk,
  linear: MessageQuestionLinear,
  outline: MessageQuestionOutline,
  twotone: MessageQuestionTwotone,
};

export const MessageQuestionIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
