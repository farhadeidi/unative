import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const HeartTickBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.2004 12.3984C14.5504 12.3984 12.4004 14.5484 12.4004 17.1984C12.4004 18.0984 12.6504 18.9484 13.1004 19.6684C13.9304 21.0584 15.4504 21.9984 17.2004 21.9984C18.9504 21.9984 20.4804 21.0584 21.3004 19.6684C21.7404 18.9484 22.0004 18.0984 22.0004 17.1984C22.0004 14.5484 19.8504 12.3984 17.2004 12.3984ZM19.5804 16.5684L17.0204 18.9284C16.8804 19.0584 16.6904 19.1284 16.5104 19.1284C16.3204 19.1284 16.1304 19.0584 15.9804 18.9084L14.8004 17.7284C14.5104 17.4384 14.5104 16.9584 14.8004 16.6684C15.0904 16.3784 15.5704 16.3784 15.8604 16.6684L16.5304 17.3384L18.5604 15.4584C18.8604 15.1784 19.3404 15.1984 19.6204 15.4984C19.9004 15.8084 19.8804 16.2884 19.5804 16.5684Z"
        fill="currentColor"
      />
      <Path
        d="M22 8.73062C22 9.92062 21.81 11.0206 21.48 12.0406C21.42 12.2506 21.17 12.3106 20.99 12.1806C19.9 11.3706 18.57 10.9406 17.2 10.9406C13.73 10.9406 10.9 13.7706 10.9 17.2406C10.9 18.3206 11.18 19.3806 11.71 20.3206C11.87 20.6006 11.68 20.9606 11.38 20.8506C8.97 20.0306 4.1 17.0406 2.52 12.0406C2.19 11.0206 2 9.92062 2 8.73062C2 5.64062 4.49 3.14063 7.56 3.14063C9.37 3.14063 10.99 4.02062 12 5.37062C13.01 4.02062 14.63 3.14063 16.44 3.14063C19.51 3.14062 22 5.64062 22 8.73062Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartTickBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.56 3.09998C9.37 3.09998 10.99 3.98002 12 5.33002C13.01 3.98002 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.6 22 8.69C22 10.66 21.49 12.4 20.69 13.91C19.81 12.98 18.57 12.4 17.2 12.4C14.55 12.4 12.4 14.55 12.4 17.2C12.4 18.43 12.87 19.55 13.63 20.4C13.26 20.57 12.92 20.71 12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 7.14 2.62 5.73998 3.63 4.72998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.0004 17.2C22.0004 18.1 21.7504 18.95 21.3004 19.67C20.4704 21.06 18.9504 22 17.2004 22C15.4504 22 13.9204 21.06 13.1004 19.67C12.6604 18.95 12.4004 18.1 12.4004 17.2C12.4004 14.55 14.5504 12.4 17.2004 12.4C19.8504 12.4 22.0004 14.55 22.0004 17.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.3301 17.2L16.5101 18.38L19.0701 16.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HeartTickBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.2004 12.3999C14.5504 12.3999 12.4004 14.5499 12.4004 17.1999C12.4004 18.0999 12.6504 18.9499 13.1004 19.6699C13.9304 21.0599 15.4504 21.9999 17.2004 21.9999C18.9504 21.9999 20.4804 21.0599 21.3004 19.6699C21.7404 18.9499 22.0004 18.0999 22.0004 17.1999C22.0004 14.5499 19.8504 12.3999 17.2004 12.3999ZM19.5804 16.5699L17.0204 18.9299C16.8804 19.0599 16.6904 19.1299 16.5104 19.1299C16.3204 19.1299 16.1304 19.0599 15.9804 18.9099L14.8004 17.7299C14.5104 17.4399 14.5104 16.9599 14.8004 16.6699C15.0904 16.3799 15.5704 16.3799 15.8604 16.6699L16.5304 17.3399L18.5604 15.4599C18.8604 15.1799 19.3404 15.1999 19.6204 15.4999C19.9004 15.8099 19.8804 16.2899 19.5804 16.5699Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22 8.69009C22 9.88009 21.81 10.9801 21.48 12.0001C21.27 12.6701 21 13.3101 20.68 13.9001C19.8 12.9701 18.57 12.4001 17.2 12.4001C14.55 12.4001 12.4 14.5501 12.4 17.2001C12.4 18.4301 12.87 19.5501 13.63 20.4001C13.26 20.5701 12.92 20.7101 12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.97 19.9901 4.1 17.0001 2.52 12.0001C2.19 10.9801 2 9.88009 2 8.69009C2 5.60009 4.49 3.1001 7.56 3.1001C9.37 3.1001 10.99 3.98008 12 5.33008C13.01 3.98008 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.60009 22 8.69009Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartTickLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 17.2C22 18.1 21.75 18.95 21.3 19.67C20.47 21.06 18.95 22 17.2 22C15.45 22 13.92 21.06 13.1 19.67C12.66 18.95 12.4 18.1 12.4 17.2C12.4 14.55 14.55 12.4 17.2 12.4C19.85 12.4 22 14.55 22 17.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.3301 17.2L16.5101 18.38L19.0701 16.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 8.69C22 10.66 21.49 12.4 20.69 13.91C19.81 12.98 18.57 12.4 17.2 12.4C14.55 12.4 12.4 14.55 12.4 17.2C12.4 18.43 12.87 19.55 13.63 20.4C13.26 20.57 12.92 20.71 12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.09998 7.56 3.09998C9.37 3.09998 10.99 3.98002 12 5.33002C13.01 3.98002 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.6 22 8.69Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HeartTickOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.2004 22.7499C15.2604 22.7499 13.4404 21.7199 12.4504 20.0499C11.9304 19.2099 11.6504 18.2099 11.6504 17.1999C11.6504 14.1399 14.1404 11.6499 17.2004 11.6499C20.2604 11.6499 22.7504 14.1399 22.7504 17.1999C22.7504 18.2199 22.4704 19.2099 21.9404 20.0699C20.9604 21.7199 19.1404 22.7499 17.2004 22.7499ZM17.2004 13.1499C14.9704 13.1499 13.1504 14.9699 13.1504 17.1999C13.1504 17.9399 13.3504 18.6599 13.7304 19.2799C14.4704 20.5199 15.7604 21.2499 17.2004 21.2499C18.6404 21.2499 19.9304 20.5199 20.6604 19.2899C21.0504 18.6599 21.2504 17.9399 21.2504 17.1999C21.2504 14.9699 19.4304 13.1499 17.2004 13.1499Z"
        fill="currentColor"
      />
      <Path
        d="M16.5095 19.13C16.3195 19.13 16.1295 19.06 15.9795 18.91L14.7995 17.73C14.5095 17.44 14.5095 16.96 14.7995 16.67C15.0895 16.38 15.5695 16.38 15.8595 16.67L16.5295 17.3401L18.5595 15.4601C18.8695 15.1801 19.3395 15.2 19.6195 15.5C19.8995 15.8 19.8795 16.28 19.5795 16.56L17.0195 18.92C16.8795 19.07 16.6895 19.13 16.5095 19.13Z"
        fill="currentColor"
      />
      <Path
        d="M12 21.6501C11.69 21.6501 11.38 21.6101 11.13 21.5201C8.57 20.6501 1.25 16.4101 1.25 8.69012C1.25 5.19012 4.08 2.3501 7.56 2.3501C9.22 2.3501 10.83 3.02012 12 4.19012C13.17 3.02012 14.78 2.3501 16.44 2.3501C19.92 2.3501 22.75 5.19012 22.75 8.69012C22.75 10.6401 22.28 12.5101 21.35 14.2601C21.24 14.4701 21.03 14.6201 20.79 14.6501C20.55 14.6801 20.31 14.6001 20.14 14.4201C19.36 13.6001 18.32 13.1401 17.2 13.1401C14.97 13.1401 13.15 14.9601 13.15 17.1901C13.15 18.1801 13.52 19.1401 14.19 19.8901C14.35 20.0701 14.41 20.3101 14.36 20.5401C14.31 20.7701 14.15 20.9701 13.94 21.0701C13.54 21.2501 13.18 21.4001 12.85 21.5101C12.61 21.6101 12.31 21.6501 12 21.6501ZM7.56 3.8501C4.91 3.8501 2.75 6.02012 2.75 8.69012C2.75 15.5301 9.32 19.3101 11.62 20.1001C11.81 20.1701 12.19 20.1601 12.37 20.1001C12.4 20.0901 12.43 20.0801 12.46 20.0701C11.93 19.2101 11.65 18.2201 11.65 17.2001C11.65 14.1401 14.14 11.6501 17.2 11.6501C18.36 11.6501 19.5 12.0201 20.44 12.7001C20.98 11.4201 21.25 10.0801 21.25 8.69012C21.25 6.02012 19.09 3.8501 16.44 3.8501C14.94 3.8501 13.5 4.57015 12.6 5.78015C12.32 6.16015 11.68 6.16015 11.4 5.78015C10.5 4.57015 9.06 3.8501 7.56 3.8501Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartTickTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0004 17.1999C22.0004 18.0999 21.7504 18.9499 21.3004 19.6699C20.4704 21.0599 18.9504 21.9999 17.2004 21.9999C15.4504 21.9999 13.9204 21.0599 13.1004 19.6699C12.6604 18.9499 12.4004 18.0999 12.4004 17.1999C12.4004 14.5499 14.5504 12.3999 17.2004 12.3999C19.8504 12.3999 22.0004 14.5499 22.0004 17.1999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.3301 17.2L16.5101 18.38L19.0701 16.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22 8.69012C22 10.6601 21.49 12.4001 20.69 13.9101C19.81 12.9801 18.57 12.4001 17.2 12.4001C14.55 12.4001 12.4 14.5501 12.4 17.2001C12.4 18.4301 12.87 19.5501 13.63 20.4001C13.26 20.5701 12.92 20.7101 12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.69012C2 5.60012 4.49 3.1001 7.56 3.1001C9.37 3.1001 10.99 3.98014 12 5.33014C13.01 3.98014 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.60012 22 8.69012Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: HeartTickBold,
  broken: HeartTickBroken,
  bulk: HeartTickBulk,
  linear: HeartTickLinear,
  outline: HeartTickOutline,
  twotone: HeartTickTwotone,
};

export const HeartTickIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
