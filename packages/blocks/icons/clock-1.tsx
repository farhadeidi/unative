import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const Clock1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.7184 18.9972C15.1163 18.8421 15.5758 19.1811 15.4905 19.5995C15.0005 21.4995 13.9005 21.9995 12.5505 21.9995H11.4605C10.1105 21.9995 9.00055 21.4995 8.52055 19.5895C8.4383 19.1705 8.89557 18.8342 9.2932 18.99C10.1478 19.3248 11.0613 19.4995 12.0005 19.4995C12.9442 19.4995 13.8624 19.3309 14.7184 18.9972Z"
        fill="currentColor"
      />
      <Path
        d="M15.4908 4.4C15.5792 4.82271 15.1132 5.1669 14.7113 5.00871C13.8736 4.67891 12.9595 4.5 12.0008 4.5C11.0432 4.5 10.1309 4.68113 9.29243 5.01127C8.89454 5.16793 8.43543 4.82901 8.52078 4.41C9.00078 2.5 10.1108 2 11.4608 2H12.5508C13.9008 2 15.0008 2.5 15.4908 4.4Z"
        fill="currentColor"
      />
      <Path
        d="M12 5.5C8.41 5.5 5.5 8.41 5.5 12C5.5 14.1 6.49 15.96 8.03 17.15H8.04C9.14 18 10.51 18.5 12 18.5C13.51 18.5 14.89 17.99 15.99 17.13H16C17.52 15.94 18.5 14.08 18.5 12C18.5 8.41 15.59 5.5 12 5.5ZM13.93 14.38C13.78 14.53 13.59 14.6 13.4 14.6C13.21 14.6 13.02 14.53 12.87 14.38L11.47 12.98C11.33 12.84 11.25 12.65 11.25 12.45V9.66C11.25 9.25 11.59 8.91 12 8.91C12.41 8.91 12.75 9.25 12.75 9.66V12.14L13.93 13.32C14.22 13.61 14.22 14.09 13.93 14.38Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Clock1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 9.65991V12.4499L13.4 13.8499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.96 7.89C8.16 6.43 9.97 5.5 12 5.5C15.59 5.5 18.5 8.41 18.5 12C18.5 14.08 17.52 15.94 16 17.13H15.99C14.89 17.99 13.51 18.5 12 18.5C10.51 18.5 9.14 18 8.04 17.15H8.03C6.49 15.96 5.5 14.1 5.5 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.0293 17.1499H8.0393C9.1393 17.9999 10.5093 18.4999 11.9993 18.4999C13.5093 18.4999 14.8893 17.9899 15.9893 17.1299H15.9993L15.4893 19.5999C14.9993 21.4999 13.8993 21.9999 12.5493 21.9999H11.4593C10.1093 21.9999 8.9993 21.4999 8.5193 19.5899L8.0293 17.1499Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.0293 6.85H8.0393C9.1393 6 10.5093 5.5 11.9993 5.5C13.5093 5.5 14.8893 6.01 15.9893 6.87H15.9993L15.4893 4.4C14.9993 2.5 13.8993 2 12.5493 2H11.4593C10.1093 2 8.9993 2.5 8.5193 4.41L8.0293 6.85Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Clock1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <Path
        d="M15.7106 15.93C15.5806 15.93 15.4506 15.9 15.3306 15.82L12.2306 13.97C11.4606 13.51 10.8906 12.5 10.8906 11.61V7.51001C10.8906 7.10001 11.2306 6.76001 11.6406 6.76001C12.0506 6.76001 12.3906 7.10001 12.3906 7.51001V11.61C12.3906 11.97 12.6906 12.5 13.0006 12.68L16.1006 14.53C16.4606 14.74 16.5706 15.2 16.3606 15.56C16.2106 15.8 15.9606 15.93 15.7106 15.93Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Clock1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Clock1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.4 14.5999C13.21 14.5999 13.02 14.5299 12.87 14.3799L11.47 12.9799C11.33 12.8399 11.25 12.6499 11.25 12.4499V9.65991C11.25 9.24991 11.59 8.90991 12 8.90991C12.41 8.90991 12.75 9.24991 12.75 9.65991V12.1399L13.93 13.3199C14.22 13.6099 14.22 14.0899 13.93 14.3799C13.78 14.5299 13.59 14.5999 13.4 14.5999Z"
        fill="currentColor"
      />
      <Path
        d="M12 19.25C10.41 19.25 8.91 18.75 7.65 17.8C7.62 17.78 7.6 17.77 7.57 17.75C5.78 16.36 4.75 14.26 4.75 12C4.75 8 8 4.75 12 4.75C16 4.75 19.25 8 19.25 12C19.25 14.25 18.23 16.33 16.46 17.72C16.43 17.74 16.41 17.76 16.38 17.78C15.11 18.74 13.6 19.25 12 19.25ZM8.43 16.51C8.46 16.53 8.48 16.54 8.5 16.56C10.53 18.13 13.51 18.12 15.53 16.54C15.55 16.52 15.58 16.5 15.6 16.49C16.97 15.39 17.75 13.76 17.75 12C17.75 8.83 15.17 6.25 12 6.25C8.83 6.25 6.25 8.83 6.25 12C6.25 13.77 7.04 15.41 8.43 16.51Z"
        fill="currentColor"
      />
      <Path
        d="M12.5496 22.7501H11.4596C9.49959 22.7501 8.29959 21.7801 7.78959 19.7701L7.28959 17.3001C7.24959 17.0801 7.29959 16.8501 7.44959 16.6801C7.59959 16.5101 7.80959 16.4101 8.02959 16.4101H8.03959C8.20959 16.4101 8.36959 16.4601 8.49959 16.5701C10.5296 18.1401 13.5096 18.1301 15.5296 16.5501C15.8396 16.3101 16.3296 16.3601 16.5796 16.6701C16.7196 16.8401 16.7796 17.0701 16.7396 17.2901L16.2296 19.7601C15.6996 21.7801 14.4996 22.7501 12.5496 22.7501ZM9.08959 18.6401L9.24959 19.4401C9.62959 20.9401 10.4096 21.2501 11.4596 21.2501H12.5496C13.5896 21.2501 14.3696 20.9401 14.7596 19.4201L14.9196 18.6401C13.1096 19.4401 10.9096 19.4501 9.08959 18.6401Z"
        fill="currentColor"
      />
      <Path
        d="M16.0003 7.62C15.8303 7.62 15.6603 7.56 15.5303 7.46C13.5103 5.88 10.5303 5.87 8.50025 7.44C8.19025 7.68 7.70025 7.63 7.46025 7.33C7.32025 7.16 7.26025 6.93 7.30025 6.71L7.79025 4.27C8.30025 2.22 9.50025 1.25 11.4603 1.25H12.5503C14.5003 1.25 15.7002 2.22 16.2102 4.21L16.7303 6.72C16.7803 6.94 16.7203 7.17 16.5803 7.34C16.4403 7.52 16.2303 7.62 16.0003 7.62ZM12.0003 4.75C13.0303 4.75 14.0103 4.96 14.9203 5.36L14.7503 4.55C14.3603 3.07 13.5903 2.75 12.5503 2.75H11.4603C10.4103 2.75 9.63025 3.06 9.25025 4.6L9.09025 5.36C10.0003 4.96 10.9803 4.75 12.0003 4.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Clock1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 9.66016V12.4502L13.4 13.8502"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.5 12C5.5 8.41 8.41 5.5 12 5.5C15.59 5.5 18.5 8.41 18.5 12C18.5 14.08 17.52 15.94 16 17.13H15.99C14.89 17.99 13.51 18.5 12 18.5C10.51 18.5 9.14 18 8.04 17.15H8.03C6.49 15.96 5.5 14.1 5.5 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.03027 17.1499H8.04027C9.14027 17.9999 10.5103 18.4999 12.0003 18.4999C13.5103 18.4999 14.8903 17.9899 15.9903 17.1299H16.0003L15.4903 19.5999C15.0003 21.4999 13.9003 21.9999 12.5503 21.9999H11.4603C10.1103 21.9999 9.00027 21.4999 8.52027 19.5899L8.03027 17.1499Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.03027 6.85H8.04027C9.14027 6 10.5103 5.5 12.0003 5.5C13.5103 5.5 14.8903 6.01 15.9903 6.87H16.0003L15.4903 4.4C15.0003 2.5 13.9003 2 12.5503 2H11.4603C10.1103 2 9.00027 2.5 8.52027 4.41L8.03027 6.85Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Clock1Bold,
  broken: Clock1Broken,
  bulk: Clock1Bulk,
  linear: Clock1Linear,
  outline: Clock1Outline,
  twotone: Clock1Twotone,
};

export const Clock1Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
