import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const MagicStarBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.2903 4.14004L17.2203 7.93004C17.2103 8.45004 17.5403 9.14004 17.9603 9.45004L20.4403 11.33C22.0303 12.53 21.7703 14 19.8703 14.6L16.6403 15.61C16.1003 15.78 15.5303 16.37 15.3903 16.92L14.6203 19.86C14.0103 22.18 12.4903 22.41 11.2303 20.37L9.47027 17.52C9.15027 17 8.39027 16.61 7.79027 16.64L4.45027 16.81C2.06027 16.93 1.38027 15.55 2.94027 13.73L4.92027 11.43C5.29027 11 5.46027 10.2 5.29027 9.66004L4.27027 6.42004C3.68027 4.52004 4.74027 3.47004 6.63027 4.09004L9.58027 5.06004C10.0803 5.22004 10.8303 5.11004 11.2503 4.80004L14.3303 2.58004C16.0003 1.39004 17.3303 2.09004 17.2903 4.14004Z"
        fill="currentColor"
      />
      <Path
        d="M21.4403 20.4702L18.4103 17.4402C18.1203 17.1502 17.6403 17.1502 17.3503 17.4402C17.0603 17.7302 17.0603 18.2102 17.3503 18.5002L20.3803 21.5302C20.5303 21.6802 20.7203 21.7502 20.9103 21.7502C21.1003 21.7502 21.2903 21.6802 21.4403 21.5302C21.7303 21.2402 21.7303 20.7602 21.4403 20.4702Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MagicStarBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.27028 6.41999C3.68028 4.51999 4.74027 3.46998 6.63027 4.08998L9.58028 5.05998C10.0803 5.21998 10.8303 5.10997 11.2503 4.79997L14.3303 2.57997C16.0003 1.37997 17.3302 2.07998 17.2902 4.12998L17.2202 7.91999C17.2102 8.43999 17.5403 9.12998 17.9603 9.43998L20.4403 11.32C22.0303 12.52 21.7703 13.99 19.8703 14.59L16.6403 15.6C16.1003 15.77 15.5303 16.36 15.3903 16.91L14.6203 19.85C14.0103 22.17 12.4902 22.4 11.2302 20.36L9.47024 17.51C9.15024 16.99 8.39024 16.6 7.79024 16.63L4.45028 16.8C2.06028 16.92 1.38027 15.54 2.94027 13.72L4.92025 11.42C5.11025 11.2 5.24026 10.9 5.31026 10.58"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9108 22L18.8809 18.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MagicStarBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.2902 4.13998L17.2202 7.92998C17.2102 8.44998 17.5403 9.13998 17.9603 9.44998L20.4403 11.33C22.0303 12.53 21.7703 14 19.8703 14.6L16.6403 15.61C16.1003 15.78 15.5303 16.37 15.3903 16.92L14.6203 19.86C14.0103 22.18 12.4902 22.41 11.2302 20.37L9.47024 17.52C9.15024 17 8.39024 16.61 7.79024 16.64L4.45028 16.81C2.06028 16.93 1.38027 15.55 2.94027 13.73L4.92025 11.43C5.29025 11 5.46024 10.2 5.29024 9.65999L4.28029 6.42998C3.69029 4.52998 4.75028 3.47999 6.64028 4.09999L9.59029 5.06999C10.0903 5.22999 10.8403 5.11998 11.2603 4.80998L14.3403 2.58998C16.0003 1.38998 17.3302 2.08998 17.2902 4.13998Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.4403 20.4699L18.4103 17.4399C18.1203 17.1499 17.6403 17.1499 17.3503 17.4399C17.0603 17.7299 17.0603 18.2099 17.3503 18.4999L20.3803 21.5299C20.5303 21.6799 20.7203 21.7499 20.9103 21.7499C21.1003 21.7499 21.2903 21.6799 21.4403 21.5299C21.7303 21.2399 21.7303 20.7599 21.4403 20.4699Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MagicStarLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.29 4.13999L17.22 7.92997C17.21 8.44997 17.54 9.13999 17.96 9.44999L20.44 11.33C22.03 12.53 21.77 14 19.87 14.6L16.64 15.61C16.1 15.78 15.53 16.37 15.39 16.92L14.62 19.86C14.01 22.18 12.49 22.41 11.23 20.37L9.46999 17.52C9.14999 17 8.39 16.61 7.79 16.64L4.45003 16.81C2.06003 16.93 1.38002 15.55 2.94002 13.73L4.92 11.43C5.29 11 5.46 10.2 5.29 9.65998L4.28005 6.42997C3.69005 4.52997 4.75004 3.47999 6.64004 4.09999L9.59005 5.06999C10.09 5.22999 10.84 5.11998 11.26 4.80998L14.34 2.58998C16 1.38998 17.33 2.08999 17.29 4.13999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.91 22L18.88 18.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MagicStarOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.0103 22.5C12.4103 22.5 11.4803 22.21 10.5903 20.75L8.83027 17.9C8.66027 17.62 8.14026 17.35 7.82026 17.37L4.48024 17.54C2.48024 17.64 1.78028 16.81 1.53028 16.31C1.28028 15.81 1.06024 14.74 2.36024 13.22L4.34028 10.92C4.54028 10.68 4.65025 10.16 4.56025 9.86002L3.55024 6.63004C3.04024 5.01004 3.61025 4.14004 3.99025 3.76004C4.37024 3.38004 5.25025 2.83003 6.87025 3.37003L9.82026 4.34003C10.0903 4.43003 10.5903 4.35003 10.8203 4.19003L13.9003 1.97003C15.3103 0.950032 16.3302 1.22003 16.8002 1.47003C17.2702 1.72003 18.0702 2.40005 18.0402 4.14005L17.9702 7.93002C17.9602 8.21002 18.1902 8.67003 18.4102 8.84003L20.8903 10.72C22.2403 11.75 22.2903 12.78 22.2003 13.31C22.1103 13.84 21.7103 14.8 20.0903 15.3L16.8602 16.31C16.5602 16.4 16.1902 16.79 16.1102 17.09L15.3403 20.03C14.8303 21.96 13.8303 22.39 13.2703 22.47C13.2003 22.49 13.1103 22.5 13.0103 22.5ZM7.85023 15.87C8.71023 15.87 9.66023 16.39 10.1002 17.11L11.8602 19.96C12.3602 20.78 12.8102 21.03 13.0502 20.99C13.2802 20.96 13.6403 20.58 13.8903 19.66L14.6602 16.72C14.8702 15.92 15.6202 15.13 16.4102 14.89L19.6403 13.88C20.2603 13.69 20.6602 13.38 20.7202 13.06C20.7802 12.74 20.5002 12.32 19.9802 11.92L17.5003 10.04C16.8903 9.58004 16.4503 8.66002 16.4603 7.90002L16.5303 4.11002C16.5403 3.44002 16.3803 2.94004 16.0903 2.79004C15.8003 2.64004 15.3103 2.79002 14.7603 3.18002L11.6802 5.40002C11.0702 5.84002 10.0603 6.00004 9.33027 5.76004L6.38026 4.79004C5.76026 4.59004 5.26028 4.60002 5.03028 4.83002C4.80028 5.06002 4.78023 5.56002 4.97023 6.18002L5.98024 9.41003C6.23024 10.2 6.01023 11.27 5.47023 11.89L3.49025 14.19C2.86025 14.92 2.76025 15.43 2.87025 15.64C2.97025 15.85 3.45028 16.08 4.40028 16.03L7.74025 15.86C7.78025 15.87 7.82023 15.87 7.85023 15.87Z"
        fill="currentColor"
      />
      <Path
        d="M21.9103 22.7502C21.7203 22.7502 21.5303 22.6802 21.3803 22.5302L18.3503 19.5002C18.0603 19.2102 18.0603 18.7302 18.3503 18.4402C18.6403 18.1502 19.1203 18.1502 19.4103 18.4402L22.4403 21.4702C22.7303 21.7602 22.7303 22.2402 22.4403 22.5302C22.2903 22.6802 22.1003 22.7502 21.9103 22.7502Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MagicStarTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.2902 4.13999L17.2202 7.92997C17.2102 8.44997 17.5403 9.13999 17.9603 9.44999L20.4403 11.33C22.0303 12.53 21.7703 14 19.8703 14.6L16.6403 15.61C16.1003 15.78 15.5303 16.37 15.3903 16.92L14.6203 19.86C14.0103 22.18 12.4902 22.41 11.2302 20.37L9.47024 17.52C9.15024 17 8.39024 16.61 7.79024 16.64L4.45028 16.81C2.06028 16.93 1.38027 15.55 2.94027 13.73L4.92025 11.43C5.29025 11 5.46024 10.2 5.29024 9.65998L4.28029 6.42997C3.69029 4.52997 4.75028 3.47999 6.64028 4.09999L9.59029 5.06999C10.0903 5.22999 10.8403 5.11998 11.2603 4.80998L14.3403 2.58998C16.0003 1.38998 17.3302 2.08999 17.2902 4.13999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M21.9108 22.0002L18.8809 18.9702"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MagicStarBold,
  broken: MagicStarBroken,
  bulk: MagicStarBulk,
  linear: MagicStarLinear,
  outline: MagicStarOutline,
  twotone: MagicStarTwotone,
};

export const MagicStarIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default MagicStarIcon;
