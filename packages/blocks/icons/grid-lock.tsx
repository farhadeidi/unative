import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const GridLockBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.5298 17.31V17.15C21.5298 15.22 20.5498 14.25 18.6298 14.25C16.7098 14.25 15.7298 15.23 15.7298 17.15V17.31C14.6798 17.57 14.2598 18.29 14.2598 19.73V20.47C14.2598 22.32 14.9498 23 16.7898 23H20.4698C22.3198 23 22.9998 22.31 22.9998 20.47V19.73C22.9998 18.3 22.5798 17.57 21.5298 17.31ZM18.6198 15.63C19.9098 15.63 20.1398 16.12 20.1398 17.15V17.2H17.0998V17.15C17.0998 16.12 17.3298 15.63 18.6198 15.63Z"
        fill="currentColor"
      />
      <Path
        d="M6.74683 2.06549C7.29669 1.99425 7.75 2.45112 7.75 3.00557V6.8C7.75 7.35229 7.30228 7.8 6.75 7.8H3C2.44772 7.8 1.9918 7.35027 2.05867 6.80204C2.38633 4.11548 4.07187 2.41205 6.74683 2.06549Z"
        fill="currentColor"
      />
      <Path
        d="M20.93 7.8H17.25C16.6977 7.8 16.25 7.35228 16.25 6.8V3.00625C16.25 2.45153 16.7041 1.99459 17.2542 2.06633C19.8878 2.40978 21.5645 4.0681 21.93 6.68C22.01 7.27 21.53 7.8 20.93 7.8Z"
        fill="currentColor"
      />
      <Path
        d="M6.75 16.3008C7.30228 16.3008 7.75 16.7485 7.75 17.3008V20.9208C7.75 21.5208 7.22 22.0008 6.62 21.9208C4.05088 21.5385 2.43008 19.8918 2.07373 17.3109C1.99752 16.7589 2.4555 16.3008 3.01274 16.3008H6.75Z"
        fill="currentColor"
      />
      <Path
        d="M7.75 10.3008C7.75 9.7485 7.30228 9.30078 6.75 9.30078H3C2.44772 9.30078 2 9.7485 2 10.3008V13.8008C2 14.3531 2.44772 14.8008 3 14.8008H6.75C7.30228 14.8008 7.75 14.3531 7.75 13.8008V10.3008Z"
        fill="currentColor"
      />
      <Path
        d="M14.75 10.3008C14.75 9.7485 14.3023 9.30078 13.75 9.30078H10.25C9.69772 9.30078 9.25 9.7485 9.25 10.3008V13.8008C9.25 14.3531 9.69772 14.8008 10.25 14.8008H13.75C14.3 14.8008 14.75 14.3508 14.75 13.8008V10.3008Z"
        fill="currentColor"
      />
      <Path
        d="M14.75 3C14.75 2.44771 14.3023 2 13.75 2H10.25C9.69772 2 9.25 2.44772 9.25 3V6.8C9.25 7.35229 9.69772 7.8 10.25 7.8H13.75C14.3023 7.8 14.75 7.35228 14.75 6.8V3Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GridLockBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.0293 8.5H21.9993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.0293 15.5H11.9993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.50977 21.99V2.01001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5098 11.99V2.01001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5996 17.2V16.4C15.5996 15.07 15.9996 14 17.9996 14C19.9996 14 20.3996 15.07 20.3996 16.4V17.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 22H16C14.4 22 14 21.6 14 20V19.2C14 17.6 14.4 17.2 16 17.2H20C21.6 17.2 22 17.6 22 19.2V20C22 21.6 21.6 22 20 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GridLockBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.5298 17.31V17.15C21.5298 15.22 20.5498 14.25 18.6298 14.25C16.7098 14.25 15.7298 15.23 15.7298 17.15V17.31C14.6798 17.57 14.2598 18.29 14.2598 19.73V20.47C14.2598 22.32 14.9498 23 16.7898 23H20.4698C22.3198 23 22.9998 22.31 22.9998 20.47V19.73C22.9998 18.3 22.5798 17.57 21.5298 17.31ZM18.6198 15.63C19.9098 15.63 20.1398 16.12 20.1398 17.15V17.2H17.0998V17.15C17.0998 16.12 17.3298 15.63 18.6198 15.63Z"
        fill="currentColor"
      />
      <Path
        d="M8.38971 2.16992V8.61993H1.92969V7.93994C1.92969 4.32994 4.0797 2.17993 7.6897 2.17993H8.38971V2.16992Z"
        fill="currentColor"
      />
      <Path
        d="M21.7698 7.93018C21.7698 8.31018 21.4598 8.61017 21.0898 8.61017H15.3398V2.16016H16.0099C19.1899 2.17016 21.7698 4.75018 21.7698 7.93018Z"
        fill="currentColor"
      />
      <Path
        d="M8.38947 15.5503V21.3103C8.38947 21.6903 8.07944 21.9903 7.70944 21.9903H7.69946C4.51946 21.9903 1.93945 19.4103 1.93945 16.2303V15.5503H8.38947Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M8.39944 8.61035H1.93945V15.5504H8.39944V8.61035Z"
        fill="currentColor"
      />
      <Path
        d="M15.3306 8.61035V14.5504C15.3306 15.1004 14.8806 15.5504 14.3306 15.5504H8.39062V8.61035H15.3306Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15.3306 2.16992H8.39062V8.61993H15.3306V2.16992Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GridLockLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.03 8.5H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.03 15.5H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.51001 21.99V2.01001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.51 11.99V2.01001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.6 17.2V16.4C15.6 15.07 16 14 18 14C20 14 20.4 15.07 20.4 16.4V17.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 22H16C14.4 22 14 21.6 14 20V19.2C14 17.6 14.4 17.2 16 17.2H20C21.6 17.2 22 17.6 22 19.2V20C22 21.6 21.6 22 20 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GridLockOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V11C22.75 11.41 22.41 11.75 22 11.75C21.59 11.75 21.25 11.41 21.25 11V9C21.25 4.39 19.61 2.75 15 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H10C10.41 21.25 10.75 21.59 10.75 22C10.75 22.41 10.41 22.75 10 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M22.0013 9.25H2.03125C1.62125 9.25 1.28125 8.91 1.28125 8.5C1.28125 8.09 1.62125 7.75 2.03125 7.75H22.0013C22.4113 7.75 22.7513 8.09 22.7513 8.5C22.7513 8.91 22.4113 9.25 22.0013 9.25Z"
        fill="currentColor"
      />
      <Path
        d="M12.0013 16.25H2.03125C1.62125 16.25 1.28125 15.91 1.28125 15.5C1.28125 15.09 1.62125 14.75 2.03125 14.75H12.0013C12.4113 14.75 12.7513 15.09 12.7513 15.5C12.7513 15.91 12.4113 16.25 12.0013 16.25Z"
        fill="currentColor"
      />
      <Path
        d="M8.50977 22.74C8.09977 22.74 7.75977 22.4 7.75977 21.99V2.02002C7.75977 1.61002 8.09977 1.27002 8.50977 1.27002C8.91977 1.27002 9.25977 1.61002 9.25977 2.02002V21.99C9.25977 22.4 8.92977 22.74 8.50977 22.74Z"
        fill="currentColor"
      />
      <Path
        d="M15.5098 12.74C15.0998 12.74 14.7598 12.4 14.7598 11.99V2.02002C14.7598 1.61002 15.0998 1.27002 15.5098 1.27002C15.9198 1.27002 16.2598 1.61002 16.2598 2.02002V11.99C16.2598 12.4 15.9298 12.74 15.5098 12.74Z"
        fill="currentColor"
      />
      <Path
        d="M20.3996 17.95C19.9896 17.95 19.6496 17.61 19.6496 17.2V16.4C19.6496 15.28 19.3996 14.75 17.9996 14.75C16.5996 14.75 16.3496 15.28 16.3496 16.4V17.2C16.3496 17.61 16.0096 17.95 15.5996 17.95C15.1896 17.95 14.8496 17.61 14.8496 17.2V16.4C14.8496 14.31 15.9096 13.25 17.9996 13.25C20.0896 13.25 21.1496 14.31 21.1496 16.4V17.2C21.1496 17.61 20.8096 17.95 20.3996 17.95Z"
        fill="currentColor"
      />
      <Path
        d="M20 22.7502H16C14 22.7502 13.25 22.0002 13.25 20.0002V19.2002C13.25 17.2002 14 16.4502 16 16.4502H20C22 16.4502 22.75 17.2002 22.75 19.2002V20.0002C22.75 22.0002 22 22.7502 20 22.7502ZM16 17.9502C14.81 17.9502 14.75 18.0102 14.75 19.2002V20.0002C14.75 21.1802 14.82 21.2502 16 21.2502H20C21.18 21.2502 21.25 21.1802 21.25 20.0002V19.2002C21.25 18.0102 21.19 17.9502 20 17.9502H16Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GridLockTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M2.0293 8.5H21.9993"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2.0293 15.5H11.9993"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.50977 21.9897V2.00977"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.5098 11.9897V2.00977"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M15.5996 17.2V16.4C15.5996 15.07 15.9996 14 17.9996 14C19.9996 14 20.3996 15.07 20.3996 16.4V17.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 22.0002H16C14.4 22.0002 14 21.6002 14 20.0002V19.2002C14 17.6002 14.4 17.2002 16 17.2002H20C21.6 17.2002 22 17.6002 22 19.2002V20.0002C22 21.6002 21.6 22.0002 20 22.0002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: GridLockBold,
  broken: GridLockBroken,
  bulk: GridLockBulk,
  linear: GridLockLinear,
  outline: GridLockOutline,
  twotone: GridLockTwotone,
};

export const GridLockIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
