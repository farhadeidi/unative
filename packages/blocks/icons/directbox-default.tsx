import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const DirectboxDefaultBold = ({
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
        d="M18.6897 11.5308C18.1197 11.3808 17.4497 11.3008 16.6497 11.3008C15.5397 11.3008 15.1297 11.5708 14.5597 12.0008C14.5297 12.0208 14.4997 12.0508 14.4697 12.0808L13.5197 13.0908C12.7197 13.9308 11.2797 13.9408 10.4797 13.0808L9.52969 12.0808C9.49969 12.0508 9.46969 12.0208 9.43969 12.0008C8.86969 11.5708 8.45969 11.3008 7.34969 11.3008C6.54969 11.3008 5.87969 11.3808 5.30969 11.5308C2.92969 12.1708 2.92969 14.0608 2.92969 15.7208V16.6508C2.92969 19.1608 2.92969 22.0008 8.27969 22.0008H15.7197C19.2697 22.0008 21.0697 20.2008 21.0697 16.6508V15.7208C21.0697 14.0608 21.0697 12.1708 18.6897 11.5308ZM14.3297 18.4008H9.66969C9.28969 18.4008 8.97969 18.0908 8.97969 17.7008C8.97969 17.3108 9.28969 17.0008 9.66969 17.0008H14.3297C14.7097 17.0008 15.0197 17.3108 15.0197 17.7008C15.0197 18.0908 14.7097 18.4008 14.3297 18.4008Z"
        fill="currentColor"
      />
      <Path
        d="M19.2091 6.42V10.12C19.1691 10.1 19.1191 10.09 19.0791 10.08C18.3791 9.89 17.5891 9.8 16.6491 9.8C15.1091 9.8 14.3891 10.25 13.6491 10.81C13.5491 10.88 13.4591 10.97 13.3791 11.05L12.4191 12.06C12.3291 12.16 12.1691 12.22 11.9991 12.22C11.8291 12.22 11.6691 12.16 11.5691 12.05L10.6291 11.06C10.5391 10.96 10.4391 10.87 10.3391 10.8C9.61906 10.25 8.88906 9.8 7.34906 9.8C6.40906 9.8 5.61906 9.89 4.91906 10.08C4.87906 10.09 4.82906 10.1 4.78906 10.12V6.42C4.78906 4.35 4.78906 2 9.20906 2H14.7891C19.2091 2 19.2091 4.35 19.2091 6.42Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectboxDefaultBroken = ({
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
        d="M5 9.95996V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 12V6C19 3.79 19 2 15 2H9C5 2 5 3.79 5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectboxDefaultBulk = ({
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
        d="M18.6897 11.5298C18.1197 11.3798 17.4497 11.2998 16.6497 11.2998C15.5397 11.2998 15.1297 11.5698 14.5597 11.9998C14.5297 12.0198 14.4997 12.0498 14.4697 12.0798L13.5197 13.0898C12.7297 13.9398 11.2797 13.9398 10.4797 13.0898L9.52969 12.0898C9.49969 12.0498 9.46969 12.0198 9.43969 11.9998C8.85969 11.5698 8.44969 11.2998 7.34969 11.2998C6.54969 11.2998 5.87969 11.3698 5.30969 11.5298C2.92969 12.1698 2.92969 14.0598 2.92969 15.7198V16.6498C2.92969 19.1598 2.92969 21.9998 8.27969 21.9998H15.7197C19.2697 21.9998 21.0697 20.1998 21.0697 16.6498V15.7198C21.0697 14.0598 21.0697 12.1698 18.6897 11.5298Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M14.7891 2H9.20906C4.78906 2 4.78906 4.35 4.78906 6.42V12.21C4.78906 12.43 4.88906 12.63 5.05906 12.76C5.22906 12.89 5.45906 12.94 5.66906 12.88C6.11906 12.76 6.67906 12.7 7.34906 12.7C8.01906 12.7 8.15906 12.78 8.55906 13.08L9.46906 14.04C10.1191 14.74 11.0491 15.14 12.0091 15.14C12.9691 15.14 13.8891 14.74 14.5491 14.04L15.4591 13.08C15.8591 12.78 15.9991 12.7 16.6691 12.7C17.3391 12.7 17.8991 12.76 18.3491 12.88C18.5591 12.94 18.7791 12.89 18.9591 12.76C19.1291 12.63 19.2291 12.42 19.2291 12.21V6.42C19.2091 4.35 19.2091 2 14.7891 2Z"
        fill="currentColor"
      />
      <Path
        d="M13.55 9.90977H10.45C10.06 9.90977 9.75 9.59977 9.75 9.20977C9.75 8.81977 10.06 8.50977 10.45 8.50977H13.55C13.94 8.50977 14.25 8.81977 14.25 9.20977C14.25 9.58977 13.93 9.90977 13.55 9.90977Z"
        fill="currentColor"
      />
      <Path
        d="M14.3307 7.12021H9.6707C9.2807 7.12021 8.9707 6.81022 8.9707 6.42022C8.9707 6.03022 9.2807 5.72021 9.6707 5.72021H14.3207C14.7107 5.72021 15.0207 6.03022 15.0207 6.42022C15.0207 6.80022 14.7107 7.12021 14.3307 7.12021Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectboxDefaultLinear = ({
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
        d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 12V6C19 3.79 19 2 15 2H9C5 2 5 3.79 5 6V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectboxDefaultOutline = ({
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
        d="M16 22.75H8C2.25 22.75 2.25 19.7 2.25 17V16C2.25 13.77 2.25 11.25 7 11.25C8.19 11.25 8.63 11.54 9.25 12C9.28 12.03 9.32 12.05 9.35 12.09L10.37 13.17C11.23 14.08 12.79 14.08 13.65 13.17L14.67 12.09C14.7 12.06 14.73 12.03 14.77 12C15.39 11.53 15.83 11.25 17.02 11.25C21.77 11.25 21.77 13.77 21.77 16V17C21.75 20.82 19.82 22.75 16 22.75ZM7 12.75C3.75 12.75 3.75 13.77 3.75 16V17C3.75 19.74 3.75 21.25 8 21.25H16C18.98 21.25 20.25 19.98 20.25 17V16C20.25 13.77 20.25 12.75 17 12.75C16.28 12.75 16.13 12.84 15.7 13.16L14.73 14.19C14.01 14.95 13.04 15.37 12 15.37C10.96 15.37 9.99 14.95 9.27 14.19L8.3 13.16C7.87 12.84 7.72 12.75 7 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M19 12.75C18.59 12.75 18.25 12.41 18.25 12V6C18.25 3.77 18.25 2.75 15 2.75H9C5.75 2.75 5.75 3.77 5.75 6V12C5.75 12.41 5.41 12.75 5 12.75C4.59 12.75 4.25 12.41 4.25 12V6C4.25 3.77 4.25 1.25 9 1.25H15C19.75 1.25 19.75 3.77 19.75 6V12C19.75 12.41 19.41 12.75 19 12.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectboxDefaultTwotone = ({
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
        d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M19 12V6C19 3.79 19 2 15 2H9C5 2 5 3.79 5 6V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DirectboxDefaultBold,
  broken: DirectboxDefaultBroken,
  bulk: DirectboxDefaultBulk,
  linear: DirectboxDefaultLinear,
  outline: DirectboxDefaultOutline,
  twotone: DirectboxDefaultTwotone,
};

export const DirectboxDefaultIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
