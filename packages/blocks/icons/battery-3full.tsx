import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const Battery3FullBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.4192 9.00047C20.2792 8.99047 20.0992 8.98047 19.8992 8.98047C19.5092 8.98047 19.1992 9.29047 19.1992 9.68047V14.3305C19.1992 14.7205 19.5092 15.0305 19.8992 15.0305C20.0992 15.0305 20.2692 15.0205 20.4392 15.0105C21.9992 14.8305 21.9992 13.7305 21.9992 12.9305V11.0705C21.9992 10.2705 21.9992 9.17047 20.4192 9.00047Z"
        fill="currentColor"
      />
      <Path
        d="M12.93 4.78906H7.35C3.25 4.78906 2 6.03906 2 10.1391V13.8591C2 17.9591 3.25 19.2091 7.35 19.2091H12.93C17.03 19.2091 18.28 17.9591 18.28 13.8591V10.1391C18.28 6.03906 17.03 4.78906 12.93 4.78906ZM7.1 14.1791C7.02 14.5191 6.71 14.7491 6.37 14.7491C6.31 14.7491 6.25 14.7391 6.19 14.7291C5.79 14.6291 5.54 14.2191 5.64 13.8191C5.94 12.6291 5.94 11.3691 5.64 10.1791C5.54 9.77906 5.78 9.36906 6.19 9.26906C6.6 9.16906 7 9.41906 7.1 9.81906C7.46 11.2491 7.46 12.7491 7.1 14.1791ZM10.6 14.1791C10.52 14.5191 10.21 14.7491 9.87 14.7491C9.81 14.7491 9.75 14.7391 9.69 14.7291C9.29 14.6291 9.04 14.2191 9.14 13.8191C9.44 12.6291 9.44 11.3691 9.14 10.1791C9.04 9.77906 9.28 9.36906 9.69 9.26906C10.09 9.16906 10.5 9.40906 10.6 9.81906C10.96 11.2491 10.96 12.7491 10.6 14.1791Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Battery3FullBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.38086 10C6.71086 11.31 6.71086 12.69 6.38086 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.88086 10C10.2109 11.31 10.2109 12.69 9.88086 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.01 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Battery3FullBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.93 4.79004H7.35C3.25 4.79004 2 6.04004 2 10.14V13.86C2 17.96 3.25 19.21 7.35 19.21H12.93C17.03 19.21 18.28 17.96 18.28 13.86V10.14C18.28 6.04004 17.03 4.79004 12.93 4.79004Z"
        fill="currentColor"
      />
      <Path
        d="M20.4192 8.99998C20.2792 8.98998 20.0992 8.97998 19.8992 8.97998C19.5092 8.97998 19.1992 9.28998 19.1992 9.67998V14.33C19.1992 14.72 19.5092 15.03 19.8992 15.03C20.0992 15.03 20.2692 15.02 20.4392 15.01C21.9992 14.83 21.9992 13.73 21.9992 12.93V11.07C21.9992 10.27 21.9992 9.16998 20.4192 8.99998Z"
        fill="currentColor"
      />
      <Path
        d="M6.37958 14.7501C6.31958 14.7501 6.25958 14.7401 6.19958 14.7301C5.79958 14.6301 5.54958 14.2201 5.64958 13.8201C5.94958 12.6301 5.94958 11.3701 5.64958 10.1801C5.54958 9.7801 5.78958 9.3701 6.19958 9.2701C6.59958 9.1701 6.99958 9.4201 7.09958 9.8201C7.45958 11.2501 7.45958 12.7601 7.09958 14.1801C7.01958 14.5201 6.70958 14.7501 6.37958 14.7501Z"
        fill="currentColor"
      />
      <Path
        d="M9.87959 14.7499C9.81959 14.7499 9.75959 14.7399 9.69959 14.7299C9.29959 14.6299 9.04958 14.2199 9.14958 13.8199C9.44958 12.6299 9.44958 11.3699 9.14958 10.1799C9.04958 9.77995 9.28959 9.36995 9.69959 9.26995C10.0996 9.16995 10.5096 9.40995 10.6096 9.81995C10.9696 11.2499 10.9696 12.7599 10.6096 14.1799C10.5196 14.5199 10.2096 14.7499 9.87959 14.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Battery3FullLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.38 10C6.71 11.31 6.71 12.69 6.38 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.88 10C10.21 11.31 10.21 12.69 9.88 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Battery3FullOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.5 15.25C20.09 15.25 19.75 14.91 19.75 14.5C19.75 14.09 20.09 13.75 20.5 13.75C21.09 13.75 21.22 13.66 21.23 13.66C21.25 13.6 21.25 13.25 21.25 13V11C21.25 10.75 21.25 10.41 21.21 10.32C21.2 10.33 21.05 10.25 20.5 10.25C20.09 10.25 19.75 9.91 19.75 9.5C19.75 9.09 20.09 8.75 20.5 8.75C22.58 8.75 22.75 9.77 22.75 11V13C22.75 14.23 22.58 15.25 20.5 15.25Z"
        fill="currentColor"
      />
      <Path
        d="M6.37958 14.7501C6.31958 14.7501 6.25958 14.7401 6.19958 14.7301C5.79958 14.6301 5.54958 14.2201 5.64958 13.8201C5.94958 12.6301 5.94958 11.3701 5.64958 10.1801C5.54958 9.7801 5.78958 9.3701 6.19958 9.2701C6.59958 9.1701 6.99958 9.4201 7.09958 9.8201C7.45958 11.2501 7.45958 12.7601 7.09958 14.1801C7.01958 14.5201 6.70958 14.7501 6.37958 14.7501Z"
        fill="currentColor"
      />
      <Path
        d="M9.87959 14.7499C9.81959 14.7499 9.75959 14.7399 9.69959 14.7299C9.29959 14.6299 9.04958 14.2199 9.14958 13.8199C9.44958 12.6299 9.44958 11.3699 9.14958 10.1799C9.04958 9.77995 9.28959 9.36995 9.69959 9.26995C10.0996 9.16995 10.5096 9.40995 10.6096 9.81995C10.9696 11.2499 10.9696 12.7599 10.6096 14.1799C10.5196 14.5199 10.2096 14.7499 9.87959 14.7499Z"
        fill="currentColor"
      />
      <Path
        d="M13 19.75H7C2.59 19.75 1.25 18.41 1.25 14V10C1.25 5.59 2.59 4.25 7 4.25H13C17.41 4.25 18.75 5.59 18.75 10V14C18.75 18.41 17.41 19.75 13 19.75ZM7 5.75C3.43 5.75 2.75 6.43 2.75 10V14C2.75 17.57 3.43 18.25 7 18.25H13C16.57 18.25 17.25 17.57 17.25 14V10C17.25 6.43 16.57 5.75 13 5.75H7Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Battery3FullTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        opacity="0.34"
        d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M6.38086 10C6.71086 11.31 6.71086 12.69 6.38086 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M9.88086 10C10.2109 11.31 10.2109 12.69 9.88086 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Battery3FullBold,
  broken: Battery3FullBroken,
  bulk: Battery3FullBulk,
  linear: Battery3FullLinear,
  outline: Battery3FullOutline,
  twotone: Battery3FullTwotone,
};

export const Battery3FullIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
