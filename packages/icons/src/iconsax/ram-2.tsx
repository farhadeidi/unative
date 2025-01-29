import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const Ram2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.0103 20.97C16.0159 21.5261 15.5666 21.98 15.0104 21.98H8.99374C8.44406 21.98 7.99743 21.5364 7.99376 20.9867L7.98047 19C7.98047 17.9 8.87047 17 9.98047 17H13.9905C15.0905 17 15.9805 17.89 15.9905 18.99L16.0103 20.97Z"
        fill="currentColor"
      />
      <Path
        d="M18.5 9.99938V12.1694C18.5 12.6994 18.71 13.2094 19.09 13.5894L19.91 14.4094C20.29 14.7894 20.5 15.2994 20.5 15.8294V16.9994C20.5 19.3005 19.5911 20.993 17.6057 21.6655C17.3045 21.7676 17.0089 21.5297 17.0078 21.2117L17 18.9794C16.98 17.3394 15.63 15.9994 14 15.9994H9.99C8.33 15.9994 6.99 17.3494 6.99 18.9994V21.2235C6.99 21.541 6.69629 21.7798 6.3949 21.6801C4.386 21.0153 3.5 19.3124 3.5 16.9994V6.99938C3.5 4.59334 4.45179 2.83316 6.64523 2.23589C6.94579 2.15404 7.2259 2.3956 7.22143 2.70706L7.19 4.89938C7.18 5.36938 7.35 5.81938 7.67 6.15938C8 6.49938 8.43 6.68937 8.94 6.69938C9.45417 6.69938 9.91203 6.48662 10.2245 6.14032C10.3367 6.01594 10.5516 6.01093 10.67 6.12938C10.99 6.46938 11.43 6.66937 11.94 6.67937C12.4543 6.67937 12.9235 6.45332 13.2436 6.08945C13.3488 5.96988 13.5642 5.96034 13.67 6.07938C13.99 6.41937 14.43 6.61938 14.94 6.62938C15.9 6.62938 16.67 5.87937 16.69 4.90937L16.7297 2.68602C16.7351 2.38172 17.0106 2.15075 17.3047 2.22893C19.5087 2.8147 20.5 4.58656 20.5 6.99938V7.99938C20.5 8.54938 20.05 8.99938 19.5 8.99938C18.95 8.99938 18.5 9.44938 18.5 9.99938Z"
        fill="currentColor"
      />
      <Path
        d="M9.22788 2.0033C9.50858 2.00149 9.73577 2.23107 9.73103 2.51174L9.68967 4.96C9.67967 5.37 9.34967 5.7 8.93967 5.7H8.92968C8.50968 5.69 8.17967 5.35 8.18967 4.93V2.50678C8.18967 2.2319 8.41157 2.00857 8.68645 2.00679L9.22788 2.0033Z"
        fill="currentColor"
      />
      <Path
        d="M12.2311 2C12.5106 2 12.7358 2.22906 12.7311 2.50847L12.6897 4.95C12.6797 5.35 12.3497 5.68 11.9397 5.68H11.9297C11.5097 5.67 11.1797 5.33 11.1897 4.92L11.1897 2.5C11.1897 2.22386 11.4135 2 11.6897 2H12.2311Z"
        fill="currentColor"
      />
      <Path
        d="M15.2341 2.00658C15.5124 2.00833 15.7357 2.23699 15.7309 2.51525L15.6897 4.88977C15.6797 5.29977 15.3497 5.62977 14.9397 5.62977H14.9297C14.5097 5.61977 14.1797 5.27977 14.1897 4.86977V2.50316C14.1897 2.22579 14.4155 2.00142 14.6928 2.00317L15.2341 2.00658Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Ram2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.99047 21.97L7.98047 19C7.98047 17.89 8.87047 17 9.98047 17H13.9905C15.0905 17 15.9805 17.89 15.9905 18.99L16.0205 21.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.93945 4.95006L8.98945 2.06006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9395 4.95006L11.9895 2.06006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9395 4.92004L14.9895 2.04004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.50023 11V17C3.50023 20 4.97023 22 8.50023 22H15.5002C18.9702 22 20.5002 20 20.5002 17V15.83C20.5002 15.3 20.2902 14.79 19.9102 14.42L19.0802 13.59C18.7002 13.21 18.4902 12.71 18.4902 12.18V10C18.4902 9.45 18.9402 9 19.4902 9C20.0402 9 20.4902 8.55 20.4902 8V7C20.4902 4 18.9602 2 15.4902 2H8.49023C4.96023 2 3.49023 4 3.49023 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Ram2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.5 10V12.17C18.5 12.7 18.71 13.21 19.09 13.59L19.91 14.41C20.29 14.79 20.5 15.3 20.5 15.83V17C20.5 20 18.97 22 15.5 22H8.5C4.97 22 3.5 20 3.5 17V7C3.5 4.08 4.9 2.1 8.24 2.01C8.32 2 8.41 2 8.5 2H15.5C15.58 2 15.66 2 15.74 2.01C19.04 2.09 20.5 4.07 20.5 7V8C20.5 8.55 20.05 9 19.5 9C18.95 9 18.5 9.45 18.5 10Z"
        fill="currentColor"
      />
      <Path
        d="M9.73967 2L9.68967 4.96C9.67967 5.37 9.34967 5.7 8.93967 5.7H8.92968C8.50968 5.69 8.17967 5.35 8.18967 4.93L8.23967 2.01C8.31967 2 8.40967 2 8.49967 2H9.73967Z"
        fill="currentColor"
      />
      <Path
        d="M12.7397 2L12.6897 4.95C12.6797 5.35 12.3497 5.68 11.9397 5.68H11.9297C11.5097 5.67 11.1797 5.33 11.1897 4.92L11.2397 2H12.7397Z"
        fill="currentColor"
      />
      <Path
        d="M15.7397 2.01L15.6897 4.89C15.6797 5.3 15.3497 5.63 14.9397 5.63H14.9297C14.5097 5.62 14.1797 5.28 14.1897 4.87L14.2397 2H15.4997C15.5797 2 15.6597 2 15.7397 2.01Z"
        fill="currentColor"
      />
      <Path
        d="M16.0205 21.98C15.8505 21.99 15.6805 22 15.5105 22H8.51047C8.33047 22 8.16047 22 8.00047 21.98L7.98047 19C7.98047 17.9 8.87047 17 9.98047 17H13.9905C15.0905 17 15.9805 17.89 15.9905 18.99L16.0205 21.98Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Ram2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.5 7V17C3.5 20 4.97 22 8.5 22H15.5C18.97 22 20.5 20 20.5 17V15.83C20.5 15.3 20.29 14.79 19.91 14.42L19.08 13.59C18.7 13.21 18.49 12.71 18.49 12.18V10C18.49 9.45 18.94 9 19.49 9C20.04 9 20.49 8.55 20.49 8V7C20.49 4 18.96 2 15.49 2H8.49C4.97 2 3.5 4 3.5 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.98998 21.97L7.97998 19C7.97998 17.89 8.86998 17 9.97998 17H13.99C15.09 17 15.98 17.89 15.99 18.99L16.02 21.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.93994 4.95006L8.98994 2.06006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9399 4.95006L11.9899 2.06006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9399 4.92004L14.9899 2.04004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Ram2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.5 22.75H8.5C4.79 22.75 2.75 20.71 2.75 17V7C2.75 3.29 4.79 1.25 8.5 1.25H15.5C19.15 1.25 21.25 3.35 21.25 7V8C21.25 8.96 20.46 9.75 19.5 9.75C19.36 9.75 19.25 9.86 19.25 10V12.17C19.25 12.5 19.38 12.82 19.62 13.05L20.45 13.88C20.97 14.4 21.26 15.09 21.26 15.82V17C21.25 20.65 19.15 22.75 15.5 22.75ZM8.5 2.75C5.64 2.75 4.25 4.14 4.25 7V17C4.25 19.86 5.64 21.25 8.5 21.25H15.5C18.32 21.25 19.75 19.82 19.75 17V15.83C19.75 15.5 19.62 15.18 19.38 14.95L18.55 14.12C18.03 13.6 17.74 12.91 17.74 12.18V10C17.74 9.04 18.53 8.25 19.49 8.25C19.63 8.25 19.74 8.14 19.74 8V7C19.74 4.18 18.31 2.75 15.49 2.75H8.5Z"
        fill="currentColor"
      />
      <Path
        d="M16.0105 22.72C15.6005 22.72 15.2605 22.39 15.2605 21.98L15.2305 18.99C15.2305 18.3 14.6605 17.75 13.9805 17.75H9.98047C9.65047 17.75 9.33047 17.88 9.09047 18.12C8.86047 18.35 8.73047 18.67 8.73047 19L8.74047 21.97C8.74047 22.38 8.41047 22.72 7.99047 22.72C7.58047 22.72 7.24047 22.39 7.24047 21.97L7.23047 19C7.23047 18.26 7.51047 17.57 8.03047 17.05C8.55047 16.53 9.24047 16.24 9.98047 16.24H13.9905C15.5005 16.24 16.7305 17.47 16.7405 18.97L16.7705 21.95C16.7705 22.38 16.4305 22.72 16.0105 22.72C16.0205 22.72 16.0105 22.72 16.0105 22.72Z"
        fill="currentColor"
      />
      <Path
        d="M8.93967 5.70005H8.92968C8.50968 5.69005 8.17967 5.35005 8.18967 4.93005L8.23967 2.04005C8.24967 1.63005 8.57967 1.30005 8.98967 1.30005H8.99967C9.40967 1.31005 9.73967 1.65005 9.73967 2.06005L9.68967 4.96005C9.67967 5.37005 9.34967 5.70005 8.93967 5.70005Z"
        fill="currentColor"
      />
      <Path
        d="M11.9404 5.70006H11.9304C11.5204 5.69006 11.1904 5.35006 11.1904 4.94006L11.2404 2.05006C11.2504 1.64006 11.5804 1.31006 11.9904 1.31006H12.0004C12.4104 1.32006 12.7404 1.66006 12.7404 2.07006L12.6904 4.96006C12.6804 5.37006 12.3504 5.70006 11.9404 5.70006Z"
        fill="currentColor"
      />
      <Path
        d="M14.9404 5.67003H14.9304C14.5204 5.66003 14.1904 5.32003 14.1904 4.91003L14.2404 2.02003C14.2504 1.61003 14.5804 1.28003 14.9904 1.28003H15.0004C15.4104 1.29003 15.7404 1.63003 15.7404 2.04003L15.6904 4.93003C15.6804 5.34003 15.3504 5.67003 14.9404 5.67003Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Ram2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.5 7V17C3.5 20 4.97 22 8.5 22H15.5C18.97 22 20.5 20 20.5 17V15.83C20.5 15.3 20.29 14.79 19.91 14.42L19.08 13.59C18.7 13.21 18.49 12.71 18.49 12.18V10C18.49 9.45 18.94 9 19.49 9C20.04 9 20.49 8.55 20.49 8V7C20.49 4 18.96 2 15.49 2H8.49C4.97 2 3.5 4 3.5 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.99047 21.97L7.98047 19C7.98047 17.89 8.87047 17 9.98047 17H13.9905C15.0905 17 15.9805 17.89 15.9905 18.99L16.0205 21.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.94043 4.95006L8.99043 2.06006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.9404 4.95006L11.9904 2.06006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M14.9404 4.92004L14.9904 2.04004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Ram2Bold,
  broken: Ram2Broken,
  bulk: Ram2Bulk,
  linear: Ram2Linear,
  outline: Ram2Outline,
  twotone: Ram2Twotone,
};

export const Ram2Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default Ram2Icon;
