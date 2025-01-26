import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const DirectSendBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.3 12.2305H17.82C16.84 12.2305 15.97 12.7705 15.53 13.6505L14.69 15.3105C14.49 15.7105 14.09 15.9605 13.65 15.9605H10.37C10.06 15.9605 9.62 15.8905 9.33 15.3105L8.49 13.6605C8.05 12.7905 7.17 12.2405 6.2 12.2405H2.7C2.31 12.2405 2 12.5505 2 12.9405V16.2005C2 19.8305 4.18 22.0005 7.82 22.0005H16.2C19.63 22.0005 21.74 20.1205 22 16.7805V12.9305C22 12.5505 21.69 12.2305 21.3 12.2305Z"
        fill="currentColor"
      />
      <Path
        d="M12.7492 3.80828L13.4692 4.52828C13.6192 4.67828 13.8092 4.74828 13.9992 4.74828C14.1892 4.74828 14.3792 4.67828 14.5292 4.52828C14.8192 4.23828 14.8192 3.75828 14.5292 3.46828L12.5292 1.46828C12.5192 1.45828 12.5092 1.45828 12.5092 1.44828C12.4492 1.38828 12.3692 1.33828 12.2892 1.29828C12.2792 1.29828 12.2792 1.29828 12.2692 1.28828C12.1892 1.25828 12.1092 1.24828 12.0292 1.23828C11.9992 1.23828 11.9792 1.23828 11.9492 1.23828C11.8892 1.23828 11.8292 1.25828 11.7692 1.27828C11.7392 1.28828 11.7192 1.29828 11.6992 1.30828C11.6192 1.34828 11.5392 1.38828 11.4792 1.45828L9.47922 3.45828C9.18922 3.74828 9.18922 4.22828 9.47922 4.51828C9.76922 4.80828 10.2492 4.80828 10.5392 4.51828L11.2592 3.79828V4.99828H12.7592V3.80828H12.7492Z"
        fill="currentColor"
      />
      <Path
        d="M22 10.81V10.85C21.78 10.77 21.54 10.73 21.3 10.73H17.82C16.27 10.73 14.88 11.59 14.19 12.97L13.44 14.45H10.58L9.83 12.98C9.14 11.59 7.75 10.73 6.2 10.73H2.7C2.46 10.73 2.22 10.77 2 10.85V10.81C2 7.17 4.17 5 7.81 5H11.25V9C11.25 9.41 11.59 9.75 12 9.75C12.41 9.75 12.75 9.41 12.75 9V5H16.19C19.83 5 22 7.17 22 10.81Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectSendBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 9V2L10 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2L14 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.98047 13H6.39047C6.77047 13 7.11047 13.21 7.28047 13.55L8.45047 15.89C8.79047 16.57 9.48047 17 10.2405 17H13.7705C14.5305 17 15.2205 16.57 15.5605 15.89L16.7305 13.55C16.9005 13.21 17.2505 13 17.6205 13H21.9805"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.68945 18.9999C3.64945 21.0999 5.64945 21.9999 8.99945 21.9999H14.9995C19.9995 21.9999 21.9995 19.9999 21.9995 14.9999V11.9999C21.9995 7.72988 20.5395 5.64988 16.9995 5.12988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 5.12988C3.46 5.64988 2 7.72988 2 11.9999V14.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectSendBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.5292 3.47023L12.5292 1.47023C12.5192 1.46023 12.5092 1.46023 12.5092 1.45023C12.4492 1.39023 12.3692 1.34023 12.2892 1.30023C12.2792 1.30023 12.2792 1.30023 12.2692 1.29023C12.1892 1.26023 12.1092 1.25023 12.0292 1.24023C11.9992 1.24023 11.9792 1.24023 11.9492 1.24023C11.8892 1.24023 11.8292 1.26023 11.7692 1.28023C11.7392 1.29023 11.7192 1.30023 11.6992 1.31023C11.6192 1.35023 11.5392 1.39023 11.4792 1.46023L9.47922 3.46023C9.18922 3.75023 9.18922 4.23023 9.47922 4.52023C9.76922 4.81023 10.2492 4.81023 10.5392 4.52023L11.2592 3.80023V9.00023C11.2592 9.41023 11.5992 9.75023 12.0092 9.75023C12.4192 9.75023 12.7492 9.41023 12.7492 9.00023V3.81023L13.4692 4.53023C13.6192 4.68023 13.8092 4.75023 13.9992 4.75023C14.1892 4.75023 14.3792 4.68023 14.5292 4.53023C14.8192 4.24023 14.8192 3.76023 14.5292 3.47023Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.19 6H7.81C4.17 6 2 8.17 2 11.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V11.82C22 8.17 19.83 6 16.19 6Z"
        fill="currentColor"
      />
      <Path
        d="M21.3 12.23H17.82C16.84 12.23 15.97 12.77 15.53 13.65L14.69 15.31C14.49 15.71 14.09 15.96 13.65 15.96H10.37C10.06 15.96 9.62 15.89 9.33 15.31L8.49 13.66C8.05 12.79 7.17 12.24 6.2 12.24H2.7C2.31 12.24 2 12.55 2 12.94V16.2C2 19.83 4.18 22 7.82 22H16.2C19.63 22 21.74 20.12 22 16.78V12.93C22 12.55 21.69 12.23 21.3 12.23Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectSendLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 9V2L10 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2L14 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.97998 13H6.38998C6.76998 13 7.10998 13.21 7.27998 13.55L8.44998 15.89C8.78998 16.57 9.47998 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.73 13.55C16.9 13.21 17.25 13 17.62 13H21.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 5.12988C3.46 5.64988 2 7.72988 2 11.9999V14.9999C2 19.9999 4 21.9999 9 21.9999H15C20 21.9999 22 19.9999 22 14.9999V11.9999C22 7.72988 20.54 5.64988 17 5.12988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectSendOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9995 9.74999C11.5895 9.74999 11.2495 9.40999 11.2495 8.99999V3.80999L10.5295 4.52999C10.2395 4.81999 9.75945 4.81999 9.46945 4.52999C9.17945 4.23999 9.17945 3.75999 9.46945 3.46999L11.4695 1.46999C11.6795 1.25999 12.0095 1.18999 12.2895 1.30999C12.5695 1.41999 12.7495 1.69999 12.7495 1.99999V8.99999C12.7495 9.40999 12.4095 9.74999 11.9995 9.74999Z"
        fill="currentColor"
      />
      <Path
        d="M13.9995 4.74994C13.8095 4.74994 13.6195 4.67994 13.4695 4.52994L11.4695 2.52994C11.1795 2.23994 11.1795 1.75994 11.4695 1.46994C11.7595 1.17994 12.2395 1.17994 12.5295 1.46994L14.5295 3.46994C14.8195 3.75994 14.8195 4.23994 14.5295 4.52994C14.3795 4.67994 14.1895 4.74994 13.9995 4.74994Z"
        fill="currentColor"
      />
      <Path
        d="M13.7605 17.75H10.2305C9.18047 17.75 8.24047 17.17 7.77047 16.23L6.60047 13.89C6.56047 13.8 6.47047 13.75 6.38047 13.75H1.98047C1.57047 13.75 1.23047 13.41 1.23047 13C1.23047 12.59 1.57047 12.25 1.98047 12.25H6.39047C7.06047 12.25 7.66047 12.62 7.96047 13.22L9.13047 15.56C9.34047 15.99 9.77047 16.25 10.2505 16.25H13.7805C14.2605 16.25 14.6905 15.99 14.9005 15.56L16.0705 13.22C16.3705 12.62 16.9705 12.25 17.6405 12.25H22.0005C22.4105 12.25 22.7505 12.59 22.7505 13C22.7505 13.41 22.4105 13.75 22.0005 13.75H17.6405C17.5405 13.75 17.4605 13.8 17.4205 13.89L16.2505 16.23C15.7505 17.17 14.8105 17.75 13.7605 17.75Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.7499H9C3.57 22.7499 1.25 20.4299 1.25 14.9999V11.9999C1.25 7.30993 2.99 4.95993 6.89 4.38993C7.31 4.32993 7.68 4.60993 7.74 5.01993C7.8 5.42993 7.52 5.80993 7.11 5.86993C3.97 6.32993 2.75 8.04993 2.75 11.9999V14.9999C2.75 19.6099 4.39 21.2499 9 21.2499H15C19.61 21.2499 21.25 19.6099 21.25 14.9999V11.9999C21.25 8.04993 20.03 6.32993 16.89 5.86993C16.48 5.80993 16.2 5.42993 16.26 5.01993C16.32 4.60993 16.7 4.32993 17.11 4.38993C21.01 4.95993 22.75 7.30993 22.75 11.9999V14.9999C22.75 20.4299 20.43 22.7499 15 22.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectSendTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <G opacity="0.4">
        <Path
          d="M12 9V2L10 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 2L14 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        opacity="0.4"
        d="M1.98047 13H6.39047C6.77047 13 7.11047 13.21 7.28047 13.55L8.45047 15.89C8.79047 16.57 9.48047 17 10.2405 17H13.7705C14.5305 17 15.2205 16.57 15.5605 15.89L16.7305 13.55C16.9005 13.21 17.2505 13 17.6205 13H21.9805"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 5.12988C3.46 5.64988 2 7.72988 2 11.9999V14.9999C2 19.9999 4 21.9999 9 21.9999H15C20 21.9999 22 19.9999 22 14.9999V11.9999C22 7.72988 20.54 5.64988 17 5.12988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DirectSendBold,
  broken: DirectSendBroken,
  bulk: DirectSendBulk,
  linear: DirectSendLinear,
  outline: DirectSendOutline,
  twotone: DirectSendTwotone,
};

export const DirectSendIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
