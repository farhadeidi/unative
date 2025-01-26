import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const DangerBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.7605 15.92L15.3605 4.4C14.5005 2.85 13.3105 2 12.0005 2C10.6905 2 9.50047 2.85 8.64047 4.4L2.24047 15.92C1.43047 17.39 1.34047 18.8 1.99047 19.91C2.64047 21.02 3.92047 21.63 5.60047 21.63H18.4005C20.0805 21.63 21.3605 21.02 22.0105 19.91C22.6605 18.8 22.5705 17.38 21.7605 15.92ZM11.2505 9C11.2505 8.59 11.5905 8.25 12.0005 8.25C12.4105 8.25 12.7505 8.59 12.7505 9V14C12.7505 14.41 12.4105 14.75 12.0005 14.75C11.5905 14.75 11.2505 14.41 11.2505 14V9ZM12.7105 17.71C12.6605 17.75 12.6105 17.79 12.5605 17.83C12.5005 17.87 12.4405 17.9 12.3805 17.92C12.3205 17.95 12.2605 17.97 12.1905 17.98C12.1305 17.99 12.0605 18 12.0005 18C11.9405 18 11.8705 17.99 11.8005 17.98C11.7405 17.97 11.6805 17.95 11.6205 17.92C11.5605 17.9 11.5005 17.87 11.4405 17.83C11.3905 17.79 11.3405 17.75 11.2905 17.71C11.1105 17.52 11.0005 17.26 11.0005 17C11.0005 16.74 11.1105 16.48 11.2905 16.29C11.3405 16.25 11.3905 16.21 11.4405 16.17C11.5005 16.13 11.5605 16.1 11.6205 16.08C11.6805 16.05 11.7405 16.03 11.8005 16.02C11.9305 15.99 12.0705 15.99 12.1905 16.02C12.2605 16.03 12.3205 16.05 12.3805 16.08C12.4405 16.1 12.5005 16.13 12.5605 16.17C12.6105 16.21 12.6605 16.25 12.7105 16.29C12.8905 16.48 13.0005 16.74 13.0005 17C13.0005 17.26 12.8905 17.52 12.7105 17.71Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DangerBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 9V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.2394 14L21.2994 15.9C22.9794 18.93 21.5194 21.41 18.0594 21.41H11.9994H5.93944C2.46944 21.41 1.01944 18.93 2.69944 15.9L5.81944 10.28L8.75944 5.00003C10.5394 1.79003 13.4594 1.79003 15.2394 5.00003L18.1794 10.29"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9941 17H12.0031"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DangerBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.7605 15.92L15.3605 4.4C14.5005 2.85 13.3105 2 12.0005 2C10.6905 2 9.50047 2.85 8.64047 4.4L2.24047 15.92C1.43047 17.39 1.34047 18.8 1.99047 19.91C2.64047 21.02 3.92047 21.63 5.60047 21.63H18.4005C20.0805 21.63 21.3605 21.02 22.0105 19.91C22.6605 18.8 22.5705 17.38 21.7605 15.92Z"
        fill="currentColor"
      />
      <Path
        d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9V14C12.75 14.41 12.41 14.75 12 14.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.0001C11.94 18.0001 11.87 17.9901 11.8 17.9801C11.74 17.9701 11.68 17.9501 11.62 17.9201C11.56 17.9001 11.5 17.8701 11.44 17.8301C11.39 17.7901 11.34 17.7501 11.29 17.7101C11.11 17.5201 11 17.2601 11 17.0001C11 16.7401 11.11 16.4801 11.29 16.2901C11.34 16.2501 11.39 16.2101 11.44 16.1701C11.5 16.1301 11.56 16.1001 11.62 16.0801C11.68 16.0501 11.74 16.0301 11.8 16.0201C11.93 15.9901 12.07 15.9901 12.19 16.0201C12.26 16.0301 12.32 16.0501 12.38 16.0801C12.44 16.1001 12.5 16.1301 12.56 16.1701C12.61 16.2101 12.66 16.2501 12.71 16.2901C12.89 16.4801 13 16.7401 13 17.0001C13 17.2601 12.89 17.5201 12.71 17.7101C12.66 17.7501 12.61 17.7901 12.56 17.8301C12.5 17.8701 12.44 17.9001 12.38 17.9201C12.32 17.9501 12.26 17.9701 12.19 17.9801C12.13 17.9901 12.06 18.0001 12 18.0001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DangerLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 9V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0001 21.41H5.94005C2.47005 21.41 1.02005 18.93 2.70005 15.9L5.82006 10.28L8.76006 5.00003C10.5401 1.79003 13.4601 1.79003 15.2401 5.00003L18.1801 10.29L21.3001 15.91C22.9801 18.94 21.5201 21.42 18.0601 21.42H12.0001V21.41Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9945 17H12.0035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DangerOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9V14C12.75 14.41 12.41 14.75 12 14.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.0001C11.94 18.0001 11.87 17.9901 11.8 17.9801C11.74 17.9701 11.68 17.9501 11.62 17.9201C11.56 17.9001 11.5 17.8701 11.44 17.8301C11.39 17.7901 11.34 17.7501 11.29 17.7101C11.11 17.5201 11 17.2601 11 17.0001C11 16.7401 11.11 16.4801 11.29 16.2901C11.34 16.2501 11.39 16.2101 11.44 16.1701C11.5 16.1301 11.56 16.1001 11.62 16.0801C11.68 16.0501 11.74 16.0301 11.8 16.0201C11.93 15.9901 12.07 15.9901 12.19 16.0201C12.26 16.0301 12.32 16.0501 12.38 16.0801C12.44 16.1001 12.5 16.1301 12.56 16.1701C12.61 16.2101 12.66 16.2501 12.71 16.2901C12.89 16.4801 13 16.7401 13 17.0001C13 17.2601 12.89 17.5201 12.71 17.7101C12.66 17.7501 12.61 17.7901 12.56 17.8301C12.5 17.8701 12.44 17.9001 12.38 17.9201C12.32 17.9501 12.26 17.9701 12.19 17.9801C12.13 17.9901 12.06 18.0001 12 18.0001Z"
        fill="currentColor"
      />
      <Path
        d="M18.0605 22.1601H5.94046C3.99046 22.1601 2.50046 21.4501 1.74046 20.1701C0.990464 18.8901 1.09046 17.2401 2.04046 15.5301L8.10046 4.63009C9.10046 2.83009 10.4805 1.84009 12.0005 1.84009C13.5205 1.84009 14.9005 2.83009 15.9005 4.63009L21.9605 15.5401C22.9105 17.2501 23.0205 18.8901 22.2605 20.1801C21.5005 21.4501 20.0105 22.1601 18.0605 22.1601ZM12.0005 3.34009C11.0605 3.34009 10.1405 4.06009 9.41046 5.36009L3.36046 16.2701C2.68046 17.4901 2.57046 18.6101 3.04046 19.4201C3.51046 20.2301 4.55046 20.6701 5.95046 20.6701H18.0705C19.4705 20.6701 20.5005 20.2301 20.9805 19.4201C21.4605 18.6101 21.3405 17.5001 20.6605 16.2701L14.5905 5.36009C13.8605 4.06009 12.9405 3.34009 12.0005 3.34009Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DangerTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        opacity="0.34"
        d="M12 9V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9994 21.4098H5.93944C2.46944 21.4098 1.01944 18.9298 2.69944 15.8998L5.81944 10.2798L8.75944 4.99979C10.5394 1.78979 13.4594 1.78979 15.2394 4.99979L18.1794 10.2898L21.2994 15.9098C22.9794 18.9398 21.5194 21.4198 18.0594 21.4198H11.9994V21.4098Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.34"
        d="M11.9941 17H12.0031"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DangerBold,
  broken: DangerBroken,
  bulk: DangerBulk,
  linear: DangerLinear,
  outline: DangerOutline,
  twotone: DangerTwotone,
};

export const DangerIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
