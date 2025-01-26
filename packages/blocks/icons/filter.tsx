import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const FilterBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.6009 4.10156V6.30156C20.6009 7.10156 20.1009 8.10156 19.6009 8.60156L15.3009 12.4016C14.7009 12.9016 14.3009 13.9016 14.3009 14.7016V19.0016C14.3009 19.6016 13.9009 20.4016 13.4009 20.7016L12.0009 21.6016C10.7009 22.4016 8.90086 21.5016 8.90086 19.9016V14.6016C8.90086 13.9016 8.50086 13.0016 8.10086 12.5016L7.63086 12.0116C7.32086 11.6816 7.26086 11.1816 7.51086 10.7916L12.6309 2.57156C12.8109 2.28156 13.1309 2.10156 13.4809 2.10156H18.6009C19.7009 2.10156 20.6009 3.00156 20.6009 4.10156Z"
        fill="currentColor"
      />
      <Path
        d="M10.3504 3.63156L6.80039 9.32156C6.46039 9.87156 5.68039 9.95156 5.23039 9.48156L4.30039 8.50156C3.80039 8.00156 3.40039 7.10156 3.40039 6.50156V4.20156C3.40039 3.00156 4.30039 2.10156 5.40039 2.10156H9.50039C10.2804 2.10156 10.7604 2.96156 10.3504 3.63156Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.6004 2.1001C19.7004 2.1001 20.6004 3.0001 20.6004 4.1001V6.3001C20.6004 7.1001 20.1004 8.1001 19.6004 8.6001L15.3004 12.4001C14.7004 12.9001 14.3004 13.9001 14.3004 14.7001V19.0001C14.3004 19.6001 13.9004 20.4001 13.4004 20.7001L12.0004 21.6001C10.7004 22.4001 8.90039 21.5001 8.90039 19.9001V14.6001C8.90039 13.9001 8.50039 13.0001 8.10039 12.5001L4.30039 8.5001C3.80039 8.0001 3.40039 7.1001 3.40039 6.5001V4.2001C3.40039 3.0001 4.30039 2.1001 5.40039 2.1001H14.4004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.93 2.1001L6 10.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FilterBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.5996 4.1001V6.3001C20.5996 7.1001 20.0996 8.1001 19.5996 8.6001L15.2996 12.4001C14.6996 12.9001 14.2996 13.9001 14.2996 14.7001V19.0001C14.2996 19.6001 13.8996 20.4001 13.3996 20.7001L11.9996 21.6001C10.6996 22.4001 8.89961 21.5001 8.89961 19.9001V14.6001C8.89961 13.9001 8.49961 13.0001 8.09961 12.5001L7.09961 11.4501L12.9196 2.1001H18.5996C19.6996 2.1001 20.5996 3.0001 20.5996 4.1001Z"
        fill="currentColor"
      />
      <Path
        d="M11.3004 2.1001L6.12039 10.4101L4.30039 8.5001C3.80039 8.0001 3.40039 7.1001 3.40039 6.5001V4.2001C3.40039 3.0001 4.30039 2.1001 5.40039 2.1001H11.3004Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.40002 2.09998H18.6C19.7 2.09998 20.6 2.99998 20.6 4.09998V6.29998C20.6 7.09998 20.1 8.09998 19.6 8.59998L15.3 12.4C14.7 12.9 14.3 13.9 14.3 14.7V19C14.3 19.6 13.9 20.4 13.4 20.7L12 21.6C10.7 22.4 8.90002 21.5 8.90002 19.9V14.6C8.90002 13.9 8.50002 13 8.10002 12.5L4.30002 8.49998C3.80002 7.99998 3.40002 7.09998 3.40002 6.49998V4.19998C3.40002 2.99998 4.30002 2.09998 5.40002 2.09998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.93 2.09998L6 9.99998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FilterOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.9404 22.6501C10.4604 22.6501 9.99039 22.5301 9.55039 22.2901C8.67039 21.8001 8.14039 20.9101 8.14039 19.9101V14.6101C8.14039 14.1101 7.81039 13.3601 7.50039 12.9801L3.76039 9.0201C3.13039 8.3901 2.65039 7.3101 2.65039 6.5001V4.2001C2.65039 2.6001 3.86039 1.3501 5.40039 1.3501H18.6004C20.1204 1.3501 21.3504 2.5801 21.3504 4.1001V6.3001C21.3504 7.3501 20.7204 8.5401 20.1304 9.1301L15.8004 12.9601C15.3804 13.3101 15.0504 14.0801 15.0504 14.7001V19.0001C15.0504 19.8901 14.4904 20.9201 13.7904 21.3401L12.4104 22.2301C11.9604 22.5101 11.4504 22.6501 10.9404 22.6501ZM5.40039 2.8501C4.70039 2.8501 4.15039 3.4401 4.15039 4.2001V6.5001C4.15039 6.8701 4.45039 7.5901 4.83039 7.9701L8.64039 11.9801C9.15039 12.6101 9.65039 13.6601 9.65039 14.6001V19.9001C9.65039 20.5501 10.1004 20.8701 10.2904 20.9701C10.7104 21.2001 11.2204 21.2001 11.6104 20.9601L13.0004 20.0701C13.2804 19.9001 13.5604 19.3601 13.5604 19.0001V14.7001C13.5604 13.6301 14.0804 12.4501 14.8304 11.8201L19.1104 8.0301C19.4504 7.6901 19.8604 6.8801 19.8604 6.2901V4.1001C19.8604 3.4101 19.3004 2.8501 18.6104 2.8501H5.40039Z"
        fill="currentColor"
      />
      <Path
        d="M5.99968 10.75C5.85968 10.75 5.72968 10.71 5.59968 10.64C5.24968 10.42 5.13968 9.95002 5.35968 9.60002L10.2897 1.70002C10.5097 1.35002 10.9697 1.24002 11.3197 1.46002C11.6697 1.68002 11.7797 2.14002 11.5597 2.49002L6.62968 10.39C6.48968 10.62 6.24968 10.75 5.99968 10.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.40039 2.1001H18.6004C19.7004 2.1001 20.6004 3.0001 20.6004 4.1001V6.3001C20.6004 7.1001 20.1004 8.1001 19.6004 8.6001L15.3004 12.4001C14.7004 12.9001 14.3004 13.9001 14.3004 14.7001V19.0001C14.3004 19.6001 13.9004 20.4001 13.4004 20.7001L12.0004 21.6001C10.7004 22.4001 8.90039 21.5001 8.90039 19.9001V14.6001C8.90039 13.9001 8.50039 13.0001 8.10039 12.5001L4.30039 8.5001C3.80039 8.0001 3.40039 7.1001 3.40039 6.5001V4.2001C3.40039 3.0001 4.30039 2.1001 5.40039 2.1001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10.93 2.1001L6 10.0001"
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
  bold: FilterBold,
  broken: FilterBroken,
  bulk: FilterBulk,
  linear: FilterLinear,
  outline: FilterOutline,
  twotone: FilterTwotone,
};

export const FilterIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
