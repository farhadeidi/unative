import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const TaskBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.9994 19.2611H10.9294C10.4794 19.2611 10.1094 18.8911 10.1094 18.4411C10.1094 17.9911 10.4794 17.6211 10.9294 17.6211H19.9994C20.4494 17.6211 20.8194 17.9911 20.8194 18.4411C20.8194 18.9011 20.4494 19.2611 19.9994 19.2611Z"
        fill="currentColor"
      />
      <Path
        d="M19.9994 12.9681H10.9294C10.4794 12.9681 10.1094 12.5981 10.1094 12.1481C10.1094 11.6981 10.4794 11.3281 10.9294 11.3281H19.9994C20.4494 11.3281 20.8194 11.6981 20.8194 12.1481C20.8194 12.5981 20.4494 12.9681 19.9994 12.9681Z"
        fill="currentColor"
      />
      <Path
        d="M19.9994 6.67125H10.9294C10.4794 6.67125 10.1094 6.30125 10.1094 5.85125C10.1094 5.40125 10.4794 5.03125 10.9294 5.03125H19.9994C20.4494 5.03125 20.8194 5.40125 20.8194 5.85125C20.8194 6.30125 20.4494 6.67125 19.9994 6.67125Z"
        fill="currentColor"
      />
      <Path
        d="M4.90969 8.03187C4.68969 8.03187 4.47969 7.94187 4.32969 7.79187L3.41969 6.88188C3.09969 6.56188 3.09969 6.04187 3.41969 5.72187C3.73969 5.40187 4.25969 5.40187 4.57969 5.72187L4.90969 6.05188L7.04969 3.91187C7.36969 3.59188 7.88969 3.59188 8.20969 3.91187C8.52969 4.23188 8.52969 4.75188 8.20969 5.07188L5.48969 7.79187C5.32969 7.94187 5.12969 8.03187 4.90969 8.03187Z"
        fill="currentColor"
      />
      <Path
        d="M4.90969 14.3287C4.69969 14.3287 4.48969 14.2487 4.32969 14.0887L3.41969 13.1788C3.09969 12.8588 3.09969 12.3388 3.41969 12.0188C3.73969 11.6988 4.25969 11.6988 4.57969 12.0188L4.90969 12.3488L7.04969 10.2087C7.36969 9.88875 7.88969 9.88875 8.20969 10.2087C8.52969 10.5288 8.52969 11.0487 8.20969 11.3687L5.48969 14.0887C5.32969 14.2487 5.11969 14.3287 4.90969 14.3287Z"
        fill="currentColor"
      />
      <Path
        d="M4.90969 20.3288C4.69969 20.3288 4.48969 20.2488 4.32969 20.0888L3.41969 19.1788C3.09969 18.8588 3.09969 18.3388 3.41969 18.0188C3.73969 17.6988 4.25969 17.6988 4.57969 18.0188L4.90969 18.3488L7.04969 16.2087C7.36969 15.8888 7.88969 15.8888 8.20969 16.2087C8.52969 16.5288 8.52969 17.0488 8.20969 17.3688L5.48969 20.0888C5.32969 20.2488 5.11969 20.3288 4.90969 20.3288Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TaskBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11 19.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 12.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 12.5H16.49"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 5.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 5.5L4 6.5L7 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 12.5L4 13.5L7 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 19.5L4 20.5L7 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TaskBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.9994 19.2601H10.9294C10.4794 19.2601 10.1094 18.8901 10.1094 18.4401C10.1094 17.9901 10.4794 17.6201 10.9294 17.6201H19.9994C20.4494 17.6201 20.8194 17.9901 20.8194 18.4401C20.8194 18.9001 20.4494 19.2601 19.9994 19.2601Z"
        fill="currentColor"
      />
      <Path
        d="M19.9994 12.9701H10.9294C10.4794 12.9701 10.1094 12.6001 10.1094 12.1501C10.1094 11.7001 10.4794 11.3301 10.9294 11.3301H19.9994C20.4494 11.3301 20.8194 11.7001 20.8194 12.1501C20.8194 12.6001 20.4494 12.9701 19.9994 12.9701Z"
        fill="currentColor"
      />
      <Path
        d="M19.9994 6.66979H10.9294C10.4794 6.66979 10.1094 6.29978 10.1094 5.84978C10.1094 5.39978 10.4794 5.02979 10.9294 5.02979H19.9994C20.4494 5.02979 20.8194 5.39978 20.8194 5.84978C20.8194 6.29978 20.4494 6.66979 19.9994 6.66979Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M4.90969 8.02992C4.68969 8.02992 4.47969 7.93992 4.32969 7.78992L3.41969 6.87992C3.09969 6.55992 3.09969 6.03992 3.41969 5.71992C3.73969 5.39992 4.25969 5.39992 4.57969 5.71992L4.90969 6.04992L7.04969 3.90992C7.36969 3.58992 7.88969 3.58992 8.20969 3.90992C8.52969 4.22992 8.52969 4.74992 8.20969 5.06992L5.48969 7.78992C5.32969 7.93992 5.12969 8.02992 4.90969 8.02992Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M4.90969 14.3302C4.69969 14.3302 4.48969 14.2502 4.32969 14.0902L3.41969 13.1802C3.09969 12.8602 3.09969 12.3402 3.41969 12.0202C3.73969 11.7002 4.25969 11.7002 4.57969 12.0202L4.90969 12.3502L7.04969 10.2102C7.36969 9.89021 7.88969 9.89021 8.20969 10.2102C8.52969 10.5302 8.52969 11.0502 8.20969 11.3702L5.48969 14.0902C5.32969 14.2502 5.11969 14.3302 4.90969 14.3302Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M4.90969 20.3302C4.69969 20.3302 4.48969 20.2502 4.32969 20.0902L3.41969 19.1802C3.09969 18.8602 3.09969 18.3402 3.41969 18.0202C3.73969 17.7002 4.25969 17.7002 4.57969 18.0202L4.90969 18.3502L7.04969 16.2102C7.36969 15.8902 7.88969 15.8902 8.20969 16.2102C8.52969 16.5302 8.52969 17.0502 8.20969 17.3702L5.48969 20.0902C5.32969 20.2502 5.11969 20.3302 4.90969 20.3302Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TaskLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11 19.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 12.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 5.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 5.5L4 6.5L7 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 12.5L4 13.5L7 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 19.5L4 20.5L7 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TaskOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21 20.25H11C10.59 20.25 10.25 19.91 10.25 19.5C10.25 19.09 10.59 18.75 11 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z"
        fill="currentColor"
      />
      <Path
        d="M21 13.25H11C10.59 13.25 10.25 12.91 10.25 12.5C10.25 12.09 10.59 11.75 11 11.75H21C21.41 11.75 21.75 12.09 21.75 12.5C21.75 12.91 21.41 13.25 21 13.25Z"
        fill="currentColor"
      />
      <Path
        d="M21 6.25H11C10.59 6.25 10.25 5.91 10.25 5.5C10.25 5.09 10.59 4.75 11 4.75H21C21.41 4.75 21.75 5.09 21.75 5.5C21.75 5.91 21.41 6.25 21 6.25Z"
        fill="currentColor"
      />
      <Path
        d="M3.99945 7.24994C3.80945 7.24994 3.61945 7.17994 3.46945 7.02994L2.46945 6.02994C2.17945 5.73994 2.17945 5.25994 2.46945 4.96994C2.75945 4.67994 3.23945 4.67994 3.52945 4.96994L3.99945 5.43994L6.46945 2.96994C6.75945 2.67994 7.23945 2.67994 7.52945 2.96994C7.81945 3.25994 7.81945 3.73994 7.52945 4.02994L4.52945 7.02994C4.37945 7.17994 4.18945 7.24994 3.99945 7.24994Z"
        fill="currentColor"
      />
      <Path
        d="M3.99945 14.2499C3.80945 14.2499 3.61945 14.1799 3.46945 14.0299L2.46945 13.0299C2.17945 12.7399 2.17945 12.2599 2.46945 11.9699C2.75945 11.6799 3.23945 11.6799 3.52945 11.9699L3.99945 12.4399L6.46945 9.96994C6.75945 9.67994 7.23945 9.67994 7.52945 9.96994C7.81945 10.2599 7.81945 10.7399 7.52945 11.0299L4.52945 14.0299C4.37945 14.1799 4.18945 14.2499 3.99945 14.2499Z"
        fill="currentColor"
      />
      <Path
        d="M3.99945 21.2499C3.80945 21.2499 3.61945 21.1799 3.46945 21.0299L2.46945 20.0299C2.17945 19.7399 2.17945 19.2599 2.46945 18.9699C2.75945 18.6799 3.23945 18.6799 3.52945 18.9699L3.99945 19.4399L6.46945 16.9699C6.75945 16.6799 7.23945 16.6799 7.52945 16.9699C7.81945 17.2599 7.81945 17.7399 7.52945 18.0299L4.52945 21.0299C4.37945 21.1799 4.18945 21.2499 3.99945 21.2499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TaskTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11 19.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11 12.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11 5.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 5.5L4 6.5L7 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 12.5L4 13.5L7 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 19.5L4 20.5L7 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TaskBold,
  broken: TaskBroken,
  bulk: TaskBulk,
  linear: TaskLinear,
  outline: TaskOutline,
  twotone: TaskTwotone,
};

export const TaskIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
