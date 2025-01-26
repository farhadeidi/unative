import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const FolderCloudBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.5786 19.6986C13.4686 19.8486 13.4686 22.9086 15.5786 23.0586H20.5886C21.1986 23.0586 21.7786 22.8386 22.2286 22.4286C23.7086 21.1386 22.9186 18.5386 20.9686 18.2986C20.2686 14.0786 14.1586 15.6786 15.6086 19.6986"
        fill="currentColor"
      />
      <Path
        d="M15.5786 19.6986C13.4686 19.8486 13.4686 22.9086 15.5786 23.0586H20.5886C21.1986 23.0586 21.7786 22.8386 22.2286 22.4286C23.7086 21.1386 22.9186 18.5386 20.9686 18.2986C20.2686 14.0786 14.1586 15.6786 15.6086 19.6986"
        fill="currentColor"
      />
      <Path
        d="M22 11.07V15.34C22 15.66 21.49 15.8 21.27 15.57C20.8 15.08 20.21 14.71 19.53 14.5C17.96 14.01 16.15 14.49 15.01 15.67C14.29 16.44 13.9 17.4 13.88 18.44C13.88 18.62 13.79 18.78 13.65 18.89C12.93 19.46 12.49 20.35 12.49 21.37V21.38C12.49 21.7 12.26 21.99 11.94 21.99H7.34C4.4 22 2 19.6 2 16.65V6.42C2 3.98 3.98 2 6.42 2H8.74C10.37 2 10.88 2.53 11.53 3.4L12.93 5.26C13.24 5.67 13.28 5.72 13.86 5.72H16.65C19.03 5.72 21.05 7.28 21.74 9.44C21.89 9.89 21.97 10.35 21.99 10.84C22 10.91 22 11 22 11.07Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FolderCloudBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 7C2 3 3 2 7 2H8.5C10 2 10.33 2.44001 10.9 3.20001L12.4 5.20001C12.78 5.70001 13 6 14 6H17C21 6 22 7 22 11V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H7C3 22 2 21 2 17V12.03"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.7605 18.3199C11.4105 18.4899 11.4105 21.8899 13.7605 22.0599H19.3205C19.9905 22.0599 20.6506 21.8099 21.1406 21.3599C22.7906 19.9199 21.9105 17.0399 19.7405 16.7699C18.9605 12.0799 12.1806 13.8599 13.7806 18.3299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FolderCloudBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9902 10.84C21.9702 10.36 21.8902 9.88999 21.7402 9.43999C21.0502 7.27999 19.0303 5.71999 16.6503 5.71999H13.8602C13.2802 5.71999 13.2402 5.65998 12.9302 5.24998L11.5303 3.38998C10.8803 2.51998 10.3702 1.98999 8.74023 1.98999H6.41022C3.97022 1.98999 1.99023 3.96999 1.99023 6.40999V9.42998V16.64C1.99023 19.59 4.39027 21.99 7.34027 21.99H16.6403C19.5903 21.99 21.9902 19.59 21.9902 16.64V11.06C22.0002 11 22.0002 10.91 21.9902 10.84Z"
        fill="currentColor"
      />
      <Path
        d="M15.5805 19.7C13.4705 19.85 13.4705 22.91 15.5805 23.06H20.5906C21.2006 23.06 21.7805 22.84 22.2305 22.43C23.7105 21.14 22.9205 18.54 20.9705 18.3C20.2705 14.08 14.1605 15.68 15.6105 19.7"
        fill="currentColor"
      />
    </Svg>
  );
};

const FolderCloudLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44001 10.9 3.20001L12.4 5.20001C12.78 5.70001 13 6 14 6H17C21 6 22 7 22 11V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.7601 18.32C11.4101 18.49 11.4101 21.89 13.7601 22.06H19.3201C19.9901 22.06 20.6501 21.81 21.1401 21.36C22.7901 19.92 21.91 17.04 19.74 16.77C18.96 12.08 12.1801 13.86 13.7801 18.33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FolderCloudOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 22.75H7C2.59 22.75 1.25 21.41 1.25 17V7C1.25 2.59 2.59 1.25 7 1.25H8.5C10.25 1.25 10.8 1.82 11.5 2.75L13 4.75C13.33 5.19 13.38 5.25 14 5.25H17C21.41 5.25 22.75 6.59 22.75 11V13C22.75 13.41 22.41 13.75 22 13.75C21.59 13.75 21.25 13.41 21.25 13V11C21.25 7.43 20.58 6.75 17 6.75H14C12.72 6.75 12.3 6.30999 11.8 5.64999L10.3 3.64999C9.77999 2.95999 9.62 2.75 8.5 2.75H7C3.42 2.75 2.75 3.43 2.75 7V17C2.75 20.57 3.42 21.25 7 21.25H9C9.41 21.25 9.75 21.59 9.75 22C9.75 22.41 9.41 22.75 9 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.3403 22.81C19.3303 22.81 19.3202 22.81 19.3102 22.81H13.7502C12.0802 22.69 11.2402 21.41 11.2402 20.19C11.2402 19.21 11.7902 18.18 12.8502 17.76C12.6302 16.51 12.9503 15.35 13.7803 14.48C14.8003 13.41 16.4402 12.98 17.8602 13.41C19.1002 13.79 19.9902 14.77 20.3602 16.13C21.4102 16.45 22.2403 17.28 22.5803 18.41C22.9803 19.72 22.6102 21.06 21.6202 21.92C21.0202 22.49 20.2003 22.81 19.3403 22.81ZM13.7902 19.07C13.0302 19.14 12.7502 19.71 12.7502 20.19C12.7502 20.67 13.0302 21.25 13.8102 21.31H19.3203C19.8003 21.35 20.2803 21.13 20.6403 20.81C21.2903 20.24 21.3302 19.43 21.1602 18.85C20.9902 18.27 20.4903 17.62 19.6503 17.51C19.3203 17.47 19.0602 17.22 19.0002 16.89C18.7802 15.54 18.0202 15.04 17.4302 14.85C16.5502 14.58 15.5102 14.86 14.8802 15.52C14.4502 15.97 14.0302 16.78 14.5002 18.07C14.6402 18.46 14.4402 18.89 14.0502 19.03C13.9602 19.06 13.8702 19.07 13.7902 19.07Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FolderCloudTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44001 10.9 3.20001L12.4 5.20001C12.78 5.70001 13 6 14 6H17C21 6 22 7 22 11V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M13.7605 18.3199C11.4105 18.4899 11.4105 21.8899 13.7605 22.0599H19.3205C19.9905 22.0599 20.6506 21.8099 21.1406 21.3599C22.7906 19.9199 21.9105 17.0399 19.7405 16.7699C18.9605 12.0799 12.1806 13.8599 13.7806 18.3299"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: FolderCloudBold,
  broken: FolderCloudBroken,
  bulk: FolderCloudBulk,
  linear: FolderCloudLinear,
  outline: FolderCloudOutline,
  twotone: FolderCloudTwotone,
};

export const FolderCloudIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
