import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const BookmarkBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 7.80983V16.1898C22 19.3998 19.4 21.9998 16.19 21.9998H7.81C4.6 21.9998 2 19.3998 2 16.1898V7.80983C2 5.31983 3.02 3.50983 4.83 2.62983C5.49 2.30983 6.25 2.80983 6.25 3.53983V12.4198C6.25 13.6098 6.71 14.5598 7.54 15.0398C8.38 15.5098 9.44 15.4098 10.52 14.7598L11.82 13.9798C11.9 13.9398 12.1 13.9398 12.16 13.9698L13.48 14.7598C14.2 15.1898 14.82 15.3298 15.32 15.3298C15.84 15.3298 16.24 15.1698 16.48 15.0298C17.29 14.5598 17.75 13.6098 17.75 12.4198V3.53983C17.75 2.80983 18.52 2.30983 19.17 2.62983C20.98 3.50983 22 5.31983 22 7.80983Z"
        fill="currentColor"
      />
      <Path
        d="M15.25 2C15.8 2 16.25 2.45 16.25 3V12.42C16.25 13.06 16.06 13.54 15.73 13.73C15.39 13.93 14.85 13.83 14.25 13.47L12.93 12.68C12.42 12.37 11.58 12.37 11.07 12.68L9.75 13.47C9.15 13.83 8.61 13.92 8.27 13.73C7.94 13.54 7.75 13.06 7.75 12.42V3C7.75 2.45 8.2 2 8.75 2H15.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BookmarkBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V12.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 4.98994V2.43994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 2.43994V12.4199C17 14.3899 15.59 15.1599 13.86 14.1199L12.54 13.3299C12.24 13.1499 11.76 13.1499 11.46 13.3299L10.14 14.1199C8.41 15.1499 7 14.3899 7 12.4199V8.99994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BookmarkBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.25 2.0002V12.42C16.25 13.06 16.06 13.54 15.73 13.73C15.39 13.93 14.85 13.83 14.25 13.47L12.93 12.68C12.42 12.37 11.58 12.37 11.07 12.68L9.75 13.47C9.15 13.83 8.61 13.92 8.27 13.73C7.94 13.54 7.75 13.06 7.75 12.42V2.00027C7.77327 2.00009 7.79661 2 7.82 2H16.19C16.21 2 16.23 2.00007 16.25 2.0002Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BookmarkLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 2.43994V12.4199C17 14.3899 15.59 15.1599 13.86 14.1199L12.54 13.3299C12.24 13.1499 11.76 13.1499 11.46 13.3299L10.14 14.1199C8.41 15.1499 7 14.3899 7 12.4199V2.43994"
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
      <Path
        d="M17 2.43994V12.4199C17 14.3899 15.59 15.1599 13.86 14.1199L12.54 13.3299C12.24 13.1499 11.76 13.1499 11.46 13.3299L10.14 14.1199C8.41 15.1499 7 14.3899 7 12.4199V2.43994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BookmarkOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
      <Path
        d="M8.68 15.3299C8.26 15.3299 7.87 15.2299 7.53 15.0399C6.7 14.5699 6.25 13.6399 6.25 12.4199V2.43994C6.25 2.02994 6.59 1.68994 7 1.68994C7.41 1.68994 7.75 2.02994 7.75 2.43994V12.4199C7.75 13.0699 7.94 13.5499 8.27 13.7299C8.62 13.9299 9.16 13.8299 9.75 13.4799L11.07 12.6899C11.61 12.3699 12.38 12.3699 12.92 12.6899L14.24 13.4799C14.84 13.8399 15.38 13.9299 15.72 13.7299C16.05 13.5399 16.24 13.0599 16.24 12.4199V2.43994C16.24 2.02994 16.58 1.68994 16.99 1.68994C17.4 1.68994 17.74 2.02994 17.74 2.43994V12.4199C17.74 13.6399 17.29 14.5699 16.46 15.0399C15.63 15.5099 14.54 15.4099 13.47 14.7699L12.15 13.9799C12.09 13.9399 11.9 13.9399 11.84 13.9799L10.52 14.7699C9.9 15.1399 9.26 15.3299 8.68 15.3299Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
      <Path
        d="M8.68 15.3299C8.26 15.3299 7.87 15.2299 7.53 15.0399C6.7 14.5699 6.25 13.6399 6.25 12.4199V2.43994C6.25 2.02994 6.59 1.68994 7 1.68994C7.41 1.68994 7.75 2.02994 7.75 2.43994V12.4199C7.75 13.0699 7.94 13.5499 8.27 13.7299C8.62 13.9299 9.16 13.8299 9.75 13.4799L11.07 12.6899C11.61 12.3699 12.38 12.3699 12.92 12.6899L14.24 13.4799C14.84 13.8399 15.38 13.9299 15.72 13.7299C16.05 13.5399 16.24 13.0599 16.24 12.4199V2.43994C16.24 2.02994 16.58 1.68994 16.99 1.68994C17.4 1.68994 17.74 2.02994 17.74 2.43994V12.4199C17.74 13.6399 17.29 14.5699 16.46 15.0399C15.63 15.5099 14.54 15.4099 13.47 14.7699L12.15 13.9799C12.09 13.9399 11.9 13.9399 11.84 13.9799L10.52 14.7699C9.9 15.1399 9.26 15.3299 8.68 15.3299Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BookmarkTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17 2.43994V12.4199C17 14.3899 15.59 15.1599 13.86 14.1199L12.54 13.3299C12.24 13.1499 11.76 13.1499 11.46 13.3299L10.14 14.1199C8.41 15.1499 7 14.3899 7 12.4199V2.43994"
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
  bold: BookmarkBold,
  broken: BookmarkBroken,
  bulk: BookmarkBulk,
  linear: BookmarkLinear,
  outline: BookmarkOutline,
  twotone: BookmarkTwotone,
};

export const BookmarkIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default BookmarkIcon;
