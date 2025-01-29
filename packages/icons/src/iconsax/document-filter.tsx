import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const DocumentFilterBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.23 1H11.36C12.04 1 12.59 1.56 12.59 2.25V3.62C12.59 4.12 12.28 4.74 11.97 5.05L9.33 7.43C8.96 7.74 8.72 8.36 8.72 8.86V11.54C8.72 11.91 8.47 12.41 8.17 12.6L7.3 13.17C6.5 13.67 5.39 13.11 5.39 12.11V8.8C5.39 8.36 5.14 7.8 4.9 7.49L2.56 4.99C2.25 4.68 2 4.12 2 3.75V2.31C2 1.56 2.55 1 3.23 1Z"
        fill="currentColor"
      />
      <Path
        d="M17 2H14.6C14.32 2 14.1 2.22 14.1 2.5C14.1 2.98 14.1 3.62 14.1 3.62C14.1 4.61 13.57 5.58 13.05 6.11L10.33 8.54C10.3 8.61 10.25 8.71 10.22 8.79V11.54C10.22 12.45 9.68 13.44 8.94 13.89L8.12 14.42C7.66 14.71 7.15 14.85 6.64 14.85C6.18 14.85 5.72 14.73 5.3 14.5C4.78254 14.2134 4.39183 13.781 4.1531 13.2736C4.03113 13.0143 4 12.7245 4 12.438V10.21C4 10.08 3.95 9.95 3.85 9.86L2.85 8.86C2.54 8.54 2 8.76 2 9.21V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2ZM18 17.75H11C10.59 17.75 10.25 17.41 10.25 17C10.25 16.59 10.59 16.25 11 16.25H18C18.41 16.25 18.75 16.59 18.75 17C18.75 17.41 18.41 17.75 18 17.75ZM18 13.75H13C12.59 13.75 12.25 13.41 12.25 13C12.25 12.59 12.59 12.25 13 12.25H18C18.41 12.25 18.75 12.59 18.75 13C18.75 13.41 18.41 13.75 18 13.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentFilterBroken = ({
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
        d="M3.34985 2H12.2499C12.9899 2 13.5999 2.61001 13.5999 3.35001V4.82999C13.5999 5.36999 13.2599 6.04 12.9299 6.38L10.0299 8.94C9.62991 9.28 9.35986 9.94999 9.35986 10.49V13.39C9.35986 13.79 9.08988 14.33 8.74988 14.54L7.80987 15.15C6.92987 15.69 5.71985 15.08 5.71985 14V10.43C5.71985 9.95999 5.44987 9.35001 5.17987 9.01001L2.61987 6.31C2.27987 5.97 2.00989 5.36999 2.00989 4.95999V3.41C1.99989 2.61 2.60985 2 3.34985 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9992 9C21.9992 5.88 21.2192 3.91999 19.4092 2.89999C18.8992 2.60999 17.8792 2.38999 16.9492 2.23999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 13H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 17H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DocumentFilterBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.22998 1H11.36C12.04 1 12.59 1.56 12.59 2.25V3.62C12.59 4.12 12.28 4.73999 11.97 5.04999L9.32001 7.42001C8.95001 7.73001 8.70001 8.36001 8.70001 8.85001V11.53C8.70001 11.9 8.45002 12.4 8.15002 12.59L7.28998 13.15C6.48998 13.65 5.38 13.09 5.38 12.09V8.78C5.38 8.34 5.13001 7.78 4.89001 7.47L2.54999 4.97C2.23999 4.66 2 4.1 2 3.72V2.29001C2 1.56001 2.54998 1 3.22998 1Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M17 2H14.6C14.32 2 14.1 2.22 14.1 2.5C14.1 2.98 14.1 3.62 14.1 3.62C14.1 4.61 13.57 5.57999 13.05 6.10999L10.33 8.54001C10.3 8.61001 10.25 8.71001 10.22 8.79001V11.54C10.22 12.45 9.68 13.44 8.94 13.89L8.12 14.42C7.66 14.71 7.15001 14.85 6.64001 14.85C6.18001 14.85 5.71999 14.73 5.29999 14.5C4.64999 14.14 4.2 13.55 4 12.87V10.21C4 10.08 3.94998 9.94999 3.84998 9.85999L2.84998 8.85999C2.52998 8.54999 2 8.76999 2 9.20999V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2Z"
        fill="currentColor"
      />
      <Path
        d="M18 13.75H13C12.59 13.75 12.25 13.41 12.25 13C12.25 12.59 12.59 12.25 13 12.25H18C18.41 12.25 18.75 12.59 18.75 13C18.75 13.41 18.41 13.75 18 13.75Z"
        fill="currentColor"
      />
      <Path
        d="M18 17.75H11C10.59 17.75 10.25 17.41 10.25 17C10.25 16.59 10.59 16.25 11 16.25H18C18.41 16.25 18.75 16.59 18.75 17C18.75 17.41 18.41 17.75 18 17.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentFilterLinear = ({
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
        d="M3.34997 2H12.25C12.99 2 13.6 2.61001 13.6 3.35001V4.82999C13.6 5.36999 13.26 6.04 12.93 6.38L10.03 8.94C9.63003 9.28 9.35998 9.94999 9.35998 10.49V13.39C9.35998 13.79 9.09 14.33 8.75 14.54L7.81 15.15C6.93 15.69 5.71997 15.08 5.71997 14V10.43C5.71997 9.95999 5.44999 9.35001 5.17999 9.01001L2.61999 6.31C2.27999 5.97 2.01001 5.36999 2.01001 4.95999V3.41C2.00001 2.61 2.60997 2 3.34997 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 5.88 21.22 3.91999 19.41 2.89999C18.9 2.60999 17.88 2.38999 16.95 2.23999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 13H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 17H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DocumentFilterOutline = ({
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
        d="M7.08002 16.1003C6.72002 16.1003 6.36003 16.0103 6.03003 15.8203C5.36003 15.4403 4.96002 14.7602 4.96002 14.0002V10.4302C4.96002 10.1702 4.79002 9.73026 4.58002 9.48026L2.06 6.83023C1.59 6.37023 1.25 5.57024 1.25 4.96024V3.41025C1.25 2.20025 2.16998 1.24023 3.34998 1.24023H12.25C13.41 1.24023 14.35 2.18024 14.35 3.34024V4.82025C14.35 5.60025 13.9 6.46024 13.46 6.90024L10.53 9.49023C10.3 9.68023 10.11 10.1403 10.11 10.4803V13.3802C10.11 14.0702 9.69001 14.8403 9.14001 15.1703L8.21997 15.7702C7.85997 15.9902 7.47002 16.1003 7.08002 16.1003ZM3.34998 2.75024C3.00998 2.75024 2.75 3.04026 2.75 3.42026V4.97025C2.75 5.14025 2.92001 5.57025 3.14001 5.79025L5.71997 8.50024C6.09997 8.97024 6.46997 9.74024 6.46997 10.4302V14.0002C6.46997 14.3002 6.66003 14.4503 6.78003 14.5103C6.94003 14.6003 7.19998 14.6503 7.41998 14.5103L8.34998 13.9102C8.46998 13.8402 8.60999 13.5603 8.60999 13.3903V10.4902C8.60999 9.70023 8.99999 8.83023 9.54999 8.36023L12.43 5.81024C12.61 5.63024 12.85 5.14025 12.85 4.82025V3.34024C12.85 3.01024 12.58 2.74023 12.25 2.74023H3.34998V2.75024Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V12C1.25 11.59 1.59 11.25 2 11.25C2.41 11.25 2.75 11.59 2.75 12V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V8.99999C21.25 6.09999 20.57 4.41998 19.04 3.54998C18.88 3.45998 18.35 3.22 16.83 2.98C16.42 2.92 16.14 2.52998 16.21 2.11998C16.28 1.70998 16.67 1.42999 17.07 1.49999C18.38 1.70999 19.27 1.94998 19.78 2.23998C21.8 3.38998 22.75 5.53999 22.75 8.99999V15C22.75 20.43 20.43 22.75 15 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M18 13.75H13C12.59 13.75 12.25 13.41 12.25 13C12.25 12.59 12.59 12.25 13 12.25H18C18.41 12.25 18.75 12.59 18.75 13C18.75 13.41 18.41 13.75 18 13.75Z"
        fill="currentColor"
      />
      <Path
        d="M18 17.75H11C10.59 17.75 10.25 17.41 10.25 17C10.25 16.59 10.59 16.25 11 16.25H18C18.41 16.25 18.75 16.59 18.75 17C18.75 17.41 18.41 17.75 18 17.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DocumentFilterTwotone = ({
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
        opacity="0.4"
        d="M3.34985 2H12.2499C12.9899 2 13.5999 2.61001 13.5999 3.35001V4.82999C13.5999 5.36999 13.2599 6.04 12.9299 6.38L10.0299 8.94C9.62991 9.28 9.35986 9.94999 9.35986 10.49V13.39C9.35986 13.79 9.08988 14.33 8.74988 14.54L7.80987 15.15C6.92987 15.69 5.71985 15.08 5.71985 14V10.43C5.71985 9.95999 5.44987 9.35001 5.17987 9.01001L2.61987 6.31C2.27987 5.97 2.00989 5.36999 2.00989 4.95999V3.41C1.99989 2.61 2.60985 2 3.34985 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.0002V15.0002C2 20.0002 4 22.0002 9 22.0002H15C20 22.0002 22 20.0002 22 15.0002V9.00024C22 5.88024 21.22 3.92024 19.41 2.90024C18.9 2.61024 17.88 2.39023 16.95 2.24023"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M13 13H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11 17H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DocumentFilterBold,
  broken: DocumentFilterBroken,
  bulk: DocumentFilterBulk,
  linear: DocumentFilterLinear,
  outline: DocumentFilterOutline,
  twotone: DocumentFilterTwotone,
};

export const DocumentFilterIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default DocumentFilterIcon;
