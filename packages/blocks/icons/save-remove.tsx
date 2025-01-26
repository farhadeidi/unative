import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const SaveRemoveBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.89 5.87891H5.11C3.4 5.87891 2 7.27891 2 8.98891V20.3489C2 21.7989 3.04 22.4089 4.31 21.7089L8.24 19.5189C8.66 19.2889 9.34 19.2889 9.76 19.5189L13.69 21.7089C14.96 22.4089 16 21.7989 16 20.3489V8.98891C16 7.27891 14.6 5.87891 12.89 5.87891ZM10.94 12.8789C11.23 13.1689 11.23 13.6489 10.94 13.9389C10.79 14.0889 10.6 14.1589 10.41 14.1589C10.22 14.1589 10.03 14.0889 9.88 13.9389L9 13.0589L8.12 13.9389C7.97 14.0889 7.78 14.1589 7.59 14.1589C7.4 14.1589 7.21 14.0889 7.06 13.9389C6.77 13.6489 6.77 13.1689 7.06 12.8789L7.94 11.9989L7.06 11.1189C6.77 10.8289 6.77 10.3489 7.06 10.0589C7.35 9.76891 7.83 9.76891 8.12 10.0589L9 10.9389L9.88 10.0589C10.17 9.76891 10.65 9.76891 10.94 10.0589C11.23 10.3489 11.23 10.8289 10.94 11.1189L10.06 11.9989L10.94 12.8789Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SaveRemoveBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 20.3499C2 21.7999 3.04 22.4099 4.31 21.7099L8.24 19.5199C8.66 19.2899 9.34 19.2899 9.76 19.5199L13.69 21.7099C14.96 22.4099 16 21.7999 16 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988H5.11C3.4 5.87988 2 7.27987 2 8.98987V16.5699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.58984 13.4101L10.4098 10.5901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4098 13.4101L7.58984 10.5901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.4 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SaveRemoveBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76 19.5199C9.34 19.2899 8.66 19.2899 8.24 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.4 5.87988 5.11 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z"
        fill="currentColor"
      />
      <Path
        d="M10.0593 11.9998L10.9393 11.1198C11.2293 10.8298 11.2293 10.3498 10.9393 10.0598C10.6493 9.76979 10.1693 9.76979 9.8793 10.0598L8.9993 10.9398L8.1193 10.0598C7.8293 9.76979 7.3493 9.76979 7.0593 10.0598C6.7693 10.3498 6.7693 10.8298 7.0593 11.1198L7.9393 11.9998L7.0593 12.8798C6.7693 13.1698 6.7693 13.6498 7.0593 13.9398C7.2093 14.0898 7.3993 14.1598 7.5893 14.1598C7.7793 14.1598 7.9693 14.0898 8.1193 13.9398L8.9993 13.0598L9.8793 13.9398C10.0293 14.0898 10.2193 14.1598 10.4093 14.1598C10.5993 14.1598 10.7893 14.0898 10.9393 13.9398C11.2293 13.6498 11.2293 13.1698 10.9393 12.8798L10.0593 11.9998Z"
        fill="currentColor"
      />
      <Path
        d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.4 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SaveRemoveLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76 19.5199C9.34 19.2899 8.66 19.2899 8.24 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.4 5.87988 5.11 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.59009 13.4101L10.4101 10.5901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4101 13.4101L7.59009 10.5901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.4 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SaveRemoveOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.6902 22.7501C14.2502 22.7501 13.7902 22.6201 13.3202 22.3701L9.39023 20.1801C9.20023 20.0801 8.79024 20.0801 8.60023 20.1801L4.67023 22.3701C3.82023 22.8401 2.96023 22.8801 2.29023 22.4901C1.63023 22.1001 1.24023 21.3201 1.24023 20.3601V9.00012C1.24023 6.87012 2.97023 5.14014 5.10023 5.14014H12.8802C15.0102 5.14014 16.7402 6.87012 16.7402 9.00012V20.3601C16.7402 21.3201 16.3602 22.1001 15.6902 22.4901C15.4002 22.6601 15.0602 22.7501 14.6902 22.7501ZM9.00023 18.6001C9.40023 18.6001 9.79023 18.6901 10.1202 18.8701L14.0602 21.0601C14.4202 21.2601 14.7502 21.3101 14.9502 21.1901C15.1402 21.0801 15.2602 20.7601 15.2602 20.3501V8.99011C15.2602 7.69011 14.2002 6.63013 12.9002 6.63013H5.11023C3.81023 6.63013 2.75023 7.69011 2.75023 8.99011V20.3501C2.75023 20.7601 2.87023 21.0801 3.06023 21.1901C3.25023 21.3001 3.59023 21.2501 3.95023 21.0501L7.88023 18.8601C8.20023 18.6901 8.60023 18.6001 9.00023 18.6001Z"
        fill="currentColor"
      />
      <Path
        d="M7.5893 14.16C7.3993 14.16 7.2093 14.09 7.0593 13.94C6.7693 13.65 6.7693 13.17 7.0593 12.88L9.8893 10.05C10.1793 9.76002 10.6593 9.76002 10.9493 10.05C11.2393 10.34 11.2393 10.82 10.9493 11.11L8.1193 13.94C7.9693 14.09 7.7793 14.16 7.5893 14.16Z"
        fill="currentColor"
      />
      <Path
        d="M10.4095 14.16C10.2195 14.16 10.0295 14.09 9.87953 13.94L7.04953 11.11C6.75953 10.82 6.75953 10.34 7.04953 10.05C7.33953 9.76002 7.81953 9.76002 8.10953 10.05L10.9395 12.88C11.2295 13.17 11.2295 13.65 10.9395 13.94C10.7995 14.09 10.6095 14.16 10.4095 14.16Z"
        fill="currentColor"
      />
      <Path
        d="M20.69 18.8698C20.25 18.8698 19.79 18.7397 19.32 18.4897L15.63 16.4297C15.39 16.2997 15.25 16.0498 15.25 15.7798V8.99976C15.25 7.69976 14.19 6.63977 12.89 6.63977H8C7.59 6.63977 7.25 6.29977 7.25 5.88977V5.11975C7.25 2.98975 8.98 1.25977 11.11 1.25977H18.89C21.02 1.25977 22.75 2.98975 22.75 5.11975V16.4798C22.75 17.4398 22.37 18.2197 21.7 18.6097C21.4 18.7797 21.06 18.8698 20.69 18.8698ZM16.75 15.3297L20.06 17.1797C20.42 17.3797 20.75 17.4298 20.95 17.3098C21.14 17.1998 21.26 16.8798 21.26 16.4698V5.10974C21.26 3.80974 20.2 2.74976 18.9 2.74976H11.12C9.82 2.74976 8.76 3.80974 8.76 5.10974V5.12976H12.9C15.03 5.12976 16.76 6.85975 16.76 8.98975V15.3297H16.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SaveRemoveTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76 19.5199C9.34 19.2899 8.66 19.2899 8.24 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.4 5.87988 5.11 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M7.58984 13.4099L10.4098 10.5898"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.4098 13.4099L7.58984 10.5898"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.4 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SaveRemoveBold,
  broken: SaveRemoveBroken,
  bulk: SaveRemoveBulk,
  linear: SaveRemoveLinear,
  outline: SaveRemoveOutline,
  twotone: SaveRemoveTwotone,
};

export const SaveRemoveIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
