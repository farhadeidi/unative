import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const SendSqaure2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.64 12.81L13.02 8.43H10.59C10.18 8.43 9.84 8.09 9.84 7.68C9.84 7.27 10.18 6.93 10.59 6.93H14.83C14.93 6.93 15.02 6.95 15.12 6.99C15.3 7.07 15.45 7.21 15.53 7.4C15.57 7.49 15.59 7.59 15.59 7.69V11.93C15.59 12.34 15.25 12.68 14.84 12.68C14.43 12.68 14.09 12.34 14.09 11.93V9.5L9.7 13.87C9.55 14.02 9.36 14.09 9.17 14.09C8.98 14.09 8.79 14.02 8.64 13.87C8.35 13.58 8.35 13.1 8.64 12.81ZM18.24 17.22C16.23 17.89 14.12 18.23 12 18.23C9.88 18.23 7.77 17.89 5.76 17.22C5.37 17.09 5.16 16.66 5.29 16.27C5.42 15.88 5.84 15.66 6.24 15.8C9.96 17.04 14.05 17.04 17.77 15.8C18.16 15.67 18.59 15.88 18.72 16.27C18.84 16.67 18.63 17.09 18.24 17.22Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SendSqaure2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.5898 7.67993H14.8298V11.9299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.8299 7.67993L9.16992 13.3399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SendSqaure2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
        fill="currentColor"
      />
      <Path
        d="M9.17156 14.0899C9.36156 14.0899 9.55155 14.0199 9.70155 13.8699L14.0816 9.48992V11.9199C14.0816 12.3299 14.4216 12.6699 14.8316 12.6699C15.2416 12.6699 15.5816 12.3299 15.5816 11.9199V7.67992C15.5816 7.57992 15.5616 7.48992 15.5216 7.38992C15.4416 7.20992 15.3016 7.05993 15.1116 6.97993C15.0216 6.93993 14.9216 6.91992 14.8216 6.91992H10.5816C10.1716 6.91992 9.83156 7.25992 9.83156 7.66992C9.83156 8.07992 10.1716 8.41992 10.5816 8.41992H13.0116L8.63156 12.7999C8.34156 13.0899 8.34156 13.5699 8.63156 13.8599C8.79156 14.0199 8.98156 14.0899 9.17156 14.0899Z"
        fill="currentColor"
      />
      <Path
        d="M18.7107 16.28C18.5807 15.89 18.1607 15.68 17.7607 15.81C14.0407 17.05 9.95066 17.05 6.23066 15.81C5.84066 15.68 5.41067 15.89 5.28067 16.28C5.15067 16.67 5.36067 17.1 5.75067 17.23C7.76067 17.9 9.87067 18.24 11.9907 18.24C14.1107 18.24 16.2207 17.9 18.2307 17.23C18.6307 17.09 18.8407 16.67 18.7107 16.28Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SendSqaure2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.5898 7.67993H14.8298V11.9299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.8299 7.67993L9.16992 13.3399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SendSqaure2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.8298 12.6799C14.4198 12.6799 14.0798 12.3399 14.0798 11.9299V8.43994H10.5898C10.1798 8.43994 9.83984 8.09994 9.83984 7.68994C9.83984 7.27994 10.1798 6.93994 10.5898 6.93994H14.8298C15.2398 6.93994 15.5798 7.27994 15.5798 7.68994V11.9299C15.5798 12.3399 15.2398 12.6799 14.8298 12.6799Z"
        fill="currentColor"
      />
      <Path
        d="M9.16937 14.0901C8.97937 14.0901 8.78938 14.0201 8.63938 13.8701C8.34938 13.5801 8.34938 13.1001 8.63938 12.8101L14.2994 7.15012C14.5894 6.86012 15.0694 6.86012 15.3594 7.15012C15.6494 7.44012 15.6494 7.92013 15.3594 8.21013L9.69937 13.8701C9.55937 14.0201 9.35937 14.0901 9.16937 14.0901Z"
        fill="currentColor"
      />
      <Path
        d="M12.0004 18.2302C9.89044 18.2302 7.77043 17.8902 5.76043 17.2202C5.37043 17.0902 5.16043 16.6602 5.29043 16.2702C5.42043 15.8802 5.85045 15.6602 6.24045 15.8002C9.96045 17.0402 14.0504 17.0402 17.7704 15.8002C18.1604 15.6702 18.5904 15.8802 18.7204 16.2702C18.8504 16.6602 18.6404 17.0902 18.2504 17.2202C16.2304 17.9002 14.1104 18.2302 12.0004 18.2302Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SendSqaure2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M10.5898 7.68018H14.8298V11.9302"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.8299 7.68018L9.16992 13.3402"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        opacity="0.4"
        d="M6 16.5098C9.89 17.8098 14.11 17.8098 18 16.5098"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SendSqaure2Bold,
  broken: SendSqaure2Broken,
  bulk: SendSqaure2Bulk,
  linear: SendSqaure2Linear,
  outline: SendSqaure2Outline,
  twotone: SendSqaure2Twotone,
};

export const SendSqaure2Icon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
