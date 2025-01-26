import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const DocumentCloudBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.7997 2.21048C15.3897 1.80048 14.6797 2.08048 14.6797 2.65048V6.14048C14.6797 7.60048 15.9197 8.81048 17.4297 8.81048C18.3797 8.82048 19.6997 8.82048 20.8297 8.82048C21.3997 8.82048 21.6997 8.15048 21.2997 7.75048C19.8597 6.30048 17.2797 3.69048 15.7997 2.21048Z"
        fill="currentColor"
      />
      <Path
        d="M14.7605 19.2618C12.4105 19.4318 12.4105 22.8318 14.7605 23.0018H20.3205C20.9905 23.0018 21.6505 22.7518 22.1405 22.3018C23.7905 20.8618 22.9105 17.9818 20.7405 17.7118C19.9605 13.0218 13.1805 14.8018 14.7805 19.2718"
        fill="currentColor"
      />
      <Path
        d="M21.5 11.19V14.44C21.5 14.74 21.06 14.88 20.84 14.67C20.36 14.2 19.77 13.84 19.09 13.63C17.41 13.11 15.46 13.62 14.25 14.9C13.44 15.74 13.03 16.81 13.04 17.97C13.04 18.16 12.95 18.33 12.8 18.44C12 19.05 11.5 20.01 11.5 21.12C11.5 21.2 11.5 21.28 11.51 21.36C11.53 21.68 11.3 21.99 10.97 21.99H8.07C4.99 21.99 2.5 19.99 2.5 16.42V7.57C2.5 4 4.99 2 8.07 2H12.31C12.86 2 13.31 2.45 13.31 3V5.89C13.31 8.27 15.23 10.19 17.61 10.19H20.5C21.05 10.19 21.5 10.64 21.5 11.19Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentCloudBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13V15C2 20 4 22 9 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.7605 18.2598C11.4105 18.4298 11.4105 21.8298 13.7605 21.9998H19.3205C19.9905 21.9998 20.6505 21.7498 21.1405 21.2998C22.7905 19.8598 21.9105 16.9798 19.7405 16.7098C18.9605 12.0198 12.1805 13.7998 13.7805 18.2698"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DocumentCloudBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4.00001 2.5 7.57001V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
        fill="currentColor"
      />
      <Path
        d="M15.7997 2.21C15.3897 1.8 14.6797 2.07998 14.6797 2.64998V6.13999C14.6797 7.59999 15.9197 8.80999 17.4297 8.80999C18.3797 8.81999 19.6997 8.82 20.8297 8.82C21.3997 8.82 21.6997 8.14999 21.2997 7.74999C19.8597 6.29999 17.2797 3.69 15.7997 2.21Z"
        fill="currentColor"
      />
      <Path
        d="M14.7605 19.2598C12.4105 19.4298 12.4105 22.8298 14.7605 22.9998H20.3205C20.9905 22.9998 21.6505 22.7498 22.1405 22.2998C23.7905 20.8598 22.9105 17.9798 20.7405 17.7098C19.9605 13.0198 13.1805 14.7998 14.7805 19.2698"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentCloudLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.7601 18.2601C11.4101 18.4301 11.4101 21.8301 13.7601 22.0001H19.3201C19.9901 22.0001 20.6501 21.7501 21.1401 21.3001C22.7901 19.8601 21.9101 16.9801 19.7401 16.7101C18.9601 12.0201 12.1801 13.8001 13.7801 18.2701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DocumentCloudOutline = ({
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
        d="M9 22.75C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25C9.41 21.25 9.75 21.59 9.75 22C9.75 22.41 9.41 22.75 9 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M22 13.75C21.59 13.75 21.25 13.41 21.25 13V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V13C22.75 13.41 22.41 13.75 22 13.75Z"
        fill="currentColor"
      />
      <Path
        d="M22 10.75H18C14.58 10.75 13.25 9.41999 13.25 5.99999V1.99999C13.25 1.69999 13.43 1.41999 13.71 1.30999C13.99 1.18999 14.31 1.25999 14.53 1.46999L22.53 9.46999C22.74 9.67999 22.81 10.01 22.69 10.29C22.57 10.57 22.3 10.75 22 10.75ZM14.75 3.80999V5.99999C14.75 8.57999 15.42 9.24999 18 9.24999H20.19L14.75 3.80999Z"
        fill="currentColor"
      />
      <Path
        d="M19.34 22.7503C19.33 22.7503 19.32 22.7503 19.32 22.7503H13.76C12.09 22.6303 11.25 21.3503 11.25 20.1303C11.25 19.1503 11.8 18.1203 12.86 17.7003C12.64 16.4503 12.96 15.2903 13.79 14.4203C14.81 13.3503 16.45 12.9203 17.87 13.3603C19.11 13.7403 20 14.7203 20.37 16.0803C21.42 16.4003 22.25 17.2303 22.59 18.3603C22.99 19.6703 22.62 21.0103 21.63 21.8703C21.02 22.4303 20.2 22.7503 19.34 22.7503ZM13.79 19.0103C13.03 19.0803 12.75 19.6503 12.75 20.1303C12.75 20.6103 13.03 21.1903 13.81 21.2503H19.32C19.83 21.2203 20.28 21.0703 20.64 20.7503C21.29 20.1803 21.34 19.3703 21.16 18.7903C20.98 18.2103 20.49 17.5603 19.65 17.4503C19.32 17.4103 19.06 17.1603 19 16.8303C18.78 15.4803 18.02 14.9803 17.43 14.8003C16.56 14.5303 15.51 14.8003 14.88 15.4703C14.45 15.9203 14.03 16.7303 14.5 18.0203C14.64 18.4103 14.44 18.8403 14.05 18.9803C13.96 19.0003 13.87 19.0103 13.79 19.0103Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentCloudTwotone = ({
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
        d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M13.7605 18.2598C11.4105 18.4298 11.4105 21.8298 13.7605 21.9998H19.3205C19.9905 21.9998 20.6505 21.7498 21.1405 21.2998C22.7905 19.8598 21.9105 16.9798 19.7405 16.7098C18.9605 12.0198 12.1805 13.7998 13.7805 18.2698"
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
  bold: DocumentCloudBold,
  broken: DocumentCloudBroken,
  bulk: DocumentCloudBulk,
  linear: DocumentCloudLinear,
  outline: DocumentCloudOutline,
  twotone: DocumentCloudTwotone,
};

export const DocumentCloudIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
