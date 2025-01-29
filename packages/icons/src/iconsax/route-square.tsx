import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const RouteSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.35 9.05L15.01 16.59C14.45 18.38 11.94 18.41 11.35 16.63L10.65 14.56C10.46 13.99 10.01 13.53 9.44 13.35L7.36 12.65C5.6 12.06 5.62 9.53 7.41 8.99L14.95 6.64C16.43 6.19 17.82 7.58 17.35 9.05Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RouteSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13.05V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.3509 9.05004L15.0109 16.59C14.4509 18.38 11.9409 18.41 11.3509 16.63L10.651 14.56C10.461 13.99 10.0109 13.53 9.44095 13.35L7.36095 12.65C5.59095 12.06 5.62095 9.53004 7.41095 8.99004L14.951 6.64003C16.431 6.19003 17.8209 7.58004 17.3509 9.05004Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RouteSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.3509 9.04979L15.0109 16.5898C14.4509 18.3798 11.9409 18.4098 11.3509 16.6298L10.651 14.5598C10.461 13.9898 10.0109 13.5298 9.44095 13.3498L7.36095 12.6498C5.59095 12.0598 5.62095 9.52979 7.41095 8.98979L14.951 6.63979C16.431 6.18979 17.8209 7.57979 17.3509 9.04979Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RouteSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.35 9.05004L15.01 16.59C14.45 18.38 11.94 18.41 11.35 16.63L10.65 14.56C10.46 13.99 10.01 13.53 9.43997 13.35L7.35997 12.65C5.58997 12.06 5.61997 9.53004 7.40997 8.99004L14.95 6.64003C16.43 6.19003 17.82 7.58004 17.35 9.05004Z"
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

const RouteSquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.1807 18.6999C12.0107 18.6999 11.0207 17.9799 10.6507 16.8699L9.95072 14.7999C9.84072 14.4399 9.56072 14.1699 9.22072 14.0599L7.14072 13.3599C6.02072 12.9799 5.30072 11.9699 5.32072 10.7899C5.34072 9.60992 6.08072 8.61994 7.21072 8.26994L14.7407 5.92992C15.6907 5.63992 16.7207 5.88994 17.4207 6.59994C18.1207 7.30994 18.3707 8.32993 18.0807 9.27993L15.7407 16.8199C15.3907 17.9499 14.4007 18.6899 13.2107 18.7099C13.2007 18.6999 13.1907 18.6999 13.1807 18.6999ZM15.5207 7.29993C15.4007 7.29993 15.2907 7.31994 15.1707 7.34994L7.63072 9.69993C7.02072 9.88993 6.80072 10.3899 6.80072 10.8099C6.79072 11.2199 7.00072 11.7399 7.60072 11.9399L9.68072 12.6299C10.4807 12.8899 11.1107 13.5199 11.3707 14.3299L12.0607 16.3899C12.2607 16.9899 12.7307 17.1799 13.1907 17.1999C13.6007 17.1999 14.1107 16.9799 14.3007 16.3699L16.6407 8.82993C16.7707 8.40993 16.6607 7.96993 16.3507 7.65993C16.1207 7.41993 15.8307 7.29993 15.5207 7.29993Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RouteSquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.3509 9.04979L15.0109 16.5898C14.4509 18.3798 11.9409 18.4098 11.3509 16.6298L10.651 14.5598C10.461 13.9898 10.0109 13.5298 9.44095 13.3498L7.36095 12.6498C5.59095 12.0598 5.62095 9.5298 7.41095 8.9898L14.951 6.63979C16.431 6.18979 17.8209 7.57979 17.3509 9.04979Z"
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
  bold: RouteSquareBold,
  broken: RouteSquareBroken,
  bulk: RouteSquareBulk,
  linear: RouteSquareLinear,
  outline: RouteSquareOutline,
  twotone: RouteSquareTwotone,
};

export const RouteSquareIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default RouteSquareIcon;
