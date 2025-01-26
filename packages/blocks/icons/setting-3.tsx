import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Setting3Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM7.67 5.5C7.67 5.09 8.01 4.75 8.42 4.75C8.83 4.75 9.17 5.09 9.17 5.5V9.4C9.17 9.81 8.83 10.15 8.42 10.15C8.01 10.15 7.67 9.81 7.67 9.4V5.5ZM9.52282 16.4313C9.31938 16.5216 9.17 16.7132 9.17 16.9358V18.5C9.17 18.91 8.83 19.25 8.42 19.25C8.01 19.25 7.67 18.91 7.67 18.5V16.9358C7.67 16.7132 7.5206 16.5216 7.31723 16.4311C6.36275 16.0064 5.7 15.058 5.7 13.95C5.7 12.45 6.92 11.22 8.42 11.22C9.92 11.22 11.15 12.44 11.15 13.95C11.15 15.0582 10.4791 16.0066 9.52282 16.4313ZM16.33 18.5C16.33 18.91 15.99 19.25 15.58 19.25C15.17 19.25 14.83 18.91 14.83 18.5V14.6C14.83 14.19 15.17 13.85 15.58 13.85C15.99 13.85 16.33 14.19 16.33 14.6V18.5ZM15.58 12.77C14.08 12.77 12.85 11.55 12.85 10.04C12.85 8.93185 13.5209 7.98342 14.4772 7.55873C14.6806 7.46839 14.83 7.27681 14.83 7.05421V5.5C14.83 5.09 15.17 4.75 15.58 4.75C15.99 4.75 16.33 5.09 16.33 5.5V7.06421C16.33 7.28681 16.4794 7.47835 16.6828 7.56885C17.6372 7.9936 18.3 8.94195 18.3 10.05C18.3 11.55 17.08 12.77 15.58 12.77Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Setting3Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13.01V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5703 18.5001V14.6001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5703 7.45V5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.9805 10.05C12.9805 8.60995 14.1405 7.44995 15.5805 7.44995C17.0205 7.44995 18.1805 8.60995 18.1805 10.05C18.1805 11.49 17.0205 12.65 15.5805 12.65"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.42969 18.5V16.55"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.42969 9.4V5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.43008 16.5501C9.86602 16.5501 11.0301 15.386 11.0301 13.9501C11.0301 12.5142 9.86602 11.3501 8.43008 11.3501C6.99414 11.3501 5.83008 12.5142 5.83008 13.9501C5.83008 15.386 6.99414 16.5501 8.43008 16.5501Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Setting3Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <Path
        d="M15.5801 19.2501C15.1701 19.2501 14.8301 18.9101 14.8301 18.5001V14.6001C14.8301 14.1901 15.1701 13.8501 15.5801 13.8501C15.9901 13.8501 16.3301 14.1901 16.3301 14.6001V18.5001C16.3301 18.9101 15.9901 19.2501 15.5801 19.2501Z"
        fill="currentColor"
      />
      <Path
        d="M15.5801 8.2C15.1701 8.2 14.8301 7.86 14.8301 7.45V5.5C14.8301 5.09 15.1701 4.75 15.5801 4.75C15.9901 4.75 16.3301 5.09 16.3301 5.5V7.45C16.3301 7.86 15.9901 8.2 15.5801 8.2Z"
        fill="currentColor"
      />
      <Path
        d="M8.41992 19.2498C8.00992 19.2498 7.66992 18.9098 7.66992 18.4998V16.5498C7.66992 16.1398 8.00992 15.7998 8.41992 15.7998C8.82992 15.7998 9.16992 16.1398 9.16992 16.5498V18.4998C9.16992 18.9098 8.83992 19.2498 8.41992 19.2498Z"
        fill="currentColor"
      />
      <Path
        d="M8.41992 10.15C8.00992 10.15 7.66992 9.81 7.66992 9.4V5.5C7.66992 5.09 8.00992 4.75 8.41992 4.75C8.82992 4.75 9.16992 5.09 9.16992 5.5V9.4C9.16992 9.81 8.83992 10.15 8.41992 10.15Z"
        fill="currentColor"
      />
      <Path
        d="M15.5796 7.33008C14.0796 7.33008 12.8496 8.55008 12.8496 10.0501C12.8496 11.5501 14.0696 12.7801 15.5796 12.7801C17.0796 12.7801 18.2996 11.5601 18.2996 10.0501C18.2996 8.54008 17.0796 7.33008 15.5796 7.33008Z"
        fill="currentColor"
      />
      <Path
        d="M8.41922 11.23C6.91922 11.23 5.69922 12.45 5.69922 13.96C5.69922 15.47 6.91922 16.68 8.41922 16.68C9.91922 16.68 11.1492 15.46 11.1492 13.96C11.1492 12.46 9.92922 11.23 8.41922 11.23Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Setting3Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.5699 18.5001V14.6001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5699 7.45V5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.57 12.65C17.0059 12.65 18.17 11.4859 18.17 10.05C18.17 8.61401 17.0059 7.44995 15.57 7.44995C14.134 7.44995 12.97 8.61401 12.97 10.05C12.97 11.4859 14.134 12.65 15.57 12.65Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.43005 18.5V16.55"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.43005 9.4V5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.42996 16.5501C9.8659 16.5501 11.03 15.386 11.03 13.9501C11.03 12.5142 9.8659 11.3501 8.42996 11.3501C6.99402 11.3501 5.82996 12.5142 5.82996 13.9501C5.82996 15.386 6.99402 16.5501 8.42996 16.5501Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Setting3Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.5801 19.2501C15.1701 19.2501 14.8301 18.9101 14.8301 18.5001V14.6001C14.8301 14.1901 15.1701 13.8501 15.5801 13.8501C15.9901 13.8501 16.3301 14.1901 16.3301 14.6001V18.5001C16.3301 18.9101 15.9901 19.2501 15.5801 19.2501Z"
        fill="currentColor"
      />
      <Path
        d="M15.5801 8.2C15.1701 8.2 14.8301 7.86 14.8301 7.45V5.5C14.8301 5.09 15.1701 4.75 15.5801 4.75C15.9901 4.75 16.3301 5.09 16.3301 5.5V7.45C16.3301 7.86 15.9901 8.2 15.5801 8.2Z"
        fill="currentColor"
      />
      <Path
        d="M15.5805 13.4002C13.7305 13.4002 12.2305 11.9002 12.2305 10.0502C12.2305 8.2002 13.7305 6.7002 15.5805 6.7002C17.4305 6.7002 18.9305 8.2002 18.9305 10.0502C18.9305 11.9002 17.4205 13.4002 15.5805 13.4002ZM15.5805 8.2002C14.5605 8.2002 13.7305 9.0302 13.7305 10.0502C13.7305 11.0702 14.5605 11.9002 15.5805 11.9002C16.6005 11.9002 17.4305 11.0702 17.4305 10.0502C17.4305 9.0302 16.5905 8.2002 15.5805 8.2002Z"
        fill="currentColor"
      />
      <Path
        d="M8.41992 19.2498C8.00992 19.2498 7.66992 18.9098 7.66992 18.4998V16.5498C7.66992 16.1398 8.00992 15.7998 8.41992 15.7998C8.82992 15.7998 9.16992 16.1398 9.16992 16.5498V18.4998C9.16992 18.9098 8.83992 19.2498 8.41992 19.2498Z"
        fill="currentColor"
      />
      <Path
        d="M8.41992 10.15C8.00992 10.15 7.66992 9.81 7.66992 9.4V5.5C7.66992 5.09 8.00992 4.75 8.41992 4.75C8.82992 4.75 9.16992 5.09 9.16992 5.5V9.4C9.16992 9.81 8.83992 10.15 8.41992 10.15Z"
        fill="currentColor"
      />
      <Path
        d="M8.42031 17.3001C6.57031 17.3001 5.07031 15.8001 5.07031 13.9501C5.07031 12.1001 6.57031 10.6001 8.42031 10.6001C10.2703 10.6001 11.7703 12.1001 11.7703 13.9501C11.7703 15.8001 10.2703 17.3001 8.42031 17.3001ZM8.42031 12.1001C7.40031 12.1001 6.57031 12.9301 6.57031 13.9501C6.57031 14.9701 7.40031 15.8001 8.42031 15.8001C9.44031 15.8001 10.2703 14.9701 10.2703 13.9501C10.2703 12.9301 9.45031 12.1001 8.42031 12.1001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Setting3Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M15.5703 18.4996V14.5996"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.5703 7.45V5.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.5697 12.6502C17.0057 12.6502 18.1697 11.4861 18.1697 10.0502C18.1697 8.61426 17.0057 7.4502 15.5697 7.4502C14.1338 7.4502 12.9697 8.61426 12.9697 10.0502C12.9697 11.4861 14.1338 12.6502 15.5697 12.6502Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.42969 18.4998V16.5498"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.42969 9.4V5.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.43008 16.5496C9.86602 16.5496 11.0301 15.3855 11.0301 13.9496C11.0301 12.5137 9.86602 11.3496 8.43008 11.3496C6.99414 11.3496 5.83008 12.5137 5.83008 13.9496C5.83008 15.3855 6.99414 16.5496 8.43008 16.5496Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Setting3Bold,
  broken: Setting3Broken,
  bulk: Setting3Bulk,
  linear: Setting3Linear,
  outline: Setting3Outline,
  twotone: Setting3Twotone,
};

export const Setting3Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
