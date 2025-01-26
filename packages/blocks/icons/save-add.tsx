import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const SaveAddBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9998 5.11V16.47C21.9998 17.92 20.9598 18.53 19.6898 17.83L17.7598 16.75C17.5998 16.66 17.4998 16.49 17.4998 16.31V8.99C17.4998 6.45 15.4298 4.38 12.8898 4.38H8.81984C8.44984 4.38 8.18984 3.99 8.35984 3.67C8.87984 2.68 9.91984 2 11.1098 2H18.8898C20.5998 2 21.9998 3.4 21.9998 5.11Z"
        fill="currentColor"
      />
      <Path
        d="M12.89 5.87891H5.11C3.4 5.87891 2 7.27891 2 8.98891V20.3489C2 21.7989 3.04 22.4089 4.31 21.7089L8.24 19.5189C8.66 19.2889 9.34 19.2889 9.76 19.5189L13.69 21.7089C14.96 22.4089 16 21.7989 16 20.3489V8.98891C16 7.27891 14.6 5.87891 12.89 5.87891ZM11 12.7489H9.75V13.9989C9.75 14.4089 9.41 14.7489 9 14.7489C8.59 14.7489 8.25 14.4089 8.25 13.9989V12.7489H7C6.59 12.7489 6.25 12.4089 6.25 11.9989C6.25 11.5889 6.59 11.2489 7 11.2489H8.25V9.99891C8.25 9.58891 8.59 9.24891 9 9.24891C9.41 9.24891 9.75 9.58891 9.75 9.99891V11.2489H11C11.41 11.2489 11.75 11.5889 11.75 11.9989C11.75 12.4089 11.41 12.7489 11 12.7489Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SaveAddBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 12H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 14V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 20.3499C2 21.7999 3.04 22.4099 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34001 19.2899 9.76001 19.5199L13.69 21.7099C14.96 22.4099 16 21.7999 16 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V15.5099"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SaveAddBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z"
        fill="currentColor"
      />
      <Path
        d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
        fill="currentColor"
      />
      <Path
        d="M11 11.25H9.75V10C9.75 9.59 9.41 9.25 9 9.25C8.59 9.25 8.25 9.59 8.25 10V11.25H7C6.59 11.25 6.25 11.59 6.25 12C6.25 12.41 6.59 12.75 7 12.75H8.25V14C8.25 14.41 8.59 14.75 9 14.75C9.41 14.75 9.75 14.41 9.75 14V12.75H11C11.41 12.75 11.75 12.41 11.75 12C11.75 11.59 11.41 11.25 11 11.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SaveAddLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 12H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 14V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SaveAddOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.69 22.7501C14.25 22.7501 13.79 22.6201 13.32 22.3701L9.39001 20.1801C9.20001 20.0801 8.78998 20.0801 8.59998 20.1801L4.67999 22.3701C3.82999 22.8401 2.95999 22.8801 2.29999 22.4901C1.62999 22.1001 1.25 21.3201 1.25 20.3601V9.00012C1.25 6.87012 2.97999 5.14014 5.10999 5.14014H12.89C15.02 5.14014 16.75 6.87012 16.75 9.00012V20.3601C16.75 21.3201 16.37 22.1001 15.7 22.4901C15.4 22.6601 15.06 22.7501 14.69 22.7501ZM9 18.6001C9.4 18.6001 9.79 18.6901 10.12 18.8701L14.05 21.0601C14.41 21.2601 14.74 21.3101 14.94 21.1901C15.13 21.0801 15.25 20.7601 15.25 20.3501V8.99011C15.25 7.69011 14.19 6.63013 12.89 6.63013H5.10999C3.80999 6.63013 2.75 7.69011 2.75 8.99011V20.3501C2.75 20.7601 2.87 21.0801 3.06 21.1901C3.25 21.3001 3.59001 21.2501 3.95001 21.0501L7.88 18.8601C8.20001 18.6901 8.6 18.6001 9 18.6001Z"
        fill="currentColor"
      />
      <Path
        d="M20.69 18.8698C20.25 18.8698 19.79 18.7397 19.32 18.4897L15.63 16.4297C15.39 16.2997 15.25 16.0498 15.25 15.7798V8.99976C15.25 7.69976 14.19 6.63977 12.89 6.63977H8C7.59 6.63977 7.25 6.29977 7.25 5.88977V5.11975C7.25 2.98975 8.97999 1.25977 11.11 1.25977H18.89C21.02 1.25977 22.75 2.98975 22.75 5.11975V16.4798C22.75 17.4398 22.37 18.2197 21.7 18.6097C21.4 18.7797 21.06 18.8698 20.69 18.8698ZM16.75 15.3297L20.05 17.1797C20.41 17.3797 20.74 17.4298 20.94 17.3098C21.13 17.1998 21.25 16.8798 21.25 16.4698V5.10974C21.25 3.80974 20.19 2.74976 18.89 2.74976H11.11C9.80999 2.74976 8.75 3.80974 8.75 5.10974V5.12976H12.89C15.02 5.12976 16.75 6.85975 16.75 8.98975V15.3297Z"
        fill="currentColor"
      />
      <Path
        d="M11 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H11C11.41 11.25 11.75 11.59 11.75 12C11.75 12.41 11.41 12.75 11 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M9 14.75C8.59 14.75 8.25 14.41 8.25 14V10C8.25 9.59 8.59 9.25 9 9.25C9.41 9.25 9.75 9.59 9.75 10V14C9.75 14.41 9.41 14.75 9 14.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SaveAddTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M7 12H11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9 14V10"
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
  bold: SaveAddBold,
  broken: SaveAddBroken,
  bulk: SaveAddBulk,
  linear: SaveAddLinear,
  outline: SaveAddOutline,
  twotone: SaveAddTwotone,
};

export const SaveAddIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
