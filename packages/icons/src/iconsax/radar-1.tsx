import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const Radar1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 19.75C7.73 19.75 4.25 16.27 4.25 12C4.25 10.64 4.61 9.31 5.28 8.14C5.48 7.78 5.94 7.66 6.3 7.86L12.37 11.35C12.73 11.56 12.85 12.01 12.65 12.37C12.44 12.73 11.99 12.85 11.63 12.65L6.24 9.56C5.92 10.33 5.75 11.16 5.75 12C5.75 15.45 8.55 18.25 12 18.25C15.45 18.25 18.25 15.45 18.25 12C18.25 8.55 15.45 5.75 12 5.75C10.64 5.75 9.34 6.18 8.25 7C7.92 7.25 7.45 7.18 7.2 6.85C6.95 6.52 7.02 6.05 7.35 5.8C8.7 4.79 10.31 4.25 12 4.25C16.27 4.25 19.75 7.73 19.75 12C19.75 16.27 16.27 19.75 12 19.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Radar1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 18C21.26 16.33 22 14.25 22 12C22 9.75 21.26 7.67 20 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 18C2.74 16.33 2 14.25 2 12C2 11.79 2.00999 11.58 2.01999 11.38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C3.62 6.51 3.28 7.06001 3 7.64001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.8008 15.6C17.5508 14.6 18.0008 13.35 18.0008 12C18.0008 10.65 17.5508 9.40002 16.8008 8.40002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.20001 8.40002C6.45001 9.40002 6 10.65 6 12C6 13.35 6.45001 14.6 7.20001 15.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Radar1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 19.75C7.73 19.75 4.25 16.27 4.25 12C4.25 10.64 4.61 9.31 5.28 8.14C5.49 7.78 5.94999 7.66 6.29999 7.86L12.37 11.35C12.73 11.56 12.85 12.01 12.65 12.37C12.44 12.73 11.99 12.85 11.63 12.65L6.25 9.56C5.93 10.33 5.76001 11.16 5.76001 12C5.76001 15.45 8.56001 18.25 12.01 18.25C15.46 18.25 18.26 15.45 18.26 12C18.26 8.55 15.46 5.75 12.01 5.75C10.65 5.75 9.35001 6.18 8.26001 7C7.93001 7.25 7.45999 7.18001 7.20999 6.85001C6.95999 6.52001 7.02999 6.05 7.35999 5.8C8.70999 4.79 10.32 4.25 12.01 4.25C16.28 4.25 19.76 7.73 19.76 12C19.76 16.27 16.27 19.75 12 19.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Radar1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 18C21.26 16.33 22 14.25 22 12C22 9.75 21.26 7.67 20 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.74 7.67 2 9.75 2 12C2 14.25 2.74 16.33 4 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.8 15.6C17.55 14.6 18.0001 13.35 18.0001 12C18.0001 10.65 17.55 9.40002 16.8 8.40002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.20001 8.40002C6.45001 9.40002 6 10.65 6 12C6 13.35 6.45001 14.6 7.20001 15.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Radar1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 14.75C10.48 14.75 9.25 13.52 9.25 12C9.25 10.48 10.48 9.25 12 9.25C13.52 9.25 14.75 10.48 14.75 12C14.75 13.52 13.52 14.75 12 14.75ZM12 10.75C11.31 10.75 10.75 11.31 10.75 12C10.75 12.69 11.31 13.25 12 13.25C12.69 13.25 13.25 12.69 13.25 12C13.25 11.31 12.69 10.75 12 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M20.0003 18.75C19.8403 18.75 19.6903 18.7 19.5503 18.6C19.2203 18.35 19.1503 17.88 19.4003 17.55C20.6103 15.94 21.2503 14.02 21.2503 12C21.2503 9.98004 20.6103 8.06005 19.4003 6.45005C19.1503 6.12005 19.2203 5.65003 19.5503 5.40003C19.8803 5.15003 20.3503 5.22002 20.6003 5.55002C22.0103 7.42002 22.7503 9.65004 22.7503 12C22.7503 14.35 22.0103 16.58 20.6003 18.45C20.4503 18.65 20.2303 18.75 20.0003 18.75Z"
        fill="currentColor"
      />
      <Path
        d="M4 18.75C3.77 18.75 3.54999 18.65 3.39999 18.45C1.98999 16.58 1.25 14.35 1.25 12C1.25 9.65004 1.98999 7.42002 3.39999 5.55002C3.64999 5.22002 4.12001 5.15003 4.45001 5.40003C4.78001 5.65003 4.85001 6.12005 4.60001 6.45005C3.39001 8.06005 2.75 9.98004 2.75 12C2.75 14.02 3.39001 15.94 4.60001 17.55C4.85001 17.88 4.78001 18.35 4.45001 18.6C4.32001 18.7 4.16 18.75 4 18.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.801 16.3499C16.641 16.3499 16.4911 16.2999 16.3511 16.1999C16.0211 15.9499 15.9511 15.4799 16.2011 15.1499C16.8911 14.2399 17.251 13.1499 17.251 11.9999C17.251 10.8499 16.8911 9.75994 16.2011 8.84994C15.9511 8.51994 16.0211 8.04992 16.3511 7.79992C16.6811 7.54992 17.151 7.61995 17.401 7.94995C18.281 9.12995 18.751 10.5299 18.751 11.9999C18.751 13.4699 18.281 14.8799 17.401 16.0499C17.251 16.2499 17.031 16.3499 16.801 16.3499Z"
        fill="currentColor"
      />
      <Path
        d="M7.20001 16.3499C6.97001 16.3499 6.75001 16.2499 6.60001 16.0499C5.72001 14.8699 5.25 13.4699 5.25 11.9999C5.25 10.5299 5.72001 9.11995 6.60001 7.94995C6.85001 7.61995 7.31999 7.54992 7.64999 7.79992C7.97999 8.04992 8.04999 8.51994 7.79999 8.84994C7.10999 9.75994 6.75 10.8499 6.75 11.9999C6.75 13.1499 7.10999 14.2399 7.79999 15.1499C8.04999 15.4799 7.97999 15.9499 7.64999 16.1999C7.51999 16.2999 7.36001 16.3499 7.20001 16.3499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Radar1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 18C21.26 16.33 22 14.25 22 12C22 9.75 21.26 7.67 20 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.74 7.67 2 9.75 2 12C2 14.25 2.74 16.33 4 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M16.8008 15.5999C17.5508 14.5999 18.0008 13.3499 18.0008 11.9999C18.0008 10.6499 17.5508 9.3999 16.8008 8.3999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.20001 8.3999C6.45001 9.3999 6 10.6499 6 11.9999C6 13.3499 6.45001 14.5999 7.20001 15.5999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Radar1Bold,
  broken: Radar1Broken,
  bulk: Radar1Bulk,
  linear: Radar1Linear,
  outline: Radar1Outline,
  twotone: Radar1Twotone,
};

export const Radar1Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default Radar1Icon;
