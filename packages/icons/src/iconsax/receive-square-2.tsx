import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ReceiveSquare2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.64 7.15C8.93 6.86 9.41 6.86 9.7 7.15L14.08 11.53V9.1C14.08 8.69 14.42 8.35 14.83 8.35C15.24 8.35 15.58 8.69 15.58 9.1V13.34C15.58 13.44 15.56 13.53 15.52 13.63C15.44 13.81 15.3 13.96 15.11 14.04C15.02 14.08 14.92 14.1 14.82 14.1H10.58C10.17 14.1 9.83 13.76 9.83 13.35C9.83 12.94 10.17 12.6 10.58 12.6H13.01L8.64 8.21C8.35 7.92 8.35 7.45 8.64 7.15ZM18.24 17.22C16.23 17.89 14.12 18.23 12 18.23C9.88 18.23 7.77 17.89 5.76 17.22C5.37 17.09 5.16 16.66 5.29 16.27C5.42 15.88 5.84 15.66 6.24 15.8C9.96 17.04 14.05 17.04 17.77 15.8C18.16 15.67 18.59 15.88 18.72 16.27C18.84 16.67 18.63 17.09 18.24 17.22Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiveSquare2Broken = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M10.5898 13.3398H14.8298V9.09985"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.8299 13.3399L9.16992 7.67993"
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

const ReceiveSquare2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.0211 12.5901H10.5911C10.1811 12.5901 9.8411 12.9301 9.8411 13.3401C9.8411 13.7501 10.1811 14.0901 10.5911 14.0901H14.8311C14.9311 14.0901 15.0211 14.0701 15.1211 14.0301C15.3011 13.9501 15.4511 13.8101 15.5311 13.6201C15.5711 13.5301 15.5911 13.4301 15.5911 13.3301V9.10011C15.5911 8.69011 15.2511 8.35011 14.8411 8.35011C14.4311 8.35011 14.0911 8.69011 14.0911 9.10011V11.5301L9.71111 7.15012C9.42111 6.86012 8.94109 6.86012 8.65109 7.15012C8.36109 7.44012 8.36109 7.92011 8.65109 8.21011L13.0211 12.5901Z"
        fill="currentColor"
      />
      <Path
        d="M18.7107 16.2802C18.5807 15.8902 18.1607 15.6802 17.7607 15.8102C14.0407 17.0502 9.95066 17.0502 6.23066 15.8102C5.84066 15.6802 5.41067 15.8902 5.28067 16.2802C5.15067 16.6702 5.36067 17.1002 5.75067 17.2302C7.76067 17.9002 9.87067 18.2402 11.9907 18.2402C14.1107 18.2402 16.2207 17.9002 18.2307 17.2302C18.6307 17.0902 18.8407 16.6702 18.7107 16.2802Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiveSquare2Linear = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M10.5898 13.3398H14.8298V9.09985"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.8299 13.3399L9.16992 7.67993"
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

const ReceiveSquare2Outline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M14.8298 14.0901H10.5898C10.1798 14.0901 9.83984 13.7501 9.83984 13.3401C9.83984 12.9301 10.1798 12.5901 10.5898 12.5901H14.0798V9.1001C14.0798 8.6901 14.4198 8.3501 14.8298 8.3501C15.2398 8.3501 15.5798 8.6901 15.5798 9.1001V13.3401C15.5798 13.7601 15.2398 14.0901 14.8298 14.0901Z"
        fill="currentColor"
      />
      <Path
        d="M14.8294 14.0901C14.6394 14.0901 14.4494 14.0201 14.2994 13.8701L8.63938 8.21013C8.34938 7.92013 8.34938 7.44012 8.63938 7.15012C8.92937 6.86012 9.40937 6.86012 9.69937 7.15012L15.3594 12.8101C15.6494 13.1001 15.6494 13.5801 15.3594 13.8701C15.2094 14.0201 15.0194 14.0901 14.8294 14.0901Z"
        fill="currentColor"
      />
      <Path
        d="M12.0004 18.2302C9.89044 18.2302 7.77043 17.8902 5.76043 17.2202C5.37043 17.0902 5.16043 16.6602 5.29043 16.2702C5.42043 15.8802 5.85045 15.6602 6.24045 15.8002C9.96045 17.0402 14.0504 17.0402 17.7704 15.8002C18.1604 15.6702 18.5904 15.8802 18.7204 16.2702C18.8504 16.6602 18.6404 17.0902 18.2504 17.2202C16.2304 17.9002 14.1104 18.2302 12.0004 18.2302Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ReceiveSquare2Twotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
          d="M10.5898 13.3401H14.8298V9.1001"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.8299 13.3402L9.16992 7.68018"
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
  bold: ReceiveSquare2Bold,
  broken: ReceiveSquare2Broken,
  bulk: ReceiveSquare2Bulk,
  linear: ReceiveSquare2Linear,
  outline: ReceiveSquare2Outline,
  twotone: ReceiveSquare2Twotone,
};

export const ReceiveSquare2Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ReceiveSquare2Icon;
