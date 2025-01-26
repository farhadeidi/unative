import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const CardEditBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.5 4.60844V7.53844C13.5 8.20844 12.96 8.74844 12.29 8.74844H3.21C2.53 8.74844 2 8.18844 2 7.51844C2.01 6.38844 2.46 5.35844 3.21 4.60844C3.96 3.85844 5 3.39844 6.14 3.39844H12.29C12.96 3.39844 13.5 3.93844 13.5 4.60844Z"
        fill="currentColor"
      />
      <Path
        d="M2 11.46V16.46C2 18.75 3.85 20.6 6.14 20.6H17.85C20.14 20.6 22 18.74 22 16.45V11.46C22 10.79 21.46 10.25 20.79 10.25H3.21C2.54 10.25 2 10.79 2 11.46ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
        fill="currentColor"
      />
      <Path
        d="M19.97 1.75H17.03C15.76 1.75 15 2.51 15 3.78V6.72C15 7.99 15.76 8.75 17.03 8.75H19.97C21.24 8.75 22 7.99 22 6.72V3.78C22 2.51 21.24 1.75 19.97 1.75ZM18.01 7.32C17.98 7.35 17.91 7.39 17.86 7.39L16.82 7.54C16.79 7.55 16.75 7.55 16.72 7.55C16.57 7.55 16.44 7.5 16.35 7.4C16.23 7.28 16.18 7.11 16.21 6.93L16.36 5.89C16.37 5.84 16.4 5.77 16.43 5.74L18.13 4.04C18.16 4.11 18.19 4.19 18.22 4.27C18.26 4.35 18.3 4.42 18.34 4.49C18.37 4.55 18.41 4.61 18.45 4.65C18.49 4.71 18.53 4.77 18.56 4.8C18.58 4.83 18.59 4.84 18.6 4.85C18.69 4.96 18.79 5.06 18.88 5.13C18.9 5.15 18.92 5.17 18.93 5.17C18.98 5.21 19.04 5.26 19.08 5.29C19.14 5.33 19.19 5.37 19.25 5.4C19.32 5.44 19.4 5.48 19.48 5.52C19.56 5.56 19.64 5.59 19.71 5.61L18.01 7.32ZM20.4 4.93L20.07 5.26C20.06 5.28 20.03 5.29 20 5.29C19.99 5.29 19.98 5.29 19.97 5.29C19.25 5.08 18.68 4.51 18.47 3.79C18.46 3.75 18.47 3.71 18.5 3.68L18.83 3.35C19.37 2.81 19.88 2.82 20.41 3.35C20.68 3.62 20.81 3.88 20.81 4.14C20.8 4.4 20.67 4.66 20.4 4.93Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CardEditBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 8.5H11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 16.5H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 16.5H14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 11.03V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0803 4.13006L15.3703 7.84006C15.2303 7.98006 15.0903 8.26006 15.0603 8.46006L14.8603 9.88006C14.7903 10.3901 15.1503 10.7501 15.6603 10.6801L17.0803 10.4801C17.2803 10.4501 17.5603 10.3101 17.7003 10.1701L21.4103 6.46006C22.0503 5.82006 22.3503 5.08006 21.4103 4.14006C20.4603 3.19006 19.7203 3.49006 19.0803 4.13006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5508 4.65991C18.8708 5.78991 19.7508 6.66991 20.8708 6.97991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CardEditBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 7.7699V8.9999H2V7.5399C2 5.2499 3.86 3.3999 6.15 3.3999H16V5.9699C16 7.2399 16.76 7.9999 18.03 7.9999H20.97C21.37 7.9999 21.71 7.9299 22 7.7699Z"
        fill="currentColor"
      />
      <Path
        d="M2 9V16.46C2 18.75 3.86 20.6 6.15 20.6H17.85C20.14 20.6 22 18.75 22 16.46V9H2ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
        fill="currentColor"
      />
      <Path
        d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM19.01 6.57C18.98 6.6 18.91 6.64 18.86 6.64L17.82 6.79C17.79 6.8 17.75 6.8 17.72 6.8C17.57 6.8 17.44 6.75 17.35 6.65C17.23 6.53 17.18 6.36 17.21 6.18L17.36 5.14C17.37 5.09 17.4 5.02 17.43 4.99L19.13 3.29C19.16 3.36 19.19 3.44 19.22 3.52C19.26 3.6 19.3 3.67 19.34 3.74C19.37 3.8 19.41 3.86 19.45 3.9C19.49 3.96 19.53 4.02 19.56 4.05C19.58 4.08 19.59 4.09 19.6 4.1C19.69 4.21 19.79 4.31 19.88 4.38C19.9 4.4 19.92 4.42 19.93 4.42C19.98 4.46 20.04 4.51 20.08 4.54C20.14 4.58 20.19 4.62 20.25 4.65C20.32 4.69 20.4 4.73 20.48 4.77C20.56 4.81 20.64 4.84 20.71 4.86L19.01 6.57ZM21.4 4.18L21.08 4.5C21.06 4.53 21.03 4.54 21 4.54C20.99 4.54 20.98 4.54 20.97 4.54C20.25 4.33 19.68 3.76 19.47 3.04C19.46 3 19.47 2.96 19.5 2.93L19.83 2.6C20.37 2.06 20.88 2.07 21.41 2.6C21.68 2.87 21.81 3.13 21.81 3.39C21.8 3.65 21.67 3.91 21.4 4.18Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CardEditLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M1.99609 8.5H11.4961"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.99609 16.5H7.99609"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4961 16.5H14.4961"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9961 12.03V16.11C21.9961 19.62 21.1061 20.5 17.5561 20.5H6.43609C2.88609 20.5 1.99609 19.62 1.99609 16.11V7.89C1.99609 4.38 2.88609 3.5 6.43609 3.5H14.4961"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0761 4.13006L15.3661 7.84006C15.2261 7.98006 15.0861 8.26006 15.0561 8.46006L14.8561 9.88006C14.7861 10.3901 15.1461 10.7501 15.6561 10.6801L17.0761 10.4801C17.2761 10.4501 17.5561 10.3101 17.6961 10.1701L21.4061 6.46006C22.0461 5.82006 22.3461 5.08006 21.4061 4.14006C20.4561 3.19006 19.7161 3.49006 19.0761 4.13006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5461 4.65991C18.8661 5.78991 19.7461 6.66991 20.8661 6.97991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CardEditOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.5 9.25H2C1.59 9.25 1.25 8.91 1.25 8.5C1.25 8.09 1.59 7.75 2 7.75H11.5C11.91 7.75 12.25 8.09 12.25 8.5C12.25 8.91 11.91 9.25 11.5 9.25Z"
        fill="currentColor"
      />
      <Path
        d="M8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
        fill="currentColor"
      />
      <Path
        d="M17.56 21.25H6.44C2.46 21.25 1.25 20.05 1.25 16.11V7.89C1.25 3.95 2.46 2.75 6.44 2.75H14.5C14.91 2.75 15.25 3.09 15.25 3.5C15.25 3.91 14.91 4.25 14.5 4.25H6.44C3.3 4.25 2.75 4.79 2.75 7.89V16.1C2.75 19.2 3.3 19.74 6.44 19.74H17.55C20.69 19.74 21.24 19.2 21.24 16.1V12.02C21.24 11.61 21.58 11.27 21.99 11.27C22.4 11.27 22.74 11.61 22.74 12.02V16.1C22.75 20.05 21.54 21.25 17.56 21.25Z"
        fill="currentColor"
      />
      <Path
        d="M15.5194 11.4401C15.1294 11.4401 14.7594 11.3001 14.4994 11.0301C14.1794 10.7101 14.0394 10.2501 14.1094 9.77005L14.3094 8.35005C14.3594 7.99005 14.5794 7.56005 14.8294 7.31005L18.5394 3.60005C20.0094 2.13005 21.2894 2.97005 21.9294 3.60005C22.5594 4.23005 23.3994 5.51005 21.9294 6.99005L18.2194 10.7001C17.9594 10.9601 17.5294 11.1701 17.1794 11.2201L15.7594 11.4201C15.6794 11.4301 15.5994 11.4401 15.5194 11.4401ZM20.2294 4.28005C20.0294 4.28005 19.8494 4.42005 19.5994 4.66005L15.8994 8.37005C15.8694 8.41005 15.8094 8.52005 15.7994 8.57005L15.5994 9.92005L16.9594 9.73005C17.0094 9.72005 17.1194 9.66005 17.1594 9.63005L20.8694 5.92005C21.3394 5.45005 21.4094 5.19005 20.8694 4.66005C20.6094 4.40005 20.4194 4.28005 20.2294 4.28005Z"
        fill="currentColor"
      />
      <Path
        d="M20.8702 7.74006C20.8002 7.74006 20.7302 7.73006 20.6702 7.71006C19.3002 7.32006 18.2102 6.24006 17.8302 4.87006C17.7202 4.47006 17.9502 4.06006 18.3502 3.94006C18.7502 3.83006 19.1602 4.06006 19.2802 4.46006C19.5302 5.33006 20.2202 6.02006 21.0902 6.27006C21.4902 6.38006 21.7202 6.80006 21.6102 7.19006C21.5002 7.52006 21.2002 7.74006 20.8702 7.74006Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CardEditTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M1.99609 8.5H11.4961"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5.99609 16.5H7.99609"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10.4961 16.5H14.4961"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9961 12.03V16.11C21.9961 19.62 21.1061 20.5 17.5561 20.5H6.43609C2.88609 20.5 1.99609 19.62 1.99609 16.11V7.89C1.99609 4.38 2.88609 3.5 6.43609 3.5H14.4961"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M19.0764 4.13031L15.3664 7.84031C15.2264 7.98031 15.0864 8.26031 15.0564 8.46031L14.8564 9.88031C14.7864 10.3903 15.1464 10.7503 15.6564 10.6803L17.0764 10.4803C17.2764 10.4503 17.5564 10.3103 17.6964 10.1703L21.4064 6.46031C22.0464 5.82031 22.3464 5.08031 21.4064 4.14031C20.4564 3.19031 19.7164 3.49031 19.0764 4.13031Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18.5469 4.66016C18.8669 5.79016 19.7469 6.67016 20.8669 6.98016"
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
  bold: CardEditBold,
  broken: CardEditBroken,
  bulk: CardEditBulk,
  linear: CardEditLinear,
  outline: CardEditOutline,
  twotone: CardEditTwotone,
};

export const CardEditIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
