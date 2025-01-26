import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const BoxSearchBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.6005 5.31125L11.9505 2.27125C11.3505 1.95125 10.6405 1.95125 10.0405 2.27125L4.40047 5.31125C3.99047 5.54125 3.73047 5.98125 3.73047 6.46125C3.73047 6.95125 3.98047 7.39125 4.40047 7.61125L10.0505 10.6512C10.3505 10.8112 10.6805 10.8913 11.0005 10.8913C11.3205 10.8913 11.6605 10.8112 11.9505 10.6512L17.6005 7.61125C18.0105 7.39125 18.2705 6.95125 18.2705 6.46125C18.2705 5.98125 18.0105 5.54125 17.6005 5.31125Z"
        fill="currentColor"
      />
      <Path
        d="M9.12 11.7106L3.87 9.09058C3.46 8.88058 3 8.91058 2.61 9.14058C2.23 9.38058 2 9.79058 2 10.2406V15.2006C2 16.0606 2.48 16.8306 3.25 17.2206L8.5 19.8406C8.68 19.9306 8.88 19.9806 9.08 19.9806C9.31 19.9806 9.55 19.9106 9.76 19.7906C10.14 19.5506 10.37 19.1406 10.37 18.6906V13.7306C10.36 12.8706 9.88 12.1006 9.12 11.7106Z"
        fill="currentColor"
      />
      <Path
        d="M20.0006 10.2406V12.7006C19.5206 12.5606 19.0106 12.5006 18.5006 12.5006C17.1406 12.5006 15.8106 12.9706 14.7606 13.8106C13.3206 14.9406 12.5006 16.6506 12.5006 18.5006C12.5006 18.9906 12.5606 19.4806 12.6906 19.9506C12.5406 19.9306 12.3906 19.8706 12.2506 19.7806C11.8706 19.5506 11.6406 19.1406 11.6406 18.6906V13.7306C11.6406 12.8706 12.1206 12.1006 12.8806 11.7106L18.1306 9.09058C18.5406 8.88058 19.0006 8.91058 19.3906 9.14058C19.7706 9.38058 20.0006 9.79058 20.0006 10.2406Z"
        fill="currentColor"
      />
      <Path
        d="M22.58 21.4989L21.74 20.6589C22.18 19.9989 22.44 19.1989 22.44 18.3489C22.44 16.0189 20.55 14.1289 18.22 14.1289C15.89 14.1289 14 16.0189 14 18.3489C14 20.6789 15.89 22.5689 18.22 22.5689C19.07 22.5689 19.87 22.3089 20.53 21.8689L21.37 22.7089C21.54 22.8789 21.75 22.9589 21.97 22.9589C22.19 22.9589 22.41 22.8789 22.57 22.7089C22.91 22.3689 22.91 21.8289 22.58 21.4989Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BoxSearchBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21.61V12.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.0706 21.5201C13.5006 21.8401 12.7506 22.0001 12.0006 22.0001C11.2506 22.0001 10.5006 21.8401 9.9306 21.5201L4.59061 18.5601C3.38061 17.8901 2.39062 16.2101 2.39062 14.8301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.6106 12.83V9.17C21.6106 7.79 20.6206 6.11002 19.4106 5.44002L14.0706 2.48C12.9306 1.84 11.0706 1.84 9.9306 2.48L4.59061 5.44002C3.38061 6.11002 2.39062 7.79 2.39062 9.17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.2 21.4C20.9673 21.4 22.4 19.9673 22.4 18.2C22.4 16.4327 20.9673 15 19.2 15C17.4327 15 16 16.4327 16 18.2C16 19.9673 17.4327 21.4 19.2 21.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 22L22 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BoxSearchBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.1004 6.93998C20.1004 7.47998 19.8104 7.96995 19.3504 8.21995L17.6104 9.15995L16.1304 9.94999L13.0604 11.61C12.7304 11.79 12.3704 11.88 12.0004 11.88C11.6304 11.88 11.2704 11.79 10.9404 11.61L4.65039 8.21995C4.19039 7.96995 3.90039 7.47998 3.90039 6.93998C3.90039 6.39998 4.19039 5.90995 4.65039 5.65995L6.62039 4.59996L8.1904 3.74998L10.9404 2.27C11.6004 1.91 12.4004 1.91 13.0604 2.27L19.3504 5.65995C19.8104 5.90995 20.1004 6.39998 20.1004 6.93998Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M9.9007 12.7899L4.05069 9.85989C3.60069 9.62989 3.0807 9.65989 2.6507 9.91989C2.2207 10.1799 1.9707 10.6399 1.9707 11.1399V16.6699C1.9707 17.6299 2.50069 18.4899 3.36069 18.9199L9.21069 21.8399C9.41069 21.9399 9.63071 21.9899 9.85071 21.9899C10.1107 21.9899 10.3707 21.9199 10.6007 21.7699C11.0307 21.5099 11.2807 21.0499 11.2807 20.5499V15.0199C11.2907 14.0799 10.7607 13.2199 9.9007 12.7899Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22.0309 11.1502V16.6801C22.0309 17.6301 21.501 18.4901 20.641 18.9201L14.791 21.8501C14.591 21.9501 14.3709 22.0001 14.1509 22.0001C13.8909 22.0001 13.631 21.9302 13.391 21.7802C12.971 21.5202 12.7109 21.0601 12.7109 20.5601V15.0401C12.7109 14.0801 13.241 13.2201 14.101 12.7901L16.2509 11.7201L17.7509 10.9701L19.951 9.87013C20.401 9.64013 20.921 9.66012 21.351 9.93012C21.771 10.1901 22.0309 10.6502 22.0309 11.1502Z"
        fill="currentColor"
      />
      <Path
        d="M22.6001 21.64L21.8401 20.88C22.2401 20.28 22.4701 19.56 22.4701 18.79C22.4701 16.68 20.7601 14.97 18.6501 14.97C16.5401 14.97 14.8301 16.68 14.8301 18.79C14.8301 20.9 16.5401 22.61 18.6501 22.61C19.4201 22.61 20.1401 22.38 20.7401 21.98L21.5001 22.74C21.6501 22.89 21.8501 22.97 22.0501 22.97C22.2501 22.97 22.4501 22.89 22.6001 22.74C22.9001 22.43 22.9001 21.94 22.6001 21.64Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BoxSearchLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.17004 7.43994L12 12.5499L20.77 7.46991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21.6099V12.5399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.61 12.83V9.17C21.61 7.79 20.62 6.11002 19.41 5.44002L14.07 2.48C12.93 1.84 11.07 1.84 9.92999 2.48L4.59 5.44002C3.38 6.11002 2.39001 7.79 2.39001 9.17V14.83C2.39001 16.21 3.38 17.89 4.59 18.56L9.92999 21.52C10.5 21.84 11.25 22 12 22C12.75 22 13.5 21.84 14.07 21.52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.2 21.4C20.9673 21.4 22.4 19.9673 22.4 18.2C22.4 16.4327 20.9673 15 19.2 15C17.4327 15 16 16.4327 16 18.2C16 19.9673 17.4327 21.4 19.2 21.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 22L22 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BoxSearchOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9994 13.2999C11.8694 13.2999 11.7394 13.2699 11.6194 13.1999L2.78936 8.0899C2.42936 7.8799 2.30934 7.41987 2.51934 7.05987C2.72934 6.69987 3.17934 6.57985 3.54934 6.78985L11.9994 11.6799L20.3993 6.81988C20.7593 6.60988 21.2193 6.7399 21.4293 7.0899C21.6393 7.4499 21.5094 7.90987 21.1594 8.11987L12.3894 13.1999C12.2594 13.2599 12.1294 13.2999 11.9994 13.2999Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.36C11.59 22.36 11.25 22.02 11.25 21.61V12.54C11.25 12.13 11.59 11.79 12 11.79C12.41 11.79 12.75 12.13 12.75 12.54V21.61C12.75 22.02 12.41 22.36 12 22.36Z"
        fill="currentColor"
      />
      <Path
        d="M11.9989 22.75C11.0889 22.75 10.2189 22.54 9.5589 22.17L4.2189 19.21C2.7689 18.41 1.62891 16.48 1.62891 14.82V9.15997C1.62891 7.49997 2.7689 5.58001 4.2189 4.77001L9.5589 1.80999C10.9189 1.04999 13.0589 1.04999 14.4289 1.80999L19.7689 4.77001C21.2189 5.57001 22.3589 7.49997 22.3589 9.15997V12.82C22.3589 13.23 22.0189 13.57 21.6089 13.57C21.1989 13.57 20.8589 13.23 20.8589 12.82V9.15997C20.8589 8.05997 20.0089 6.62002 19.0489 6.09002L13.7089 3.13C12.7989 2.62 11.2089 2.62 10.2989 3.13L4.95889 6.09002C3.98889 6.63002 3.1489 8.05997 3.1489 9.15997V14.82C3.1489 15.92 3.99889 17.36 4.95889 17.89L10.2989 20.85C11.1789 21.34 12.8389 21.34 13.7089 20.85C14.0689 20.65 14.5289 20.78 14.7289 21.14C14.9289 21.5 14.7989 21.96 14.4389 22.16C13.7789 22.54 12.9089 22.75 11.9989 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.2 22.15C17.02 22.15 15.25 20.38 15.25 18.2C15.25 16.02 17.02 14.25 19.2 14.25C21.38 14.25 23.15 16.02 23.15 18.2C23.15 20.38 21.38 22.15 19.2 22.15ZM19.2 15.75C17.85 15.75 16.75 16.85 16.75 18.2C16.75 19.55 17.85 20.65 19.2 20.65C20.55 20.65 21.65 19.55 21.65 18.2C21.65 16.85 20.55 15.75 19.2 15.75Z"
        fill="currentColor"
      />
      <Path
        d="M22.9995 22.75C22.8095 22.75 22.6195 22.68 22.4695 22.53L21.4695 21.53C21.1795 21.24 21.1795 20.7599 21.4695 20.4699C21.7595 20.1799 22.2395 20.1799 22.5295 20.4699L23.5295 21.4699C23.8195 21.7599 23.8195 22.24 23.5295 22.53C23.3795 22.68 23.1895 22.75 22.9995 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BoxSearchTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21.61V12.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.6106 12.83V9.17C21.6106 7.79 20.6206 6.11002 19.4106 5.44002L14.0706 2.48C12.9306 1.84 11.0706 1.84 9.9306 2.48L4.59061 5.44002C3.38061 6.11002 2.39062 7.79 2.39062 9.17V14.83C2.39062 16.21 3.38061 17.89 4.59061 18.56L9.9306 21.52C10.5006 21.84 11.2506 22 12.0006 22C12.7506 22 13.5006 21.84 14.0706 21.52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M19.2 21.4C20.9673 21.4 22.4 19.9673 22.4 18.2C22.4 16.4327 20.9673 15 19.2 15C17.4327 15 16 16.4327 16 18.2C16 19.9673 17.4327 21.4 19.2 21.4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M23 22L22 21"
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
  bold: BoxSearchBold,
  broken: BoxSearchBroken,
  bulk: BoxSearchBulk,
  linear: BoxSearchLinear,
  outline: BoxSearchOutline,
  twotone: BoxSearchTwotone,
};

export const BoxSearchIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
