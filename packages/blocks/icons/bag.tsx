import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const BagBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.0506 12H4.87064C4.25064 12 3.78064 12.55 3.88064 13.16L4.72064 18.3C5.00064 20.02 5.75064 22 9.08064 22H14.6906C18.0606 22 18.6606 20.31 19.0206 18.42L20.0306 13.19C20.1506 12.57 19.6806 12 19.0506 12ZM10.6106 18.45C10.6106 18.84 10.3006 19.15 9.92064 19.15C9.53064 19.15 9.22064 18.84 9.22064 18.45V15.15C9.22064 14.77 9.53064 14.45 9.92064 14.45C10.3006 14.45 10.6106 14.77 10.6106 15.15V18.45ZM14.8906 18.45C14.8906 18.84 14.5806 19.15 14.1906 19.15C13.8106 19.15 13.4906 18.84 13.4906 18.45V15.15C13.4906 14.77 13.8106 14.45 14.1906 14.45C14.5806 14.45 14.8906 14.77 14.8906 15.15V18.45Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BagBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.75977 14V17.55"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M14.3594 14V17.55"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M4.91016 18.64C5.23016 20.58 6.00016 22 8.86016 22H14.8902C18.0002 22 18.4602 20.64 18.8202 18.76L20.5002 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M3.5 10L4.22 14.38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const BagBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.6509 10.7001H4.36094C4.06094 10.7001 3.75094 10.6901 3.46094 10.6201L4.72094 18.3001C5.00094 20.0201 5.75094 22.0001 9.08094 22.0001H14.6909C18.0609 22.0001 18.6609 20.3101 19.0209 18.4201L20.5309 10.6201C20.2509 10.6801 19.9509 10.7001 19.6509 10.7001ZM10.6109 17.1601C10.6109 17.5501 10.3009 17.8601 9.91094 17.8601C9.52094 17.8601 9.21094 17.5501 9.21094 17.1601V13.8601C9.21094 13.4701 9.52094 13.1601 9.91094 13.1601C10.3009 13.1601 10.6109 13.4701 10.6109 13.8601V17.1601ZM14.8909 17.1601C14.8909 17.5501 14.5809 17.8601 14.1909 17.8601C13.8009 17.8601 13.4909 17.5501 13.4909 17.1601V13.8601C13.4909 13.4701 13.8009 13.1601 14.1909 13.1601C14.5809 13.1601 14.8909 13.4701 14.8909 13.8601V17.1601Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BagLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.76001 14V17.55"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M14.36 14V17.55"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
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

const BagOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.75977 18.3C9.34977 18.3 9.00977 17.96 9.00977 17.55V14C9.00977 13.59 9.34977 13.25 9.75977 13.25C10.1698 13.25 10.5098 13.59 10.5098 14V17.55C10.5098 17.97 10.1698 18.3 9.75977 18.3Z"
        fill="currentColor"
      />
      <Path
        d="M14.3594 18.3C13.9494 18.3 13.6094 17.96 13.6094 17.55V14C13.6094 13.59 13.9494 13.25 14.3594 13.25C14.7694 13.25 15.1094 13.59 15.1094 14V17.55C15.1094 17.97 14.7694 18.3 14.3594 18.3Z"
        fill="currentColor"
      />
      <Path
        d="M14.8907 22.75H8.86073C5.28073 22.75 4.48073 20.62 4.17073 18.77L2.76073 10.12C2.69073 9.71 2.97073 9.33 3.38073 9.26C3.79073 9.19 4.17073 9.47 4.24073 9.88L5.65073 18.52C5.94073 20.29 6.54073 21.25 8.86073 21.25H14.8907C17.4607 21.25 17.7507 20.35 18.0807 18.61L19.7607 9.86C19.8407 9.45 20.2307 9.18 20.6407 9.27C21.0507 9.35 21.3107 9.74 21.2307 10.15L19.5507 18.9C19.1607 20.93 18.5107 22.75 14.8907 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BagTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <G opacity="0.4">
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
          d="M9.75977 14V17.55"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <Path
          d="M14.3594 14V17.55"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </G>
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
  bold: BagBold,
  broken: BagBroken,
  bulk: BagBulk,
  linear: BagLinear,
  outline: BagOutline,
  twotone: BagTwotone,
};

export const BagIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
