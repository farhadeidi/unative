import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const BackSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM13.92 16.13H9C8.59 16.13 8.25 15.79 8.25 15.38C8.25 14.97 8.59 14.63 9 14.63H13.92C15.2 14.63 16.25 13.59 16.25 12.3C16.25 11.01 15.21 9.97 13.92 9.97H8.85L9.11 10.23C9.4 10.53 9.4 11 9.1 11.3C8.95 11.45 8.76 11.52 8.57 11.52C8.38 11.52 8.19 11.45 8.04 11.3L6.47 9.72C6.18 9.43 6.18 8.95 6.47 8.66L8.04 7.09C8.33 6.8 8.81 6.8 9.1 7.09C9.39 7.38 9.39 7.86 9.1 8.15L8.77 8.48H13.92C16.03 8.48 17.75 10.2 17.75 12.31C17.75 14.42 16.03 16.13 13.92 16.13Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BackSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.00039 15.3802H13.9204C15.6204 15.3802 17.0004 14.0002 17.0004 12.3002C17.0004 10.6002 15.6204 9.22021 13.9204 9.22021H7.15039"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.57 10.7701L7 9.19012L8.57 7.62012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 14V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BackSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.9195 8.48006H8.76945L9.09945 8.15006C9.38945 7.86006 9.38945 7.38006 9.09945 7.09006C8.80945 6.80006 8.32945 6.80006 8.03945 7.09006L6.46945 8.66006C6.17945 8.95006 6.17945 9.43006 6.46945 9.72006L8.03945 11.2901C8.18945 11.4401 8.37945 11.5101 8.56945 11.5101C8.75945 11.5101 8.94945 11.4401 9.09945 11.2901C9.38945 11.0001 9.38945 10.5201 9.09945 10.2301L8.83945 9.97006H13.9195C15.1995 9.97006 16.2495 11.0101 16.2495 12.3001C16.2495 13.5901 15.2094 14.6301 13.9195 14.6301H8.99945C8.58945 14.6301 8.24945 14.9701 8.24945 15.3801C8.24945 15.7901 8.58945 16.1301 8.99945 16.1301H13.9195C16.0295 16.1301 17.7495 14.4101 17.7495 12.3001C17.7495 10.1901 16.0295 8.48006 13.9195 8.48006Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BackSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.00002 15.3802H13.92C15.62 15.3802 17 14.0002 17 12.3002C17 10.6002 15.62 9.22021 13.92 9.22021H7.15002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.57 10.7701L7 9.19012L8.57 7.62012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BackSquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.9204 16.1297H9.00039C8.59039 16.1297 8.25039 15.7897 8.25039 15.3797C8.25039 14.9697 8.59039 14.6297 9.00039 14.6297H13.9204C15.2004 14.6297 16.2504 13.5897 16.2504 12.2997C16.2504 11.0097 15.2104 9.96973 13.9204 9.96973H7.15039C6.74039 9.96973 6.40039 9.62973 6.40039 9.21973C6.40039 8.80973 6.74039 8.46973 7.15039 8.46973H13.9204C16.0304 8.46973 17.7504 10.1897 17.7504 12.2997C17.7504 14.4097 16.0304 16.1297 13.9204 16.1297Z"
        fill="currentColor"
      />
      <Path
        d="M8.56945 11.5198C8.37945 11.5198 8.18945 11.4498 8.03945 11.2998L6.46945 9.72983C6.17945 9.43983 6.17945 8.95982 6.46945 8.66982L8.03945 7.09982C8.32945 6.80982 8.80945 6.80982 9.09945 7.09982C9.38945 7.38982 9.38945 7.86983 9.09945 8.15983L8.05945 9.19982L9.09945 10.2398C9.38945 10.5298 9.38945 11.0098 9.09945 11.2998C8.95945 11.4398 8.76945 11.5198 8.56945 11.5198Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BackSquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
      <G opacity="0.4">
        <Path
          d="M9.00039 15.3802H13.9204C15.6204 15.3802 17.0004 14.0002 17.0004 12.3002C17.0004 10.6002 15.6204 9.22021 13.9204 9.22021H7.15039"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.57 10.7701L7 9.19012L8.57 7.62012"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BackSquareBold,
  broken: BackSquareBroken,
  bulk: BackSquareBulk,
  linear: BackSquareLinear,
  outline: BackSquareOutline,
  twotone: BackSquareTwotone,
};

export const BackSquareIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
