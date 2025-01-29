import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const StoryBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.42 7.95109C18.86 10.3911 18.86 14.3511 16.42 16.7911C13.98 19.2311 10.02 19.2311 7.58 16.7911C5.14 14.3511 5.14 10.3911 7.58 7.95109C10.02 5.51109 13.98 5.51109 16.42 7.95109Z"
        fill="currentColor"
      />
      <Path
        d="M8.24905 22.3889C8.15905 22.3889 8.05905 22.3689 7.96905 22.3389C5.71905 21.4389 3.89905 19.8489 2.67905 17.7489C1.49905 15.6989 1.02905 13.3789 1.33905 11.0189C1.38905 10.6089 1.77905 10.3189 2.17905 10.3689C2.58905 10.4189 2.87905 10.7989 2.82905 11.2089C2.56905 13.2389 2.96905 15.2389 3.97905 16.9989C5.01905 18.7989 6.58906 20.1689 8.51905 20.9389C8.89906 21.0989 9.08905 21.5289 8.93905 21.9189C8.82905 22.2089 8.53905 22.3889 8.24905 22.3889Z"
        fill="currentColor"
      />
      <Path
        d="M5.84962 5.22937C5.62962 5.22937 5.40962 5.12937 5.25962 4.93937C4.99962 4.61937 5.05962 4.14938 5.38962 3.88938C7.28962 2.39938 9.57962 1.60938 11.9996 1.60938C14.3596 1.60938 16.6096 2.36937 18.4996 3.80937C18.8296 4.05937 18.8896 4.52938 18.6396 4.85938C18.3896 5.18937 17.9196 5.24937 17.5896 4.99937C15.9596 3.75937 14.0296 3.10937 11.9996 3.10937C9.91962 3.10937 7.94962 3.78938 6.30962 5.06938C6.16962 5.17937 6.00962 5.22937 5.84962 5.22937Z"
        fill="currentColor"
      />
      <Path
        d="M15.7507 22.3906C15.4507 22.3906 15.1707 22.2106 15.0507 21.9206C14.9007 21.5406 15.0807 21.1006 15.4707 20.9406C17.4007 20.1606 18.9707 18.8006 20.0107 17.0006C21.0307 15.2406 21.4307 13.2406 21.1607 11.2206C21.1107 10.8106 21.4007 10.4306 21.8107 10.3806C22.2107 10.3306 22.6007 10.6206 22.6507 11.0306C22.9507 13.3806 22.4907 15.7106 21.3107 17.7606C20.1007 19.8606 18.2707 21.4406 16.0207 22.3506C15.9407 22.3706 15.8507 22.3906 15.7507 22.3906Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StoryBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.42 7.94996C18.86 10.39 18.86 14.3499 16.42 16.7899C13.98 19.2299 10.02 19.2299 7.58 16.7899C5.14 14.3499 5.14 10.39 7.58 7.94996C8.95 6.57996 10.81 5.97998 12.6 6.14998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.25097 21.6399C6.25097 20.8399 4.50097 19.3899 3.34097 17.3799C2.20097 15.4099 1.82097 13.2199 2.09097 11.1299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.84961 4.47986C7.54961 3.14986 9.6796 2.35986 11.9996 2.35986C14.2696 2.35986 16.3596 3.12985 18.0396 4.40985"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.75 21.6399C17.75 20.8399 19.5 19.3899 20.66 17.3799C21.8 15.4099 22.18 13.2199 21.91 11.1299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const StoryBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.42 7.95012C18.86 10.3901 18.86 14.3501 16.42 16.7901C13.98 19.2301 10.02 19.2301 7.58 16.7901C5.14 14.3501 5.14 10.3901 7.58 7.95012C10.02 5.51012 13.98 5.51012 16.42 7.95012Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M8.24906 22.3899C8.15906 22.3899 8.05906 22.3699 7.96906 22.3399C5.71906 21.4399 3.89905 19.8499 2.67905 17.7499C1.49905 15.6999 1.02905 13.3799 1.33905 11.0199C1.38905 10.6099 1.77905 10.3199 2.17905 10.3699C2.58905 10.4199 2.87904 10.7999 2.82904 11.2099C2.56904 13.2299 2.96907 15.2299 3.97907 16.9899C5.01907 18.7899 6.58905 20.1599 8.51905 20.9299C8.89905 21.0899 9.08906 21.5198 8.93906 21.9098C8.82906 22.2098 8.53906 22.3899 8.24906 22.3899Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M5.84961 5.22986C5.62961 5.22986 5.40961 5.12988 5.25961 4.93988C4.99961 4.60988 5.05962 4.13989 5.38962 3.88989C7.29962 2.39989 9.57961 1.60986 11.9996 1.60986C14.3596 1.60986 16.6096 2.36988 18.4996 3.80988C18.8296 4.05988 18.8896 4.52986 18.6396 4.85986C18.3896 5.18986 17.9196 5.24988 17.5896 4.99988C15.9696 3.75988 14.0396 3.10986 11.9996 3.10986C9.91961 3.10986 7.9496 3.78989 6.3096 5.06989C6.1696 5.17989 6.00961 5.22986 5.84961 5.22986Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15.7507 22.3901C15.4507 22.3901 15.1707 22.2101 15.0507 21.9201C14.9007 21.5401 15.0807 21.1001 15.4707 20.9401C17.4007 20.1601 18.9707 18.8001 20.0107 17.0001C21.0307 15.2401 21.4307 13.2401 21.1607 11.2201C21.1107 10.8101 21.4007 10.4301 21.8107 10.3801C22.2107 10.3301 22.6007 10.6201 22.6507 11.0301C22.9507 13.3801 22.4907 15.7101 21.3107 17.7601C20.1007 19.8601 18.2707 21.4401 16.0207 22.3501C15.9407 22.3701 15.8507 22.3901 15.7507 22.3901Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StoryLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.42 7.95C18.86 10.39 18.86 14.35 16.42 16.79C13.98 19.23 10.02 19.23 7.58 16.79C5.14 14.35 5.14 10.39 7.58 7.95C10.02 5.51 13.98 5.51 16.42 7.95Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.24999 21.64C6.24999 20.84 4.49999 19.39 3.33999 17.38C2.19999 15.41 1.81999 13.22 2.08999 11.13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.84998 4.47998C7.54998 3.14998 9.67997 2.35999 12 2.35999C14.27 2.35999 16.36 3.12997 18.04 4.40997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.75 21.64C17.75 20.84 19.5 19.39 20.66 17.38C21.8 15.41 22.18 13.22 21.91 11.13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const StoryOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9995 19.3701C10.2095 19.3701 8.41945 18.6901 7.04945 17.3201C4.31945 14.5901 4.31945 10.1501 7.04945 7.42006C9.77945 4.69006 14.2195 4.69006 16.9495 7.42006C19.6795 10.1501 19.6795 14.5901 16.9495 17.3201C15.5795 18.6901 13.7895 19.3701 11.9995 19.3701ZM11.9995 6.87007C10.5895 6.87007 9.17945 7.41006 8.10945 8.48006C5.96945 10.6301 5.96945 14.1101 8.10945 16.2601C10.2595 18.4101 13.7495 18.4001 15.8895 16.2601C18.0295 14.1101 18.0295 10.6301 15.8895 8.48006C14.8195 7.41006 13.4095 6.87007 11.9995 6.87007Z"
        fill="currentColor"
      />
      <Path
        d="M8.24906 22.3899C8.15906 22.3899 8.05906 22.3699 7.96906 22.3399C5.71906 21.4399 3.89905 19.8499 2.67905 17.7499C1.49905 15.6999 1.02905 13.3799 1.33905 11.0199C1.38905 10.6099 1.76905 10.3199 2.17905 10.3699C2.58905 10.4199 2.87904 10.7999 2.82904 11.2099C2.56904 13.2299 2.96907 15.2299 3.97907 16.9899C5.01907 18.7899 6.58905 20.1599 8.51905 20.9299C8.89905 21.0899 9.08906 21.5198 8.93906 21.9098C8.82906 22.2098 8.53906 22.3899 8.24906 22.3899Z"
        fill="currentColor"
      />
      <Path
        d="M5.84961 5.22986C5.62961 5.22986 5.40961 5.12988 5.25961 4.93988C4.99961 4.60988 5.05962 4.13989 5.38962 3.88989C7.29962 2.39989 9.57961 1.60986 11.9996 1.60986C14.3596 1.60986 16.6096 2.36988 18.4996 3.80988C18.8296 4.05988 18.8896 4.52986 18.6396 4.85986C18.3896 5.18986 17.9196 5.24988 17.5896 4.99988C15.9696 3.75988 14.0396 3.10986 11.9996 3.10986C9.91961 3.10986 7.9496 3.78989 6.3096 5.06989C6.1696 5.17989 6.00961 5.22986 5.84961 5.22986Z"
        fill="currentColor"
      />
      <Path
        d="M15.7507 22.3901C15.4507 22.3901 15.1707 22.2101 15.0507 21.9201C14.9007 21.5401 15.0807 21.1001 15.4707 20.9401C17.4007 20.1601 18.9707 18.8001 20.0107 17.0001C21.0307 15.2401 21.4307 13.2401 21.1607 11.2201C21.1107 10.8101 21.4007 10.4301 21.8107 10.3801C22.2107 10.3301 22.6007 10.6201 22.6507 11.0301C22.9507 13.3801 22.4907 15.7101 21.3107 17.7601C20.1007 19.8601 18.2707 21.4401 16.0207 22.3501C15.9407 22.3701 15.8507 22.3901 15.7507 22.3901Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StoryTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.42 7.95012C18.86 10.3901 18.86 14.3501 16.42 16.7901C13.98 19.2301 10.02 19.2301 7.58 16.7901C5.14 14.3501 5.14 10.3901 7.58 7.95012C10.02 5.51012 13.98 5.51012 16.42 7.95012Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.25097 21.6399C6.25097 20.8399 4.50097 19.3899 3.34097 17.3799C2.20097 15.4099 1.82097 13.2199 2.09097 11.1299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5.84961 4.47986C7.54961 3.14986 9.6796 2.35986 11.9996 2.35986C14.2696 2.35986 16.3596 3.12985 18.0396 4.40985"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.75 21.6399C17.75 20.8399 19.5 19.3899 20.66 17.3799C21.8 15.4099 22.18 13.2199 21.91 11.1299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: StoryBold,
  broken: StoryBroken,
  bulk: StoryBulk,
  linear: StoryLinear,
  outline: StoryOutline,
  twotone: StoryTwotone,
};

export const StoryIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default StoryIcon;
