import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const VideoSlashBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.7405 7.57031C17.7505 7.64031 17.7505 7.72031 17.7405 7.79031C17.7405 7.72031 17.7305 7.65031 17.7305 7.58031L17.7405 7.57031Z"
        fill="currentColor"
      />
      <Path
        d="M17.2789 6.56L3.82891 20.01C2.42891 19.12 1.87891 17.53 1.87891 16V8C1.87891 4.58 3.20891 3.25 6.62891 3.25H12.6289C15.5189 3.25 16.9089 4.2 17.2789 6.56Z"
        fill="currentColor"
      />
      <Path
        d="M21.4 2.22891C21.1 1.92891 20.61 1.92891 20.31 2.22891L1.85 20.6889C1.55 20.9889 1.55 21.4789 1.85 21.7789C2 21.9189 2.2 21.9989 2.39 21.9989C2.59 21.9989 2.78 21.9189 2.93 21.7689L21.4 3.30891C21.7 3.00891 21.7 2.52891 21.4 2.22891Z"
        fill="currentColor"
      />
      <Path
        d="M22.3802 8.38047V15.6205C22.3802 17.0505 21.6802 17.6205 21.2802 17.8305C21.0902 17.9305 20.7902 18.0405 20.4202 18.0405C19.9902 18.0405 19.4602 17.9005 18.8402 17.4605L17.3602 16.4205C17.2902 18.6305 16.5902 19.8905 15.0002 20.4205C14.3602 20.6505 13.5702 20.7505 12.6202 20.7505H6.62016C6.38016 20.7505 6.15016 20.7405 5.91016 20.7105L15.0002 11.6305L20.6502 5.98047C20.9102 6.00047 21.1202 6.08047 21.2802 6.17047C21.6802 6.38047 22.3802 6.95047 22.3802 8.38047Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VideoSlashBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 12.1499V16.2099C2 17.4699 2.38 18.7399 3.37 19.5499L4 19.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.63 7.58008C16.63 7.58008 16.66 6.63008 16.63 6.32008C16.46 4.28008 15.13 3.58008 12.52 3.58008H6.21C3.05 3.58008 2 4.63008 2 7.79008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.7398 10.95V16.21C16.7398 19.37 15.6898 20.42 12.5298 20.42H7.25977"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.0002 6.73999V15.81C22.0002 17.48 20.8802 18.06 19.5202 17.1L16.7402 15.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.0195 2.18994L2.01953 22.1899"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VideoSlashBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.65 6.56L4.2 20.01C2.8 19.12 2.25 17.53 2.25 16V8C2.25 4.58 3.58 3.25 7 3.25H13C15.89 3.25 17.29 4.2 17.65 6.56Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M17.7491 9.25V16C17.7491 16.08 17.7391 16.14 17.7391 16.21C17.7391 16.28 17.7291 16.35 17.7291 16.42H17.7391C17.6291 19.53 16.2791 20.75 12.9991 20.75H6.99906C6.74906 20.75 6.51906 20.74 6.28906 20.71L17.7491 9.25Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M17.7305 16.42C17.7305 16.35 17.7405 16.28 17.7405 16.21C17.7505 16.28 17.7505 16.35 17.7405 16.42H17.7305Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M17.7405 7.56982C17.7505 7.63982 17.7505 7.71982 17.7405 7.78982C17.7405 7.71982 17.7305 7.64982 17.7305 7.57982L17.7405 7.56982Z"
        fill="currentColor"
      />
      <Path
        d="M22.7505 8.37998V15.62C22.7505 17.05 22.0605 17.62 21.6505 17.83C21.4605 17.93 21.1705 18.04 20.8005 18.04C20.3705 18.04 19.8305 17.9 19.2105 17.46L17.7405 16.42H17.7305C17.7305 16.35 17.7405 16.28 17.7405 16.21C17.7405 16.14 17.7505 16.08 17.7505 16V9.24998L21.0205 5.97998C21.2905 5.99998 21.5005 6.07998 21.6505 6.16998C22.0605 6.37998 22.7505 6.94998 22.7505 8.37998Z"
        fill="currentColor"
      />
      <Path
        d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VideoSlashLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.63 7.58008C16.63 7.58008 16.66 6.63008 16.63 6.32008C16.46 4.28008 15.13 3.58008 12.52 3.58008H6.21C3.05 3.58008 2 4.63008 2 7.79008V16.2101C2 17.4701 2.38 18.7401 3.37 19.5501L4 20.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.74 10.95V16.21C16.74 19.37 15.69 20.42 12.53 20.42H7.26001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 6.73999V15.81C22 17.48 20.88 18.06 19.52 17.1L16.74 15.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.02 2.18994L2.02002 22.1899"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VideoSlashOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.3 19.92C4.13 19.92 3.96 19.86 3.82 19.75C2.81 18.92 2.25 17.59 2.25 16V8C2.25 4.58 3.58 3.25 7 3.25H13C15.04 3.25 17.18 3.63 17.64 6.48C17.71 6.89 17.43 7.27 17.02 7.34C16.61 7.41 16.23 7.13 16.16 6.72C15.95 5.42 15.4 4.75 13 4.75H7C4.42 4.75 3.75 5.42 3.75 8V16C3.75 16.65 3.88 17.86 4.77 18.59C5.09 18.85 5.14 19.33 4.87 19.65C4.73 19.83 4.51 19.92 4.3 19.92Z"
        fill="currentColor"
      />
      <Path
        d="M13 20.75H8C7.59 20.75 7.25 20.41 7.25 20C7.25 19.59 7.59 19.25 8 19.25H13C15.58 19.25 16.25 18.58 16.25 16V11C16.25 10.59 16.59 10.25 17 10.25C17.41 10.25 17.75 10.59 17.75 11V16C17.75 19.42 16.42 20.75 13 20.75Z"
        fill="currentColor"
      />
      <Path
        d="M20.8003 18.04C20.3703 18.04 19.8403 17.9 19.2103 17.46L16.5703 15.61C16.2303 15.37 16.1503 14.9 16.3903 14.57C16.6303 14.23 17.0903 14.15 17.4303 14.39L20.0703 16.24C20.5103 16.55 20.8303 16.58 20.9603 16.51C21.0903 16.44 21.2503 16.17 21.2503 15.63V7C21.2503 6.59 21.5903 6.25 22.0003 6.25C22.4103 6.25 22.7503 6.59 22.7503 7V15.62C22.7503 17.05 22.0603 17.62 21.6503 17.83C21.4603 17.93 21.1703 18.04 20.8003 18.04Z"
        fill="currentColor"
      />
      <Path
        d="M2.02094 22.9399C1.83094 22.9399 1.64094 22.8699 1.49094 22.7199C1.20094 22.4299 1.20094 21.9499 1.49094 21.6599L21.4909 1.65988C21.7809 1.36988 22.2609 1.36988 22.5509 1.65988C22.8409 1.94988 22.8409 2.42988 22.5509 2.71988L2.55094 22.7199C2.41094 22.8699 2.21094 22.9399 2.02094 22.9399Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VideoSlashTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.63 7.58008C16.63 7.58008 16.66 6.63008 16.63 6.32008C16.46 4.28008 15.13 3.58008 12.52 3.58008H6.21C3.05 3.58008 2 4.63008 2 7.79008V16.2101C2 17.4701 2.38 18.7401 3.37 19.5501L4 20.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.7398 10.9502V16.2102C16.7398 19.3702 15.6898 20.4202 12.5298 20.4202H7.25977"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.0002 6.74023V15.8102C22.0002 17.4802 20.8802 18.0602 19.5202 17.1002L16.7402 15.1502"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.0195 2.18994L2.01953 22.1899"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: VideoSlashBold,
  broken: VideoSlashBroken,
  bulk: VideoSlashBulk,
  linear: VideoSlashLinear,
  outline: VideoSlashOutline,
  twotone: VideoSlashTwotone,
};

export const VideoSlashIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
