import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const AudioSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.66984 13.9219C8.92984 13.9219 8.33984 14.5219 8.33984 15.2619C8.33984 16.0019 8.93984 16.5919 9.66984 16.5919C10.4098 16.5919 11.0098 15.9919 11.0098 15.2619C11.0098 14.5219 10.4098 13.9219 9.66984 13.9219Z"
        fill="currentColor"
      />
      <Path
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.12 9.8C17.12 10.41 16.86 10.95 16.42 11.27C16.14 11.47 15.8 11.58 15.44 11.58C15.23 11.58 15.02 11.54 14.8 11.47L12.51 10.71C12.5 10.71 12.48 10.7 12.47 10.69V15.25C12.47 16.79 11.21 18.05 9.67 18.05C8.13 18.05 6.87 16.79 6.87 15.25C6.87 13.71 8.13 12.45 9.67 12.45C10.16 12.45 10.61 12.59 11.01 12.8V8.63V8.02C11.01 7.41 11.27 6.87 11.71 6.55C12.16 6.23 12.75 6.15 13.33 6.35L15.62 7.11C16.48 7.4 17.13 8.3 17.13 9.2V9.8H17.12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AudioSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.62 17.3C10.7908 17.3 11.74 16.3509 11.74 15.1801C11.74 14.0092 10.7908 13.0601 9.62 13.0601C8.44915 13.0601 7.5 14.0092 7.5 15.1801C7.5 16.3509 8.44915 17.3 9.62 17.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.7402 15.18V7.77002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.1302 6.7701L15.4702 7.55006C16.0402 7.74006 16.5002 8.38006 16.5002 8.98006V9.60005C16.5002 10.4101 15.8702 10.8601 15.1102 10.6001L12.7703 9.82008C12.2003 9.63008 11.7402 8.99009 11.7402 8.39009V7.7701C11.7402 6.9701 12.3602 6.5101 13.1302 6.7701Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const AudioSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
        fill="currentColor"
      />
      <Path
        d="M15.6191 7.09996L13.3292 6.34001C12.7492 6.14001 12.1592 6.21996 11.7092 6.53996C11.2592 6.85996 11.0092 7.39999 11.0092 8.00999V8.61998V12.8C10.6092 12.58 10.1591 12.45 9.66913 12.45C8.12913 12.45 6.86914 13.71 6.86914 15.25C6.86914 16.79 8.12913 18.05 9.66913 18.05C11.2091 18.05 12.4691 16.79 12.4691 15.25V10.7C12.4791 10.71 12.4992 10.71 12.5092 10.72L14.7991 11.48C15.0091 11.55 15.2291 11.59 15.4391 11.59C15.7991 11.59 16.1391 11.49 16.4191 11.28C16.8691 10.96 17.1191 10.42 17.1191 9.80998V9.2C17.1191 8.29 16.4791 7.38996 15.6191 7.09996ZM9.66913 16.59C8.92913 16.59 8.33917 15.99 8.33917 15.26C8.33917 14.52 8.93913 13.92 9.66913 13.92C10.4091 13.92 11.0092 14.52 11.0092 15.26C11.0092 15.99 10.4091 16.59 9.66913 16.59Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AudioSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.62 17.3C10.7908 17.3 11.74 16.3509 11.74 15.1801C11.74 14.0092 10.7908 13.0601 9.62 13.0601C8.44915 13.0601 7.5 14.0092 7.5 15.1801C7.5 16.3509 8.44915 17.3 9.62 17.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.74 15.18V7.77002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.13 6.7701L15.47 7.55006C16.04 7.74006 16.5 8.38006 16.5 8.98006V9.60005C16.5 10.4101 15.87 10.8601 15.11 10.6001L12.77 9.82008C12.2 9.63008 11.74 8.99009 11.74 8.39009V7.7701C11.74 6.9701 12.36 6.5101 13.13 6.7701Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const AudioSquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.62 18.05C8.04 18.05 6.75 16.7601 6.75 15.1801C6.75 13.6001 8.04 12.3101 9.62 12.3101C11.2 12.3101 12.49 13.6001 12.49 15.1801C12.49 16.7601 11.2 18.05 9.62 18.05ZM9.62 13.8201C8.87 13.8201 8.25 14.4301 8.25 15.1901C8.25 15.9401 8.86 16.5601 9.62 16.5601C10.37 16.5601 10.99 15.9501 10.99 15.1901C10.99 14.4301 10.37 13.8201 9.62 13.8201Z"
        fill="currentColor"
      />
      <Path
        d="M11.7402 15.93C11.3302 15.93 10.9902 15.59 10.9902 15.18V7.77002C10.9902 7.36002 11.3302 7.02002 11.7402 7.02002C12.1502 7.02002 12.4902 7.36002 12.4902 7.77002V15.18C12.4902 15.6 12.1502 15.93 11.7402 15.93Z"
        fill="currentColor"
      />
      <Path
        d="M15.5203 11.4297C15.3103 11.4297 15.0902 11.3897 14.8702 11.3197L12.5303 10.5397C11.6503 10.2497 10.9902 9.32974 10.9902 8.39974V7.77975C10.9902 7.14975 11.2503 6.59974 11.7103 6.26974C12.1703 5.93974 12.7702 5.85972 13.3702 6.05972L15.7103 6.83974C16.5903 7.12974 17.2502 8.0497 17.2502 8.9797V9.59969C17.2502 10.2297 16.9903 10.7797 16.5303 11.1097C16.2403 11.3197 15.8903 11.4297 15.5203 11.4297ZM12.7103 7.44973C12.6603 7.44973 12.6103 7.4597 12.5803 7.4797C12.5203 7.5197 12.4802 7.62974 12.4802 7.76974V8.38973C12.4802 8.66973 12.7402 9.0197 13.0002 9.1097L15.3403 9.88973C15.4703 9.92973 15.5903 9.92973 15.6503 9.88973C15.7103 9.84973 15.7502 9.73969 15.7502 9.59969V8.9797C15.7502 8.6997 15.4902 8.34973 15.2302 8.25973L12.8903 7.4797C12.8303 7.4597 12.7603 7.44973 12.7103 7.44973Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AudioSquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M9.62 17.3C10.7908 17.3 11.74 16.3509 11.74 15.1801C11.74 14.0092 10.7908 13.0601 9.62 13.0601C8.44915 13.0601 7.5 14.0092 7.5 15.1801C7.5 16.3509 8.44915 17.3 9.62 17.3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.7402 15.18V7.77002"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.1302 6.7701L15.4702 7.55006C16.0402 7.74006 16.5002 8.38006 16.5002 8.98006V9.60005C16.5002 10.4101 15.8702 10.8601 15.1102 10.6001L12.7703 9.82008C12.2003 9.63008 11.7402 8.99009 11.7402 8.39009V7.7701C11.7402 6.9701 12.3602 6.5101 13.1302 6.7701Z"
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
  bold: AudioSquareBold,
  broken: AudioSquareBroken,
  bulk: AudioSquareBulk,
  linear: AudioSquareLinear,
  outline: AudioSquareOutline,
  twotone: AudioSquareTwotone,
};

export const AudioSquareIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
