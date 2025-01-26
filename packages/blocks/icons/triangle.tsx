import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const TriangleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.2497 3.89863V12.9186C11.2497 13.2486 11.0897 13.5486 10.8197 13.7386L3.60969 18.7886C3.01969 19.1986 2.17969 18.8786 2.04969 18.1686C1.89969 17.3086 2.09969 16.2986 2.69969 15.2086L5.81969 9.59864L8.75969 4.30863C8.98969 3.89863 9.23969 3.53863 9.49969 3.22863C10.0997 2.52863 11.2497 2.97863 11.2497 3.89863Z"
        fill="currentColor"
      />
      <Path
        d="M20.39 18.7886L13.18 13.7386C12.91 13.5486 12.75 13.2486 12.75 12.9186V3.89863C12.75 2.97863 13.9 2.52863 14.5 3.22863C14.76 3.53863 15.01 3.89863 15.24 4.30863L18.18 9.59864L21.3 15.2086C21.9 16.2986 22.1 17.3086 21.95 18.1686C21.82 18.8786 20.98 19.1986 20.39 18.7886Z"
        fill="currentColor"
      />
      <Path
        d="M5.26018 19.14L11.4102 15.04C11.7402 14.82 12.2802 14.82 12.6102 15.04L18.7602 19.14C20.3902 20.23 20.1202 21.12 18.1602 21.12H5.85018C3.90018 21.11 3.63018 20.22 5.26018 19.14Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TriangleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.75944 5.00003C10.5394 1.79003 13.4594 1.79003 15.2394 5.00003L18.1794 10.29L21.2994 15.91C22.9794 18.94 21.5194 21.42 18.0594 21.42H11.9994H5.93944C2.46944 21.42 1.01944 18.94 2.69944 15.91L5.81944 10.29L6.40944 9.24003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.4405 19.9999L12.0005 13.3899L2.56055 19.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 3V13.39"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TriangleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2.59009V13.6101L2.65 20.1501C1.8 19.1401 1.75 17.6101 2.7 15.9001L5.82 10.2901L8.76 5.00009C9.65 3.40009 10.82 2.59009 12 2.59009Z"
        fill="currentColor"
      />
      <Path
        opacity="0.6"
        d="M21.3504 20.1501C20.7004 20.9401 19.5704 21.4101 18.0604 21.4101H5.94039C4.43039 21.4101 3.30039 20.9401 2.65039 20.1501L12.0004 13.6101L21.3504 20.1501Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.35 20.1501L12 13.6101V2.59009C13.18 2.59009 14.35 3.40009 15.24 5.00009L18.18 10.2901L21.3 15.9001C22.25 17.6101 22.2 19.1401 21.35 20.1501Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TriangleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 21.41H5.93999C2.46999 21.41 1.01999 18.93 2.69999 15.9L5.81999 10.28L8.75999 5.00003C10.54 1.79003 13.46 1.79003 15.24 5.00003L18.18 10.29L21.3 15.91C22.98 18.94 21.52 21.42 18.06 21.42H12V21.41Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.44 20L12 13.39L2.56 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 3V13.39"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TriangleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.0605 22.1601H5.94046C3.99046 22.1601 2.50046 21.4501 1.74046 20.1701C0.990464 18.8901 1.09046 17.2401 2.04046 15.5401L8.10046 4.63009C9.10046 2.83009 10.4805 1.84009 12.0005 1.84009C13.5205 1.84009 14.9005 2.83009 15.9005 4.63009L21.9605 15.5401C22.9105 17.2501 23.0205 18.8901 22.2605 20.1701C21.5005 21.4501 20.0105 22.1601 18.0605 22.1601ZM12.0005 3.34009C11.0605 3.34009 10.1405 4.06009 9.41046 5.36009L3.36046 16.2701C2.68046 17.4901 2.57046 18.6101 3.04046 19.4201C3.51046 20.2201 4.55046 20.6701 5.95046 20.6701H18.0705C19.4705 20.6701 20.5005 20.2301 20.9805 19.4201C21.4505 18.6101 21.3405 17.5001 20.6605 16.2701L14.5905 5.36009C13.8605 4.06009 12.9405 3.34009 12.0005 3.34009Z"
        fill="currentColor"
      />
      <Path
        d="M21.4408 20.75C21.2908 20.75 21.1408 20.71 21.0108 20.61L12.0008 14.3L2.99084 20.61C2.65084 20.85 2.18084 20.77 1.95084 20.43C1.71084 20.09 1.79084 19.62 2.13084 19.39L11.5708 12.78C11.8308 12.6 12.1708 12.6 12.4308 12.78L21.8708 19.39C22.2108 19.63 22.2908 20.1 22.0508 20.43C21.9108 20.64 21.6808 20.75 21.4408 20.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 14.14C11.59 14.14 11.25 13.8 11.25 13.39V3C11.25 2.59 11.59 2.25 12 2.25C12.41 2.25 12.75 2.59 12.75 3V13.39C12.75 13.8 12.41 14.14 12 14.14Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TriangleTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9994 21.4098H5.93944C2.46944 21.4098 1.01944 18.9298 2.69944 15.8998L5.81944 10.2798L8.75944 4.99979C10.5394 1.78979 13.4594 1.78979 15.2394 4.99979L18.1794 10.2898L21.2994 15.9098C22.9794 18.9398 21.5194 21.4198 18.0594 21.4198H11.9994V21.4098Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M21.4405 19.9996L12.0005 13.3896L2.56055 19.9996"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 3V13.39"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TriangleBold,
  broken: TriangleBroken,
  bulk: TriangleBulk,
  linear: TriangleLinear,
  outline: TriangleOutline,
  twotone: TriangleTwotone,
};

export const TriangleIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
