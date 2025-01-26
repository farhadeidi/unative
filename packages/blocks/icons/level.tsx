import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const LevelBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7 12.75H5C4.59 12.75 4.25 12.41 4.25 12C4.25 11.59 4.59 11.25 5 11.25H7C7.41 11.25 7.75 11.59 7.75 12C7.75 12.41 7.41 12.75 7 12.75ZM12 14.25C10.76 14.25 9.75 13.24 9.75 12C9.75 10.76 10.76 9.75 12 9.75C13.24 9.75 14.25 10.76 14.25 12C14.25 13.24 13.24 14.25 12 14.25ZM19 12.75H17C16.59 12.75 16.25 12.41 16.25 12C16.25 11.59 16.59 11.25 17 11.25H19C19.41 11.25 19.75 11.59 19.75 12C19.75 12.41 19.41 12.75 19 12.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LevelBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.19922 14.02C3.12922 18.58 7.15922 22 11.9992 22C16.8192 22 20.8392 18.59 21.7892 14.05"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.49094 3.07007C4.81094 4.43007 2.82094 6.96007 2.21094 9.98007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.81 10.06C20.91 5.46 16.86 2 12 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LevelBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <Path
        d="M12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z"
        fill="currentColor"
      />
      <Path
        d="M7 12.75H5C4.59 12.75 4.25 12.41 4.25 12C4.25 11.59 4.59 11.25 5 11.25H7C7.41 11.25 7.75 11.59 7.75 12C7.75 12.41 7.41 12.75 7 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M19 12.75H17C16.59 12.75 16.25 12.41 16.25 12C16.25 11.59 16.59 11.25 17 11.25H19C19.41 11.25 19.75 11.59 19.75 12C19.75 12.41 19.41 12.75 19 12.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LevelLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.19995 14.02C3.12995 18.58 7.15995 22 12 22C16.82 22 20.8399 18.59 21.7899 14.05"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.81 10.06C20.91 5.46 16.86 2 12 2C7.16995 2 3.13995 5.43001 2.19995 9.98001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LevelOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9995 22.7501C6.91954 22.7501 2.48954 19.1401 1.46954 14.1701C1.38954 13.7601 1.64954 13.3701 2.04954 13.2801C2.45954 13.2001 2.84954 13.4601 2.93954 13.8601C3.81954 18.1401 7.62954 21.2501 11.9995 21.2501C16.3595 21.2501 20.1695 18.1601 21.0595 13.9001C21.1395 13.4901 21.5395 13.2301 21.9495 13.3201C22.3595 13.4001 22.6195 13.8001 22.5295 14.2101C21.4895 19.1501 17.0695 22.7501 11.9995 22.7501Z"
        fill="currentColor"
      />
      <Path
        d="M21.8109 10.81C21.4609 10.81 21.1509 10.56 21.0809 10.2C20.2309 5.88001 16.4109 2.73999 12.0009 2.73999C7.62093 2.73999 3.81093 5.85 2.94093 10.13C2.86093 10.54 2.46093 10.79 2.05093 10.71C1.64093 10.63 1.38093 10.23 1.47093 9.82001C2.49093 4.85001 6.92093 1.23999 12.0009 1.23999C17.1309 1.23999 21.5609 4.89 22.5509 9.91C22.6309 10.32 22.3609 10.71 21.9609 10.79C21.9109 10.81 21.8609 10.81 21.8109 10.81Z"
        fill="currentColor"
      />
      <Path
        d="M12 14.25C10.76 14.25 9.75 13.24 9.75 12C9.75 10.76 10.76 9.75 12 9.75C13.24 9.75 14.25 10.76 14.25 12C14.25 13.24 13.24 14.25 12 14.25ZM12 11.25C11.59 11.25 11.25 11.59 11.25 12C11.25 12.41 11.59 12.75 12 12.75C12.41 12.75 12.75 12.41 12.75 12C12.75 11.59 12.41 11.25 12 11.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LevelTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.19922 14.02C3.12922 18.58 7.15922 22 11.9992 22C16.8192 22 20.8392 18.59 21.7892 14.05"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.8092 10.06C20.9092 5.46 16.8592 2 11.9992 2C7.16922 2 3.13922 5.43001 2.19922 9.98001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: LevelBold,
  broken: LevelBroken,
  bulk: LevelBulk,
  linear: LevelLinear,
  outline: LevelOutline,
  twotone: LevelTwotone,
};

export const LevelIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
