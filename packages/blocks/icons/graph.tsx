import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const GraphBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.6702 6.94942C21.0302 4.77942 19.2202 2.96942 17.0502 2.32942C15.4002 1.84942 14.2602 1.88942 13.4702 2.47942C12.5202 3.18942 12.4102 4.46942 12.4102 5.37942V7.86942C12.4102 10.3294 13.5302 11.5794 15.7302 11.5794H18.6002C19.5002 11.5794 20.7902 11.4694 21.5002 10.5194C22.1102 9.73942 22.1602 8.59942 21.6702 6.94942Z"
        fill="currentColor"
      />
      <Path
        d="M18.9094 13.3611C18.6494 13.0611 18.2694 12.8911 17.8794 12.8911H14.2994C12.5394 12.8911 11.1094 11.4611 11.1094 9.70113V6.12113C11.1094 5.73113 10.9394 5.35113 10.6394 5.09113C10.3494 4.83113 9.94941 4.71113 9.56941 4.76113C7.21941 5.06113 5.05941 6.35113 3.64941 8.29113C2.22941 10.2411 1.70941 12.6211 2.15941 15.0011C2.80941 18.4411 5.55941 21.1911 9.00941 21.8411C9.55941 21.9511 10.1094 22.0011 10.6594 22.0011C12.4694 22.0011 14.2194 21.4411 15.7094 20.3511C17.6494 18.9411 18.9394 16.7811 19.2394 14.4311C19.2894 14.0411 19.1694 13.6511 18.9094 13.3611Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GraphBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.28 2.95994C13 1.99994 12 3.07994 12 5.67994V8.55994C12 10.9999 13 11.9999 15 11.9999H18.32C20.92 11.9999 22 10.9999 21.04 7.71994C20.82 6.97994 20.46 6.26994 20 5.62994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.11944 14.43C1.30944 9.39001 4.64944 4.95001 9.25944 4.01001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 14.7C19.07 19.33 14.63 22.69 9.58 21.87C7.35 21.52 5.37 20.31 4 18.61"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GraphBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.6702 6.9499C21.0302 4.7799 19.2202 2.9699 17.0502 2.3299C15.4002 1.8499 14.2602 1.8899 13.4702 2.4799C12.5202 3.1899 12.4102 4.4699 12.4102 5.3799V7.8699C12.4102 10.3299 13.5302 11.5799 15.7302 11.5799H18.6002C19.5002 11.5799 20.7902 11.4699 21.5002 10.5199C22.1102 9.7399 22.1602 8.5999 21.6702 6.9499Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18.9094 13.3597C18.6494 13.0597 18.2694 12.8897 17.8794 12.8897H14.2994C12.5394 12.8897 11.1094 11.4597 11.1094 9.69966V6.11966C11.1094 5.72966 10.9394 5.34966 10.6394 5.08966C10.3494 4.82966 9.94941 4.70966 9.56941 4.75966C7.21941 5.05966 5.05941 6.34966 3.64941 8.28966C2.22941 10.2397 1.70941 12.6197 2.15941 14.9997C2.80941 18.4397 5.55941 21.1897 9.00941 21.8397C9.55941 21.9497 10.1094 21.9997 10.6594 21.9997C12.4694 21.9997 14.2194 21.4397 15.7094 20.3497C17.6494 18.9397 18.9394 16.7797 19.2394 14.4297C19.2894 14.0397 19.1694 13.6497 18.9094 13.3597Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GraphLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.32 11.9999C20.92 11.9999 22 10.9999 21.04 7.71994C20.39 5.50994 18.49 3.60994 16.28 2.95994C13 1.99994 12 3.07994 12 5.67994V8.55994C12 10.9999 13 11.9999 15 11.9999H18.32Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.9999 14.7C19.0699 19.33 14.6299 22.69 9.57993 21.87C5.78993 21.26 2.73993 18.21 2.11993 14.42C1.30993 9.39001 4.64993 4.95001 9.25993 4.01001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GraphOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.32 12.75H15C12.51 12.75 11.25 11.34 11.25 8.54996V5.67996C11.25 4.65996 11.37 3.19996 12.43 2.39996C13.32 1.73996 14.6 1.68996 16.49 2.23996C18.97 2.95996 21.04 5.02996 21.76 7.50996C22.31 9.38996 22.26 10.68 21.6 11.56C20.8 12.63 19.34 12.75 18.32 12.75ZM14.28 3.35996C13.87 3.35996 13.55 3.43996 13.34 3.59996C12.95 3.88996 12.76 4.56996 12.76 5.67996V8.55996C12.76 10.8 13.62 11.26 15.01 11.26H18.33C19.43 11.26 20.11 11.07 20.41 10.68C20.76 10.22 20.73 9.29996 20.34 7.94996C19.76 5.97996 18.06 4.26996 16.09 3.69996C15.35 3.46996 14.75 3.35996 14.28 3.35996Z"
        fill="currentColor"
      />
      <Path
        d="M11.0704 22.7498C10.5404 22.7498 10.0004 22.7098 9.46037 22.6198C5.37037 21.9598 2.04037 18.6398 1.38037 14.5498C0.530371 9.28983 3.92037 4.32983 9.11037 3.26983C9.52037 3.18983 9.91037 3.44983 10.0004 3.84983C10.0804 4.25983 9.82037 4.64983 9.42037 4.73983C5.03037 5.63983 2.15037 9.83983 2.88037 14.3098C3.44037 17.7698 6.25037 20.5798 9.71037 21.1398C14.2004 21.8598 18.3904 18.9698 19.2804 14.5598C19.3604 14.1498 19.7604 13.8898 20.1604 13.9698C20.5704 14.0498 20.8304 14.4498 20.7504 14.8498C19.8004 19.5198 15.7204 22.7498 11.0704 22.7498Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GraphTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.32 12.0002C20.92 12.0002 22 11.0002 21.04 7.72018C20.39 5.51018 18.49 3.61018 16.28 2.96018C13 2.00018 12 3.08018 12 5.68018V8.56018C12 11.0002 13 12.0002 15 12.0002H18.32Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.0004 14.6998C19.0704 19.3298 14.6304 22.6898 9.58042 21.8698C5.79042 21.2598 2.74042 18.2098 2.12042 14.4198C1.31042 9.38977 4.65042 4.94977 9.26042 4.00977"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: GraphBold,
  broken: GraphBroken,
  bulk: GraphBulk,
  linear: GraphLinear,
  outline: GraphOutline,
  twotone: GraphTwotone,
};

export const GraphIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
