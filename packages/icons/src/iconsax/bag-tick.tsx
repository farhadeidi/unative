import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const BagTickBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.24 5.57859H18.84L15.46 2.19859C15.19 1.92859 14.75 1.92859 14.47 2.19859C14.2 2.46859 14.2 2.90859 14.47 3.18859L16.86 5.57859H7.14L9.53 3.18859C9.8 2.91859 9.8 2.47859 9.53 2.19859C9.26 1.92859 8.82 1.92859 8.54 2.19859L5.17 5.57859H4.77C3.87 5.57859 2 5.57859 2 8.13859C2 9.10859 2.2 9.74859 2.62 10.1686C2.86 10.4186 3.15 10.5486 3.46 10.6186C3.75 10.6886 4.06 10.6986 4.36 10.6986H19.64C19.95 10.6986 20.24 10.6786 20.52 10.6186C21.36 10.4186 22 9.81859 22 8.13859C22 5.57859 20.13 5.57859 19.24 5.57859Z"
        fill="currentColor"
      />
      <Path
        d="M19.0897 12H4.90971C4.28971 12 3.81971 12.55 3.91971 13.16L4.75971 18.3C5.03971 20.02 5.78971 22 9.11971 22H14.7297C18.0997 22 18.6997 20.31 19.0597 18.42L20.0697 13.19C20.1897 12.57 19.7197 12 19.0897 12ZM14.8797 16.05L11.6297 19.05C11.4897 19.18 11.3097 19.25 11.1197 19.25C10.9297 19.25 10.7397 19.18 10.5897 19.03L9.08971 17.53C8.79971 17.24 8.79971 16.76 9.08971 16.47C9.38971 16.18 9.85971 16.18 10.1597 16.47L11.1497 17.46L13.8697 14.95C14.1697 14.67 14.6497 14.69 14.9297 14.99C15.2097 15.3 15.1897 15.77 14.8797 16.05Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BagTickBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.61914 16L11.1191 17.5L14.3691 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.80945 2L5.18945 5.63"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.1895 2L18.8095 5.63"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M4.91016 18.64C5.23016 20.58 6.00016 22 8.86016 22H14.8902C18.0002 22 18.4602 20.64 18.8202 18.76L20.5002 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M3.5 10L4.19 14.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const BagTickBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.24 5.58006H18.84L15.46 2.20006C15.19 1.93006 14.75 1.93006 14.47 2.20006C14.2 2.47006 14.2 2.91006 14.47 3.19006L16.86 5.58006H7.14L9.53 3.19006C9.8 2.92006 9.8 2.48006 9.53 2.20006C9.26 1.93006 8.82 1.93006 8.54 2.20006L5.17 5.58006H4.77C3.87 5.58006 2 5.58006 2 8.14006C2 9.11006 2.2 9.75006 2.62 10.1701C2.86 10.4201 3.15 10.5501 3.46 10.6201C3.75 10.6901 4.06 10.7001 4.36 10.7001H19.64C19.95 10.7001 20.24 10.6801 20.52 10.6201C21.36 10.4201 22 9.82006 22 8.14006C22 5.58006 20.13 5.58006 19.24 5.58006Z"
        fill="currentColor"
      />
      <Path
        d="M19.6609 10.7001H4.36094C4.07094 10.7001 3.75094 10.6901 3.46094 10.6101L4.72094 18.3001C5.01094 20.0201 5.76094 22.0001 9.09094 22.0001H14.7009C18.0709 22.0001 18.6709 20.3101 19.0309 18.4201L20.5409 10.6101C20.2609 10.6801 19.9609 10.7001 19.6609 10.7001ZM14.8809 15.0501L11.6309 18.0501C11.4909 18.1801 11.3009 18.2501 11.1209 18.2501C10.9309 18.2501 10.7409 18.1801 10.5909 18.0301L9.09094 16.5301C8.80094 16.2401 8.80094 15.7601 9.09094 15.4701C9.38094 15.1801 9.86094 15.1801 10.1509 15.4701L11.1409 16.4601L13.8609 13.9501C14.1609 13.6701 14.6409 13.6901 14.9209 13.9901C15.2109 14.3001 15.1909 14.7701 14.8809 15.0501Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BagTickLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.62 16L11.12 17.5L14.37 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.81 2L5.19 5.63"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.19 2L18.81 5.63"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 7.84998C2 5.99998 2.99 5.84998 4.22 5.84998H19.78C21.01 5.84998 22 5.99998 22 7.84998C22 9.99998 21.01 9.84998 19.78 9.84998H4.22C2.99 9.84998 2 9.99998 2 7.84998Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const BagTickOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.1205 18.25C10.9305 18.25 10.7405 18.18 10.5905 18.03L9.09055 16.53C8.80055 16.24 8.80055 15.76 9.09055 15.47C9.38055 15.18 9.86055 15.18 10.1505 15.47L11.1405 16.46L13.8605 13.95C14.1605 13.67 14.6405 13.69 14.9205 13.99C15.2005 14.29 15.1805 14.77 14.8805 15.05L11.6305 18.05C11.4905 18.18 11.3105 18.25 11.1205 18.25Z"
        fill="currentColor"
      />
      <Path
        d="M5.19086 6.37994C5.00086 6.37994 4.80086 6.29994 4.66086 6.15994C4.37086 5.86994 4.37086 5.38994 4.66086 5.09994L8.29086 1.46994C8.58086 1.17994 9.06086 1.17994 9.35086 1.46994C9.64086 1.75994 9.64086 2.23994 9.35086 2.52994L5.72086 6.15994C5.57086 6.29994 5.38086 6.37994 5.19086 6.37994Z"
        fill="currentColor"
      />
      <Path
        d="M18.8091 6.37994C18.6191 6.37994 18.4291 6.30994 18.2791 6.15994L14.6491 2.52994C14.3591 2.23994 14.3591 1.75994 14.6491 1.46994C14.9391 1.17994 15.4191 1.17994 15.7091 1.46994L19.3391 5.09994C19.6291 5.38994 19.6291 5.86994 19.3391 6.15994C19.1991 6.29994 18.9991 6.37994 18.8091 6.37994Z"
        fill="currentColor"
      />
      <Path
        d="M20.21 10.6001C20.14 10.6001 20.07 10.6001 20 10.6001H19.77H4C3.3 10.6101 2.5 10.6101 1.92 10.0301C1.46 9.5801 1.25 8.8801 1.25 7.8501C1.25 5.1001 3.26 5.1001 4.22 5.1001H19.78C20.74 5.1001 22.75 5.1001 22.75 7.8501C22.75 8.8901 22.54 9.5801 22.08 10.0301C21.56 10.5501 20.86 10.6001 20.21 10.6001ZM4.22 9.1001H20.01C20.46 9.1101 20.88 9.1101 21.02 8.9701C21.09 8.9001 21.24 8.6601 21.24 7.8501C21.24 6.7201 20.96 6.6001 19.77 6.6001H4.22C3.03 6.6001 2.75 6.7201 2.75 7.8501C2.75 8.6601 2.91 8.9001 2.97 8.9701C3.11 9.1001 3.54 9.1001 3.98 9.1001H4.22Z"
        fill="currentColor"
      />
      <Path
        d="M14.8907 22.75H8.86073C5.28073 22.75 4.48073 20.62 4.17073 18.77L2.76073 10.12C2.69073 9.71 2.97073 9.33 3.38073 9.26C3.78073 9.19 4.17073 9.47 4.24073 9.88L5.65073 18.52C5.94073 20.29 6.54073 21.25 8.86073 21.25H14.8907C17.4607 21.25 17.7507 20.35 18.0807 18.61L19.7607 9.86C19.8407 9.45 20.2307 9.18 20.6407 9.27C21.0507 9.35 21.3107 9.74 21.2307 10.15L19.5507 18.9C19.1607 20.93 18.5107 22.75 14.8907 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BagTickTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M9.61914 16L11.1191 17.5L14.3691 14.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.80945 2L5.18945 5.63"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.1895 2L18.8095 5.63"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BagTickBold,
  broken: BagTickBroken,
  bulk: BagTickBulk,
  linear: BagTickLinear,
  outline: BagTickOutline,
  twotone: BagTickTwotone,
};

export const BagTickIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default BagTickIcon;
