import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const DirectboxNotifBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.6897 11.5308C18.1197 11.3808 17.4497 11.3008 16.6497 11.3008C15.5397 11.3008 15.1297 11.5708 14.5597 12.0008C14.5297 12.0208 14.4997 12.0508 14.4697 12.0808L13.5197 13.0908C12.7297 13.9408 11.2797 13.9408 10.4797 13.0908L9.52969 12.0908C9.49969 12.0508 9.46969 12.0208 9.43969 12.0008C8.85969 11.5708 8.44969 11.3008 7.34969 11.3008C6.54969 11.3008 5.87969 11.3708 5.30969 11.5308C2.92969 12.1708 2.92969 14.0608 2.92969 15.7208V16.6508C2.92969 19.1608 2.92969 22.0008 8.27969 22.0008H15.7197C19.2697 22.0008 21.0697 20.2008 21.0697 16.6508V15.7208C21.0697 14.0608 21.0697 12.1708 18.6897 11.5308Z"
        fill="currentColor"
      />
      <Path
        d="M14.7891 2H9.20906C4.78906 2 4.78906 4.35 4.78906 6.42V10.12C4.82906 10.1 4.87906 10.09 4.91906 10.08C5.61906 9.89 6.40906 9.8 7.34906 9.8C8.88906 9.8 9.61906 10.25 10.3391 10.8C10.4391 10.87 10.5391 10.96 10.6291 11.06L11.5691 12.05C11.6691 12.16 11.8291 12.22 11.9991 12.22C12.1691 12.22 12.3291 12.16 12.4191 12.06L13.3791 11.05C13.4591 10.97 13.5491 10.88 13.6491 10.81C14.3891 10.25 15.1091 9.8 16.6491 9.8C17.5891 9.8 18.3791 9.89 19.0791 10.08C19.1191 10.09 19.1691 10.1 19.2091 10.12V6.42C19.2091 4.35 19.2091 2 14.7891 2ZM13.5491 8.5H10.4491C10.0691 8.5 9.74906 8.18 9.74906 7.8C9.74906 7.41 10.0691 7.1 10.4491 7.1H13.5491C13.9291 7.1 14.2491 7.41 14.2491 7.8C14.2491 8.18 13.9291 8.5 13.5491 8.5ZM14.3291 5.71H9.66906C9.28906 5.71 8.97906 5.39 8.97906 5.01C8.97906 4.62 9.28906 4.31 9.66906 4.31H14.3291C14.7091 4.31 15.0191 4.62 15.0191 5.01C15.0191 5.39 14.7091 5.71 14.3291 5.71Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectboxNotifBroken = ({
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
        d="M10.3301 9.2002H13.6601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.6602 6.2002H14.5002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.5 6.2002H11.08"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectboxNotifBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.6897 11.5298C18.1197 11.3798 17.4497 11.2998 16.6497 11.2998C15.5397 11.2998 15.1297 11.5698 14.5597 11.9998C14.5297 12.0198 14.4997 12.0498 14.4697 12.0798L13.5197 13.0898C12.7197 13.9298 11.2797 13.9398 10.4797 13.0798L9.52969 12.0798C9.49969 12.0498 9.46969 12.0198 9.43969 11.9998C8.86969 11.5698 8.45969 11.2998 7.34969 11.2998C6.54969 11.2998 5.87969 11.3798 5.30969 11.5298C2.92969 12.1698 2.92969 14.0598 2.92969 15.7198V16.6498C2.92969 19.1598 2.92969 21.9998 8.27969 21.9998H15.7197C19.2697 21.9998 21.0697 20.1998 21.0697 16.6498V15.7198C21.0697 14.0598 21.0697 12.1698 18.6897 11.5298ZM14.3297 18.3998H9.66969C9.28969 18.3998 8.97969 18.0898 8.97969 17.6998C8.97969 17.3098 9.28969 16.9998 9.66969 16.9998H14.3297C14.7097 16.9998 15.0197 17.3098 15.0197 17.6998C15.0197 18.0898 14.7097 18.3998 14.3297 18.3998Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M14.7891 2H9.20906C4.78906 2 4.78906 4.35 4.78906 6.42V12.21C4.78906 12.43 4.88906 12.63 5.05906 12.76C5.22906 12.89 5.45906 12.94 5.66906 12.88C6.11906 12.76 6.67906 12.7 7.34906 12.7C8.01906 12.7 8.15906 12.78 8.55906 13.08L9.46906 14.04C10.1191 14.74 11.0491 15.14 12.0091 15.14C12.9691 15.14 13.8891 14.74 14.5491 14.04L15.4591 13.08C15.8591 12.78 15.9991 12.7 16.6691 12.7C17.3391 12.7 17.8991 12.76 18.3491 12.88C18.5591 12.94 18.7791 12.89 18.9591 12.76C19.1291 12.63 19.2291 12.42 19.2291 12.21V6.42C19.2091 4.35 19.2091 2 14.7891 2Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15.0205 17.7C15.0205 18.09 14.7105 18.4 14.3305 18.4H9.67047C9.29047 18.4 8.98047 18.09 8.98047 17.7C8.98047 17.31 9.29047 17 9.67047 17H14.3305C14.7105 17 15.0205 17.31 15.0205 17.7Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectboxNotifLinear = ({
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
      <Path
        d="M10.55 9.22998H13.88"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.71997 6.22998H14.72"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectboxNotifOutline = ({
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
      <Path
        d="M13.8808 9.97998H10.5508C10.1408 9.97998 9.80078 9.63998 9.80078 9.22998C9.80078 8.81998 10.1408 8.47998 10.5508 8.47998H13.8808C14.2908 8.47998 14.6308 8.81998 14.6308 9.22998C14.6308 9.63998 14.3008 9.97998 13.8808 9.97998Z"
        fill="currentColor"
      />
      <Path
        d="M14.7207 6.97998H9.7207C9.3107 6.97998 8.9707 6.63998 8.9707 6.22998C8.9707 5.81998 9.3107 5.47998 9.7207 5.47998H14.7207C15.1307 5.47998 15.4707 5.81998 15.4707 6.22998C15.4707 6.63998 15.1407 6.97998 14.7207 6.97998Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectboxNotifTwotone = ({
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
      <Path
        opacity="0.4"
        d="M10.5508 9.22998H13.8808"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.7207 6.22998H14.7207"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DirectboxNotifBold,
  broken: DirectboxNotifBroken,
  bulk: DirectboxNotifBulk,
  linear: DirectboxNotifLinear,
  outline: DirectboxNotifOutline,
  twotone: DirectboxNotifTwotone,
};

export const DirectboxNotifIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
