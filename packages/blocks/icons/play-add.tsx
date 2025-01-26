import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const PlayAddBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.8507 10.2506C21.0707 5.80065 17.2407 2.35065 12.7307 2.03065C6.6307 1.59065 1.5907 6.64065 2.0307 12.7306C2.3507 17.2406 5.8007 21.0606 10.2507 21.8406C11.4007 22.0406 12.5207 22.0406 13.5907 21.8606C13.9007 21.8106 14.0807 21.4706 13.9607 21.1906C13.6607 20.5106 13.5007 19.7606 13.5007 18.9906C13.5007 17.3006 14.2507 15.7406 15.5707 14.7006C16.5407 13.9206 17.7607 13.4906 19.0007 13.4906C19.7807 13.4906 20.5207 13.6506 21.1907 13.9506C21.4807 14.0806 21.8107 13.8906 21.8707 13.5806C22.0507 12.5206 22.0507 11.4006 21.8507 10.2506ZM14.5007 13.5706L13.3007 14.2606L12.1007 14.9506C10.6107 15.8106 9.3907 15.1106 9.3907 13.3806V12.0006V10.6106C9.3907 8.89065 10.6107 8.18065 12.1007 9.04065L13.3007 9.73065L14.5007 10.4206C15.9907 11.3006 15.9907 12.7006 14.5007 13.5706Z"
        fill="currentColor"
      />
      <Path
        d="M19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C16.27 22.22 17.54 23 19 23C20.01 23 20.93 22.63 21.63 22C21.94 21.74 22.21 21.42 22.42 21.06C22.79 20.46 23 19.75 23 19C23 16.79 21.21 15 19 15ZM20.5 19.73H19.75V20.51C19.75 20.92 19.41 21.26 19 21.26C18.59 21.26 18.25 20.92 18.25 20.51V19.73H17.5C17.09 19.73 16.75 19.39 16.75 18.98C16.75 18.57 17.09 18.23 17.5 18.23H18.25V17.52C18.25 17.11 18.59 16.77 19 16.77C19.41 16.77 19.75 17.11 19.75 17.52V18.23H20.5C20.91 18.23 21.25 18.57 21.25 18.98C21.25 19.39 20.91 19.73 20.5 19.73Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PlayAddBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M23 19C23 19.75 22.79 20.46 22.42 21.06C22.21 21.42 21.94 21.74 21.63 22C20.93 22.63 20.01 23 19 23C17.54 23 16.27 22.22 15.58 21.06C15.21 20.46 15 19.75 15 19C15 17.74 15.58 16.61 16.5 15.88C17.19 15.33 18.06 15 19 15C21.21 15 23 16.79 23 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.4897 18.98H17.5098"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 17.52V20.51"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.9707 2.84998C9.2007 2.29998 10.5707 2 12.0007 2C17.5207 2 22.0007 6.48 22.0007 12C22.0007 13.31 21.7507 14.57 21.2807 15.72"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C13.32 22 14.58 21.74 15.73 21.27"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PlayAddBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 12C22 13.31 21.75 14.57 21.28 15.72C20.63 15.27 19.84 15 19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C15.62 21.13 15.67 21.2 15.73 21.27C14.58 21.74 13.32 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
        fill="currentColor"
      />
      <Path
        d="M9.38086 12.0001V10.6101C9.38086 8.89008 10.6009 8.18007 12.0909 9.04007L13.2909 9.73007L14.4908 10.4201C15.9808 11.2801 15.9808 12.6901 14.4908 13.5501L13.2909 14.2401L12.0909 14.9301C10.6009 15.7901 9.38086 15.0901 9.38086 13.3601V12.0001Z"
        fill="currentColor"
      />
      <Path
        d="M19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C16.27 22.22 17.54 23 19 23C20.01 23 20.93 22.63 21.63 22C21.94 21.74 22.21 21.42 22.42 21.06C22.79 20.46 23 19.75 23 19C23 16.79 21.21 15 19 15ZM20.5 19.73H19.75V20.51C19.75 20.92 19.41 21.26 19 21.26C18.59 21.26 18.25 20.92 18.25 20.51V19.73H17.5C17.09 19.73 16.75 19.39 16.75 18.98C16.75 18.57 17.09 18.23 17.5 18.23H18.25V17.52C18.25 17.11 18.59 16.77 19 16.77C19.41 16.77 19.75 17.11 19.75 17.52V18.23H20.5C20.91 18.23 21.25 18.57 21.25 18.98C21.25 19.39 20.91 19.73 20.5 19.73Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PlayAddLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 12C22 13.31 21.75 14.57 21.28 15.72C20.63 15.27 19.84 15 19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C15.62 21.13 15.67 21.2 15.73 21.27C14.58 21.74 13.32 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.38 12.0001V10.6101C9.38 8.89008 10.6 8.18007 12.09 9.04007L13.29 9.73007L14.49 10.4201C15.98 11.2801 15.98 12.6901 14.49 13.5501L13.29 14.2401L12.09 14.9301C10.6 15.7901 9.38 15.0901 9.38 13.3601V12.0001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 19C23 19.75 22.79 20.46 22.42 21.06C22.21 21.42 21.94 21.74 21.63 22C20.93 22.63 20.01 23 19 23C17.54 23 16.27 22.22 15.58 21.06C15.21 20.46 15 19.75 15 19C15 17.74 15.58 16.61 16.5 15.88C17.19 15.33 18.06 15 19 15C21.21 15 23 16.79 23 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.49 18.98H17.51"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 17.52V20.51"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PlayAddOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 13.4 22.49 14.74 21.97 16C21.88 16.21 21.71 16.37 21.49 16.43C21.27 16.5 21.04 16.46 20.85 16.33C19.67 15.52 18.08 15.58 16.96 16.46C16.19 17.07 15.74 18 15.74 18.99C15.74 19.58 15.9 20.16 16.21 20.66C16.24 20.71 16.26 20.74 16.29 20.77C16.45 20.95 16.51 21.2 16.46 21.44C16.41 21.68 16.24 21.87 16.01 21.96C14.74 22.49 13.39 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C12.9 21.25 13.78 21.12 14.63 20.86C14.38 20.28 14.25 19.65 14.25 19C14.25 17.54 14.9 16.19 16.03 15.29C17.39 14.21 19.3 13.96 20.86 14.63C21.11 13.79 21.24 12.9 21.24 11.99C21.25 6.89999 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M10.8789 16.0701C10.4889 16.0701 10.1189 15.9801 9.79889 15.7901C9.05889 15.3601 8.62891 14.4901 8.62891 13.3901V10.6101C8.62891 9.51008 9.05889 8.64011 9.79889 8.21011C10.5489 7.78011 11.5189 7.85011 12.4689 8.40011L14.8689 9.79007C15.8189 10.3401 16.3589 11.1501 16.3589 12.0001C16.3589 12.8501 15.8189 13.6701 14.8689 14.2101L12.4689 15.6001C11.9289 15.9101 11.3889 16.0701 10.8789 16.0701ZM10.8889 9.43008C10.7589 9.43008 10.6489 9.4601 10.5489 9.5101C10.2789 9.6701 10.1289 10.0701 10.1289 10.6101V13.3901C10.1289 13.9301 10.2789 14.3401 10.5489 14.4901C10.8189 14.6401 11.2389 14.5801 11.7189 14.3001L14.1189 12.9101C14.5889 12.6401 14.8589 12.3001 14.8589 11.9901C14.8589 11.6801 14.5889 11.3501 14.1189 11.0701L11.7189 9.68008C11.4089 9.52008 11.1289 9.43008 10.8889 9.43008Z"
        fill="currentColor"
      />
      <Path
        d="M19 23.75C17.34 23.75 15.78 22.87 14.94 21.44C14.49 20.72 14.25 19.87 14.25 19C14.25 17.54 14.9 16.19 16.03 15.29C16.87 14.62 17.93 14.25 19 14.25C21.62 14.25 23.75 16.38 23.75 19C23.75 19.87 23.51 20.72 23.06 21.45C22.81 21.87 22.49 22.25 22.11 22.57C21.28 23.33 20.17 23.75 19 23.75ZM19 15.75C18.26 15.75 17.56 16 16.97 16.47C16.2 17.08 15.75 18.01 15.75 19C15.75 19.59 15.91 20.17 16.22 20.67C16.8 21.65 17.87 22.25 19 22.25C19.79 22.25 20.55 21.96 21.13 21.44C21.39 21.22 21.61 20.96 21.77 20.68C22.09 20.17 22.25 19.59 22.25 19C22.25 17.21 20.79 15.75 19 15.75Z"
        fill="currentColor"
      />
      <Path
        d="M20.4998 19.73H17.5098C17.0998 19.73 16.7598 19.39 16.7598 18.98C16.7598 18.57 17.0998 18.23 17.5098 18.23H20.4998C20.9098 18.23 21.2498 18.57 21.2498 18.98C21.2498 19.39 20.9098 19.73 20.4998 19.73Z"
        fill="currentColor"
      />
      <Path
        d="M19 21.26C18.59 21.26 18.25 20.92 18.25 20.51V17.52C18.25 17.11 18.59 16.77 19 16.77C19.41 16.77 19.75 17.11 19.75 17.52V20.51C19.75 20.93 19.41 21.26 19 21.26Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PlayAddTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 12C22 13.31 21.75 14.57 21.28 15.72C20.63 15.27 19.84 15 19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C15.62 21.13 15.67 21.2 15.73 21.27C14.58 21.74 13.32 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.38086 12.0001V10.6101C9.38086 8.89008 10.6009 8.18007 12.0909 9.04007L13.2909 9.73007L14.4908 10.4201C15.9808 11.2801 15.9808 12.6901 14.4908 13.5501L13.2909 14.2401L12.0909 14.9301C10.6009 15.7901 9.38086 15.0901 9.38086 13.3601V12.0001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 19C23 19.75 22.79 20.46 22.42 21.06C22.21 21.42 21.94 21.74 21.63 22C20.93 22.63 20.01 23 19 23C17.54 23 16.27 22.22 15.58 21.06C15.21 20.46 15 19.75 15 19C15 17.74 15.58 16.61 16.5 15.88C17.19 15.33 18.06 15 19 15C21.21 15 23 16.79 23 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M20.4897 18.98H17.5098"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M19 17.52V20.51"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: PlayAddBold,
  broken: PlayAddBroken,
  bulk: PlayAddBulk,
  linear: PlayAddLinear,
  outline: PlayAddOutline,
  twotone: PlayAddTwotone,
};

export const PlayAddIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
