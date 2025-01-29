import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const BitcoinRefreshBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M23.5293 12.0483C23.2393 11.7583 22.7593 11.7583 22.4693 12.0483L22.0093 12.5083V11.9983C22.0093 6.47828 17.5193 1.98828 11.9993 1.98828C8.94927 1.98828 6.09927 3.35828 4.18927 5.73828C3.92927 6.05828 3.97927 6.53828 4.30927 6.79828C4.62927 7.04828 5.09927 6.99828 5.35927 6.67828C6.98927 4.64828 9.40927 3.48828 11.9993 3.48828C16.6893 3.48828 20.5093 7.30828 20.5093 11.9983V12.4983L20.0493 12.0383C19.7593 11.7483 19.2793 11.7483 18.9893 12.0383C18.6993 12.3283 18.6993 12.8083 18.9893 13.0983L20.7293 14.8383C20.7993 14.9083 20.8793 14.9583 20.9693 14.9983C21.0593 15.0383 21.1593 15.0583 21.2593 15.0583C21.3593 15.0583 21.4493 15.0383 21.5493 14.9983C21.6393 14.9583 21.7193 14.9083 21.7893 14.8383L23.5293 13.0983C23.8193 12.8183 23.8193 12.3383 23.5293 12.0483Z"
        fill="currentColor"
      />
      <Path
        d="M19.6895 17.1997C19.3695 16.9397 18.8895 16.9897 18.6395 17.3197C17.0095 19.3497 14.5895 20.5097 11.9995 20.5097C7.30945 20.5097 3.48945 16.6897 3.48945 11.9997V11.4997L3.94945 11.9597C4.09945 12.1097 4.28945 12.1797 4.47945 12.1797C4.66945 12.1797 4.85945 12.0997 4.99945 11.9497C5.28945 11.6597 5.28945 11.1797 4.99945 10.8897L3.26945 9.14969C3.19945 9.08969 3.10945 9.02969 3.01945 8.98969C2.83945 8.90969 2.62945 8.90969 2.44945 8.98969C2.35945 9.02969 2.27945 9.08969 2.20945 9.14969L0.469453 10.8897C0.179453 11.1797 0.179453 11.6597 0.469453 11.9497C0.759453 12.2397 1.23945 12.2397 1.52945 11.9497L1.98945 11.4897V11.9997C1.98945 17.5197 6.47945 22.0097 11.9995 22.0097C15.0495 22.0097 17.8995 20.6397 19.8095 18.2597C20.0695 17.9397 20.0195 17.4597 19.6895 17.1997Z"
        fill="currentColor"
      />
      <Path
        d="M15.45 11.64C15.72 11.24 15.87 10.77 15.87 10.25C15.87 8.92 14.7 7.75 13.37 7.75H12.55V6.75C12.55 6.34 12.21 6 11.8 6C11.39 6 11.05 6.34 11.05 6.75V7.75H9C8.59 7.75 8.25 8.09 8.25 8.5V12V15.5C8.25 15.91 8.59 16.25 9 16.25H11.05V17.25C11.05 17.66 11.39 18 11.8 18C12.21 18 12.55 17.66 12.55 17.25V16.25H14C15.52 16.25 16.75 15.13 16.75 13.75C16.75 12.86 16.23 12.08 15.45 11.64ZM9.75 9.25H13.37C13.92 9.25 14.37 9.8 14.37 10.25C14.37 10.8 13.92 11.25 13.37 11.25H9.75V9.25ZM14 14.75H9.75V12.75H13.37H14C14.69 12.75 15.25 13.2 15.25 13.75C15.25 14.3 14.69 14.75 14 14.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BitcoinRefreshBroken = ({
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
        d="M4.47 11.4199L2.73 9.67993L1 11.4199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.5293 12.5801L21.2693 14.3201L23.0093 12.5801"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9995 2.73999C9.07953 2.73999 6.46953 4.10002 4.76953 6.21002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.26 14.3201V12.0001C21.26 8.32012 19.11 5.14014 16 3.64014"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21.2601C14.92 21.2601 17.53 19.9 19.23 17.79"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.74023 9.67993V11.9999C2.74023 15.6499 4.85024 18.8099 7.93024 20.3199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 8.5H13.38C14.35 8.5 15.13 9.38 15.13 10.25C15.13 11.22 14.35 12 13.38 12H9V8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 12H14C15.1 12 16 12.78 16 13.75C16 14.72 15.1 15.5 14 15.5H9V12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.8008 15.5V17.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.8008 6.75V8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BitcoinRefreshBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M23.5293 12.05C23.2393 11.76 22.7593 11.76 22.4693 12.05L22.0093 12.51V12C22.0093 6.48 17.5193 1.98999 11.9993 1.98999C8.94927 1.98999 6.09927 3.35999 4.18927 5.73999C3.92927 6.05999 3.97927 6.53998 4.30927 6.78998C4.62927 7.04998 5.10927 6.99998 5.35927 6.66998C6.98927 4.63998 9.40927 3.47998 11.9993 3.47998C16.6893 3.47998 20.5093 7.29999 20.5093 11.99V12.49L20.0493 12.03C19.7593 11.74 19.2793 11.74 18.9893 12.03C18.6993 12.32 18.6993 12.8 18.9893 13.09L20.7293 14.83C20.7993 14.9 20.8793 14.95 20.9693 14.99C21.0593 15.03 21.1593 15.05 21.2593 15.05C21.3593 15.05 21.4493 15.03 21.5493 14.99C21.6393 14.95 21.7193 14.9 21.7893 14.83L23.5293 13.09C23.8193 12.82 23.8193 12.34 23.5293 12.05Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M19.6892 17.2C19.3692 16.94 18.8892 16.9899 18.6392 17.3199C17.0092 19.3499 14.5892 20.51 11.9992 20.51C7.30922 20.51 3.48921 16.6899 3.48921 11.9999V11.4999L3.94921 11.96C4.09921 12.11 4.28922 12.1799 4.47922 12.1799C4.66922 12.1799 4.85922 12.11 5.00922 11.96C5.29922 11.67 5.29922 11.19 5.00922 10.9L3.26921 9.15991C3.19921 9.08991 3.11921 9.03994 3.02921 8.99994C2.84921 8.91994 2.63921 8.91994 2.45921 8.99994C2.36921 9.03994 2.28922 9.08991 2.21922 9.15991L0.479219 10.9C0.189219 11.19 0.189219 11.67 0.479219 11.96C0.769219 12.25 1.24922 12.25 1.53922 11.96L1.99922 11.4999V11.9999C1.99922 17.5199 6.48922 22.01 12.0092 22.01C15.0592 22.01 17.9092 20.64 19.8192 18.26C20.0692 17.94 20.0192 17.46 19.6892 17.2Z"
        fill="currentColor"
      />
      <Path
        d="M15.45 11.64C15.72 11.24 15.87 10.77 15.87 10.25C15.87 8.92 14.7 7.75 13.37 7.75H12.55V6.75C12.55 6.34 12.21 6 11.8 6C11.39 6 11.05 6.34 11.05 6.75V7.75H9C8.59 7.75 8.25 8.09 8.25 8.5V12V15.5C8.25 15.91 8.59 16.25 9 16.25H11.05V17.25C11.05 17.66 11.39 18 11.8 18C12.21 18 12.55 17.66 12.55 17.25V16.25H14C15.52 16.25 16.75 15.13 16.75 13.75C16.75 12.86 16.23 12.08 15.45 11.64ZM9.75 9.25H13.37C13.92 9.25 14.37 9.8 14.37 10.25C14.37 10.8 13.92 11.25 13.37 11.25H9.75V9.25ZM14 14.75H9.75V12.75H13.37H14C14.69 12.75 15.25 13.2 15.25 13.75C15.25 14.3 14.69 14.75 14 14.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BitcoinRefreshLinear = ({
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
        d="M4.47 11.4199L2.73 9.67993L1 11.4199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.53 12.5801L21.27 14.3201L23.01 12.5801"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.26 14.32V12C21.26 6.88 17.11 2.73999 12 2.73999C9.08 2.73999 6.47 4.10002 4.77 6.21002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.74 9.67993V11.9999C2.74 17.1199 6.89 21.2599 12 21.2599C14.92 21.2599 17.53 19.8999 19.23 17.7899"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 8.5H13.38C14.35 8.5 15.13 9.38 15.13 10.25C15.13 11.22 14.35 12 13.38 12H9V8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 12H14C15.1 12 16 12.78 16 13.75C16 14.72 15.1 15.5 14 15.5H9V12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.8 15.5V17.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.8 6.75V8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BitcoinRefreshOutline = ({
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
        d="M4.46969 12.1701C4.27969 12.1701 4.08969 12.1001 3.93969 11.9501L2.72969 10.7401L1.51969 11.9501C1.22969 12.2401 0.749687 12.2401 0.459688 11.9501C0.169688 11.6601 0.169688 11.1801 0.459688 10.8901L2.19969 9.15012C2.48969 8.86012 2.96969 8.86012 3.25969 9.15012L4.99969 10.8901C5.28969 11.1801 5.28969 11.6601 4.99969 11.9501C4.85969 12.1001 4.65969 12.1701 4.46969 12.1701Z"
        fill="currentColor"
      />
      <Path
        d="M21.2609 15.07C21.0709 15.07 20.8809 15 20.7309 14.85L18.9909 13.11C18.7009 12.82 18.7009 12.34 18.9909 12.05C19.2809 11.76 19.7609 11.76 20.0509 12.05L21.2609 13.26L22.4709 12.05C22.7609 11.76 23.2409 11.76 23.5309 12.05C23.8209 12.34 23.8209 12.82 23.5309 13.11L21.7909 14.85C21.6509 14.99 21.4509 15.07 21.2609 15.07Z"
        fill="currentColor"
      />
      <Path
        d="M21.2601 15.07C20.8501 15.07 20.5101 14.73 20.5101 14.32V12C20.5101 7.31 16.6901 3.48999 12.0001 3.48999C9.41005 3.48999 6.99005 4.64999 5.36005 6.67999C5.10005 6.99999 4.63005 7.04999 4.31005 6.79999C3.99005 6.53999 3.93006 6.07 4.19005 5.75C6.10005 3.36 8.95005 2 12.0001 2C17.5201 2 22.0101 6.49001 22.0101 12.01V14.33C22.0101 14.73 21.6801 15.07 21.2601 15.07Z"
        fill="currentColor"
      />
      <Path
        d="M12.0002 22.0099C6.48024 22.0099 1.99023 17.5199 1.99023 11.9999V9.67993C1.99023 9.26993 2.33023 8.92993 2.74023 8.92993C3.15023 8.92993 3.49023 9.26993 3.49023 9.67993V11.9999C3.49023 16.6899 7.31024 20.5099 12.0002 20.5099C14.5902 20.5099 17.0102 19.3499 18.6402 17.3199C18.9002 16.9999 19.3702 16.94 19.6902 17.2C20.0102 17.46 20.0702 17.9299 19.8102 18.2499C17.9002 20.6399 15.0502 22.0099 12.0002 22.0099Z"
        fill="currentColor"
      />
      <Path
        d="M13.38 12.75H9C8.59 12.75 8.25 12.41 8.25 12V8.5C8.25 8.09 8.59 7.75 9 7.75H13.38C14.71 7.75 15.88 8.92 15.88 10.25C15.88 11.63 14.75 12.75 13.38 12.75ZM9.75 11.25H13.37C13.92 11.25 14.37 10.8 14.37 10.25C14.37 9.8 13.92 9.25 13.37 9.25H9.75V11.25Z"
        fill="currentColor"
      />
      <Path
        d="M14 16.25H9C8.59 16.25 8.25 15.91 8.25 15.5V12C8.25 11.59 8.59 11.25 9 11.25H14C15.52 11.25 16.75 12.37 16.75 13.75C16.75 15.13 15.52 16.25 14 16.25ZM9.75 14.75H14C14.69 14.75 15.25 14.3 15.25 13.75C15.25 13.2 14.69 12.75 14 12.75H9.75V14.75Z"
        fill="currentColor"
      />
      <Path
        d="M11.8008 18C11.3908 18 11.0508 17.66 11.0508 17.25V15.5C11.0508 15.09 11.3908 14.75 11.8008 14.75C12.2108 14.75 12.5508 15.09 12.5508 15.5V17.25C12.5508 17.66 12.2108 18 11.8008 18Z"
        fill="currentColor"
      />
      <Path
        d="M11.8008 9.25C11.3908 9.25 11.0508 8.91 11.0508 8.5V6.75C11.0508 6.34 11.3908 6 11.8008 6C12.2108 6 12.5508 6.34 12.5508 6.75V8.5C12.5508 8.91 12.2108 9.25 11.8008 9.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BitcoinRefreshTwotone = ({
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
        d="M4.47 11.4202L2.73 9.68018L1 11.4202"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.5293 12.5801L21.2693 14.3201L23.0093 12.5801"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.2595 14.3203V12.0002C21.2595 6.88024 17.1095 2.74023 11.9995 2.74023C9.07953 2.74023 6.46953 4.10027 4.76953 6.21027"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.74023 9.68018V12.0002C2.74023 17.1202 6.89024 21.2602 12.0002 21.2602C14.9202 21.2602 17.5302 19.9002 19.2302 17.7902"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M9 8.5H13.38C14.35 8.5 15.13 9.38 15.13 10.25C15.13 11.22 14.35 12 13.38 12H9V8.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9 12H14C15.1 12 16 12.78 16 13.75C16 14.72 15.1 15.5 14 15.5H9V12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.8008 15.5V17.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.8008 6.75V8.5"
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
  bold: BitcoinRefreshBold,
  broken: BitcoinRefreshBroken,
  bulk: BitcoinRefreshBulk,
  linear: BitcoinRefreshLinear,
  outline: BitcoinRefreshOutline,
  twotone: BitcoinRefreshTwotone,
};

export const BitcoinRefreshIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default BitcoinRefreshIcon;
