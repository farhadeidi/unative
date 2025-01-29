import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const MessageFavoriteBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.61 4.68C21.24 5.86 19.95 6.5 19.5 6.5C19.05 6.5 17.77 5.88 17.39 4.68C17.33 4.5 17.3 4.3 17.3 4.11C17.3 3.46 17.63 2.79 18.32 2.57C18.73 2.44 19.17 2.51 19.48 2.77C19.8 2.52 20.24 2.44 20.66 2.57C21.58 2.86 21.87 3.89 21.61 4.68Z"
        fill="currentColor"
      />
      <Path
        d="M18.03 9.5C16.08 9.5 14.5 7.92 14.5 5.97V3C14.5 2.45 14.05 2 13.5 2H7C4.24 2 2 4.23 2 6.98V13.95C2 16.71 4.24 18.95 7 18.95H8.5C8.78 18.95 9.14 19.13 9.3 19.35L10.8 21.34C11.46 22.22 12.54 22.22 13.2 21.34L14.7 19.35C14.89 19.1 15.19 18.95 15.5 18.95H17.01C19.77 18.95 22 16.72 22 13.96V10.5C22 9.95 21.55 9.5 21 9.5H18.03ZM8 12C7.44 12 7 11.55 7 11C7 10.45 7.44 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12ZM12 12C11.44 12 11 11.55 11 11C11 10.45 11.44 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageFavoriteBroken = ({
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
        d="M2 8C2 4 4 2 8 2H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19H8C4 19 2 18 2 13V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.9997 7.00008C17.4997 7.00008 15.7297 6.20008 15.1997 4.62008C14.8697 3.63008 15.2597 2.41008 16.3397 2.07008C16.8997 1.90008 17.5997 2.04008 17.9997 2.57008C18.3797 2.02008 19.0997 1.90008 19.6597 2.07008C20.7397 2.40008 21.1297 3.63008 20.7997 4.62008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.9965 11H16.0054"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9945 11H12.0035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99451 11H8.00349"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessageFavoriteBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.61 4.68C21.24 5.86 19.95 6.5 19.5 6.5C19.05 6.5 17.77 5.88 17.39 4.68C17.33 4.5 17.3 4.3 17.3 4.11C17.3 3.46 17.63 2.79 18.32 2.57C18.73 2.44 19.17 2.51 19.48 2.77C19.8 2.52 20.24 2.44 20.66 2.57C21.58 2.86 21.87 3.89 21.61 4.68Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.97 8H18.03C16.76 8 16 7.24 16 5.97V3.03C16 2.63 16.08 2.29 16.22 2H7C4.24 2 2 4.23 2 6.98V12.96V13.96C2 16.71 4.24 18.94 7 18.94H8.5C8.77 18.94 9.13 19.12 9.3 19.34L10.8 21.33C11.46 22.21 12.54 22.21 13.2 21.33L14.7 19.34C14.89 19.09 15.19 18.94 15.5 18.94H17C19.76 18.94 22 16.71 22 13.96V7.77C21.71 7.92 21.37 8 20.97 8Z"
        fill="currentColor"
      />
      <Path
        d="M12 12C11.44 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12Z"
        fill="currentColor"
      />
      <Path
        d="M16 12C15.44 12 15 11.55 15 11C15 10.45 15.45 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z"
        fill="currentColor"
      />
      <Path
        d="M8 12C7.44 12 7 11.55 7 11C7 10.45 7.45 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageFavoriteLinear = ({
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
        d="M22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.2 4.62008C14.87 3.63008 15.26 2.41008 16.34 2.07008C16.9 1.90008 17.6 2.04008 18 2.57008C18.38 2.02008 19.1 1.90008 19.66 2.07008C20.74 2.40008 21.13 3.63008 20.8 4.62008C20.29 6.19008 18.5 7.00008 18 7.00008C17.5 7.00008 15.73 6.20008 15.2 4.62008Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.9965 11H16.0054"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9955 11H12.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99451 11H8.00349"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessageFavoriteOutline = ({
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
        d="M12 22.81C11.31 22.81 10.66 22.46 10.2 21.85L8.7 19.85C8.67 19.81 8.55 19.75 8.49 19.75H8C3.83 19.75 1.25 18.62 1.25 13V8C1.25 3.58 3.58 1.25 8 1.25H12C12.41 1.25 12.75 1.59 12.75 2C12.75 2.41 12.41 2.75 12 2.75H8C4.42 2.75 2.75 4.42 2.75 8V13C2.75 17.52 4.3 18.25 8 18.25H8.5C9.01 18.25 9.59 18.54 9.9 18.95L11.4 20.95C11.75 21.41 12.25 21.41 12.6 20.95L14.1 18.95C14.43 18.51 14.95 18.25 15.5 18.25H16C19.58 18.25 21.25 16.58 21.25 13V8C21.25 7.59 21.59 7.25 22 7.25C22.41 7.25 22.75 7.59 22.75 8V13C22.75 17.42 20.42 19.75 16 19.75H15.5C15.42 19.75 15.35 19.79 15.3 19.85L13.8 21.85C13.34 22.46 12.69 22.81 12 22.81Z"
        fill="currentColor"
      />
      <Path
        d="M12 12C11.44 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12Z"
        fill="currentColor"
      />
      <Path
        d="M16 12C15.44 12 15 11.55 15 11C15 10.45 15.45 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z"
        fill="currentColor"
      />
      <Path
        d="M8 12C7.44 12 7 11.55 7 11C7 10.45 7.45 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12Z"
        fill="currentColor"
      />
      <Path
        d="M18.0004 7.74999C17.1404 7.74999 15.1104 6.72999 14.4904 4.85999C14.2404 4.11999 14.3004 3.26999 14.6504 2.59999C14.9604 1.99999 15.4804 1.55999 16.1204 1.35999C16.7704 1.15999 17.4604 1.24999 18.0004 1.57999C18.5404 1.24999 19.2304 1.15999 19.8904 1.35999C20.5304 1.55999 21.0504 1.99999 21.3604 2.59999C21.7104 3.26999 21.7704 4.11999 21.5204 4.85999C20.8904 6.75999 18.7704 7.74999 18.0004 7.74999ZM15.9104 4.37999C16.3304 5.63999 17.7604 6.21999 18.0204 6.24999C18.3104 6.21999 19.7104 5.56999 20.1004 4.38999C20.2204 4.02999 20.1904 3.59999 20.0304 3.28999C19.9004 3.03999 19.7104 2.87999 19.4504 2.79999C19.1704 2.69999 18.7904 2.74999 18.6204 2.99999C18.4804 3.19999 18.2604 3.31999 18.0204 3.32999C17.7804 3.32999 17.5504 3.21999 17.4004 3.02999C17.1904 2.75999 16.8204 2.71999 16.5504 2.79999C16.2904 2.87999 16.1004 3.03999 15.9704 3.28999C15.8204 3.59999 15.7904 4.01999 15.9104 4.37999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageFavoriteTwotone = ({
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
        d="M22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.1997 4.62008C14.8697 3.63008 15.2597 2.41008 16.3397 2.07008C16.8997 1.90008 17.5997 2.04008 17.9997 2.57008C18.3797 2.02008 19.0997 1.90008 19.6597 2.07008C20.7397 2.40008 21.1297 3.63008 20.7997 4.62008C20.2897 6.19008 18.4997 7.00008 17.9997 7.00008C17.4997 7.00008 15.7297 6.20008 15.1997 4.62008Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.9965 11H16.0054"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.9945 11H12.0035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.99451 11H8.00349"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MessageFavoriteBold,
  broken: MessageFavoriteBroken,
  bulk: MessageFavoriteBulk,
  linear: MessageFavoriteLinear,
  outline: MessageFavoriteOutline,
  twotone: MessageFavoriteTwotone,
};

export const MessageFavoriteIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default MessageFavoriteIcon;
