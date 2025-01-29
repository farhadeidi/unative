import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const CameraSlashBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
        fill="currentColor"
      />
      <Path
        d="M16.5502 5.11L15.8302 3.66C15.3702 2.75 14.1702 2 13.1502 2H10.8602C9.83017 2 8.63017 2.75 8.17017 3.66L7.45017 5.11C7.17017 5.65 6.61017 6 6.00017 6C3.83017 6 2.11017 7.83 2.25017 9.99L2.77017 18.25C2.82017 19.1 3.03017 19.89 3.48017 20.52L18.0002 6C17.3902 6 16.8302 5.65 16.5502 5.11ZM9.50017 10.75H6.50017C6.09017 10.75 5.75017 10.41 5.75017 10C5.75017 9.59 6.09017 9.25 6.50017 9.25H9.50017C9.91017 9.25 10.2502 9.59 10.2502 10C10.2502 10.41 9.91017 10.75 9.50017 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M21.7503 9.98835L21.2303 18.2483C21.1003 20.3083 20.0003 21.9983 17.2403 21.9983H7.41026C6.52026 21.9983 6.07026 20.9183 6.70026 20.2883L9.17026 17.8183C9.48026 17.5083 9.96026 17.4683 10.3503 17.6883C11.0403 18.0783 11.8703 18.2283 12.7503 18.0383C14.0203 17.7683 15.0503 16.7283 15.3003 15.4483C15.4703 14.5883 15.3203 13.7783 14.9403 13.1083C14.7203 12.7183 14.7503 12.2283 15.0703 11.9183L19.5703 7.41835C19.9803 7.00835 20.6703 7.05835 21.0203 7.52835C21.5403 8.20835 21.8103 9.06835 21.7503 9.98835Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CameraSlashBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6 10H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.75977 22H17.2398C19.9998 22 21.0998 20.31 21.2298 18.25L21.7498 9.99001C21.8098 9.06001 21.5198 8.19001 21.0098 7.51001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.76953 18.25C2.81953 19.07 3.02953 19.84 3.43953 20.46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.0002 6C17.3902 6 16.8302 5.65 16.5502 5.11L15.8302 3.66C15.3702 2.75 14.1702 2 13.1502 2H10.8602C9.83017 2 8.63017 2.75 8.17017 3.66L7.45017 5.11C7.17017 5.65 6.61017 6 6.00017 6C3.83017 6 2.11017 7.83 2.25017 9.99L2.50017 14.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 17.31C10.55 17.74 11.25 18 12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 14.11 15.07 13.52 14.75 13.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CameraSlashBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.7507 9.99L21.2307 18.25C21.1007 20.31 20.0007 22 17.2407 22H6.7607C6.1707 22 5.6607 21.92 5.2207 21.78L20.2507 6.75C21.2307 7.48 21.8407 8.67 21.7507 9.99Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18.0002 6L3.48017 20.52C3.03017 19.89 2.82017 19.1 2.77017 18.25L2.25017 9.99C2.11017 7.83 3.83017 6 6.00017 6C6.61017 6 7.17017 5.65 7.45017 5.11L8.17017 3.66C8.63017 2.75 9.83017 2 10.8602 2H13.1502C14.1702 2 15.3702 2.75 15.8302 3.66L16.5502 5.11C16.8302 5.65 17.3902 6 18.0002 6Z"
        fill="currentColor"
      />
      <Path
        d="M9.5 10.75H6.5C6.09 10.75 5.75 10.41 5.75 10C5.75 9.59 6.09 9.25 6.5 9.25H9.5C9.91 9.25 10.25 9.59 10.25 10C10.25 10.41 9.91 10.75 9.5 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.5709 11.4299L8.68086 15.3199C8.65086 15.1399 8.63086 14.9399 8.63086 14.7499C8.63086 12.8899 10.1409 11.3799 12.0009 11.3799C12.1909 11.3799 12.3909 11.3999 12.5709 11.4299Z"
        fill="currentColor"
      />
      <Path
        d="M15.38 14.75C15.38 16.61 13.86 18.12 12 18.12C11.13 18.12 10.34 17.79 9.75 17.25L14.5 12.5C15.05 13.09 15.38 13.88 15.38 14.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CameraSlashLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6 10H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.76001 22H17.24C20 22 21.1 20.31 21.23 18.25L21.75 9.99001C21.81 9.06001 21.52 8.19001 21.01 7.51001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 6C17.39 6 16.83 5.65 16.55 5.11L15.83 3.66C15.37 2.75 14.17 2 13.15 2H10.86C9.83005 2 8.63005 2.75 8.17005 3.66L7.45005 5.11C7.17005 5.65 6.61005 6 6.00005 6C3.83005 6 2.11005 7.83 2.25005 9.99L2.77005 18.25C2.82005 19.07 3.03005 19.84 3.44005 20.46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 17.31C10.55 17.74 11.25 18 12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 14.11 15.07 13.52 14.75 13.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CameraSlashOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 10.75H6C5.59 10.75 5.25 10.41 5.25 10C5.25 9.59 5.59 9.25 6 9.25H9C9.41 9.25 9.75 9.59 9.75 10C9.75 10.41 9.41 10.75 9 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M17.2398 22.75H6.75977C6.34977 22.75 6.00977 22.41 6.00977 22C6.00977 21.59 6.34977 21.25 6.75977 21.25H17.2398C19.2598 21.25 20.3498 20.22 20.4798 18.2L20.9998 9.94004C21.0498 9.23004 20.8398 8.53004 20.4098 7.96004C20.1598 7.63004 20.2298 7.16004 20.5598 6.91004C20.8898 6.66004 21.3598 6.73004 21.6098 7.06004C22.2498 7.92004 22.5698 8.97004 22.4998 10.04L21.9798 18.3C21.7998 21.13 20.0698 22.75 17.2398 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M3.43969 21.21C3.19969 21.21 2.95968 21.09 2.80968 20.87C2.34968 20.17 2.07969 19.3 2.01969 18.29L1.49969 10.04C1.41969 8.79 1.84969 7.59 2.70969 6.68C3.55969 5.77 4.75969 5.25 5.99969 5.25C6.31969 5.25 6.62969 5.06 6.77969 4.76L7.49969 3.33C8.08969 2.16 9.56968 1.25 10.8597 1.25H13.1497C14.4397 1.25 15.9097 2.16 16.4997 3.32L17.2197 4.78C17.3697 5.06 17.6697 5.25 17.9997 5.25C18.4097 5.25 18.7497 5.59 18.7497 6C18.7497 6.41 18.4097 6.75 17.9997 6.75C17.1097 6.75 16.2997 6.25 15.8797 5.46L15.1497 4C14.8197 3.34 13.8797 2.76 13.1397 2.76H10.8497C10.1097 2.76 9.16969 3.34 8.82969 4.01L8.11969 5.44C7.69969 6.25 6.88969 6.75 5.99969 6.75C5.15969 6.75 4.37968 7.09 3.79969 7.7C3.22969 8.31 2.93969 9.11 2.99969 9.94L3.51969 18.2C3.55968 18.93 3.74969 19.57 4.06969 20.04C4.29969 20.39 4.19968 20.85 3.85968 21.08C3.72968 21.17 3.57969 21.21 3.43969 21.21Z"
        fill="currentColor"
      />
      <Path
        d="M11.9997 18.7501C11.1097 18.7501 10.2397 18.4501 9.53968 17.9001C9.20968 17.6401 9.15968 17.1701 9.40968 16.8501C9.66968 16.5201 10.1397 16.4701 10.4597 16.7201C10.8997 17.0601 11.4397 17.2501 11.9997 17.2501C13.3797 17.2501 14.4997 16.1301 14.4997 14.7501C14.4997 14.2701 14.3697 13.8101 14.1197 13.4201C13.8997 13.0701 13.9997 12.6101 14.3497 12.3801C14.6997 12.1601 15.1597 12.2601 15.3897 12.6101C15.7897 13.2401 16.0097 13.9801 16.0097 14.7401C15.9997 16.9601 14.2097 18.7501 11.9997 18.7501Z"
        fill="currentColor"
      />
      <Path
        d="M1.99945 22.7499C1.80945 22.7499 1.61945 22.6799 1.46945 22.5299C1.17945 22.2399 1.17945 21.7599 1.46945 21.4699L21.4695 1.46994C21.7595 1.17994 22.2395 1.17994 22.5295 1.46994C22.8195 1.75994 22.8195 2.23994 22.5295 2.52994L2.52945 22.5299C2.37945 22.6799 2.18945 22.7499 1.99945 22.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CameraSlashTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6 10H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.75977 21.9998H17.2398C19.9998 21.9998 21.0998 20.3098 21.2298 18.2498L21.7498 9.98977C21.8098 9.05977 21.5198 8.18977 21.0098 7.50977"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.0002 6C17.3902 6 16.8302 5.65 16.5502 5.11L15.8302 3.66C15.3702 2.75 14.1702 2 13.1502 2H10.8602C9.83017 2 8.63017 2.75 8.17017 3.66L7.45017 5.11C7.17017 5.65 6.61017 6 6.00017 6C3.83017 6 2.11017 7.83 2.25017 9.99L2.77017 18.25C2.82017 19.07 3.03017 19.84 3.44017 20.46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10 17.31C10.55 17.74 11.25 18 12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 14.11 15.07 13.52 14.75 13.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: CameraSlashBold,
  broken: CameraSlashBroken,
  bulk: CameraSlashBulk,
  linear: CameraSlashLinear,
  outline: CameraSlashOutline,
  twotone: CameraSlashTwotone,
};

export const CameraSlashIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default CameraSlashIcon;
